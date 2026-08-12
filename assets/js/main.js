/* RunPromo — interatividade da página
   Depende de data/produtos.js e data/cupons.js (carregados antes deste arquivo) */

const ICONES = {
  tenis: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40c0-4 3-6 7-8l14-7c3-1.5 5-4 6-7l2-6 8 4-1 5 15 9c3 2 4 4 4 8v6H6v-4Z"/><path d="M6 44h44"/><path d="M20 24c2 3 6 5 10 6"/></svg>`,
  relogio: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="34" r="16"/><path d="M32 24v10l7 5"/><path d="M26 8h12M26 12h12M24 18l3 6M40 18l-3 6"/></svg>`,
  fone: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 34v-4a20 20 0 0 1 40 0v4"/><rect x="8" y="32" width="10" height="16" rx="4"/><rect x="46" y="32" width="10" height="16" rx="4"/></svg>`,
  camiseta: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8 8 16v10h8v30h32V26h8V16L38 8c-1.5 3-4 5-6 5s-4.5-2-6-5Z"/></svg>`,
  garrafa: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M26 8h12v8l4 6v34H22V22l4-6Z"/><path d="M22 34h20"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  raio: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z"/></svg>`,
  aviso: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`,
  whats: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.53a9.86 9.86 0 0 0 4.91 1.3h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.05.91.82-2.98-.2-.31a8.16 8.16 0 0 1-1.27-4.44c0-4.53 3.68-8.21 8.2-8.21 2.19 0 4.25.86 5.8 2.41a8.13 8.13 0 0 1 2.4 5.8c0 4.53-3.69 8.15-8.21 8.15Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.3-.23.24-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.68 4.25 3.75.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-.94-.9-1.53-2.1-1.62-3.42h-3.3v13.66c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9.28 0 .55.04.8.12v-3.36c-.26-.03-.53-.05-.8-.05-3.4 0-6.15 2.75-6.15 6.15S5.4 21.87 8.8 21.87s6.15-2.75 6.15-6.15V9.03c1.3.94 2.9 1.5 4.63 1.5V7.2c-.93 0-1.8-.28-2.98-.98a5.9 5.9 0 0 1 0-.4Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12ZM10 15.2V8.8L15.5 12 10 15.2Z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  fechar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>`
};

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarCardProduto(produto) {
  const icone = ICONES[produto.icone] || "";
  const cupomTag = produto.cupomCompativel
    ? `<span class="produto-cupom-tag">CUPOM ${produto.cupomCompativel}</span>`
    : "";

  if (produto.tipo === "explorer") {
    return `
      <article class="produto-card" data-categoria="${produto.categoria}">
        <div class="produto-visual">
          ${cupomTag}
          ${icone}
        </div>
        <div class="produto-corpo">
          <span class="produto-marca">Vários modelos</span>
          <h3 class="produto-nome">${produto.nome}</h3>
          <p class="produto-descricao">${produto.descricaoCurta}</p>
          <a class="btn btn-outline-escuro btn-bloco" href="${produto.link}" target="_blank" rel="nofollow sponsored noopener">Ver ofertas</a>
        </div>
      </article>`;
  }

  const badge = produto.badge ? `<span class="produto-badge">${produto.badge}</span>` : "";
  const precoOriginal = produto.precoOriginal
    ? `<span class="preco-original">${formatarPreco(produto.precoOriginal)}</span>`
    : "";
  const descontoTxt = produto.desconto && !produto.badge
    ? `<span class="produto-badge">${produto.desconto}% OFF</span>` : "";
  const parcelas = produto.parcelas
    ? `<span class="preco-parcelas">${produto.parcelas}</span>` : "";

  return `
    <article class="produto-card" data-categoria="${produto.categoria}">
      <div class="produto-visual">
        ${badge}${descontoTxt}
        ${cupomTag}
        ${icone}
      </div>
      <div class="produto-corpo">
        <span class="produto-marca">${produto.marca}</span>
        <h3 class="produto-nome">${produto.nome}</h3>
        <div class="produto-precos">
          ${precoOriginal}
          <span class="preco-atual">${formatarPreco(produto.precoAtual)}</span>
          ${parcelas}
        </div>
        <a class="btn btn-primario btn-bloco" href="${produto.link}" target="_blank" rel="nofollow sponsored noopener">Pegar oferta</a>
        <span class="produto-verificado">Preço verificado em ${formatarData(produto.verificadoEm)}</span>
      </div>
    </article>`;
}

function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

function renderizarProdutos(lista) {
  const grade = document.getElementById("grade-produtos");
  grade.innerHTML = lista.map(criarCardProduto).join("");
}

function configurarFiltros() {
  const botoes = document.querySelectorAll(".filtro-btn");
  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      const cat = btn.dataset.categoria;
      const filtrada = cat === "todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === cat);
      renderizarProdutos(filtrada);
    });
  });
}

function criarCardCupom(cupom) {
  return `
    <div class="cupom-card">
      <span class="cupom-desconto">${cupom.desconto}</span>
      <p class="cupom-detalhe">${cupom.detalhe}</p>
      <div class="cupom-codigo-box">
        <code>${cupom.codigo}</code>
        <button class="copiar-btn" data-codigo="${cupom.codigo}">${ICONES.check.replace("stroke-width=\"2.6\"", "stroke-width=\"3\"")} Copiar</button>
      </div>
      <span class="cupom-fonte">${cupom.verificadoEm}</span>
    </div>`;
}

function renderizarCupons() {
  const grade = document.getElementById("grade-cupons");
  grade.innerHTML = CUPONS.map(criarCardCupom).join("");

  grade.querySelectorAll(".copiar-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const codigo = btn.dataset.codigo;
      try {
        await navigator.clipboard.writeText(codigo);
      } catch (e) {
        const campo = document.createElement("textarea");
        campo.value = codigo;
        document.body.appendChild(campo);
        campo.select();
        document.execCommand("copy");
        document.body.removeChild(campo);
      }
      const textoOriginal = btn.innerHTML;
      btn.classList.add("copiado");
      btn.textContent = "Copiado!";
      setTimeout(() => {
        btn.classList.remove("copiado");
        btn.innerHTML = textoOriginal;
      }, 1800);
    });
  });
}

function iniciarContador() {
  const elemento = document.getElementById("contador-numeros");
  if (!elemento) return;
  function atualizar() {
    const agora = new Date();
    const meiaNoite = new Date(agora);
    meiaNoite.setHours(24, 0, 0, 0);
    const diff = meiaNoite - agora;
    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    elemento.textContent = `${h}:${m}:${s}`;
  }
  atualizar();
  setInterval(atualizar, 1000);
}

function configurarMenuMobile() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-mobile");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("aberto");
    toggle.innerHTML = nav.classList.contains("aberto") ? ICONES.fechar : ICONES.menu;
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("aberto");
      toggle.innerHTML = ICONES.menu;
    })
  );
}

function preencherIconesEstaticos() {
  document.querySelectorAll("[data-icone]").forEach((el) => {
    const nome = el.dataset.icone;
    if (ICONES[nome]) el.innerHTML = ICONES[nome];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  preencherIconesEstaticos();
  renderizarProdutos(PRODUTOS);
  configurarFiltros();
  renderizarCupons();
  iniciarContador();
  configurarMenuMobile();
  const anoEl = document.getElementById("ano-atual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();
});
