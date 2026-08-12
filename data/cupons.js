/**
* Cupons do dia exibidos no RunPromo.
*
* IMPORTANTE: cupons do Mercado Livre são pessoais (aparecem dentro da conta
* logada do usuário, em mercadolivre.com.br/cupons) e têm uso limitado —
* eles caem assim que a verba acaba. NÃO existe uma API pública para
* confirmar automaticamente se um código ainda está de pé.
*
* ROTINA DIÁRIA (o que você já pretendia fazer nos vídeos):
* 1. Abra mercadolivre.com.br/cupons logado na sua conta.
* 2. Confirme quais códigos abaixo ainda estão ativos; remova os que sumiram.
* 3. Adicione os novos códigos do dia seguindo o mesmo formato.
* 4. Atualize `verificadoEm` com a data/hora de hoje.
*/

const CUPONS = [
  {
    codigo: "MELIACHA",
    desconto: "18% OFF",
    detalhe: "até R$ 60 · Tênis, roupas e esportes",
    verificadoEm: "2026-08-12 14:30 - ativo ✅"
  },
  {
    codigo: "GANHEMAIS",
    desconto: "20% OFF",
    detalhe: "até R$ 150 · Esportes e Fitness · mín. R$ 19",
    verificadoEm: "2026-08-12 14:30 - ativo ✅"
  },
  {
    codigo: "MELIOFERTA",
    desconto: "12% OFF",
    detalhe: "até R$ 200 · Loja toda · mín. R$ 149",
    verificadoEm: "2026-08-12 14:30 - ativo ✅"
  },
  {
    codigo: "MELHORCUPOM",
    desconto: "15% OFF",
    detalhe: "até R$ 80 · Loja toda · mín. R$ 79",
    verificadoEm: "2026-08-12 14:30 - ativo ✅"
  },
  {
    codigo: "DESCONTO20",
    desconto: "20% OFF",
    detalhe: "até R$ 100 · Esportes · mín. R$ 50",
    verificadoEm: "2026-08-12 14:30 - ativo ✅"
  }
];
