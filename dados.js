// ============================================================
// PORTFÓLIO ISABEL ABREU · tudo o que aparece no site e no PDF
// ============================================================
//
// Para adicionar um trabalho novo, copie um bloco { ... } da lista
// certa (tv, radio, portais, podcast, palestras) e preencha.
//   data:   AAAA-MM-DD
//   link:   endereço para assistir/ler ("" se não houver)
//   imagem: arquivo dentro da pasta imagens/ (ex.: "imagens/minha-foto.jpg")
//
// As listas são ordenadas sozinhas, da mais recente para a mais antiga,
// e as páginas novas são criadas automaticamente quando a lista cresce.
// Depois de editar, rode ./gerar-pdf.sh para atualizar o PDF.

const IG = (perfil, tipo, codigo) => `https://www.instagram.com/${perfil}/${tipo}/${codigo}/`;
const KB = (tipo, codigo) => IG("kbcomunicacao", tipo, codigo);

window.PORTFOLIO = {
  atualizado: "2026-11-01",

  pessoa: {
    nome: "Isabel Abreu",
    titulo: "Economista e Planejadora Financeira",
    resumo:
      "Economista e planejadora financeira, com mais de 150 famílias atendidas no planejamento da vida financeira. Fonte de economia e finanças pessoais na TV, no rádio e nos principais jornais do país, e palestrante sobre educação financeira.",
    frase: "Falar de dinheiro não precisa ser chato. Precisa ser claro.",
    sobre: [
      "Sou economista formada pela Universidade Estácio de Sá e planejadora financeira. Antes de atender famílias, passei mais de 10 anos na gestão financeira e administrativa de empresas, cuidando de caixa, impostos, folha de pagamento, indicadores e equipes.",
      "Hoje faço planejamento financeiro 360° para profissionais e empresários: fluxo de caixa, formação de patrimônio, proteção da família e aposentadoria. Meu trabalho é traduzir o economês e transformar renda em patrimônio, com método e sem promessa mágica.",
      "Desde 2026 sou fonte frequente da imprensa e levo educação financeira para palcos, podcasts e para o Instagram, onde falo de dinheiro de um jeito que todo mundo entende.",
    ],
    numeros: [
      { valor: "+150", rotulo: "famílias atendidas" },
      { valor: "+10", rotulo: "anos em gestão financeira" },
      { valor: "+30", rotulo: "participações na imprensa em 2026" },
    ],
    contato: {
      whatsapp: "(21) 97023-7479",
      whatsappLink: "https://wa.me/5521970237479",
      email: "isabreu.p@gmail.com",
      instagram: "@isabreu.co",
      instagramLink: "https://www.instagram.com/isabreu.co",
      youtube: "@isabelabreueconomista",
      youtubeLink: "https://www.youtube.com/@isabelabreueconomista",
    },
  },

  formacao: [
    { titulo: "Bacharelado em Ciências Econômicas", local: "Universidade Estácio de Sá", periodo: "Concluído em 2025" },
    { titulo: "Engenharia Elétrica (trancado)", local: "UFRJ", periodo: "2019 – 2022" },
    { titulo: "Técnico em Biotecnologia", local: "IFRJ", periodo: "Concluído em 2018" },
    { titulo: "Inglês avançado (C1)", local: "Bayswater College, Inglaterra", periodo: "2022" },
  ],
  cursos: [
    "Formação em Power BI (Alura)",
    "Lean Six Sigma (Alura)",
    "Estratégias Financeiras (Estácio)",
    "Análise e Tratamento de Dados Econômicos (Estácio)",
    "Estratégia de Negócios (Fundação Bradesco)",
    "Vendas: da Prospecção à Negociação (Udemy)",
  ],

  trajetoria: [
    {
      cargo: "Planejadora Financeira",
      empresa: "Futuro Corp · franquia parceira da XP Investimentos",
      periodo: "2026 – atual",
      texto: "Planejamento financeiro 360° para profissionais e empreendedores, do diagnóstico ao acompanhamento, com carteira própria de clientes.",
    },
    {
      cargo: "Planejadora Financeira e Líder de Equipe",
      empresa: "W1 Consultoria",
      periodo: "2025 – 2026",
      texto: "Atendimento direto a mais de 100 famílias e liderança de uma equipe de 6 profissionais, com metas e indicadores.",
    },
    {
      cargo: "Analista de Negócios",
      empresa: "Dr Vendas Universidade Empresarial",
      periodo: "2024 – 2025",
      texto: "Indicadores comerciais, dashboards em Power BI e automação de processos para apoiar as decisões da gestão.",
    },
    {
      cargo: "Gerente e Analista Administrativa",
      empresa: "Basis Corporation",
      periodo: "2014 – 2024",
      texto: "Dez anos na gestão financeira da empresa: conciliação, contas a pagar e receber, impostos, folha, contratos e indicadores.",
    },
  ],

  // ---------- NA MÍDIA ----------
  destaque: {
    veiculo: "O Globo",
    titulo: "Empreendedorismo feminino transforma trajetórias e cria redes de apoio",
    data: "2026-03-08",
    texto:
      "No Dia da Mulher de 2026, a trajetória da Isabel como economista e consultora foi destaque no jornal O Globo, em matéria sobre mulheres que empreendem e crescem com método.",
    link: IG("isabreu.co", "p", "DVoTCNgETCl"),
    imagem: "imagens/ig-DVoTCNgETCl.jpg",
  },

  tv: [
    { veiculo: "TV Globo · TV Anhanguera", titulo: "Brasil alcança maior número de empreendedores com CNPJ", data: "2026-10-27", link: KB("reel", "DfAjfhmKi78"), imagem: "imagens/ig-DfAjfhmKi78.jpg" },
    { veiculo: "SBT Interior SP", titulo: "Compras por impulso fazem parte da rotina e podem causar prejuízos", data: "2026-10-21", link: KB("reel", "DewqqcMxQOR"), imagem: "imagens/ig-DewqqcMxQOR.jpg" },
    { veiculo: "TV Globo · TV Anhanguera", titulo: "Aumento do consumo de sorvete no Brasil", data: "2026-10-19", link: KB("reel", "Der0ahSKhIG"), imagem: "imagens/ig-Der0ahSKhIG.jpg" },
    { veiculo: "Band · Jornal do Rio", titulo: "Regulamentação do RioComex: o Rio cortou impostos para atrair empresas", data: "2026-10-01", link: IG("isabreu.co", "reel", "Dd-M6rXz4wc"), imagem: "imagens/ig-Dd9h_A5Bhoq.jpg" },
    { veiculo: "TV Clube RN", titulo: "Endividamento atinge 82% das famílias brasileiras", data: "2026-09-28", link: KB("reel", "Dd1vWx7qvM4"), imagem: "imagens/ig-Dd1vWx7qvM4.jpg" },
    { veiculo: "TV Globo · TV Anhanguera", titulo: "Cuidados ao planejar uma viagem para economizar", data: "2026-09-15", link: KB("reel", "DdUCjmAKf_5"), imagem: "imagens/ig-DdUCjmAKf_5.jpg" },
    { veiculo: "CNBC Times Brasil", titulo: "Rock in Rio deve movimentar R$ 3,3 bilhões no RJ (ao vivo)", data: "2026-09-08", link: KB("p", "Dcw-UE7tfOC"), imagem: "imagens/ig-Dcw-UE7tfOC.jpg" },
    { veiculo: "Jovem Pan News", titulo: "Queda da taxa de desemprego (ao vivo)", data: "2026-08-29", link: KB("reel", "DcoVh0bKMsH"), imagem: "imagens/ig-DcoQuMjKAjh.jpg" },
    { veiculo: "TV Globo · Inter TV", titulo: "Desafios para aluguéis de imóveis em Nova Friburgo", data: "2026-08-28", link: KB("reel", "DcmNGp-KJzw"), imagem: "imagens/ig-DcmNGp-KJzw.jpg" },
    { veiculo: "TV Globo", titulo: "Financiamento facilitado para motoristas profissionais", data: "2026-08-26", link: KB("p", "DcgP_Iqqekl"), imagem: "imagens/ig-DcgP_Iqqekl.jpg" },
    { veiculo: "O Povo News", titulo: "Casas Bahia pede recuperação judicial", data: "2026-08-18", link: KB("reel", "DcLuH9qKBtr"), imagem: "imagens/ig-DcLuH9qKBtr.jpg" },
    { veiculo: "RedeTV", titulo: "Casas Bahia pede recuperação judicial", data: "2026-08-17", link: KB("reel", "DcJ7BGiqhNN"), imagem: "imagens/ig-DcJ7BGiqhNN.jpg" },
    { veiculo: "TV Globo · TV Anhanguera", titulo: "Combustível, manutenção e impostos reduzem o lucro de motoristas de aplicativo", data: "2026-07-29", link: KB("reel", "DbYYp9IK2TY"), imagem: "imagens/ig-DbYYp9IK2TY.jpg" },
    { veiculo: "SBT News", titulo: "Renda fixa: juros altos aumentam a atratividade dos investimentos", data: "2026-07-21", link: IG("isabreu.co", "reel", "DbEFdNETH4v"), imagem: "imagens/ig-DbDXONuqD7O.jpg" },
    { veiculo: "Record News", titulo: "Subsídio do governo à gasolina", data: "2026-07-20", link: KB("reel", "DbBxO9LKJWK"), imagem: "imagens/ig-DbBxO9LKJWK.jpg" },
    { veiculo: "TV Globo · TV Anhanguera", titulo: "Média salarial do Tocantins", data: "2026-07-06", link: KB("reel", "DadNKk6Kcp7"), imagem: "imagens/ig-DadNKk6Kcp7.jpg" },
  ],

  radio: [
    { veiculo: "Jovem Pan SC", titulo: "53% dos trabalhadores chegam ao fim do mês sem dinheiro na conta", data: "2026-10-20", link: KB("reel", "DeuH7INKrp6"), imagem: "imagens/ig-DeuH7INKrp6.jpg" },
    { veiculo: "CBN Belém", titulo: "53% dos trabalhadores terminam o mês sem dinheiro na conta", data: "2026-10-06", link: KB("reel", "DeJ-WJaxj59"), imagem: "imagens/ig-DeJ-WJaxj59.jpg" },
    { veiculo: "Rádio Record", titulo: "Impactos das apostas online nas finanças pessoais", data: "2026-09-25", link: KB("reel", "DdtycKQxTQ7"), imagem: "imagens/ig-DdtycKQxTQ7.jpg" },
    { veiculo: "CBN São Paulo", titulo: "Mercado de produtos ilegais bate recorde em 2025", data: "2026-09-11", link: KB("reel", "DdJonNORAwT"), imagem: "imagens/ig-DdJonNORAwT.jpg" },
    { veiculo: "CBN Rio Branco", titulo: "Dia do Estagiário: lições de finanças para quem está começando", data: "2026-08-18", link: KB("reel", "DcMNtXjKyQX"), imagem: "imagens/ig-DcMNtXjKyQX.jpg" },
    { veiculo: "CBN Salvador", titulo: "Quais erros financeiros os jovens mais cometem?", data: "2026-08-12", link: KB("reel", "Db834Kkq6ER"), imagem: "imagens/ig-Db834Kkq6ER.jpg" },
    { veiculo: "Jovem Pan FM Joinville", titulo: "Cuidados com as fraudes digitais", data: "2026-08-11", link: KB("reel", "Db5k1JoqzVU"), imagem: "imagens/ig-Db5lG3DKzfT.jpg" },
  ],

  portais: [
    { veiculo: "O Dia", titulo: "De viagens a eletrônicos: conheça tipos diferentes de consórcios", data: "2026-10-26", link: "https://odia.ig.com.br/economia/2026/10/7315222-de-viagens-a-eletronicos-conheca-tipos-diferentes-de-consorcios.html", imagem: "imagens/ig-De9-erHptQQ.jpg" },
    { veiculo: "O Dia", titulo: "Rio acumula obras paradas e projetos que nunca avançaram", data: "2026-09-06", link: "https://odia.ig.com.br/economia/2026/09/amp/7298526-rio-acumula-obras-paradas-e-projetos-que-nunca-avancaram.html", imagem: "imagens/ig-Dc8piRIlQ_l.jpg" },
    { veiculo: "g1", titulo: "Após recordes, bolsa entra em queda livre: por que o Ibovespa vive sua pior sequência desde 2023", data: "2026-08-19", link: "https://g1.globo.com/google/amp/economia/noticia/2026/08/19/apos-recordes-bolsa-entra-em-queda-livre-por-que-o-ibovespa-vive-sua-pior-sequencia-desde-2023.ghtml", imagem: "imagens/ig-DcbJp4MKn85.jpg" },
    { veiculo: "Pequenas Empresas & Grandes Negócios", titulo: "Casas Bahia: quais os riscos de vender pelo marketplace da varejista em recuperação judicial", data: "2026-08-17", link: "https://revistapegn.globo.com/gestao/noticia/2026/08/casas-bahia-quais-sao-os-riscos-de-vender-pelo-marketplace-da-varejista-em-recuperacao-judicial.ghtml", imagem: "imagens/ig-DcOx2U6Ks7D.jpg" },
    { veiculo: "O Dia", titulo: "Desenrola MEI: entenda como funciona o programa e quem pode participar", data: "2026-07-12", link: "https://odia.ig.com.br/economia/2026/07/7275409-desenrola-mei-entenda-como-funciona-o-programa-e-quem-pode-participar.html", imagem: "imagens/ig-DasYWDEKofc.jpg" },
    { veiculo: "CNN Brasil", titulo: "Tenho nome sujo, posso me cadastrar no Move Brasil?", data: "2026-06-23", link: "https://www.cnnbrasil.com.br/auto/tenho-nome-sujo-posso-me-cadastrar-no-move-brasil/", imagem: "imagens/ig-DZ8JFIaK611.jpg" },
    { veiculo: "O Dia", titulo: "Devo, não nego: endividamento bate recorde em meio a índices econômicos positivos", data: "2026-05-31", link: "https://odia.ig.com.br/economia/2026/05/amp/7256582-devo-nao-nego-endividamento-bate-recorde-em-meio-a-indices-economicos-positivos.html", imagem: "imagens/ig-DZA2gSiq9TM.jpg" },
    { veiculo: "O Globo", titulo: "Empreendedorismo feminino transforma trajetórias e cria redes de apoio", data: "2026-03-08", link: IG("isabreu.co", "p", "DVoTCNgETCl"), imagem: "imagens/ig-DVoTCNgETCl.jpg" },
  ],

  podcast: {
    nome: "Podcast EmpoderAção",
    texto:
      "Entrevista com a apresentadora Gabi Hilário, ao lado da economista Giselle Florentino (IDMJR), gravada em agosto de 2026. A conversa sobre bets, vício e o dinheiro das famílias virou uma série de cortes publicada entre setembro e outubro.",
    imagens: ["imagens/ig-DcjUVUeq7-7.jpg", "imagens/ig-DdcPxLjNKhe.jpg", "imagens/ig-DeSklByzmSf.jpg"],
    episodios: [
      { titulo: "Começa com R$ 5. Termina em dívida.", data: "2026-09-18", link: IG("gabihilariooficial", "reel", "DdcPxLjNKhe") },
      { titulo: "E se as bets não quiserem que você ganhe, mas que nunca pare de jogar?", data: "2026-09-22", link: IG("gabihilariooficial", "reel", "DdmQMcQNr-k") },
      { titulo: "As bets saíram do ar. O vício não.", data: "2026-10-06", link: IG("isabreu.co", "reel", "DeKDpOlgaf8") },
      { titulo: "R$ 143 bilhões perdidos em bets", data: "2026-10-09", link: IG("isabreu.co", "reel", "DeSklByzmSf") },
    ],
  },

  // Fotos de palco usadas na abertura de "Palestras"
  palco: ["imagens/palestra-2.jpg", "imagens/palestra.jpg", "imagens/palestra-3.jpg"],

  // Para incluir uma palestra em escola, copie e preencha:
  // { evento: "Nome da escola", local: "Bairro, cidade", data: "2025-05-20", publico: "Escola",
  //   texto: "Tema e para quem foi.", link: "", imagem: "imagens/escola-x.jpg" },
  palestras: [
    {
      evento: "Paquetá Empreendedora", publico: "Empreendedores",
      local: "Hotel Lido, Ilha de Paquetá (RJ)",
      data: "2026-09-11",
      texto:
        "Bate-papo sobre educação financeira para moradores e empreendedores da ilha, dentro do programa Paquetá: Ilha Criativa, ao lado de conversas sobre crédito, Fungetur e Microcrédito AgeRio.",
      link: IG("paquetacriativa", "p", "DdKRU_XFbrl"),
      imagem: "imagens/ig-DdKRU_XFbrl.jpg",
    },
    {
      evento: "Imersão Conexão Praia", publico: "Empreendedores",
      local: "Malibu Palace Hotel, Cabo Frio (RJ)",
      data: "2026-09-01",
      mostrarSoAno: true,
      texto:
        "Palestra para empreendedores sobre reserva de emergência, transição de carreira e o risco de depender de uma única fonte de renda. Os trechos viraram reels no perfil @isabreu.co.",
      link: IG("isabreu.co", "reel", "Dd4gxRtzmfl"),
      imagem: "imagens/palestra.jpg",
    },
    {
      evento: "Evento anual W1 Consultoria", publico: "Corporativo",
      local: "São Paulo (SP)",
      data: "2026-03-19",
      texto: "Participação no encontro anual da W1 Consultoria, onde liderou uma equipe de 6 planejadores financeiros.",
      link: IG("isabreu.co", "reel", "DWEY_pzkY_b"),
      imagem: "imagens/ig-DWEY_pzkY_b.jpg",
    },
    {
      evento: "Conexões Femininas Day", publico: "Mulheres empreendedoras",
      local: "Encontro de mulheres empreendedoras",
      data: "2026-02-10",
      texto: "Minipalestra “Como criar um planejamento financeiro para o seu negócio”, com orientações de gestão e crescimento para empreendedoras.",
      link: IG("portalconexoesfemininas", "reel", "DUqwUUTkVLy"),
      imagem: "imagens/ig-DUqwUUTkVLy.jpg",
    },
  ],

  temasPalestra: [
    "Dinheiro sem tabu no trabalho",
    "Finanças para quem decide",
    "Fatura bem, mas não sobra",
    "Da renda ao patrimônio",
  ],

  conteudo: {
    texto:
      "No Instagram @isabreu.co, Isabel publica reels e carrosséis semanais sobre patrimônio, impostos, investimentos e decisões de dinheiro para profissionais e empresários. Os vídeos também vão para o YouTube.",
    exemplos: [
      { titulo: "Ganha R$ 35 mil, patrimônio R$ 0", link: IG("isabreu.co", "reel", "Deo8FFjBWJw"), imagem: "imagens/ig-Deo8FFjBWJw.jpg" },
      { titulo: "150 famílias, 5 lições", link: IG("isabreu.co", "p", "DfKbc2DDzFv"), imagem: "imagens/ig-DfKbc2DDzFv.jpg" },
      { titulo: "Reforma tributária: o que muda em 2027", link: IG("isabreu.co", "p", "De4Z4gMjTY4"), imagem: "imagens/ig-De4Z4gMjTY4.jpg" },
      { titulo: "Aluguel ou casa própria?", link: IG("isabreu.co", "p", "DemYU-Mjq5d"), imagem: "imagens/ig-DemYU-Mjq5d.jpg" },
      { titulo: "Patrimônio ideal para a sua idade", link: IG("isabreu.co", "p", "DeUWxZwiLkC"), imagem: "imagens/ig-DeUWxZwiLkC.jpg" },
      { titulo: "Planejar também é fé", link: IG("isabreu.co", "p", "DfCtFRMgYXW"), imagem: "imagens/ig-DfCtFRMgYXW.jpg" },
    ],
  },

  // ---------- SITE: seções interativas ----------
  // Abas dos pilares (clique em cada uma)
  pilares: [
    { nome: "Planejamento", nivel: 0.36, importa: "Sem saber para onde vai o dinheiro, nenhuma estratégia se sustenta.", atuo: "Faço o diagnóstico da vida financeira, organizo o fluxo de caixa e separo o que é da pessoa física e o que é da empresa." },
    { nome: "Proteção", nivel: 0.52, importa: "Um imprevisto não pode desmontar anos de trabalho.", atuo: "Monto a reserva de emergência e reviso seguros e coberturas para a família ficar segura." },
    { nome: "Acúmulo", nivel: 0.68, importa: "Renda alta sem patrimônio é só um fluxo que entra e sai.", atuo: "Defino metas por idade e por objetivo e crio a rotina de aportes para a renda virar patrimônio." },
    { nome: "Expansão", nivel: 0.84, importa: "Patrimônio parado perde para a inflação e para o tempo.", atuo: "Organizo a carteira para o patrimônio crescer, com eficiência nos impostos e olho na aposentadoria." },
    { nome: "Sucessão e legado", nivel: 1, importa: "O patrimônio de uma vida não pode virar briga, custo alto ou anos de inventário.", atuo: "Organizo a estrutura e a documentação para o patrimônio chegar a quem deve, do jeito certo." },
  ],

  // Cartões "Além dos números" (abrem ao clicar)
  // Se a foto ainda não existir, deixe imagem: "" (o cartão mostra a inicial no lugar)
  alemDosNumeros: [
    { rotulo: "Família", titulo: "A mais velha de 4 irmãos", texto: "Cresci cuidando, organizando e dando o exemplo. É o mesmo cuidado que levo para cada família que atendo.", imagem: "" },
    { rotulo: "Caio", titulo: "Parceiro na vida e nos negócios", texto: "O Caio é meu companheiro e meu sócio na CAIS Consultoria. Dividimos a casa, os sonhos e os planos.", imagem: "" },
    { rotulo: "Luna", titulo: "A Luna", texto: "Minha cachorra, companhia de todos os dias e a melhor pausa entre uma planilha e outra.", imagem: "" },
    { rotulo: "Fé", titulo: "Planejar também é fé", texto: "Antes de construir, a gente senta e faz as contas. Fé e planejamento andam juntos na minha vida.", imagem: "imagens/ig-DfCtFRMgYXW.jpg" },
    { rotulo: "Viagens", titulo: "Mala na mão, conta de câmbio na cabeça", texto: "Amo viajar e conhecer lugares novos, e sou aquela economista que faz conta de câmbio até em feirinha de fronteira.", imagem: "imagens/ig-DV0zdtBkcdz.jpg" },
    { rotulo: "Caminho", titulo: "Antes da economia", texto: "Fui técnica em biotecnologia no IFRJ, estudei engenharia elétrica na UFRJ e fiz inglês avançado na Inglaterra. Tudo isso me trouxe método.", imagem: "imagens/isabel.jpg" },
  ],

  // Jornada em barras que crescem ao rolar a página
  jornada: [
    { ano: "2014", titulo: "Primeiros passos na gestão", texto: "Analista administrativa na Basis Corporation: tesouraria, conciliações e cobrança." },
    { ano: "2018", titulo: "Técnica em Biotecnologia", texto: "Formada pelo IFRJ. Daí veio o gosto por método e dados." },
    { ano: "2021", titulo: "Gerente administrativa", texto: "Gestão financeira completa da empresa: impostos, folha, contratos e indicadores." },
    { ano: "2022", titulo: "Inglaterra", texto: "Inglês avançado (C1) no Bayswater College." },
    { ano: "2024", titulo: "Dados e negócios", texto: "Analista de negócios: KPIs comerciais e dashboards em Power BI." },
    { ano: "2025", titulo: "Economista e planejadora", texto: "Formada em Ciências Econômicas. Na W1 Consultoria, mais de 100 famílias atendidas e uma equipe de 6 pessoas." },
    { ano: "2026", titulo: "Na mídia e no palco", texto: "Planejadora na Futuro Corp (parceira XP), destaque n'O Globo, mais de 30 entrevistas e palestras." },
  ],
};
