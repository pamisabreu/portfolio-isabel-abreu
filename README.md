# Portfólio · Isabel Abreu

Economista e planejadora financeira. Imprensa, palestras, podcast e conteúdo, num só lugar.

- **Site:** `index.html` (publicado pelo GitHub Pages)
- **PDF:** [`Portfolio-Isabel-Abreu.pdf`](Portfolio-Isabel-Abreu.pdf), gerado a partir do mesmo site

## Como atualizar

1. Abra `dados.js` e copie um bloco `{ ... }` da lista certa: `tv`, `radio`, `portais`, `podcast.episodios` ou `palestras` (para escolas, use `publico: "Escola"`; há um modelo pronto no arquivo).
2. Preencha veículo, título, data (`AAAA-MM-DD`), link e imagem. Coloque a imagem na pasta `imagens/`.
3. Mude `atualizado` para a data de hoje.
4. Rode `./gerar-pdf.sh` para refazer o PDF (precisa do Google Chrome).
5. Envie para o GitHub:

```bash
git add -A && git commit -m "Atualiza portfólio" && git push
```

A ordem (mais recente primeiro), a numeração e as páginas novas são feitas sozinhas.

## Arquivos

| Arquivo | O que é |
|---|---|
| `dados.js` | Todo o conteúdo do portfólio |
| `app.js` | Monta o site e as folhas do PDF a partir dos dados |
| `site.css` | Visual do site: animações, filtros, carrosséis, versão de celular |
| `pdf.css` | Visual do PDF: folhas A4 em estilo revista |
| `gerar-pdf.sh` | Gera o PDF com o Chrome |
| `imagens/` | Fotos e capas das matérias |
