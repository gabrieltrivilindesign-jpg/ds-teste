// Component Swapper — MEDSoft DS
// Substitui frames soltos por instâncias de componentes
// Fontes: MEDSoft 2.0 (local publicado) + Magna Vita (biblioteca externa)

figma.showUI(__html__, { width: 380, height: 480 });

// --- Mapeamento MEDSoft 2.0 — Component Sets (48) ---
const MEDSOFT_SETS = {
  "accordion content: matérias":              { key: "2482ca50fa9541176a08a724730e1dc0b5425812", name: "Accordion Content: Matérias" },
  "accordion header: matérias":               { key: "a85c2521759a18997ea4135a4e17d037721d1564", name: "Accordion Header: Matérias" },
  "header":                                   { key: "1459ae7e54c56eb0b6381339d9212b6635a7fba5", name: "Header" },
  "page header":                              { key: "fcec84f835e4c8fad0a76832fd54cabf60bacacf", name: "Page Header" },
  "alternativa":                              { key: "96326902ad89a124119cef703914ad8c6015e117", name: "Alternativa" },
  "avatar group":                             { key: "79d5abf8e48e7a4a2e381545db4a67be897844cf", name: "Avatar Group" },
  "breadcrumb":                               { key: "1cf5de2516a01a97a083947058c24c1ffcfcc267", name: "Breadcrumb" },
  "card guia de estudos drawer":              { key: "3b4f8b3c926f4414e05304b2501f11084a62d137", name: "CARD - GUIA DE ESTUDOS - DRAWER" },
  "card accordion content: matérias":         { key: "3df347c1c00c04f783c750c6f9d35ce7243607d1", name: "Card - Accordion Content: Matérias" },
  "card baixar questões":                     { key: "5313074e26b9a961817b8306219ad295dcb8854a", name: "Card - Baixar Questões" },
  "card item de conteúdo (antigo)":           { key: "fd4271900933c3037c5ec566def05ea043b73e50", name: "Card - Item de Conteúdo (antigo)" },
  "card progresso":                           { key: "5aa95f6c9447c706bf9c462d50be87a9b5758fcc", name: "Card - Progresso" },
  "card índice da apostila":                  { key: "4530b28a3d09cfd3e99ad949e47eaa6900a644fb", name: "Card - Índice da Apostila" },
  "card índice da videoaula":                 { key: "f23926c83c55b815bb7aa94c241f301726d3a821", name: "Card - Índice da Videoaula" },
  "card 2 item de conteúdo":                  { key: "af5d657205e3a73cddfd6028f679ceadd7fbd237", name: "Card 2 - Item de Conteúdo" },
  "card type simulado":                       { key: "297c4b57e0b6ae3fd894ce6b3d817c9b6162d00b", name: "Card Type - Simulado" },
  "cards content primarios matérias":         { key: "efc3d16bda3af8ef25806d07838515adc13e51e9", name: "Cards content primarios - Matérias" },
  "conteúdo ferramentas":                     { key: "c9b29604027bd7037580477510e482c5597f200d", name: "Conteúdo Ferramentas" },
  "conteúdo notas texto":                     { key: "85dcd9a99c4dd15947428f4c7b212f5dc6d5157c", name: "Conteúdo Notas Texto" },
  "dúvidas acadêmicas chat":                  { key: "57367bc5c6e777853a576446eacff0fd0b92ee92", name: "DÚVIDAS ACADÊMICAS - CHAT" },
  "dúvida postada geral drawer content":      { key: "e6bca36a55778077953a38dad3bf11b9599b1fc4", name: "Dúvida Postada Geral - Drawer Content" },
  "finalizar bloco":                          { key: "dfe6f500a61443afdf407014bdd93b84a1b4a4a2", name: "Finalizar bloco" },
  "highlight":                                { key: "17edae9f270be454b69a35af04470be7f7c13acd", name: "Highlight" },
  "loader container":                         { key: "d5feabc898e96db87ab987f5193dc37320f05602", name: "Loader container" },
  "menu lateral item":                        { key: "79e1743ed285bde5f76ab8829cc4a38b4d7b9332", name: "Menu Lateral - Item" },
  "menu navigation drawer content":           { key: "48ce11e40031ca0ffcba60a37f4882581d2a923d", name: "Menu Navigation - Drawer Content" },
  "mini mapa 2 content sheet":                { key: "901a372cc3d5a5382a1fe0574a25f2b33bf0ef16", name: "Mini Mapa 2 - Content Sheet" },
  "mini mapa 2 header sheet":                 { key: "a9cc7e8e1cc11978ebe44f2dfecc9715f562925d", name: "Mini Mapa 2 - Header Sheet" },
  "profile":                                  { key: "4c02196a19a64bcb18f963a62b0791f14a7ee15a", name: "Profile" },
  "progress container":                       { key: "4a87ef3ea156d0962494e79345db4fec7d867398", name: "Progress Container" },
  "questões":                                 { key: "9140c2221349773f89ce42c438f480f66310638d", name: "Questões" },
  "resultado da pesquisa":                    { key: "8f4ddbb7fbc99cf6e5f31ea205e3332038b4e0b6", name: "Resultado da pesquisa (Matéria - Semana)" },
  "resultado da pesquisa (matéria semana)":   { key: "8f4ddbb7fbc99cf6e5f31ea205e3332038b4e0b6", name: "Resultado da pesquisa (Matéria - Semana)" },
  "select":                                   { key: "047c1203a6c550f12f63bcb1ff0c52be855e6397", name: "Select" },
  "thumbnail":                                { key: "be6206e55e3dec6257a3af39325afd11ca1e978a", name: "Thumbnail" },
  "cards secondarys and complementary matérias": { key: "08735f24364c31ec4647e012e85c428a7368fe0f", name: "cards secondarys and complementary matérias" },
  "container open profile":                   { key: "b0b9a223682a2b8cc5ea7ae96eeb46026bb56133", name: "container open profile" },
  "keyboard key":                             { key: "5a808a0528f7120ada7e4adb1b0049df71463c86", name: "keyboard_key" },
  "smartcards":                               { key: "28a225cfe16070061f35bc389e7d71002caf6c36", name: "smartcards" },
  "tab item":                                 { key: "e8472557c394ea504a68ee084f56f0fe2f5771d4", name: "tab-item" },
  "tab-item":                                 { key: "e8472557c394ea504a68ee084f56f0fe2f5771d4", name: "tab-item" },
  "title e subtitle example card":            { key: "51dfe0d25fbecf07cbc6210a39d42a85a4610f66", name: "title e subtitle example card" }
};

