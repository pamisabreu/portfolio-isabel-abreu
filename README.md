# Portfólio · Isabel Abreu

Economista e planejadora financeira. Imprensa, palestras, podcast e conteúdo, num só lugar.

- **Site:** `index.html` (publicado pelo GitHub Pages)
- **PDF:** [`Portfolio-Isabel-Abreu.pdf`](Portfolio-Isabel-Abreu.pdf), gerado a partir do mesmo site

## Como atualizar

1. Abra `dados.js` e copie um bloco `{ ... }` da lista certa: `tv`, `radio`, `portais`, `podcast.episodios` ou `palestras`.
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
| `app.js` | Monta as páginas a partir dos dados |
| `estilo.css` | Cores e fontes da marca, layout A4 para o PDF e versão para celular |
| `gerar-pdf.sh` | Gera o PDF com o Chrome |
| `imagens/` | Fotos e capas das matérias |
