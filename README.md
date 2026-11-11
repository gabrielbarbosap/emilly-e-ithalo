# Emilly & Ithalo — Lista de Presentes

Site da lista de presentes do casamento de **Emilly & Ithalo**. Os convidados
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

## Recados por e-mail

Ao clicar em "Presentear", o pagamento abre numa nova aba e um modal convida o
convidado a deixar um recado para o casal. O recado é enviado por e-mail via
[Web3Forms](https://web3forms.com), direto do navegador (o plano grátis só aceita
envio client-side; o envio pelo servidor exige plano Pro). Ver `RecadoModal.tsx`.

Para funcionar, defina a variável **`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** (precisa
do prefixo `NEXT_PUBLIC_` porque o envio é no navegador; a access key é pública
por design):

1. Cadastre o e-mail dos noivos em [web3forms.com](https://web3forms.com) e copie
   a *access key* (os recados chegam nesse e-mail).
2. Local: cole em `.env.local`.
3. Produção: adicione em **Vercel → Project → Settings → Environment Variables** e
   faça um novo deploy.

## Como atualizar a lista

- **Adicionar/editar presente:** edite `lib/gifts.ts` (nome, preço, categoria e o
  `link` de pagamento da InfinitePay). Link vazio = botão "Em breve".
- **Mostrar ou ocultar toda a lista:** `SHOW_GIFTS` em `lib/site.ts`.
- **Data e local do casamento:** `WEDDING` em `lib/site.ts`.