// --- Mapeamento MEDSoft 2.0 — Componentes individuais (62) ---
const MEDSOFT_INDIVIDUAL = {
  "breadcrumb actionsheet content":           { key: "1d91807be6ee14d2ded4078dfdecfbe25e7a4df8", name: "Breadcrumb - Actionsheet Content" },
  "análise de subtemas":                      { key: "f32035864c811334c0b1a8b99d82f5690a29ebff", name: "Análise de Subtemas" },
  "baixar questões drawer content":           { key: "3ca1c6dc8a2153b925589b8fb0a0b28daea933f4", name: "Baixar Questões - Drawer Content" },
  "cartão resposta":                          { key: "82c30d34786c868e76c07ee436b04c03a501cd0f", name: "CARTÃO RESPOSTA" },
  "card lista de cards: matérias":            { key: "3873baf3008d3f634bec31ce51f4919098c60daf", name: "Card - Lista de Cards: Matérias" },
  "card lista de temas":                      { key: "94b702606d87c3dd015e5b5c6c4951fddf890c5a", name: "Card - Lista de Temas" },
  "card resumo do progresso (matérias)":      { key: "f0c589029945dd631340e049892b3fd411f9c151", name: "Card - Resumo do Progresso (Matérias)" },
  "card vídeo complementar":                  { key: "553a94a801f54bdaae6937f2e0c74b783a3d9f03", name: "Card - Vídeo Complementar" },
  "card type grande área":                    { key: "b8a93bc3ed6ce5537a8de7759e3cf28c386f5f0c", name: "Card Type - Grande Área" },
  "comentários em texto":                     { key: "bbc8dd70797c9bcd6bc63d6efe22c9ef5d6b722a", name: "Comentários em Texto" },
  "comentários em vídeo":                     { key: "a97890863c6c09232ff5dd60c67dc53de0290ecf", name: "Comentários em Vídeo" },
  "comparação de desempenho":                 { key: "8d5ed2ac13346c59dd53386fc3acfa1f80f0100f", name: "Comparação de Desempenho" },
  "ferramentas":                              { key: "c40466fa4525194a7f2109e8d4ac4c6fcf516532", name: "FERRAMENTAS" },
  "filtros da questão":                       { key: "7313b9aed6c0a9bf8754e01583427992d77f4b68", name: "FILTROS DA QUESTÃO" },
  "ferramentas de aprendizado":               { key: "ac07a83a6d295c1113d37cc3235b229ed947a45d", name: "Ferramentas de Aprendizado" },
  "filtros":                                  { key: "fd13488c351136ee5e08831c9d3433e1a2f60766", name: "Filtros" },
  "filtros da questão 2":                     { key: "b1bf618bbef613968ef7d4c5d3f51c8a708a2d7b", name: "Filtros da Questão 2" },
  "guia de estudos":                          { key: "cd5c93af31b6a8d435ccc91aa29177766902a393", name: "GUIA DE ESTUDOS" },
  "guia de estudos drawer":                   { key: "bb2e411a583c5ba3cdbf84f386d733a6840e4855", name: "GUIA DE ESTUDOS - DRAWER" },
  "guia de estudos tab":                      { key: "ca0f10cdcaf63c88f4a2f063305cc928e12b115f", name: "GUIA DE ESTUDOS - TAB" },
  "gabarito e dúvidas":                       { key: "a12c30bcc4fa0b34970580885c96fb31058364af", name: "Gabarito e Dúvidas" },
  "item estudo":                              { key: "abebe23bed0f73a973c7c74c0feacd69deb4123d", name: "Item - Estudo" },
  "key point":                                { key: "e8a427790a07e66ef6c279525069fd5c17a7a612", name: "Key Point" },
  "mapeamento de erros":                      { key: "d9ed5b01df924eb86beaebb0c08f40023e84a2a5", name: "Mapeamento de Erros" },
  "menu ferramentas":                         { key: "e753d9e488fd6660bb43f4e90748ce5710fe24c2", name: "Menu - Ferramentas" },
  "notas":                                    { key: "c236c6633eeb3fd1d74a2e68e98461abd463391d", name: "NOTAS" },
  "prioridade de estudo":                     { key: "cdb23b8e88e5bede1f18a1fac954f1c8af2aafcb", name: "Prioridade de Estudo" },
  "questão 01 não selecionada":               { key: "083a6c9cc86872ad22ab6d2ea0c49f656d3097b7", name: "QUESTÃO 01 - NÃO SELECIONADA" },
  "questão 02 selecionada":                   { key: "807e2a8e2aae1e79ff5b283ef002aa6abe5a40ff", name: "QUESTÃO 02 - SELECIONADA" },
  "questão 03 selecionada e correta":         { key: "6285a44f535fdee893e8f232146b9a9f6f2684ea", name: "QUESTÃO 03 - SELECIONADA E CORRETA" },
  "questão 04 selecionada e errada":          { key: "cea9457ed34a4a421a8328f1d6656fc006b1cba3", name: "QUESTÃO 04 - SELECIONADA E ERRADA" },
  "resumo de questões":                       { key: "6333a5eef161fb2086d13e493339c8a061590edc", name: "RESUMO DE QUESTÕES" },
  "raciocínio clínico":                       { key: "769257717667b39efb26b651604ba823b86fe4e8", name: "Raciocínio Clínico" },
  "recursos recomendados":                    { key: "71bfea5f0a377dc3721fed6efc63cd504fb3cd59", name: "Recursos Recomendados" },
  "seu desempenho":                           { key: "9145c7a04c04ffe00fe84d18231c05f37c2b69c6", name: "Seu desempenho" },
  "stories":                                  { key: "e5d4e93aa1e220ab7ad9940fb436e5d77d455f71", name: "Stories" },
  "tutorial":                                 { key: "5d6fea800a3ce1335abda8554a598c595e0950e4", name: "TUTORIAL" },
  "tab":                                      { key: "640c999d6969e6373d090927bb44e09eb59dd8ba", name: "Tab" },
  "top concursos":                            { key: "08fd23d6cca3f02097312944ba78bd2dcf995382", name: "Top Concursos" },
  "conjunto smartcards":                      { key: "a62c47e2f39548862482da61f0a44f3f47d87ecf", name: "conjunto smartcards" },
  "drawer filtros":                           { key: "06ef2a397fa7be61a1a1241c2a633726fce1aea5", name: "drawer /filtros" },
  "feedback":                                 { key: "76339ca9b97f84fe59ad7094fe1da245012158fa", name: "feedback" },
  "interações com texto":                     { key: "be122f2b95e7d9c38b8e27e39f2f79add90f6273", name: "interações com texto" },
  "questão":                                  { key: "499617aa109b0c75391d745a765332a7c55e48ba", name: "questão" },
  "revisar questões":                         { key: "eba966a172c0a90af92bb3cb4e3df2d8a606d666", name: "revisar questões" },
  "índice da apostila drawer content":        { key: "e22aecd5056aea4040da230f73c27da3c2df454b", name: "Índice da Apostila - Drawer Content" },
  "índice da vídeoaula drawer content":       { key: "0039fff212d41f7cb9633f08fdafde9c258455b7", name: "Índice da Vídeoaula - Drawer Content" },
  "índice da vídeoaula drawer header":        { key: "ed75de7a01c14ea789dc4633c18b6724655830be", name: "Índice da Vídeoaula - Drawer Header" }
};

