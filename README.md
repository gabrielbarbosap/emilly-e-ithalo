# Emilly & Ithalo — Lista de Presentes

Site da lista de presentes do casamento de **Ithalo & Emilly**. Os convidados
escolhem um presente e pagam direto pela InfinitePay — o valor vai para a conta
do casal.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS v4
- TypeScript

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — páginas (`/` landing, `/presentes` lista completa) e componentes
- `lib/gifts.ts` — catálogo de presentes e os links de pagamento da InfinitePay
- `lib/site.ts` — dados do casamento (`WEDDING`) e o interruptor `SHOW_GIFTS`

## Como atualizar a lista

- **Adicionar/editar presente:** edite `lib/gifts.ts` (nome, preço, categoria e o
  `link` de pagamento da InfinitePay). Link vazio = botão "Em breve".
- **Mostrar ou ocultar toda a lista:** `SHOW_GIFTS` em `lib/site.ts`.
- **Data e local do casamento:** `WEDDING` em `lib/site.ts`.
