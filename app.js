// Monta o portfólio a partir de dados.js, em duas versões:
//   #site → página de rolagem para a tela (animações, filtros, carrosséis)
//   #pdf  → folhas A4 com composição de revista (usadas na impressão / PDF)

const D = window.PORTFOLIO;
const P = D.pessoa;
const C = P.contato;
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

// ---------- utilitários ----------
function dataBR(iso, soAno) {
  const [a, m, d] = iso.split("-").map(Number);
  return soAno ? String(a) : `${String(d).padStart(2, "0")} ${MESES[m - 1]} ${a}`;
}
const recentes = (lista) => [...lista].sort((x, y) => y.data.localeCompare(x.data));
const blocos = (lista, n) => Array.from({ length: Math.ceil(lista.length / n) }, (_, i) => lista.slice(i * n, i * n + n));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const a = (href, inner, cls = "") =>
  href ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>` : `<span class="${cls}">${inner}</span>`;
const img = (src, cls = "") => `<img class="${cls}" src="${src}" alt="" loading="lazy">`;

// Toda a imprensa numa lista só, com o tipo
const IMPRENSA = recentes([
  ...D.tv.map((m) => ({ ...m, tipo: "TV" })),
  ...D.radio.map((m) => ({ ...m, tipo: "Rádio" })),
  ...D.portais.map((m) => ({ ...m, tipo: "Jornal" })),
]);
const VEICULOS = [...new Set(IMPRENSA.map((m) => m.veiculo.split(" · ")[0]))];
const ESCOLAS = D.palestras.filter((p) => (p.publico || "").toLowerCase().includes("escola"));

// ============================================================
// SITE
// ============================================================
function site() {
  const nav = `<nav class="nav">
    <a href="#inicio" class="nav-marca">Isabel Abreu</a>
    <div class="nav-links">
      <a href="#sobre">Sobre</a><a href="#metodo">Método</a><a href="#midia">Na mídia</a><a href="#palestras">Palestras</a><a href="#podcast">Podcast</a><a href="#conteudo">Conteúdo</a><a href="#contato">Contato</a>
    </div>
    <a class="nav-pdf" href="Portfolio-Isabel-Abreu.pdf" download>Baixar PDF</a>
  </nav>`;

  const hero = `<header class="hero" id="inicio">
    <div class="hero-texto">
      <p class="eyebrow revela">${esc(P.titulo)}</p>
      <h1 class="revela">Isabel<br><em>Abreu</em></h1>
      <p class="hero-resumo revela">${esc(P.resumo)}</p>
      <div class="hero-botoes revela">
        ${a(C.whatsappLink, "Falar no WhatsApp", "botao")}
        <a class="botao botao-linha" href="#midia">Ver trabalhos</a>
      </div>
    </div>
    <figure class="hero-foto"><img src="imagens/capa.jpg" alt="${esc(P.nome)}"><span class="selo">Portfólio<br>${new Date(D.atualizado).getFullYear()}</span></figure>
  </header>
  <div class="letreiro" aria-label="Veículos"><div>${[...VEICULOS, ...VEICULOS].map((v) => `<span>${esc(v)}</span>`).join("")}</div></div>
  <section class="numeros-faixa">${P.numeros
    .map((n) => `<div class="revela"><strong data-conta="${esc(n.valor)}">${esc(n.valor)}</strong><span>${esc(n.rotulo)}</span></div>`)
    .join("")}</section>`;

  const sobre = `<section class="secao" id="sobre">
    <div class="sobre">
      <figure class="sobre-foto revela"><img src="imagens/isabel.jpg" alt=""></figure>
      <div>
        <p class="eyebrow revela">Quem sou</p>
        <blockquote class="revela">“${esc(P.frase)}”</blockquote>
        ${P.sobre.map((t) => `<p class="texto revela">${esc(t)}</p>`).join("")}
      </div>
    </div>
  </section>`;

  const arquivo = `<section class="secao arquivo" id="alem">
    <div class="arquivo-topo">
      <p class="selo-texto revela">Arquivo pessoal // IA</p>
      <h2 class="h2 revela">Além dos números.</h2>
      <p class="texto revela">Antes do currículo, um pouco de quem eu sou. Toque nos cartões para abrir.</p>
    </div>
    <div class="cartoes">${D.alemDosNumeros
      .map((c, i) => {
        const fotos = c.fotos || (c.imagem ? [c.imagem] : []);
        const galeria = fotos.length
          ? `<div class="cp-galeria">${fotos.map((f) => img(f)).join("")}</div>${
              fotos.length > 1 ? `<div class="cp-pontos">${fotos.map((_, j) => `<button aria-label="Foto ${j + 1} de ${fotos.length}" class="${j ? "" : "ativo"}"></button>`).join("")}</div>` : ""
            }`
          : `<span class="cp-sem-foto" aria-hidden="true">${esc(c.rotulo[0])}</span>`;
        return `<article class="cartao-pessoal revela">
        <button class="cp-topo${fotos.length ? " com-capa" : ""}" aria-expanded="false"${fotos.length ? ` style="--capa:url('${fotos[0]}')"` : ""}>
          <span class="cp-num">${String(i + 1).padStart(2, "0")}${fotos.length > 1 ? ` · ${fotos.length} fotos` : ""}</span>
          <span class="cp-rotulo">${esc(c.rotulo)}</span>
          <span class="cp-mais" aria-hidden="true">+</span>
        </button>
        <div class="cp-corpo"><div>${galeria}<strong>${esc(c.titulo)}</strong><p>${esc(c.texto)}</p></div></div>
      </article>`;
      })
      .join("")}</div>
    <p class="arquivo-fim revela">Fim do arquivo · IA // ${String(D.alemDosNumeros.length).padStart(2, "0")} registros</p>
  </section>`;

  const pilares = `<section class="secao secao-areia" id="metodo">
    <p class="eyebrow revela">Como eu trabalho</p>
    <h2 class="h2 revela">Os ${D.pilares.length} pilares do Planejamento 360°</h2>
    <div class="pilares revela">
      <div class="pilares-abas" role="tablist">${D.pilares
        .map((p, i) => `<button role="tab" class="pilar${i ? "" : " ativo"}" data-i="${i}" aria-selected="${!i}">${esc(p.nome)}</button>`)
        .join("")}</div>
      <div class="pilares-grafico" aria-hidden="true">${D.pilares.map((p, i) => `<span style="--h:${p.nivel}" class="${i ? "" : "ativo"}"></span>`).join("")}</div>
      <div class="pilares-texto" aria-live="polite"></div>
    </div>
  </section>`;

  const passos = D.jornada;
  const jornada = `<section class="jornada" id="jornada" style="--passos:${passos.length}">
    <div class="jornada-fixa">
      <div class="jornada-cab">
        <p class="eyebrow">Uma breve viagem pela minha</p>
        <h2 class="h2">Jornada<span class="ponto">.</span></h2>
      </div>
      <div class="jornada-palco">
        <div class="barras" aria-hidden="true">${passos.map((p, i) => `<span style="--h:${(i + 1) / passos.length}"><i>${esc(p.ano)}</i></span>`).join("")}</div>
        <article class="jornada-cartao"><p class="j-ano"></p><h3 class="j-titulo"></h3><p class="texto j-texto"></p></article>
      </div>
      <p class="jornada-dica">Role para crescer ↓</p>
    </div>
  </section>
  <section class="secao formacao-secao">
    <div class="formacao revela">
      <div><p class="eyebrow">Experiência</p><ul>${D.trajetoria.map((t) => `<li><strong>${esc(t.cargo)}</strong> ${esc(t.empresa)} · ${esc(t.periodo)}</li>`).join("")}</ul></div>
      <div><p class="eyebrow">Formação e cursos</p><ul>${D.formacao.map((f) => `<li><strong>${esc(f.titulo)}</strong> ${esc(f.local)} · ${esc(f.periodo)}</li>`).join("")}<li>${D.cursos.map(esc).join(" · ")}</li></ul></div>
    </div>
  </section>`;

  const calculadora = `<section class="secao calc-secao" id="calculadora">
    <p class="fichas revela"><span>▸</span> Faça a conta <span>◂</span></p>
    <div class="calc revela">
      <div class="calc-cab"><h2>O preço de esperar</h2><span class="calc-tag">Simulador</span></div>
      <div class="calc-corpo">
        <div class="calc-campos">
          <label>Quanto você guardaria por mês<output id="o-valor"></output><input type="range" id="c-valor" min="100" max="10000" step="100" value="1000"></label>
          <label>Por quantos anos<output id="o-anos"></output><input type="range" id="c-anos" min="5" max="35" step="1" value="20"></label>
          <label>E se você esperasse para começar<output id="o-espera"></output><input type="range" id="c-espera" min="1" max="10" step="1" value="5"></label>
          <label>Rendimento ao mês<output id="o-taxa"></output><input type="range" id="c-taxa" min="0.5" max="1" step="0.05" value="0.8"></label>
        </div>
        <div class="calc-resultado">
          <div class="calc-barras">
            <div><span class="cb" id="b-hoje"></span><small>Começando hoje</small><strong id="r-hoje"></strong></div>
            <div><span class="cb cb-espera" id="b-espera"></span><small id="l-espera"></small><strong id="r-espera"></strong></div>
          </div>
          <p class="calc-preco">O preço de esperar: <strong id="r-preco"></strong></p>
          ${a(C.whatsappLink, "Quero o meu plano ↗", "botao botao-ouro")}
        </div>
      </div>
      <p class="calc-nota">Simulação ilustrativa, sem considerar impostos e inflação. Não é recomendação de investimento.</p>
    </div>
  </section>`;

  const d = D.destaque;
  const filtros = ["Todos", "TV", "Rádio", "Jornal"];
  const midia = `<section class="secao secao-escura" id="midia">
    <div class="midia-topo">
      <div>
        <p class="eyebrow revela">Na mídia</p>
        <h2 class="h2 revela">${IMPRENSA.length} entrevistas e matérias em ${VEICULOS.length} veículos</h2>
      </div>
      <div class="filtros revela" role="tablist">${filtros
        .map((f, i) => `<button class="filtro${i ? "" : " ativo"}" data-filtro="${f}">${f}<span>${f === "Todos" ? IMPRENSA.length : IMPRENSA.filter((m) => m.tipo === f).length}</span></button>`)
        .join("")}</div>
    </div>
    ${a(d.link, `<img src="${d.imagem}" alt=""><div><p class="eyebrow">Destaque · ${esc(d.veiculo)} · ${dataBR(d.data)}</p><h3>${esc(d.titulo)}</h3><p class="texto">${esc(d.texto)}</p></div>`, "destaque revela")}
    <div class="mural">${IMPRENSA.map(
      (m) => a(m.link, `<div class="mural-img">${img(m.imagem)}<span class="tipo">${m.tipo}</span></div><p class="eyebrow">${esc(m.veiculo)}</p><h4>${esc(m.titulo)}</h4><p class="data">${dataBR(m.data)}</p>`, `peca revela" data-tipo="${m.tipo}`)
    ).join("")}</div>
  </section>`;

  const palestras = `<section class="secao" id="palestras">
    <p class="eyebrow revela">Palestras e eventos</p>
    <h2 class="h2 revela">Educação financeira em palcos, eventos e salas de aula</h2>
    <div class="palco">${D.palco.map((s) => `<figure class="revela">${img(s)}</figure>`).join("")}</div>
    <div class="eventos">${recentes(D.palestras)
      .map((p, i) => `<article class="evento revela ${i % 2 ? "inverte" : ""}">
        ${a(p.link, img(p.imagem), "evento-img")}
        <div><p class="eyebrow">${esc(p.publico || "")}${p.publico ? " · " : ""}${dataBR(p.data, p.mostrarSoAno)}</p><h3>${esc(p.evento)}</h3><p class="local">${esc(p.local)}</p><p class="texto">${esc(p.texto)}</p></div>
      </article>`)
      .join("")}</div>
    <div class="temas revela"><p class="eyebrow">Temas mais pedidos</p><ul>${D.temasPalestra.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
  </section>`;

  const pc = D.podcast;
  const podcast = `<section class="secao secao-areia" id="podcast">
    <div class="podcast">
      <figure class="podcast-foto revela">${img(pc.imagens[0])}</figure>
      <div>
        <p class="eyebrow revela">Podcast</p>
        <h2 class="h2 revela">${esc(pc.nome)}</h2>
        <p class="texto revela">${esc(pc.texto)}</p>
        <ol class="episodios">${recentes(pc.episodios).map((e, i) => `<li class="revela">${a(e.link, `<span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(e.titulo)}</span><span class="data">${dataBR(e.data)}</span>`)}</li>`).join("")}</ol>
      </div>
    </div>
  </section>`;

  const ct = D.conteudo;
  const conteudo = `<section class="secao" id="conteudo">
    <div class="conteudo-topo">
      <div><p class="eyebrow revela">Conteúdo</p><h2 class="h2 revela">Dinheiro explicado de um jeito que todo mundo entende</h2></div>
      <p class="texto revela">${esc(ct.texto)} ${a(C.instagramLink, esc(C.instagram), "link")} · ${a(C.youtubeLink, "YouTube", "link")}</p>
    </div>
    <div class="carrossel">${ct.exemplos.map((e) => a(e.link, `${img(e.imagem)}<span>${esc(e.titulo)}</span>`, "post")).join("")}</div>
  </section>`;

  const contato = `<footer class="contato" id="contato">
    <p class="eyebrow revela">Contato</p>
    <h2 class="revela">Vamos conversar?</h2>
    <p class="contato-sub revela">Consultoria, palestras, entrevistas e parcerias.</p>
    <div class="contato-links revela">
      ${a(C.whatsappLink, `<small>WhatsApp</small>${esc(C.whatsapp)}`)}
      ${a("mailto:" + C.email, `<small>E-mail</small>${esc(C.email)}`)}
      ${a(C.instagramLink, `<small>Instagram</small>${esc(C.instagram)}`)}
      ${a(C.youtubeLink, `<small>YouTube</small>${esc(C.youtube)}`)}
    </div>
    <p class="atualizado">Atualizado em ${dataBR(D.atualizado)}</p>
  </footer>`;

  return nav + hero + calculadora + sobre + arquivo + pilares + jornada + midia + palestras + podcast + conteudo + contato;
}

// ============================================================
// PDF (folhas A4)
// ============================================================
let numPagina = 0;
function folha(conteudo, cls = "") {
  numPagina++;
  return `<section class="folha ${cls}">${conteudo}<footer class="rodape"><span>${esc(P.nome)} · Portfólio</span><span>${String(numPagina).padStart(2, "0")}</span></footer></section>`;
}
const cab = (t, sub = "") => `<header class="cab"><h2>${t}</h2>${sub ? `<p>${sub}</p>` : ""}</header>`;

function pdf() {
  numPagina = 0;
  const pags = [];

  // 1. Capa
  numPagina++;
  pags.push(`<section class="folha f-capa">
    <img class="f-capa-foto" src="imagens/capa.jpg" alt="">
    <div class="f-capa-painel">
      <p class="f-vertical">Portfólio</p>
      <div class="f-capa-nome">
        <p class="eyebrow">${esc(P.titulo)}</p>
        <h1>Isabel<br><em>Abreu</em></h1>
      </div>
      <ul class="f-capa-numeros">${P.numeros.map((n) => `<li><strong>${esc(n.valor)}</strong>${esc(n.rotulo)}</li>`).join("")}</ul>
    </div>
  </section>`);

  // 2. Quem sou
  pags.push(folha(`
    <blockquote class="f-citacao">“${esc(P.frase)}”</blockquote>
    <div class="f-sobre">
      <div class="f-arco"><img src="imagens/isabel.jpg" alt=""></div>
      <div>
        <p class="eyebrow">Quem sou</p>
        ${P.sobre.map((t) => `<p class="texto">${esc(t)}</p>`).join("")}
        <ul class="f-contatos">
          <li>${a(C.whatsappLink, esc(C.whatsapp))}</li><li>${a("mailto:" + C.email, esc(C.email))}</li><li>${a(C.instagramLink, esc(C.instagram))}</li>
        </ul>
      </div>
    </div>
    <div class="f-areas"><span>Planejamento 360°</span><span>Patrimônio</span><span>Proteção da família</span><span>Aposentadoria</span><span>Finanças para empresas</span></div>
  `, "f-creme"));

  // 3. Trajetória
  pags.push(folha(`
    ${cab("Trajetória")}
    <ol class="f-tempo">${D.trajetoria
      .map((t) => `<li><span class="f-ponto"></span><p class="periodo">${esc(t.periodo)}</p><h3>${esc(t.cargo)}</h3><p class="local">${esc(t.empresa)}</p><p class="texto">${esc(t.texto)}</p></li>`)
      .join("")}</ol>
    <div class="f-formacao">
      <div><p class="eyebrow">Formação</p><ul>${D.formacao.map((f) => `<li><strong>${esc(f.titulo)}</strong><span>${esc(f.local)} · ${esc(f.periodo)}</span></li>`).join("")}</ul></div>
      <div><p class="eyebrow">Cursos</p><ul class="f-cursos">${D.cursos.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>
    </div>
  `, "f-marinho"));

  // 4. Abertura da mídia
  const d = D.destaque;
  pags.push(folha(`
    <p class="eyebrow">Na mídia</p>
    <h2 class="f-gigante">+${IMPRENSA.length}</h2>
    <p class="f-gigante-sub">entrevistas e matérias em ${VEICULOS.length} veículos de TV, rádio e jornal</p>
    <div class="f-nuvem">${VEICULOS.map((v, i) => `<span class="t${i % 4}">${esc(v)}</span>`).join("")}</div>
    ${a(d.link, `<img src="${d.imagem}" alt=""><span class="f-recorte-leg">${esc(d.veiculo)} · ${dataBR(d.data)}<br><em>${esc(d.titulo)}</em></span>`, "f-recorte")}
  `, "f-creme f-abre-midia"));

  // 5. TV: um destaque grande + oito menores por folha
  blocos(recentes(D.tv), 9).forEach((bl, i) => {
    pags.push(folha(`
      ${cab("Televisão" + (i ? " · cont." : ""), "Entrevistas e matérias")}
      <div class="f-mosaico">${bl
        .map((m, j) => a(m.link, `${img(m.imagem)}<span class="f-leg"><b>${esc(m.veiculo)}</b>${j === 0 ? `<i>${esc(m.titulo)}</i>` : ""}<small>${dataBR(m.data)}</small></span>`, j === 0 ? "f-peca f-grande" : "f-peca"))
        .join("")}</div>
    `, i % 2 ? "f-creme" : "f-marinho"));
  });

  // 6. Rádio (marinho, capas em círculo) + Jornais (lista editorial)
  pags.push(folha(`
    ${cab("Rádio", "No ar")}
    <div class="f-radio">${recentes(D.radio)
      .map((m) => a(m.link, `<span class="f-disco">${img(m.imagem)}</span><b>${esc(m.veiculo)}</b><span>${esc(m.titulo)}</span><small>${dataBR(m.data)}</small>`, "f-onda"))
      .join("")}</div>
  `, "f-marinho"));

  blocos(recentes(D.portais), 8).forEach((bl, i) => {
    pags.push(folha(`
      ${cab("Jornais e portais" + (i ? " · cont." : ""), "Entrevistas e matérias")}
      <div class="f-jornal">${bl
        .map((m) => a(m.link, `${img(m.imagem)}<div><p class="eyebrow">${esc(m.veiculo)} · ${dataBR(m.data)}</p><h3>${esc(m.titulo)}</h3></div>`, "f-noticia"))
        .join("")}</div>
    `, "f-creme"));
  });

  // 7. Podcast
  const pc = D.podcast;
  pags.push(folha(`
    <div class="f-podcast-foto"><img src="${pc.imagens[0]}" alt=""><div><p class="eyebrow">Podcast</p><h2>${esc(pc.nome)}</h2></div></div>
    <div class="f-podcast">
      <p class="texto">${esc(pc.texto)}</p>
      <ol>${recentes(pc.episodios).map((e, i) => `<li>${a(e.link, `<span class="n">${String(i + 1).padStart(2, "0")}</span>${esc(e.titulo)}`)}<small>${dataBR(e.data)}</small></li>`).join("")}</ol>
    </div>
  `, "f-creme f-sem-margem-topo"));

  // 8. Palestras: abertura com fotos de palco + eventos em zigue-zague
  pags.push(folha(`
    <div class="f-palco">${D.palco.map((s) => `<img src="${s}" alt="">`).join("")}</div>
    <div class="f-palco-texto">
      <p class="eyebrow">Palestras e eventos</p>
      <h2>Educação financeira<br><em>que todo mundo entende.</em></h2>
      <p class="texto">Palestras leves e diretas, com números concretos e sem jargão, para empresas, eventos, associações e escolas.</p>
      <ul class="f-temas">${D.temasPalestra.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </div>
  `, "f-marinho f-sem-margem-topo"));

  blocos(recentes(D.palestras), 4).forEach((bl, i) => {
    pags.push(folha(`
      ${cab("Onde já falei" + (i ? " · cont." : ""), ESCOLAS.length ? "Empresas, eventos e escolas" : "")}
      <div class="f-eventos">${bl
        .map((p, j) => `<article class="${j % 2 ? "inverte" : ""}">${a(p.link, img(p.imagem), "f-evento-img")}<div>
          <p class="eyebrow">${esc(p.publico || "")}${p.publico ? " · " : ""}${dataBR(p.data, p.mostrarSoAno)}</p>
          <h3>${esc(p.evento)}</h3><p class="local">${esc(p.local)}</p><p class="texto">${esc(p.texto)}</p></div></article>`)
        .join("")}</div>
    `, "f-creme"));
  });

  // 9. Conteúdo
  const ct = D.conteudo;
  pags.push(folha(`
    ${cab("Conteúdo", `${a(C.instagramLink, esc(C.instagram))} · ${a(C.youtubeLink, "YouTube")}`)}
    <p class="texto f-largo">${esc(ct.texto)}</p>
    <div class="f-posts">${ct.exemplos.map((e, i) => a(e.link, img(e.imagem), `f-post p${i}`)).join("")}</div>
  `, "f-creme"));

  // 10. Links da mídia
  const links = recentes([...IMPRENSA, ...pc.episodios.map((e) => ({ ...e, veiculo: pc.nome, tipo: "Podcast" }))]);
  blocos(links, 22).forEach((bl, i) => {
    pags.push(folha(`
      ${cab("Links" + (i ? " · cont." : ""), "Para assistir, ouvir e ler")}
      <ul class="f-links">${bl
        .map((m) => `<li><span class="tipo">${m.tipo}</span><div><b>${esc(m.veiculo)}</b> ${esc(m.titulo)}<br>${a(m.link, esc(m.link.replace(/^https?:\/\/(www\.)?/, "").slice(0, 70)))}</div><small>${dataBR(m.data)}</small></li>`)
        .join("")}</ul>
    `, "f-creme"));
  });

  // 11. Contato
  pags.push(`<section class="folha f-fim">
    <img src="imagens/palestra-3.jpg" alt="">
    <div>
      <p class="eyebrow">Contato</p>
      <h2>Vamos<br><em>conversar?</em></h2>
      <ul>
        <li>${a(C.whatsappLink, `WhatsApp ${esc(C.whatsapp)}`)}</li>
        <li>${a("mailto:" + C.email, esc(C.email))}</li>
        <li>${a(C.instagramLink, "Instagram " + esc(C.instagram))}</li>
        <li>${a(C.youtubeLink, "YouTube " + esc(C.youtube))}</li>
      </ul>
      <p class="atualizado">Atualizado em ${dataBR(D.atualizado)}</p>
    </div>
  </section>`);

  return pags.join("");
}

document.getElementById("site").innerHTML = site();
document.getElementById("pdf").innerHTML = pdf();

// ============================================================
// Interações do site
// ============================================================
const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Elementos aparecem ao rolar
const io = new IntersectionObserver(
  (entradas) => entradas.forEach((e) => e.isIntersecting && (e.target.classList.add("visivel"), io.unobserve(e.target))),
  { threshold: 0.12 }
);
document.querySelectorAll("#site .revela").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  semMovimento ? el.classList.add("visivel") : io.observe(el);
});

// Números contam do zero
document.querySelectorAll("[data-conta]").forEach((el) => {
  const alvo = parseInt(el.dataset.conta.replace(/\D/g, ""), 10);
  const prefixo = el.dataset.conta.startsWith("+") ? "+" : "";
  if (semMovimento || !alvo) return;
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    const t0 = performance.now();
    const passo = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      el.textContent = prefixo + Math.round(alvo * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  });
  obs.observe(el);
});

// Filtros da mídia
document.querySelectorAll(".filtro").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filtro").forEach((x) => x.classList.toggle("ativo", x === b));
    document.querySelectorAll(".peca").forEach((p) => {
      p.hidden = b.dataset.filtro !== "Todos" && p.dataset.tipo !== b.dataset.filtro;
    });
  })
);

// Calculadora "O preço de esperar"
const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const montante = (mensal, meses, taxa) => (meses <= 0 ? 0 : mensal * ((Math.pow(1 + taxa, meses) - 1) / taxa));
const campo = (id) => document.getElementById(id);
function calcula() {
  const valor = +campo("c-valor").value, anos = +campo("c-anos").value, taxa = +campo("c-taxa").value / 100;
  const espera = Math.min(+campo("c-espera").value, anos - 1);
  const hoje = montante(valor, anos * 12, taxa), depois = montante(valor, (anos - espera) * 12, taxa);
  campo("o-valor").textContent = BRL.format(valor);
  campo("o-anos").textContent = `${anos} anos`;
  campo("o-espera").textContent = `${espera} ${espera > 1 ? "anos" : "ano"}`;
  campo("o-taxa").textContent = `${String(+campo("c-taxa").value).replace(".", ",")}%`;
  campo("r-hoje").textContent = BRL.format(hoje);
  campo("r-espera").textContent = BRL.format(depois);
  campo("l-espera").textContent = `Esperando ${espera} ${espera > 1 ? "anos" : "ano"}`;
  campo("r-preco").textContent = BRL.format(hoje - depois);
  campo("b-hoje").style.setProperty("--h", 1);
  campo("b-espera").style.setProperty("--h", depois / hoje);
}
document.querySelectorAll(".calc input").forEach((i) => i.addEventListener("input", calcula));
calcula();

// Cartões "Além dos números"
document.querySelectorAll(".cartao-pessoal").forEach((c) => {
  const topo = c.querySelector(".cp-topo");
  topo.addEventListener("click", () => {
    const abre = !c.classList.contains("aberto");
    c.classList.toggle("aberto", abre);
    topo.setAttribute("aria-expanded", abre);
  });
  // Galeria: pontinhos, toque na foto avança, e deslizar no celular
  const galeria = c.querySelector(".cp-galeria");
  const pontos = [...c.querySelectorAll(".cp-pontos button")];
  if (!galeria || !pontos.length) return;
  const vai = (j) => galeria.scrollTo({ left: j * galeria.clientWidth, behavior: "smooth" });
  const atual = () => Math.round(galeria.scrollLeft / galeria.clientWidth);
  pontos.forEach((p, j) => p.addEventListener("click", () => vai(j)));
  galeria.addEventListener("click", () => vai((atual() + 1) % pontos.length));
  galeria.addEventListener("scroll", () => pontos.forEach((p, j) => p.classList.toggle("ativo", j === atual())), { passive: true });
});

// Abas dos pilares
function mostraPilar(i) {
  const p = D.pilares[i];
  document.querySelectorAll(".pilar").forEach((b, j) => (b.classList.toggle("ativo", j === i), b.setAttribute("aria-selected", j === i)));
  document.querySelectorAll(".pilares-grafico span").forEach((s, j) => s.classList.toggle("ativo", j === i));
  document.querySelector(".pilares-texto").innerHTML = `<p><b>Por que importa:</b> ${esc(p.importa)}</p><p><b>Como atuo:</b> ${esc(p.atuo)}</p>`;
}
document.querySelectorAll(".pilar").forEach((b) => b.addEventListener("click", () => mostraPilar(+b.dataset.i)));
mostraPilar(0);

// Jornada: o passo muda conforme a rolagem dentro da seção
const jornadaEl = document.querySelector(".jornada");
const barras = [...document.querySelectorAll(".barras span")];
let passoAtual = -1;
function atualizaJornada() {
  const r = jornadaEl.getBoundingClientRect();
  const progresso = Math.min(Math.max(-r.top / (r.height - innerHeight), 0), 0.999);
  const i = Math.floor(progresso * D.jornada.length);
  if (i === passoAtual) return;
  passoAtual = i;
  const p = D.jornada[i];
  barras.forEach((b, j) => (b.classList.toggle("cheia", j <= i), b.classList.toggle("ativa", j === i)));
  const cartao = document.querySelector(".jornada-cartao");
  cartao.classList.remove("troca");
  void cartao.offsetWidth;
  cartao.classList.add("troca");
  cartao.querySelector(".j-ano").textContent = p.ano;
  cartao.querySelector(".j-titulo").textContent = p.titulo;
  cartao.querySelector(".j-texto").textContent = p.texto;
}

// Menu fica sólido ao rolar
const nav = document.querySelector(".nav");
addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("solida", scrollY > 40);
    atualizaJornada();
  },
  { passive: true }
);
atualizaJornada();
