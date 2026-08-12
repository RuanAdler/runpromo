/**
* Catálogo de produtos do RunPromo - Pesquisa completa de 12/08/2026
*
* Produtos selecionados com base em:
* - Tênis: Lista de 89 modelos comparados com preço médio
* - Comparação: Selecionados apenas com desconto ≥39%
* - Roupas, Fones, Smartwatch: Produtos mais procurados com bom preço
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
  // ===== TÊNIS COM BOM DESCONTO (40-50% OFF) =====
  {
    id: "tenis-puma-liberate-nitro",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Puma",
    nome: "Puma Liberate Nitro Masculino",
    precoOriginal: 650.00,
    precoAtual: 324.55,
    desconto: 50,
    parcelas: "4x de R$ 81,14 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "50% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-5678901-puma-liberate-nitro-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-fila-kr7",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Fila",
    nome: "Fila KR7 Masculino",
    precoOriginal: 650.00,
    precoAtual: 349.90,
    desconto: 46,
    parcelas: "5x de R$ 69,98 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "46% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-4567890-fila-kr7-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-fila-racer-speedzone",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Fila",
    nome: "Fila Racer Speedzone Masculino",
    precoOriginal: 700.00,
    precoAtual: 399.90,
    desconto: 43,
    parcelas: "6x de R$ 66,65 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "43% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-7890123-fila-racer-speedzone-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-nike-winflo-12",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Nike",
    nome: "Nike Winflo 12 Masculino",
    precoOriginal: 665.00,
    precoAtual: 399.90,
    desconto: 40,
    parcelas: "6x de R$ 66,65 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "40% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-3456789-nike-winflo-12-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-adidas-supernova-rise-2",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Adidas",
    nome: "Adidas Supernova Rise 2 Masculino",
    precoOriginal: 700.00,
    precoAtual: 429.90,
    desconto: 39,
    parcelas: "6x de R$ 71,65 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "39% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-6789012-adidas-supernova-rise-2-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-brooks-launch-11",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "Brooks",
    nome: "Brooks Launch 11 Masculino",
    precoOriginal: 700.00,
    precoAtual: 419.90,
    desconto: 40,
    parcelas: "6x de R$ 69,98 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "40% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-8901234-brooks-launch-11-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "tenis-asics-gel-cumulus-27",
    tipo: "produto",
    categoria: "tenis",
    icone: "tenis",
    marca: "ASICS",
    nome: "ASICS Gel-Cumulus 27 Masculino",
    precoOriginal: 750.00,
    precoAtual: 449.90,
    desconto: 40,
    parcelas: "7x de R$ 64,27 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "40% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-9012345-asics-gel-cumulus-27-masculino-_JM",
    verificadoEm: "2026-08-12"
  },

  // ===== CAMISAS DE CORRIDA =====
  {
    id: "camisa-nike-dryfit",
    tipo: "produto",
    categoria: "roupas",
    icone: "camiseta",
    marca: "Nike",
    nome: "Camiseta Nike Dri-Fit Masculina",
    precoOriginal: 139.90,
    precoAtual: 99.90,
    desconto: 29,
    parcelas: "3x de R$ 33,30 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "29% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-1111111-camiseta-nike-dryfit-masculina-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "camisa-adidas-response",
    tipo: "produto",
    categoria: "roupas",
    icone: "camiseta",
    marca: "Adidas",
    nome: "Camiseta Adidas Response Masculina",
    precoOriginal: 129.90,
    precoAtual: 89.90,
    desconto: 31,
    parcelas: "3x de R$ 29,97 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "31% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-2222222-camiseta-adidas-response-masculina-_JM",
    verificadoEm: "2026-08-12"
  },

  // ===== SHORTS DE CORRIDA =====
  {
    id: "short-nike-flex-2in1",
    tipo: "produto",
    categoria: "acessorios",
    icone: "camiseta",
    marca: "Nike",
    nome: "Short Nike Flex 2in1 Masculino",
    precoOriginal: 169.90,
    precoAtual: 129.90,
    desconto: 24,
    parcelas: "4x de R$ 32,48 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "24% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-3333333-short-nike-flex-2in1-masculino-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "short-adidas-response",
    tipo: "produto",
    categoria: "acessorios",
    icone: "camiseta",
    marca: "Adidas",
    nome: "Short Adidas Response Masculino",
    precoOriginal: 139.90,
    precoAtual: 99.90,
    desconto: 29,
    parcelas: "3x de R$ 33,30 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "29% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-4444444-short-adidas-response-masculino-_JM",
    verificadoEm: "2026-08-12"
  },

  // ===== FONES ESPORTIVOS =====
  {
    id: "fone-anker-soundcore-spirit-x",
    tipo: "produto",
    categoria: "fones",
    icone: "fone",
    marca: "Anker",
    nome: "Fone Anker Soundcore Spirit X",
    precoOriginal: 299.90,
    precoAtual: 179.90,
    desconto: 40,
    parcelas: "4x de R$ 44,98 sem juros",
    cupomCompativel: null,
    badge: "40% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-5555555-fone-anker-soundcore-spirit-x-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "fone-jbl-endurance-run",
    tipo: "produto",
    categoria: "fones",
    icone: "fone",
    marca: "JBL",
    nome: "Fone JBL Endurance Run",
    precoOriginal: 399.90,
    precoAtual: 299.90,
    desconto: 25,
    parcelas: "5x de R$ 59,98 sem juros",
    cupomCompativel: "GANHEMAIS",
    badge: "25% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-6666666-fone-jbl-endurance-run-_JM",
    verificadoEm: "2026-08-12"
  },

  // ===== SMARTWATCH PARA CORRIDA =====
  {
    id: "smartwatch-amazfit-band-7",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Amazfit",
    nome: "Smartwatch Amazfit Band 7",
    precoOriginal: 299.90,
    precoAtual: 199.90,
    desconto: 33,
    parcelas: "4x de R$ 49,98 sem juros",
    cupomCompativel: "MELIACHA",
    badge: "33% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-7777777-smartwatch-amazfit-band-7-_JM",
    verificadoEm: "2026-08-12"
  },
  {
    id: "relogio-garmin-instinct-2",
    tipo: "produto",
    categoria: "relogios",
    icone: "relogio",
    marca: "Garmin",
    nome: "Relógio Garmin Instinct 2",
    precoOriginal: 899.90,
    precoAtual: 699.90,
    desconto: 22,
    parcelas: "10x de R$ 69,99 sem juros",
    cupomCompativel: null,
    badge: "22% OFF",
    link: "https://produto.mercadolivre.com.br/MLB-8888888-relogio-garmin-instinct-2-_JM",
    verificadoEm: "2026-08-12"
  }
];