// --- Mapeamento Magna Vita — Component Sets (32) ---
const MAGNA_VITA_MAP = {
  "accordion":        { key: "fa3ec812c9b2930075b80fe7ae18e7f3a79032c4", name: "Accordion" },
  "alert":            { key: "3df96dd743b576b88165252c641a610a0be7a6a3", name: "Alert" },
  "alertdialog":      { key: "442c44461ec5bd02b5e34051d395eabe8016af42", name: "AlertDialog" },
  "avatar":           { key: "a1a233d2227e639b03552433bfca44fd0959f1c5", name: "Avatar" },
  "badge":            { key: "b3a629da8e0e903c571cdd3dfcf02c55225df728", name: "Badge" },
  "button":           { key: "9642c160276903b6620e3b09892aace7c66ebdba", name: "Button" },
  "card":             { key: "632b818089c5d53a64ee6a55494cbffb513cfa03", name: "Card" },
  "card2":            { key: "3481041f968d3302720ea06d4b6d7cc71d3d21ed", name: "Card2" },
  "card3":            { key: "4710b5392ea5ae20d9552db8a77534b0228fc61b", name: "Card3" },
  "checkbox":         { key: "2a102bd470c72b8ca3e2c260a30fda7107b98c3c", name: "Checkbox" },
  "divider":          { key: "59c482ace38b161ce7f44d5571f6fb3c3695b18a", name: "Divider" },
  "drawer":           { key: "5e042b423b955ed909a71d475b88559cd38b4758", name: "Drawer Component" },
  "drawer component": { key: "5e042b423b955ed909a71d475b88559cd38b4758", name: "Drawer Component" },
  "fab":              { key: "f64f67163f67fe8acae953978164d5b10768ec6b", name: "Fab" },
  "formcontrol":      { key: "ba1d75afb61154cb011931eb18b49d024c4b48e8", name: "FormControl" },
  "form control":     { key: "ba1d75afb61154cb011931eb18b49d024c4b48e8", name: "FormControl" },
  "icon":             { key: "672f1bf4aa69cf838e6ca1c72fda33ae77c8f506", name: "Icon" },
  "image":            { key: "6a9904e26366f4511db5591a3c12fee8f821be40", name: "Image" },
  "input":            { key: "783701998af97eda513d27807fc11969697057cc", name: "Input" },
  "link":             { key: "fa1f78b99c88be274198de8613b300fb3ab4acab", name: "Link - test" },
  "menu":             { key: "03367c3ce5cd9572d5378adaf7fa7bee6b5b23de", name: "Menu" },
  "menu item":        { key: "799b2430b19ee83278fe7e3b6c2f5d261431cfb6", name: "Menu item" },
  "modal":            { key: "fc734ffacdb65d350a8666215c11a807e382cb46", name: "Modal" },
  "popover":          { key: "a22d610d9c85fa6f284d5bf25fca1118b1eefbda", name: "Pop over with arrow" },
  "progress":         { key: "2afa07bea79860555c4fd5e2ec8ff66cf0e0ded8", name: "Progress" },
  "radio":            { key: "6d666ed94c1ba003bd80108ef409af0188cfae59", name: "Radio" },
  "select":           { key: "f6b2b6b995354dca2b156c767c79ce3eba126435", name: "Select" },
  "slider":           { key: "fde8af755ce1fe4ef0bb23a131a378d6cac58d59", name: "Slider" },
  "spinner":          { key: "03c63869f7821c842f6120e43774f8d6c6e8e827", name: "Spinner" },
  "switch":           { key: "6320c0ca23a606c50be549d67e4dc3dded4acf44", name: "Switch" },
  "textarea":         { key: "a31cacf0ae565bdd560503d5eb7df6370a70471b", name: "Textarea" },
  "toast":            { key: "298fd135262f6fd312275c49e3e0989738a3107c", name: "Toast" },
  "tooltip":          { key: "ff396d7f0d20b178d0b5dc2abc24896e4b472e1c", name: "Tooltip" },
  "cell":             { key: "efe86781e5c6917074d102cbb60d55922e748d9b", name: "cell" }
};

