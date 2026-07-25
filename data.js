// =====================================================================
// data.js
// ---------------------------------------------------------------------
// Este arquivo é o "banco de dados" do site inteiro.
// Todas as informações de cada estrutura do cérebro ficam guardadas
// aqui, dentro de um único objeto chamado `brainParts`.
//
// POR QUE FAZER ISSO?
// Separar o CONTEÚDO (texto) da APRESENTAÇÃO (HTML/CSS) e do
// COMPORTAMENTO (JS de interação) é uma boa prática chamada
// "separation of concerns" (separação de responsabilidades).
//
// Vantagem prática: para adicionar uma nova estrutura ao site,
// basta criar um novo objeto aqui dentro (copiando o modelo de
// qualquer uma das estruturas existentes) e criar a página HTML
// correspondente em /pages. Você NÃO precisa mexer em brain.js
// nem em script.js — eles leem esse objeto automaticamente.
//
// ESTRUTURA DE CADA REGIÃO:
// {
//   id:          identificador único (mesmo valor do "id" no SVG
//                e do atributo data-part na página HTML de detalhe)
//   name:        nome de exibição da estrutura
//   category:    "lobo" | "cerebelo-tronco" | "profunda"
//                (usado para escolher a cor de destaque)
//   page:        caminho da página de detalhe (a partir da raiz)
//   shortDesc:   frase curta usada no tooltip do mapa interativo
//   description: texto descritivo mais completo
//   functions:   lista (array) com as principais funções
//   controls:    texto sobre "o que essa estrutura controla"
//   connections: texto sobre as principais conexões anatômicas
//   curiosities: texto com curiosidades
//   damage:      texto sobre possíveis alterações quando lesionada
//   bibliography: lista de referências (pode ficar como placeholder)
// }
// =====================================================================

