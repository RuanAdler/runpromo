/**
 * Catálogo de produtos do RunPromo.
 *
 * COMO ATUALIZAR (faça isso antes de cada vídeo/publicação):
 * 1. Vá ao Portal de Afiliados do Mercado Livre (afiliados.mercadolivre.com.br),
 *    cole o link do produto no "Linkeador" e gere seu link de afiliado.
 * 2. Substitua o campo `link` do produto correspondente por esse link.
 * 3. Confira o preço atual na página do produto e atualize `precoAtual`
 *    (e `precoOriginal` / `desconto`, se houver).
 * 4. Atualize `verificadoEm` com a data de hoje (AAAA-MM-DD).
 *
 * Para adicionar um produto novo, copie um bloco inteiro { ... } e ajuste os campos.
 * Tipo "produto": card normal com preço.
 * Tipo "explorer": card sem preço fixo, leva para uma busca/categoria no Mercado Livre
 *                   (útil para roupas/acessórios, onde o preço varia muito por modelo).
 *
 * Categorias válidas: 'tenis', 'relogios', 'fones', 'roupas', 'acessorios'
 * Ícones válidos: 'tenis', 'relogio', 'fone', 'camiseta', 'garrafa'
 */

const PRODUTOS = [
  {
    id: "tenis-nike-revolution-8",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Nike",
    nome: "Tênis Nike Revolution 8 Masculino",
    precoOriginal: null,
    precoAtual: 319.99,
    desconto: null,
    parcelas: "10x de R$ 32,00 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "MAIS PROCURADO",
    link: "https://produto.mercadolivre.com.br/MLB-5420759822-tnis-nike-revolution-8-masculino-_JM",
    verificadoEm: "2026-08-11"
  },
  {
    id: "tenis-fila-racer-fastpace",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Fila",
    nome: "Tênis Fila Racer FastPace Masculino Corrida",
    precoOriginal: null,
    precoAtual: 262.39,
    desconto: null,
    parcelas: null,
    cupomCompativel: "MELIACHA",
    badge: "OFERTA",
    link: "https://www.promobit.com.br/oferta/tenis-fila-racer-fastpace-masculino-corrida-running-2752784/",
    verificadoEm: "2026-08-11"
  },
  {
    id: "garmin-forerunner-55",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Garmin",
    nome: "Garmin Forerunner 55 - GPS 42mm",
    precoOriginal: null,
    precoAtual: 1191.00,
    desconto: 46,
    parcelas: "à vista",
    cupomCompativel: null,
    badge: "46% OFF",
    link: "https://lista.mercadolivre.com.br/relogio-garmin-forerunner-55",
    verificadoEm: "2026-08-11"
  },
  {
    id: "garmin-forerunner-165",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Garmin",
    nome: "Garmin Forerunner 165 - Tela AMOLED",
    precoOriginal: null,
    precoAtual: 1857.00,
    desconto: null,
    parcelas: "a partir de",
    cupomCompativel: null,
    badge: "TOP DE LINHA",
    link: "https://lista.mercadolivre.com.br/relogio-garmin-forerunner-165",
    verificadoEm: "2026-08-11"
  },
  {
    id: "redmi-watch-5",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Xiaomi",
    nome: "Redmi Watch 5 - GPS e Monitor de Treino",
    precoOriginal: null,
    precoAtual: 256.00,
    desconto: null,
    parcelas: "a partir de",
    cupomCompativel: "GANHEMAIS",
    badge: "CUSTO-BENEFÍCIO",
    link: "https://lista.mercadolivre.com.br/relogio-xiaomi-corrida",
    verificadoEm: "2026-08-11"
  },
  {
    id: "fone-esportivo-tws",
    tipo: "produto",
    categoria: "fones",
    icone: "fone",
    marca: "Diversas marcas",
    nome: "Fone de Ouvido Esportivo TWS à Prova d'Água",
    precoOriginal: 94.90,
    precoAtual: 52.90,
    desconto: 44,
    parcelas: null,
    cupomCompativel: "GANHEMAIS",
    badge: "44% OFF",
    link: "https://lista.mercadolivre.com.br/fone-de-ouvido-sem-fio-para-corrida-a-prova-dagua",
    verificadoEm: "2026-08-11"
  },
  {
    id: "roupas-corrida",
    tipo: "explorer",
    categoria: "roupas",
    icone: "camiseta",
    nome: "Roupas de corrida: camisetas, shorts e leggings dry-fit",
    descricaoCurta: "Dezenas de modelos e marcas com desconto agora no Mercado Livre.",
    cupomCompativel: "MELIACHA",
    link: "https://lista.mercadolivre.com.br/camiseta-dry-fit-corrida"
  },
  {
    id: "acessorios-hidratacao",
    tipo: "explorer",
    categoria: "acessorios",
    icone: "garrafa",
    nome: "Hidratação para corrida: cintos, squeezes e mochilas",
    descricaoCurta: "Compare preços e ache o kit ideal para seus treinos longos.",
    cupomCompativel: "GANHEMAIS",
    link: "https://lista.mercadolivre.com.br/cinto-de-hidratacao-de-corrida"
  }
];
