#!/bin/bash
# Gera Portfolio-Isabel-Abreu.pdf a partir do index.html (precisa do Google Chrome instalado).
# Uso: ./gerar-pdf.sh
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 --run-all-compositor-stages-before-draw \
  --print-to-pdf="$PWD/Portfolio-Isabel-Abreu.pdf" "file://$PWD/index.html" 2>/dev/null
# Muda a versão dos arquivos para o navegador de quem visita buscar a atualização
V=$(date +%Y%m%d%H%M)
sed -i '' -E "s/\?v=[0-9]+/?v=$V/g" index.html
echo "PDF gerado: $PWD/Portfolio-Isabel-Abreu.pdf"
