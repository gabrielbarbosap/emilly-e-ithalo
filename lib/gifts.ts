// Catálogo de presentes do casamento.
//
// Os links de pagamento são Links da InfinitePay (conta "lightfitnesss") criados
// pelo Ithalo. O valor cobrado é o que está no final de cada URL; o campo `price`
// abaixo reflete esse mesmo valor.
//
// PENDENTES (faltou info do Ithalo):
//  - Link de R$ 199,90 (...OVEKocolS1-199,90) veio SEM nome do produto.
//  - "Utensílios de cozinha" veio SEM link.
// Assim que ele mandar, é só adicionar aqui no mesmo formato.

export const CATEGORIES = [
  "Cozinha",
  "Casa & Conforto",
  "Ferramentas",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Gift = {
  id: string;
  name: string;
  note: string;
  price: number;
  category: Category;
  /** URL do link de pagamento da InfinitePay. Vazio = botão "Em breve". */
  link: string;
};

const BASE = "https://link.infinitepay.io/lightfitnesss";

export const allGifts: Gift[] = [
  // ─── Cozinha ───
  {
    id: "jogo-panelas",
    name: "Jogo de panelas",
    note: "Pra temperar os dias da nossa cozinha.",
    price: 99.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-ec2bj1sejY-99,90`,
  },
  {
    id: "jogo-xicaras",
    name: "Jogo de xícaras",
    note: "Pro cafezinho da tarde, a dois.",
    price: 89.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-vloEkkzg53-89,90`,
  },
  {
    id: "suqueira",
    name: "Suqueira",
    note: "Suco natural pra começar bem o dia.",
    price: 109.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-O0jpedBzM0-109,90`,
  },
  {
    id: "panela-pressao",
    name: "Panela de pressão",
    note: "O feijão da vó em menos tempo.",
    price: 109.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-FOPP1kjOju-109,90`,
  },
  {
    id: "microondas",
    name: "Micro-ondas",
    note: "O herói dos dias corridos.",
    price: 249.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-cjuS4VPv1w-249,90`,
  },
  {
    id: "churrasqueira",
    name: "Churrasqueira elétrica",
    note: "Pros domingos com a família reunida.",
    price: 299.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-7kPDguvBMo-299,90`,
  },
  {
    id: "jogo-pratos",
    name: "Jogo de pratos",
    note: "A mesa posta pra receber quem a gente ama.",
    price: 399.9,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-EON7tjHykw-399,90`,
  },
  {
    id: "cafeteira",
    name: "Cafeteira",
    note: "Porque café bom aproxima a gente.",
    price: 499.0,
    category: "Cozinha",
    link: `${BASE}/VC1DLTEtSQ-0w00SQUeA0-499,00`,
  },

  // ─── Casa & Conforto ───
  {
    id: "mesa-apoio",
    name: "Mesa de apoio",
    note: "Um cantinho pra tudo que importa.",
    price: 119.9,
    category: "Casa & Conforto",
    link: `${BASE}/VC1DLTEtSQ-d0BLqQbMtN-119,90`,
  },
  {
    id: "travesseiro",
    name: "Travesseiro",
    note: "Pra descansar a cabeça depois de um longo dia.",
    price: 179.9,
    category: "Casa & Conforto",
    link: `${BASE}/VC1DLTEtSQ-1pdLsIM7Y4-179,90`,
  },
  {
    id: "alexa",
    name: "Alexa",
    note: "A trilha sonora do nosso lar.",
    price: 219.9,
    category: "Casa & Conforto",
    link: `${BASE}/VC1DLTEtSQ-DQGs3Pn7mT-219,90`,
  },
  {
    id: "ar-condicionado",
    name: "Ar-condicionado",
    note: "Noites de sono tranquilo, mesmo no calor.",
    price: 699.9,
    category: "Casa & Conforto",
    link: `${BASE}/VC1DLTEtSQ-C9G1YRs9Qg-699,90`,
  },

  // ─── Ferramentas ───
  {
    id: "jogo-ferramentas",
    name: "Jogo de ferramentas",
    note: "Pra dar conta dos perrengues da casa nova.",
    price: 199.9,
    category: "Ferramentas",
    link: `${BASE}/VC1DLTEtSQ-Iw48w7GYfN-199,90`,
  },
  {
    id: "furadeira",
    name: "Furadeira",
    note: "Pra pendurar cada quadro da nossa história.",
    price: 799.9,
    category: "Ferramentas",
    link: `${BASE}/VC1DLTEtSQ-Nou1aUtOYL-799,90`,
  },
];

// Seleção exibida na vitrine da home (uma amostra de cada faixa).
export const featuredGifts: Gift[] = [
  "ar-condicionado",
  "cafeteira",
  "jogo-panelas",
  "furadeira",
  "alexa",
  "microondas",
]
  .map((id) => allGifts.find((g) => g.id === id))
  .filter((g): g is Gift => Boolean(g));

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
