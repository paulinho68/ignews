# Ignews
*O Desafio* é criar um blog com Next | FaunaDB | Prismic | Stripe

## Sobre o desafio 🚀?
Nesse desafio você deve criar do zero um blog retornando posts do prismic e cadastrando usuários que fazem assinatura no FaunaDB. Obs: Sem assinatura não é possível ver todo o conteúdo do post.

- Página de home
- Listar posts
- Autenticação com Github
- Criando uma assinatura com a api do STRIPE
- Ocultando todo o conteúdo do post caso usuário não tenha assinatura
- Mostrar toda informação do post

Neste desafio foi usado as seguintes dependências:

- React.js
- Next.JS
- Typescript
- SASS
- Stripe-js
- FaunaDB
- Next-auth
- Prismic-dom
- React-Icons
- Axios
- Jest
- Identity-obj-proxy

## Como testar o Ignews?
1. clonar este projeto em sua máquina local.
2. acessar a raiz do projeto através do seu terminal.
3. Criar um arquivo .env.local utilizando as variáveis de ambiente do .exemple.env
4. Preencher as variáveis de ambiente
    - Possuir cadastro no FaunaDB `FAUNADB_KEY`
    - Possuir cadastro no Stripe `STRIPE_API_KEY | NEXT_PUBLIC_STRIPE_PUBLIC_KEY | STRIPE_SUCCESS_URL | STRIPE_CANCEL_URL | STRIPE_WEBHOOK_SECRET`
    - Possuir cadastro no Prismic `PRISMIC_ENDPOINT | PRISMIC_ACCESS_TOKEN`
    - Possuir cadastro no Github `GITHUB_ID | GITHUB_SECRET`
5. Instalar o stripe no projeto
6. Executar o comando em um terminal separado: `stripe listen --forward-to http://localhost:3000`
7. Executar os comandos em um terminal separado:
    - `npm install` OR `yarn install`
    - `npm run dev` OR `yarn dev`
8. visitar a página http://localhost:3000/ no seu browser.

![Application](https://raw.githubusercontent.com/paulinho68/ignews/master/assets/Screenshot_1.png)

![Application](https://raw.githubusercontent.com/paulinho68/ignews/master/assets/Screenshot_2.png)

![Application](https://raw.githubusercontent.com/paulinho68/ignews/master/assets/Screenshot_3.png)
