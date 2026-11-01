// Monta as páginas do portfólio a partir de dados.js.
// Cada <section class="pagina"> vira uma folha A4 no PDF.

const D = window.PORTFOLIO;
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function dataBR(iso, soAno) {
  const [a, m, d] = iso.split("-").map(Number);
  return soAno ? String(a) : `${String(d).padStart(2, "0")} ${MESES[m - 1]} ${a}`;
}
const recentes = (lista) => [...lista].sort((x, y) => y.data.localeCompare(x.data));
const blocos = (lista, n) => Array.from({ length: Math.ceil(lista.length / n) }, (_, i) => lista.slice(i * n, i * n + n));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const link = (href, inner, cls = "") =>
  href ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>` : `<span class="${cls}">${inner}</span>`;

function titulo(texto, sub) {
  return `<header class="titulo"><h2>${texto}</h2>${sub ? `<p>${sub}</p>` : ""}</header>`;
}
function pagina(conteudo, cls = "") {
  return `<section class="pagina ${cls}">${conteudo}<footer class="rodape"><span>${D.pessoa.nome} · Portfólio</span><span class="num"></span></footer></section>`;
}

function capa() {
  const p = D.pessoa, c = p.contato;
  return `<section class="pagina capa">
    <div class="capa-faixa"><span>Portfólio</span></div>
    <div class="capa-corpo">
      <figure class="capa-foto"><img src="imagens/capa.jpg" alt="${esc(p.nome)}"></figure>
      <div class="capa-texto">
        <p class="eyebrow">${esc(p.titulo)}</p>
        <h1>${esc(p.nome)}</h1>
        <p class="capa-resumo">${esc(p.resumo)}</p>
        <ul class="contatos">
          <li>${link(c.whatsappLink, `WhatsApp ${esc(c.whatsapp)}`)}</li>
          <li>${link("mailto:" + c.email, esc(c.email))}</li>
          <li>${link(c.instagramLink, esc(c.instagram))}</li>
        </ul>
      </div>
    </div>
  </section>`;
}

function quemSou() {
  const p = D.pessoa;
  return pagina(`
    ${titulo("Quem sou")}
    <div class="duas-col">
      <figure class="foto-alta"><img src="imagens/isabel.jpg" alt=""></figure>
      <div>
        ${p.sobre.map((t) => `<p class="texto">${esc(t)}</p>`).join("")}
        <blockquote>“${esc(p.frase)}”</blockquote>
      </div>
    </div>
    <div class="numeros">${p.numeros.map((n) => `<div><strong>${esc(n.valor)}</strong><span>${esc(n.rotulo)}</span></div>`).join("")}</div>
  `);
}

function trajetoria() {
  return pagina(`
    ${titulo("Trajetória")}
    <ol class="linha-tempo">${D.trajetoria
      .map((t) => `<li><span class="periodo">${esc(t.periodo)}</span><div><h3>${esc(t.cargo)}</h3><p class="local">${esc(t.empresa)}</p><p class="texto">${esc(t.texto)}</p></div></li>`)
      .join("")}</ol>
    ${titulo("Formação")}
    <div class="formacao">
      <ul>${D.formacao.map((f) => `<li><strong>${esc(f.titulo)}</strong><span>${esc(f.local)} · ${esc(f.periodo)}</span></li>`).join("")}</ul>
      <ul class="cursos">${D.cursos.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
    </div>
  `);
}

function destaque() {
  const d = D.destaque;
  return pagina(`
    ${titulo("Na mídia", "Destaque")}
    <div class="destaque">
      ${link(d.link, `<img src="${d.imagem}" alt="">`, "destaque-img")}
      <div>
        <p class="eyebrow">${esc(d.veiculo)} · ${dataBR(d.data)}</p>
        <h3 class="grande">${esc(d.titulo)}</h3>
        <p class="texto">${esc(d.texto)}</p>
        <p class="eyebrow mt">Também falou sobre dinheiro em</p>
        <p class="veiculos">${veiculos().join(" · ")}</p>
      </div>
    </div>
  `);
}

function veiculos() {
  const todos = [...D.tv, ...D.radio, ...D.portais].map((m) => m.veiculo.split(" · ")[0]);
  return [...new Set(todos)];
}

function grade(lista, nome, sub) {
  return blocos(recentes(lista), 8)
    .map((bloco, i) =>
      pagina(`
        ${titulo(nome + (i ? " (cont.)" : ""), sub)}
        <div class="grade">${bloco
          .map((m) => link(m.link, `<img src="${m.imagem}" alt=""><span class="eyebrow">${esc(m.veiculo)}</span><span class="cartao-titulo">${esc(m.titulo)}</span><span class="data">${dataBR(m.data)}</span>`, "cartao"))
          .join("")}</div>
      `)
    )
    .join("");
}

function podcast() {
  const p = D.podcast;
  return pagina(`
    ${titulo("Podcast", p.nome)}
    <div class="podcast-fotos">${p.imagens.map((s) => `<img src="${s}" alt="">`).join("")}</div>
    <p class="texto">${esc(p.texto)}</p>
    <ul class="lista-links">${recentes(p.episodios)
      .map((e) => `<li>${link(e.link, esc(e.titulo))}<span>${dataBR(e.data)}</span></li>`)
      .join("")}</ul>
  `);
}

function palestras() {
  return blocos(recentes(D.palestras), 4)
    .map((bloco, i) =>
      pagina(`
        ${titulo("Palestras e eventos" + (i ? " (cont.)" : ""))}
        <div class="palestras">${bloco
          .map((p) => `<article>${link(p.link, `<img src="${p.imagem}" alt="">`, "palestra-img")}
            <p class="eyebrow">${esc(p.local)} · ${dataBR(p.data, p.mostrarSoAno)}</p>
            <h3>${esc(p.evento)}</h3><p class="texto">${esc(p.texto)}</p></article>`)
          .join("")}</div>
        ${i === 0 ? `<p class="temas"><span class="eyebrow">Temas mais pedidos</span> ${D.temasPalestra.map(esc).join(" · ")}</p>` : ""}
      `)
    )
    .join("");
}

function conteudo() {
  const c = D.conteudo, k = D.pessoa.contato;
  return pagina(`
    ${titulo("Conteúdo", `${link(k.instagramLink, esc(k.instagram))} · ${link(k.youtubeLink, "YouTube " + esc(k.youtube))}`)}
    <p class="texto">${esc(c.texto)}</p>
    <div class="grade grade-3">${c.exemplos
      .map((e) => link(e.link, `<img src="${e.imagem}" alt=""><span class="cartao-titulo">${esc(e.titulo)}</span>`, "cartao"))
      .join("")}</div>
  `);
}

function midia() {
  const todos = recentes([
    ...D.tv.map((m) => ({ ...m, tipo: "TV" })),
    ...D.radio.map((m) => ({ ...m, tipo: "Rádio" })),
    ...D.portais.map((m) => ({ ...m, tipo: "Jornal" })),
    ...D.podcast.episodios.map((m) => ({ ...m, veiculo: D.podcast.nome, tipo: "Podcast" })),
  ]);
  return blocos(todos, 18)
    .map((bloco, i) =>
      pagina(`
        ${titulo("Mídia" + (i ? " (cont.)" : ""), i ? "" : "Todos os links para assistir, ouvir e ler")}
        <ul class="midia">${bloco
          .map((m) => `<li><span class="tipo">${m.tipo}</span><div><strong>${esc(m.veiculo)}</strong> · ${esc(m.titulo)}<br>${link(m.link, esc(m.link.replace(/^https?:\/\/(www\.)?/, "").slice(0, 80)))}</div><span class="data">${dataBR(m.data)}</span></li>`)
          .join("")}</ul>
      `)
    )
    .join("");
}

function contato() {
  const c = D.pessoa.contato;
  return `<section class="pagina final">
    <p class="eyebrow">Contato</p>
    <h2>${esc(D.pessoa.nome)}</h2>
    <p class="final-sub">${esc(D.pessoa.titulo)}</p>
    <ul>
      <li>${link(c.whatsappLink, `WhatsApp ${esc(c.whatsapp)}`)}</li>
      <li>${link("mailto:" + c.email, esc(c.email))}</li>
      <li>${link(c.instagramLink, "Instagram " + esc(c.instagram))}</li>
      <li>${link(c.youtubeLink, "YouTube " + esc(c.youtube))}</li>
    </ul>
    <p class="atualizado">Atualizado em ${dataBR(D.atualizado)}</p>
  </section>`;
}

document.getElementById("portfolio").innerHTML = [
  capa(),
  quemSou(),
  trajetoria(),
  destaque(),
  grade(D.tv, "Televisão", "Entrevistas e matérias"),
  grade(D.radio, "Rádio", "Entrevistas"),
  grade(D.portais, "Jornais e portais", "Entrevistas e matérias"),
  podcast(),
  palestras(),
  conteudo(),
  midia(),
  contato(),
].join("");

document.querySelectorAll(".pagina .num").forEach((el, i) => (el.textContent = String(i + 2).padStart(2, "0")));