const brainParts = {

  // ------------------------------------------------------------------
  // LOBOS DO CÉREBRO (telencéfalo)
  // ------------------------------------------------------------------

  frontal: {
    id: "frontal",
    name: "Lobo Frontal",
    category: "lobo",
    page: "frontal.html",
    shortDesc: "Planejamento, raciocínio e controle dos movimentos voluntários.",
    description:
      "O lobo frontal é a maior região do cérebro humano e fica localizado " +
      "na parte da frente, logo atrás da testa. Ele é responsável por " +
      "funções consideradas mais \"sofisticadas\" do ponto de vista " +
      "evolutivo, como o planejamento de ações futuras, o raciocínio " +
      "abstrato e o controle da própria personalidade.",
    functions: [
      "Planejamento e organização de tarefas complexas",
      "Controle dos movimentos voluntários (córtex motor primário)",
      "Tomada de decisões e julgamento",
      "Controle dos impulsos e regulação do comportamento social",
      "Produção da linguagem falada (área de Broca)"
    ],
    controls:
      "Controla o raciocínio lógico, a memória de trabalho, a atenção " +
      "voluntária e o movimento consciente do corpo. Também participa " +
      "diretamente da regulação emocional e do autocontrole.",
    connections:
      "Possui conexões extensas com o lobo parietal (integração sensório-" +
      "motora), o sistema límbico (regulação emocional) e os núcleos da " +
      "base (planejamento e execução do movimento).",
    curiosities:
      "O caso mais famoso da neurociência sobre o lobo frontal é o de " +
      "Phineas Gage, um operário ferroviário que sobreviveu no século " +
      "XIX após uma barra de ferro atravessar seu crânio, alterando de " +
      "forma marcante sua personalidade.",
    damage:
      "Lesões no lobo frontal podem causar mudanças de personalidade, " +
      "dificuldade de planejamento, impulsividade, perda do controle " +
      "social e, em casos mais graves, comprometimento da fala.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  parietal: {
    id: "parietal",
    name: "Lobo Parietal",
    category: "lobo",
    page: "parietal.html",
    shortDesc: "Processamento sensorial e percepção espacial.",
    description:
      "Localizado na parte superior e posterior do cérebro, o lobo " +
      "parietal é responsável por integrar as informações sensoriais " +
      "vindas do corpo, permitindo que o cérebro construa uma noção " +
      "de espaço e posição corporal.",
    functions: [
      "Processamento das sensações de tato, temperatura e dor",
      "Percepção espacial e noção de profundidade",
      "Integração de informações sensoriais de múltiplas fontes",
      "Coordenação entre visão e movimento (coordenação visuomotora)"
    ],
    controls:
      "Controla a percepção do próprio corpo no espaço (propriocepção) " +
      "e a capacidade de localizar estímulos táteis com precisão.",
    connections:
      "Conecta-se ao lobo occipital (informação visual), ao lobo " +
      "frontal (planejamento motor) e ao tálamo, que retransmite " +
      "informações sensoriais até essa região.",
    curiosities:
      "Danos no lobo parietal do hemisfério direito podem causar uma " +
      "condição chamada heminegligência, em que a pessoa ignora " +
      "completamente o lado esquerdo do próprio corpo ou do ambiente.",
    damage:
      "Lesões podem causar dificuldades de orientação espacial, " +
      "problemas para reconhecer objetos pelo tato (agnosia tátil) e " +
      "heminegligência espacial.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  temporal: {
    id: "temporal",
    name: "Lobo Temporal",
    category: "lobo",
    page: "pages/temporal.html",
    shortDesc: "Audição, linguagem e memória.",
    description:
      "Situado lateralmente, próximo às orelhas, o lobo temporal é a " +
      "principal área responsável pelo processamento auditivo e por " +
      "diversos aspectos da memória e da linguagem.",
    functions: [
      "Processamento de sons e da linguagem falada (área de Wernicke)",
      "Formação e recuperação de memórias de longo prazo",
      "Reconhecimento de rostos e objetos",
      "Processamento de emoções em conjunto com estruturas profundas"
    ],
    controls:
      "Controla a compreensão da linguagem, o reconhecimento auditivo " +
      "de sons complexos (como música e fala) e parte do armazenamento " +
      "de memórias.",
    connections:
      "Está intimamente ligado ao hipocampo e à amígdala, ambos " +
      "localizados em sua porção medial, além de manter conexões com " +
      "o lobo frontal para a produção da fala.",
    curiosities:
      "É no lobo temporal que ficam \"guardadas\" as estruturas do " +
      "sistema límbico responsáveis pela memória — por isso essa " +
      "região é tão estudada em casos de Alzheimer.",
    damage:
      "Lesões podem causar dificuldade para compreender a linguagem " +
      "falada (afasia de Wernicke), problemas de memória e alterações " +
      "no reconhecimento de rostos.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  occipital: {
    id: "occipital",
    name: "Lobo Occipital",
    category: "lobo",
    page: "pages/occipital.html",
    shortDesc: "Processamento visual.",
    description:
      "Localizado na parte posterior do cérebro, o lobo occipital é " +
      "quase inteiramente dedicado ao processamento das informações " +
      "visuais captadas pelos olhos.",
    functions: [
      "Processamento primário da informação visual (córtex visual)",
      "Reconhecimento de cores, formas e movimento",
      "Integração de estímulos visuais com outras áreas cerebrais"
    ],
    controls:
      "Controla praticamente toda a interpretação consciente daquilo " +
      "que enxergamos, transformando sinais de luz captados pela " +
      "retina em imagens compreensíveis.",
    connections:
      "Recebe informações diretamente do tálamo (núcleo geniculado " +
      "lateral) e as envia para o lobo parietal e temporal, formando " +
      "as chamadas vias visuais \"do quê\" e \"do onde\".",
    curiosities:
      "Mesmo com os olhos fechados, estimular eletricamente o lobo " +
      "occipital pode fazer uma pessoa \"enxergar\" pontos de luz, " +
      "fenômeno conhecido como fosfeno.",
    damage:
      "Lesões podem causar cegueira cortical, perda de partes do " +
      "campo visual ou dificuldade em reconhecer objetos apesar da " +
      "visão estar fisicamente intacta (agnosia visual).",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  // ------------------------------------------------------------------
  // CEREBELO E TRONCO ENCEFÁLICO
  // ------------------------------------------------------------------

  cerebellum: {
    id: "cerebellum",
    name: "Cerebelo",
    category: "cerebelo-tronco",
    page: "pages/cerebellum.html",
    shortDesc: "Equilíbrio, coordenação motora e ajuste fino dos movimentos.",
    description:
      "O cerebelo (\"pequeno cérebro\", em latim) fica localizado " +
      "atrás do tronco encefálico, abaixo dos lobos occipitais. Apesar " +
      "do tamanho reduzido, ele concentra a maior parte dos neurônios " +
      "do sistema nervoso central.",
    functions: [
      "Coordenação motora fina e precisão dos movimentos",
      "Manutenção do equilíbrio e da postura corporal",
      "Ajuste do tônus muscular",
      "Aprendizado de habilidades motoras automatizadas"
    ],
    controls:
      "Controla a coordenação entre diferentes grupos musculares, " +
      "garantindo movimentos suaves, precisos e bem cronometrados.",
    connections:
      "Conecta-se ao tronco encefálico por meio dos pedúnculos " +
      "cerebelares e recebe informações do córtex motor e dos órgãos " +
      "do equilíbrio no ouvido interno.",
    curiosities:
      "O cerebelo contém mais da metade de todos os neurônios do " +
      "cérebro humano, mesmo representando apenas cerca de 10% do seu " +
      "volume total.",
    damage:
      "Lesões cerebelares causam ataxia (perda de coordenação), " +
      "tremores durante o movimento e dificuldade para manter o " +
      "equilíbrio e a marcha.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  brainstem: {
    id: "brainstem",
    name: "Tronco Encefálico",
    category: "cerebelo-tronco",
    page: "pages/brainstem.html",
    shortDesc: "Funções vitais automáticas, como respiração e batimentos cardíacos.",
    description:
      "O tronco encefálico conecta o cérebro à medula espinhal e é " +
      "dividido em mesencéfalo, ponte e bulbo. É a região mais " +
      "\"primitiva\" do encéfalo do ponto de vista evolutivo, e também " +
      "a mais essencial para a manutenção da vida.",
    functions: [
      "Controle da respiração e dos batimentos cardíacos",
      "Regulação do ciclo sono-vigília em conjunto com outras áreas",
      "Origem de diversos nervos cranianos",
      "Via de passagem para praticamente todas as informações entre " +
        "o encéfalo e o corpo"
    ],
    controls:
      "Controla funções involuntárias essenciais à sobrevivência, " +
      "como a frequência cardíaca, a pressão arterial e o reflexo de " +
      "deglutição.",
    connections:
      "Faz a ponte entre o cérebro, o cerebelo e a medula espinhal, " +
      "sendo passagem obrigatória para quase todas as vias nervosas " +
      "ascendentes e descendentes.",
    curiosities:
      "Mesmo em estados de coma profundo, o tronco encefálico pode " +
      "continuar mantendo funções vitais básicas — por isso, a " +
      "chamada \"morte encefálica\" é definida principalmente pela " +
      "perda total e irreversível das funções dessa estrutura.",
    damage:
      "Lesões no tronco encefálico são frequentemente graves e podem " +
      "comprometer funções vitais, causando desde paralisias até risco " +
      "imediato de morte, dependendo da região afetada.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  // ------------------------------------------------------------------
  // ESTRUTURAS PROFUNDAS (diencéfalo e sistema límbico)
  // ------------------------------------------------------------------

  thalamus: {
    id: "thalamus",
    name: "Tálamo",
    category: "profunda",
    page: "pages/thalamus.html",
    shortDesc: "Estação retransmissora de quase todas as informações sensoriais.",
    description:
      "O tálamo é uma estrutura profunda em forma de dois pequenos " +
      "ovoides, localizada no centro do cérebro. Funciona como uma " +
      "grande \"central de distribuição\" de informações sensoriais " +
      "antes que elas cheguem ao córtex.",
    functions: [
      "Retransmissão de quase toda informação sensorial (exceto " +
        "olfato) até o córtex cerebral",
      "Regulação do nível de consciência e atenção",
      "Participação no controle do ciclo sono-vigília",
      "Integração de informações motoras entre cerebelo e córtex"
    ],
    controls:
      "Controla o fluxo de informação sensorial que chega ao córtex, " +
      "funcionando como um \"filtro\" que decide quais estímulos " +
      "merecem atenção consciente.",
    connections:
      "Conecta-se a praticamente todas as áreas do córtex cerebral, " +
      "além de manter ligações diretas com o hipotálamo e o tronco " +
      "encefálico.",
    curiosities:
      "Por processar quase todos os tipos de sensação antes de eles " +
      "chegarem à consciência, o tálamo já foi chamado por " +
      "neurocientistas de \"portão de entrada da consciência\".",
    damage:
      "Lesões talâmicas podem causar perda sensorial de um lado do " +
      "corpo, alterações do nível de consciência e, em alguns casos, " +
      "dores crônicas (síndrome talâmica).",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  hypothalamus: {
    id: "hypothalamus",
    name: "Hipotálamo",
    category: "profunda",
    page: "pages/hypothalamus.html",
    shortDesc: "Regulação do equilíbrio interno do corpo (homeostase).",
    description:
      "Localizado logo abaixo do tálamo, o hipotálamo é uma pequena " +
      "estrutura com grande importância: é o principal centro de " +
      "controle da homeostase, o equilíbrio interno do organismo.",
    functions: [
      "Regulação da temperatura corporal",
      "Controle da fome, da sede e do comportamento alimentar",
      "Regulação do ciclo sono-vigília junto a outras estruturas",
      "Controle da liberação de hormônios pela hipófise",
      "Regulação de respostas emocionais como raiva e prazer"
    ],
    controls:
      "Controla o sistema nervoso autônomo e o sistema endócrino, " +
      "funcionando como o principal elo entre o cérebro e o sistema " +
      "hormonal do corpo.",
    connections:
      "Está diretamente conectado à hipófise (glândula pituitária), " +
      "ao tálamo e a diversas estruturas do sistema límbico, como a " +
      "amígdala.",
    curiosities:
      "Apesar de pesar menos de 5 gramas, o hipotálamo é responsável " +
      "por controlar praticamente todos os hormônios do corpo humano, " +
      "por meio de sua ligação com a hipófise.",
    damage:
      "Lesões podem causar distúrbios graves de apetite e peso, " +
      "alterações na temperatura corporal, distúrbios do sono e " +
      "desregulação hormonal.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  hippocampus: {
    id: "hippocampus",
    name: "Hipocampo",
    category: "profunda",
    page: "pages/hippocampus.html",
    shortDesc: "Formação de novas memórias e orientação espacial.",
    description:
      "Com o formato que lembra um pequeno cavalo-marinho (por isso o " +
      "nome), o hipocampo é uma estrutura localizada na porção medial " +
      "do lobo temporal, essencial para a formação de novas memórias.",
    functions: [
      "Formação de novas memórias de longo prazo",
      "Consolidação de memórias episódicas (fatos e eventos vividos)",
      "Orientação espacial e formação de \"mapas mentais\"",
      "Participação na navegação e no sentido de direção"
    ],
    controls:
      "Controla a transformação de memórias de curto prazo em " +
      "memórias de longo prazo, além de auxiliar na construção de " +
      "mapas espaciais mentais do ambiente.",
    connections:
      "Faz parte do sistema límbico e mantém conexões estreitas com a " +
      "amígdala, o tálamo e diversas áreas do córtex temporal.",
    curiosities:
      "O caso do paciente H.M., que teve os dois hipocampos removidos " +
      "cirurgicamente, tornou-se um dos mais estudados da neurociência: " +
      "ele deixou de conseguir formar novas memórias, mas mantinha " +
      "intactas as memórias antigas.",
    damage:
      "Lesões bilaterais no hipocampo causam amnésia anterógrada " +
      "grave — incapacidade de formar novas memórias — e são " +
      "associadas ao declínio de memória na doença de Alzheimer.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  amygdala: {
    id: "amygdala",
    name: "Amígdala",
    category: "profunda",
    page: "pages/amygdala.html",
    shortDesc: "Processamento de emoções, especialmente medo e ameaça.",
    description:
      "A amígdala é uma pequena estrutura em forma de amêndoa, " +
      "localizada próxima ao hipocampo, dentro do lobo temporal. É a " +
      "principal responsável pelo processamento emocional, sobretudo " +
      "de emoções relacionadas a ameaças e medo.",
    functions: [
      "Processamento de emoções, principalmente medo e ansiedade",
      "Associação de estímulos a respostas emocionais (memória " +
        "emocional)",
      "Ativação da resposta de \"luta ou fuga\"",
      "Reconhecimento de expressões faciais emocionais"
    ],
    controls:
      "Controla respostas emocionais rápidas e automáticas diante de " +
      "situações percebidas como perigosas, antes mesmo de o córtex " +
      "processar racionalmente a situação.",
    connections:
      "Está conectada ao hipotálamo (para desencadear respostas " +
      "físicas do medo), ao hipocampo (memória emocional) e ao córtex " +
      "pré-frontal (regulação consciente da emoção).",
    curiosities:
      "Pessoas com lesões raras que afetam as duas amígdalas podem " +
      "perder quase completamente a capacidade de sentir medo, mesmo " +
      "diante de situações objetivamente perigosas.",
    damage:
      "Lesões podem causar dificuldade em reconhecer perigo, " +
      "alterações no reconhecimento de expressões faciais de medo e " +
      "mudanças na resposta emocional a situações de estresse.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  },

  corpuscallosum: {
    id: "corpuscallosum",
    name: "Corpo Caloso",
    category: "profunda",
    page: "pages/corpuscallosum.html",
    shortDesc: "Feixe de fibras que conecta os dois hemisférios cerebrais.",
    description:
      "O corpo caloso é a maior estrutura de substância branca do " +
      "cérebro: um denso feixe de fibras nervosas em forma de arco " +
      "que conecta o hemisfério cerebral direito ao esquerdo.",
    functions: [
      "Comunicação e troca de informações entre os dois hemisférios " +
        "cerebrais",
      "Integração de funções motoras, sensoriais e cognitivas entre " +
        "os lados do corpo",
      "Sincronização de processos cognitivos complexos que envolvem " +
        "ambos os hemisférios"
    ],
    controls:
      "Controla a integração entre os hemisférios, permitindo que " +
      "informações processadas de um lado do cérebro sejam " +
      "compartilhadas com o outro em frações de segundo.",
    connections:
      "Conecta áreas correspondentes do córtex dos dois hemisférios, " +
      "como o lobo frontal direito com o lobo frontal esquerdo, e " +
      "assim por diante.",
    curiosities:
      "Em cirurgias raras para tratar epilepsia grave, o corpo caloso " +
      "pode ser seccionado (\"cérebro dividido\"), gerando pacientes " +
      "estudados por décadas para entender como os hemisférios " +
      "processam informação de forma independente.",
    damage:
      "A agenesia (ausência congênita) ou lesão do corpo caloso pode " +
      "causar dificuldades de coordenação entre os dois lados do " +
      "corpo e problemas sutis de comunicação interhemisférica.",
    bibliography: [
      "Kandel, E. R. et al. Princípios de Neurociências.",
      "Referência a ser complementada pelo autor do site."
    ]
  }

};

// ---------------------------------------------------------------------
// Exportamos o objeto para o escopo global (window), já que este
// projeto não usa módulos ES (import/export) para manter a
// compatibilidade simples com o GitHub Pages sem build step.
// Os outros arquivos JS (brain.js e script.js) acessam `brainParts`
// diretamente porque este <script> é carregado antes deles no HTML.
// ---------------------------------------------------------------------