// --- Utilitários ---

function normalize(name) {
  return name
    .toLowerCase()
    .replace(/[_\-\/\s]+/g, ' ')
    .replace(/[^a-záàâãéèêíïóôõöúçñ0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isComponentOrInstance(node) {
  return node.type === 'COMPONENT' || node.type === 'COMPONENT_SET' || node.type === 'INSTANCE';
}

function isLooseFrame(node) {
  if (node.type !== 'FRAME') return false;
  if (isComponentOrInstance(node)) return false;

  let parent = node.parent;
  while (parent) {
    if (parent.type === 'COMPONENT' || parent.type === 'COMPONENT_SET') return false;
    parent = parent.parent;
  }
  return true;
}

// --- Coleta componentes locais SOMENTE da página atual ---

function getLocalComponents() {
  const localMap = new Map();

  const allNodes = figma.currentPage.findAll();
  for (const node of allNodes) {
    if (node.type === 'COMPONENT_SET') {
      const key = normalize(node.name);
      if (!localMap.has(key)) {
        localMap.set(key, { type: 'local-set', node: node, name: node.name });
      }
    } else if (node.type === 'COMPONENT') {
      if (node.parent && node.parent.type === 'COMPONENT_SET') continue;
      const key = normalize(node.name);
      if (!localMap.has(key)) {
        localMap.set(key, { type: 'local', node: node, name: node.name });
      }
    }
  }

  return localMap;
}

// --- Match: prioridade Local runtime > MEDSoft publicado > Magna Vita ---

let localComponents = null;

function findInMap(key, map) {
  if (map[key]) return map[key];
  for (const [mapKey, comp] of Object.entries(map)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return comp;
  }
  return null;
}

function findMatch(frameName) {
  const key = normalize(frameName);

  // 1. Local runtime (exato)
  if (localComponents.has(key)) {
    const local = localComponents.get(key);
    return { source: local.type, name: local.name, node: local.node, label: 'local' };
  }

  // 2. MEDSoft 2.0 publicado (exato)
  if (MEDSOFT_SETS[key]) return { source: 'medsoft-set', name: MEDSOFT_SETS[key].name, key: MEDSOFT_SETS[key].key, label: 'MEDSoft' };
  if (MEDSOFT_INDIVIDUAL[key]) return { source: 'medsoft', name: MEDSOFT_INDIVIDUAL[key].name, key: MEDSOFT_INDIVIDUAL[key].key, label: 'MEDSoft' };

  // 3. Magna Vita (exato)
  if (MAGNA_VITA_MAP[key]) return { source: 'library-set', name: MAGNA_VITA_MAP[key].name, key: MAGNA_VITA_MAP[key].key, label: 'Magna Vita' };

  // 4. Local runtime (parcial)
  for (const [mapKey, local] of localComponents) {
    if (key.includes(mapKey) || mapKey.includes(key)) {
      return { source: local.type, name: local.name, node: local.node, label: 'local' };
    }
  }

  // 5. MEDSoft publicado (parcial)
  const medsoftSet = findInMap(key, MEDSOFT_SETS);
  if (medsoftSet) return { source: 'medsoft-set', name: medsoftSet.name, key: medsoftSet.key, label: 'MEDSoft' };
  const medsoftInd = findInMap(key, MEDSOFT_INDIVIDUAL);
  if (medsoftInd) return { source: 'medsoft', name: medsoftInd.name, key: medsoftInd.key, label: 'MEDSoft' };

  // 6. Magna Vita (parcial)
  const magnaVita = findInMap(key, MAGNA_VITA_MAP);
  if (magnaVita) return { source: 'library-set', name: magnaVita.name, key: magnaVita.key, label: 'Magna Vita' };

  return null;
}

// --- Gera lista completa de componentes para o picker da UI ---

function getAllComponentsList() {
  const list = [];
  const seen = new Set();

  // Locais
  for (const [key, local] of localComponents) {
    if (seen.has(local.name)) continue;
    seen.add(local.name);
    list.push({ id: 'local::' + key, name: local.name, label: 'local' });
  }

  // MEDSoft Sets
  for (const [key, comp] of Object.entries(MEDSOFT_SETS)) {
    if (seen.has(comp.name)) continue;
    seen.add(comp.name);
    list.push({ id: 'medsoft-set::' + key, name: comp.name, label: 'MEDSoft' });
  }

  // MEDSoft Individual
  for (const [key, comp] of Object.entries(MEDSOFT_INDIVIDUAL)) {
    if (seen.has(comp.name)) continue;
    seen.add(comp.name);
    list.push({ id: 'medsoft::' + key, name: comp.name, label: 'MEDSoft' });
  }

  // Magna Vita
  for (const [key, comp] of Object.entries(MAGNA_VITA_MAP)) {
    if (seen.has(comp.name)) continue;
    seen.add(comp.name);
    list.push({ id: 'library-set::' + key, name: comp.name, label: 'Magna Vita' });
  }

  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

// --- Resolve um componentId do picker para um match object ---

function resolveComponentId(componentId) {
  const [source, key] = componentId.split('::');

  if (source === 'local') {
    const local = localComponents.get(key);
    if (local) return { source: local.type, name: local.name, node: local.node, label: 'local' };
  }
  if (source === 'medsoft-set' && MEDSOFT_SETS[key]) {
    return { source: 'medsoft-set', name: MEDSOFT_SETS[key].name, key: MEDSOFT_SETS[key].key, label: 'MEDSoft' };
  }
  if (source === 'medsoft' && MEDSOFT_INDIVIDUAL[key]) {
    return { source: 'medsoft', name: MEDSOFT_INDIVIDUAL[key].name, key: MEDSOFT_INDIVIDUAL[key].key, label: 'MEDSoft' };
  }
  if (source === 'library-set' && MAGNA_VITA_MAP[key]) {
    return { source: 'library-set', name: MAGNA_VITA_MAP[key].name, key: MAGNA_VITA_MAP[key].key, label: 'Magna Vita' };
  }

  return null;
}

// --- Scan ---

let scanData = null;

function scan() {
  const selection = figma.currentPage.selection;

  // Sem seleção → pede para selecionar
  if (selection.length === 0) {
    figma.ui.postMessage({ type: 'no-selection' });
    return;
  }

  localComponents = getLocalComponents();

  let looseFrames = [];
  const scope = 'Seleção atual';

  for (const root of selection) {
    if (isLooseFrame(root)) looseFrames.push(root);
    if ('findAll' in root) {
      looseFrames.push(...root.findAll(n => isLooseFrame(n)));
    }
  }

  const grouped = new Map();
  for (const frame of looseFrames) {
    const key = normalize(frame.name);
    if (!grouped.has(key)) {
      grouped.set(key, { frames: [], match: null });
    }
    grouped.get(key).frames.push(frame);
  }

  const matched = [];
  const unmatched = [];

  for (const [, group] of grouped) {
    const match = findMatch(group.frames[0].name);
    if (match) {
      group.match = match;
      matched.push({
        frameName: group.frames[0].name,
        componentName: `${match.name} (${match.label})`,
        count: group.frames.length
      });
    } else {
      unmatched.push({
        frameName: group.frames[0].name,
        count: group.frames.length
      });
    }
  }

  scanData = grouped;

  const medsoftCount = Object.keys(MEDSOFT_SETS).length + Object.keys(MEDSOFT_INDIVIDUAL).length;
  const magnaCount = Object.keys(MAGNA_VITA_MAP).length;

  figma.ui.postMessage({
    type: 'scan-results',
    data: {
      scope: `${scope} — ${localComponents.size} local + ${medsoftCount} MEDSoft + ${magnaCount} Magna Vita`,
      matched,
      unmatched,
      components: localComponents.size + medsoftCount + magnaCount,
      allComponents: getAllComponentsList()
    }
  });
}

// --- Resolve match para um target component ---

async function resolveTarget(match, importCache) {
  if (match.source === 'local') {
    return match.node;
  } else if (match.source === 'local-set') {
    const cs = match.node;
    return cs.defaultVariant || cs.children[0];
  } else if (match.source === 'medsoft-set' || match.source === 'library-set') {
    if (importCache.has(match.key)) return importCache.get(match.key);
    const componentSet = await figma.importComponentSetByKeyAsync(match.key);
    const target = componentSet.defaultVariant || componentSet.children[0];
    importCache.set(match.key, target);
    return target;
  } else if (match.source === 'medsoft') {
    if (importCache.has(match.key)) return importCache.get(match.key);
    const target = await figma.importComponentByKeyAsync(match.key);
    importCache.set(match.key, target);
    return target;
  }
  return null;
}

// --- Swap ---

async function swap(overrides) {
  console.log('[Swapper] swap called, scanData exists:', !!scanData, 'overrides:', JSON.stringify(overrides));

  if (!scanData) {
    console.error('[Swapper] scanData is null!');
    figma.ui.postMessage({ type: 'swap-complete', data: { swapped: 0, errors: 0 } });
    return;
  }

  let swapped = 0;
  let errors = 0;
  const importCache = new Map();

  for (const [groupKey, group] of scanData) {
    const frameName = group.frames[0].name;

    // Verifica override da UI
    let match = group.match;
    if (overrides && frameName in overrides) {
      const ov = overrides[frameName];
      if (ov === null) {
        console.log('[Swapper] skip (removed by user):', frameName);
        continue;
      }
      console.log('[Swapper] override for:', frameName, '→', ov.componentId);
      match = resolveComponentId(ov.componentId);
    }

    if (!match) {
      console.log('[Swapper] skip (no match):', frameName);
      continue;
    }

    console.log('[Swapper] processing:', frameName, '→', match.name, '(source:', match.source, ')');

    try {
      const targetComponent = await resolveTarget(match, importCache);

      if (!targetComponent) {
        console.error('[Swapper] could not resolve target for:', match.name);
        errors += group.frames.length;
        continue;
      }

      console.log('[Swapper] target resolved, swapping', group.frames.length, 'frames');

      for (const frame of group.frames) {
        try {
          const instance = targetComponent.createInstance();

          instance.x = frame.x;
          instance.y = frame.y;
          instance.resize(
            Math.max(0.01, frame.width),
            Math.max(0.01, frame.height)
          );

          const parent = frame.parent;
          if (parent) {
            const index = parent.children.indexOf(frame);
            parent.insertChild(index, instance);
          }

          frame.remove();
          swapped++;
        } catch (e) {
          console.error('[Swapper] error swapping frame:', frame.name, e);
          errors++;
        }
      }
    } catch (e) {
      console.error('[Swapper] error importing:', match.name, e);
      errors += group.frames.length;
    }
  }

  console.log('[Swapper] done! swapped:', swapped, 'errors:', errors);

  figma.ui.postMessage({
    type: 'swap-complete',
    data: { swapped, errors }
  });
}

// --- Localizar layer ---

function locate(frameName) {
  if (!scanData) return;
  const key = normalize(frameName);
  const group = scanData.get(key);
  if (!group || group.frames.length === 0) return;

  const frame = group.frames[0];
  figma.currentPage.selection = [frame];
  figma.viewport.scrollAndZoomIntoView([frame]);
}

// --- Mensagens da UI ---

figma.ui.onmessage = (msg) => {
  console.log('[Swapper] message received:', msg.type);

  if (msg.type === 'swap') {
    swap(msg.overrides || {});
  }
  if (msg.type === 'rescan') scan();
  if (msg.type === 'locate') locate(msg.frameName);
  if (msg.type === 'close') figma.closePlugin();
};

// Roda o scan ao abrir
scan();
