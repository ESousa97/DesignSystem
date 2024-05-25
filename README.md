# ALFABIT-DESIGN-SYSTEM

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **.next**: Diretório gerado pelo Next.js contendo arquivos de build e cache.
- **.storybook**: Arquivos de configuração do Storybook.
- **components**: Componentes divididos em subpastas (Button, Input, Link, TextBlock).
- **fonts**: Arquivos de fontes.
- **node_modules**: Dependências do projeto.
- **pages**: Páginas da aplicação Next.js.
- **public**: Arquivos públicos acessíveis.
- **styles**: Arquivos de estilos (ex: `globals.css`).

## Iniciando o Desenvolvimento

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando pages/index.tsx. A página é atualizada automaticamente conforme você edita o arquivo.

# Storybook

Este projeto utiliza o Storybook para desenvolvimento de componentes isolados. Para iniciar o Storybook, utilize o comando:

```bash
npm run storybook
# ou
yarn storybook
# ou
pnpm storybook
# ou
bun storybook
```
Abra http://localhost:6006 no seu navegador para visualizar o **Storybook**.

# Rotas de API

As API routes podem ser acessadas em http://localhost:3000/api/hello. Este endpoint pode ser editado em pages/api/hello.ts.

O diretório pages/api é mapeado para /api/*. Arquivos neste diretório são tratados como API routes em vez de páginas React.

# Fontes

Este projeto utiliza next/font para otimizar e carregar automaticamente a fonte Mulish.

# Scripts Disponíveis
- **dev**: Inicia o servidor de desenvolvimento Next.js.
- **build**: Compila o projeto para produção.
- **start**: Inicia o servidor em modo de produção.
- **lint**: Executa o linter para verificar problemas no código.
- **storybook**: Inicia o Storybook em modo de desenvolvimento.
- **build-storybook**: Compila o Storybook para produção.

# Dependências

- **next**: "^14.2.3"
- **react**: "^18"
- **react-dom**: "^18"

# Dependências de Desenvolvimento

- @chromatic-com/storybook: "^1.4.0"
- @storybook/addon-essentials: "^8.1.2"
- @storybook/addon-interactions: "^8.1.2"
- @storybook/addon-links: "^8.1.2"
- @storybook/addon-onboarding: "^8.1.2"
- @storybook/blocks: "^8.1.2"
- @storybook/nextjs: "^8.1.2"
- @storybook/react: "^8.1.2"
- @storybook/test: "^8.1.2"
- @types/node: "^20"
- @types/react: "^18"
- @types/react-dom: "^18"
- eslint: "^8"
- eslint-config-next: "14.2.3"
- eslint-plugin-storybook: "^0.8.0"
- postcss: "^8"
- storybook: "^8.1.2"
- tailwindcss: "^3.4.1"
- typescript: "^5"

# Saiba Mais

Para saber mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir o [repositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seus feedbacks e contribuições são bem-vindos!

# Deploy na Vercel

A maneira mais fácil de fazer o deploy da sua aplicação Next.js é utilizando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) criada pelos desenvolvedores do Next.js.

- Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.
