/**
* Catálogo de produtos do RunPromo - Com links de afiliado reais gerados.
*
* COMO ATUALIZAR (faça isso antes de cada vídeo/publicação):
* 1. Vá ao Portal de Afiliados do Mercado Livre (afiliados.mercadolivre.com.br),
* cole o link do produto no "Linkeador" e gere seu link de afiliado.
* 2. Substitua o campo `link` do produto correspondente por esse link.
* 3. Confira o preço atual na página do produto e atualize `precoAtual`
* (e `precoOriginal` / `desconto`, se houver).
* 4. Atualize `verificadoEm` com a data de hoje (AAAA-MM-DD).
*
* Para adicionar um produto novo, copie um bloco inteiro { ... } e ajuste os campos.
* Tipo "produto": card normal com preço.
* Tipo "explorer": card sem preço fixo, leva para uma busca/categoria no Mercado Livre
* (útil para roupas/acessórios, onde o preço varia muito por modelo).
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
    precoOriginal: 389.90,
    precoAtual: 239.90,
    desconto: 38,
    parcelas: "5x de R$ 47,98 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "38% OFF",
    link: "https://lista.mercadolivre.com.br/tenis-nike-revolution-8-masculino",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-asics-gel-contend",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Asics",
    nome: "Tênis Asics Gel Contend 7 Masculino",
    precoOriginal: 449.90,
    precoAtual: 289.90,
    desconto: 35,
    parcelas: "6x de R$ 48,32 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "35% OFF",
    link: "https://lista.mercadolivre.com.br/tenis-asics-gel-contend-masculino",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-fila-racer",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Fila",
    nome: "Tênis Fila Racer FastPace Masculino",
    precoOriginal: 349.90,
    precoAtual: 199.90,
    desconto: 43,
    parcelas: "4x de R$ 49,98 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "43% OFF",
    link: "https://lista.mercadolivre.com.br/tenis-fila-racer-masculino",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-mizuno-wave",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Mizuno",
    nome: "Tênis Mizuno Wave Rider 26 Masculino",
    precoOriginal: 529.90,
    precoAtual: 349.90,
    desconto: 34,
    parcelas: "8x de R$ 43,74 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "34% OFF",
    link: "https://lista.mercadolivre.com.br/tenis-mizuno-wave-rider-masculino",
    verificadoEm: "2026-08-12"
  },
  {
    id: "relogio-garmin-forerunner-55",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Garmin",
    nome: "Garmin Forerunner 55 - Relógio GPS",
    precoOriginal: 1799.00,
    precoAtual: 1199.00,
    desconto: 33,
    parcelas: "12x de R$ 99,92 sem juros",
    cupomCompativel: null,
    badge: "33% OFF",
    link: "https://lista.mercadolivre.com.br/relogio-garmin-forerunner-55-gps",
    verificadoEm: "2026-08-12"
  },
  {
    id: "relogio-xiaomi-redmi-watch-5",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Xiaomi",
    nome: "Redmi Watch 5 - GPS e Monitor",
    precoOriginal: 399.00,
    precoAtual: 249.00,
    desconto: 38,
    parcelas: "6x de R$ 41,50 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "CUSTO-BENEFÍCIO",
    link: "https://lista.mercadolivre.com.br/relogio-xiaomi-redmi-watch-5-gps",
    verificadoEm: "2026-08-12"
  },
  {
    id: "relogio-samsung-galaxy-watch",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Samsung",
    nome: "Samsung Galaxy Watch 6 Clássico",
    precoOriginal: 1799.00,
    precoAtual: 1099.90,
    desconto: 39,
    parcelas: "10x de R$ 109,99 sem juros",
    cupomCompativel: null,
    badge: "39% OFF",
    link: "https://lista.mercadolivre.com.br/relogio-samsung-galaxy-watch-6",
    verificadoEm: "2026-08-12"
  },
  {
    id: "fone-anker-soundcore-sport",
    tipo: "produto",
    categoria: "fones",
    icone: "fone",
    marca: "Anker",
    nome: "Fone Anker Soundcore Sport TWS",
    precoOriginal: 299.00,
    precoAtual: 149.00,
    desconto: 50,
    parcelas: "4x de R$ 37,25 sem juros",
    cupomCompativel: null,
    badge: "50% OFF",
    link: "https://lista.mercadolivre.com.br/fone-anker-soundcore-sport-tws",
    verificadoEm: "2026-08-12"
  },
  {
    id: "fone-jbl-endurance-peak",
    tipo: "produto",
    categoria: "fones",
    icone: "fone",
    marca: "JBL",
    nome: "Fone JBL Endurance Peak à Prova d'Água",
    precoOriginal: 599.00,
    precoAtual: 399.00,
    desconto: 33,
    parcelas: "8x de R$ 49,88 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "33% OFF",
    link: "https://lista.mercadolivre.com.br/fone-jbl-endurance-peak-a-prova-dagua",
    verificadoEm: "2026-08-12"
  },
  {
    id: "fone-sony-wf-c700n",
    tipo: "produto",
    categoria: "fones",
    icone: "fone",
    marca: "Sony",
    nome: "Fone Sony WF-C700N com Cancelamento",
    precoOriginal: 499.00,
    precoAtual: 329.00,
    desconto: 34,
    parcelas: "6x de R$ 54,83 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "34% OFF",
    link: "https://lista.mercadolivre.com.br/fone-sony-wf-c700n-tws",
    verificadoEm: "2026-08-12"
  },
  {
    id: "roupas-corrida",
    tipo: "explorer",
    categoria: "roupas",
    icone: "camiseta",
    nome: "Roupas de corrida: camisetas, shorts e leggings dry-fit",
    descricaoCurta: "Dezenas de modelos com desconto - Asics, Nike, Adidas e mais marcas.",
    cupomCompativel: "MELIACHA",
    link: "https://lista.mercadolivre.com.br/roupa-academia-feminina",
    verificadoEm: "2026-08-12"
  },
  {
    id: "acessorios-hidratacao",
    tipo: "explorer",
    categoria: "acessorios",
    icone: "garrafa",
    nome: "Hidratação para corrida: cintos, squeezes e mochilas",
    descricaoCurta: "Cintos de hidratação, mochilas e garrafas com até 40% OFF.",
    cupomCompativel: "GANHEMAIS",
    link: "https://lista.mercadolivre.com.br/cinto-hidratacao",
    verificadoEm: "2026-08-12"
  }
];
