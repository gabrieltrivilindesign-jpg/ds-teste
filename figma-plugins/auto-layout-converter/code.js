// Auto Layout Converter — MEDSoft 2.0
// Converte todos os frames sem auto layout da página/seleção atual

function detectLayoutDirection(node) {
  const children = node.children;
  if (!children || children.length < 2) return "VERTICAL";

  let sumDeltaX = 0;
  let sumDeltaY = 0;

  for (let i = 1; i < children.length; i++) {
    sumDeltaX += Math.abs(children[i].x - children[i - 1].x);
    sumDeltaY += Math.abs(children[i].y - children[i - 1].y);
  }

  return sumDeltaX > sumDeltaY ? "HORIZONTAL" : "VERTICAL";
}

function estimatePadding(node) {
  const children = node.children;
  if (!children || children.length === 0) return { top: 0, right: 0, bottom: 0, left: 0 };

  let minX = Infinity, minY = Infinity;
  let maxX = -Infinity, maxY = -Infinity;

  for (const child of children) {
    minX = Math.min(minX, child.x);
    minY = Math.min(minY, child.y);
    maxX = Math.max(maxX, child.x + child.width);
    maxY = Math.max(maxY, child.y + child.height);
  }

  return {
    top: Math.max(0, Math.round(minY)),
    right: Math.max(0, Math.round(node.width - maxX)),
    bottom: Math.max(0, Math.round(node.height - maxY)),
    left: Math.max(0, Math.round(minX))
  };
}

function estimateGap(node, direction) {
  const children = node.children;
  if (!children || children.length < 2) return 0;

  const gaps = [];
  for (let i = 1; i < children.length; i++) {
    if (direction === "HORIZONTAL") {
      const gap = children[i].x - (children[i - 1].x + children[i - 1].width);
      gaps.push(gap);
    } else {
      const gap = children[i].y - (children[i - 1].y + children[i - 1].height);
      gaps.push(gap);
    }
  }

  // Usa a mediana para evitar outliers
  gaps.sort((a, b) => a - b);
  const median = gaps[Math.floor(gaps.length / 2)];
  return Math.max(0, Math.round(median));
}

function convertToAutoLayout(node) {
  if (node.type !== "FRAME" || node.layoutMode !== "NONE") return false;
  if (!node.children || node.children.length === 0) return false;

  const direction = detectLayoutDirection(node);
  const padding = estimatePadding(node);
  const gap = estimateGap(node, direction);

  node.layoutMode = direction;
  node.paddingTop = padding.top;
  node.paddingRight = padding.right;
  node.paddingBottom = padding.bottom;
  node.paddingLeft = padding.left;
  node.itemSpacing = gap;
  node.primaryAxisSizingMode = "AUTO";
  node.counterAxisSizingMode = "AUTO";

  return true;
}

// --- Execução principal ---
const selection = figma.currentPage.selection;
const targets = selection.length > 0 ? selection : [figma.currentPage];

let converted = 0;
let skipped = 0;

for (const root of targets) {
  const nodes = root.type === "PAGE"
    ? root.findAll()
    : [root, ...("findAll" in root ? root.findAll() : [])];

  // Processa de dentro pra fora (filhos primeiro)
  nodes.reverse();

  for (const node of nodes) {
    if (node.type === "FRAME" && node.layoutMode === "NONE") {
      if (convertToAutoLayout(node)) {
        converted++;
      } else {
        skipped++;
      }
    }
  }
}

const scope = selection.length > 0 ? "na seleção" : "na página";
figma.notify(`✅ ${converted} frames convertidos para Auto Layout ${scope}` + (skipped > 0 ? ` (${skipped} vazios ignorados)` : ""));
figma.closePlugin();
