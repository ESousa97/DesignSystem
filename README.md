<div align="center">

# ALFABIT Design System

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/DesignSystem/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/DesignSystem/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/ESousa97/DesignSystem/codeql.yml?style=flat&logo=github-actions&logoColor=white&label=CodeQL)](https://github.com/ESousa97/DesignSystem/actions/workflows/codeql.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/DesignSystem?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/designsystem)
[![License](https://img.shields.io/badge/License-Custom-lightgrey?style=flat&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=black)](#)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-brightgreen?style=flat&logo=dependabot&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Framework de componentes React para interfaces modulares, desenvolvido com Next.js, TypeScript e TailwindCSS, seguindo princípios de design atômico.**

[Demonstração ao Vivo](https://design-system-gamma-lovat.vercel.app)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob os termos da licença. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Uso e Exemplos](#uso-e-exemplos)
- [Componentes Disponíveis](#componentes-disponíveis)
- [Customização e Temas](#customização-e-temas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquitetura](#arquitetura)
- [Testes e Qualidade](#testes-e-qualidade)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

O **ALFABIT-DESIGN-SYSTEM** é uma biblioteca de componentes React coesa e reutilizável, concebida como fonte canônica da verdade visual e interativa de um ecossistema de produtos digitais. Desenvolvida com **Next.js**, **TypeScript** e **TailwindCSS**, adota princípios de design atômico onde componentes fundamentais são projetados para serem composicionais, flexíveis e robustos.

O repositório prioriza:

- **Consistência Visual** — Tokens de design centralizados garantem uniformidade
- **Escalabilidade** — Arquitetura atômica permite composição de componentes complexos
- **Experiência do Desenvolvedor** — TypeScript first com autocompletar inteligente
- **Documentação Viva** — Storybook integrado para desenvolvimento e teste em isolamento

### Por que Next.js + Storybook?

A combinação permite desenvolvimento de componentes isolados via Storybook com documentação interativa, além de uma aplicação demo completa via Next.js para demonstrar casos de uso reais. O deploy na Vercel unifica ambos os ambientes.

---

## Funcionalidades

- **Button** — 5 variantes visuais, 4 tamanhos, estados de loading/disabled
- **Input** — Campos versáteis com validação, ícones e modo multilinha
- **Link** — Navegação inteligente com detecção automática de links externos
- **TextBlock** — Blocos de conteúdo flexíveis para cards e destaques
- **Tokens de Design** — Cores, tipografia e espaçamentos centralizados
- **Tematização Flexível** — Suporte a múltiplos temas via CSS custom properties
- **Storybook Integrado** — Playground interativo para todos os componentes
- **Testes Visuais** — Regressão visual automatizada com Chromatic

---

## Tecnologias

### Core

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

### Ferramentas de Desenvolvimento

![Storybook](https://img.shields.io/badge/Storybook-8.1.2-FF4785?style=flat&logo=storybook&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![Chromatic](https://img.shields.io/badge/Chromatic-FC521F?style=flat&logo=chromatic&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

**Requisitos mínimos:**

- Node.js 18+ ou 20+ (recomendado)
- npm 9+ (ou yarn/pnpm)
- Git

---

## Começando

### Pré-requisitos

```bash
node --version  # v18 ou superior
npm --version   # v9 ou superior
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/DesignSystem.git
cd DesignSystem
```

2. **Instale as dependências**

```bash
npm install
```

### Uso Local

**Storybook (recomendado):**

```bash
npm run storybook
```

Acesse: `http://localhost:6006`

**Aplicação demo:**

```bash
npm run dev
```

Acesse: `http://localhost:3000`

---

## Uso e Exemplos

### Formulário de Contato

```tsx
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'

export default function ContactForm() {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-2xl mb-6 font-bold text-gray-800">Entre em Contato</h2>

      <form className="space-y-4">
        <Input
          label="Nome Completo"
          placeholder="Seu nome aqui"
          leftIcon={<FiUser />}
          variant="outlined"
        />

        <Input
          type="email"
          label="E-mail"
          placeholder="seu@email.com"
          leftIcon={<FiMail />}
          variant="outlined"
          helperText="Nunca compartilharemos seu e-mail"
        />

        <Input
          label="Mensagem"
          placeholder="Sua mensagem..."
          leftIcon={<FiMessageSquare />}
          multiline
          variant="outlined"
        />

        <Button type="submit" variant="primary" size="lg" fullWidth>
          Enviar Mensagem
        </Button>
      </form>
    </div>
  )
}
```

### Dashboard Card

```tsx
import TextBlock from '@/components/TextBlock/TextBlock'
import { FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi'

export default function Dashboard() {
  return (
    <div className="md:grid-cols-3 grid grid-cols-1 gap-6 p-6">
      <TextBlock
        variant="elevated"
        size="md"
        icon={<FiTrendingUp />}
        title="Vendas do Mês"
        children="Aumento de 23% em relação ao mês anterior."
        actionButton={{ text: 'Ver Detalhes', onClick: () => {} }}
        animated
      />

      <TextBlock
        variant="gradient"
        size="md"
        icon={<FiUsers />}
        title="Novos Usuários"
        children="1.247 novos usuários esta semana."
        actionButton={{ text: 'Gerenciar', onClick: () => {} }}
      />

      <TextBlock
        variant="outlined"
        size="md"
        icon={<FiDollarSign />}
        title="Receita Total"
        children="R$ 45.780,90 de receita no trimestre."
      />
    </div>
  )
}
```

---

## Componentes Disponíveis

### Button

| Propriedade | Tipo      | Opções                                                 | Padrão    |
| ----------- | --------- | ------------------------------------------------------ | --------- |
| `variant`   | string    | `primary`, `secondary`, `tertiary`, `ghost`, `outline` | `primary` |
| `size`      | string    | `sm`, `md`, `lg`, `xl`                                 | `md`      |
| `loading`   | boolean   | `true`, `false`                                        | `false`   |
| `disabled`  | boolean   | `true`, `false`                                        | `false`   |
| `fullWidth` | boolean   | `true`, `false`                                        | `false`   |
| `icon`      | ReactNode | Qualquer ícone                                         | -         |

### Input

| Propriedade              | Tipo      | Opções                          | Padrão    |
| ------------------------ | --------- | ------------------------------- | --------- |
| `variant`                | string    | `default`, `filled`, `outlined` | `default` |
| `size`                   | string    | `sm`, `md`, `lg`                | `md`      |
| `error`                  | string    | Mensagem de erro                | -         |
| `success`                | boolean   | `true`, `false`                 | `false`   |
| `multiline`              | boolean   | `true`, `false`                 | `false`   |
| `leftIcon` / `rightIcon` | ReactNode | Qualquer ícone                  | -         |

### Link

| Propriedade | Tipo    | Opções                                     | Padrão    |
| ----------- | ------- | ------------------------------------------ | --------- |
| `variant`   | string  | `default`, `button`, `subtle`, `underline` | `default` |
| `disabled`  | boolean | `true`, `false`                            | `false`   |
| `loading`   | boolean | `true`, `false`                            | `false`   |
| `external`  | boolean | Auto-detectado                             | -         |

### TextBlock

| Propriedade    | Tipo      | Opções                                        | Padrão    |
| -------------- | --------- | --------------------------------------------- | --------- |
| `variant`      | string    | `default`, `elevated`, `outlined`, `gradient` | `default` |
| `size`         | string    | `sm`, `md`, `lg`                              | `md`      |
| `animated`     | boolean   | `true`, `false`                               | `false`   |
| `icon`         | ReactNode | Qualquer ícone                                | -         |
| `actionButton` | object    | `{text, onClick}`                             | -         |

---

## Customização e Temas

### Tokens de Design

O sistema utiliza tokens definidos no `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
    },
  },
}
```

### Criando Novos Temas

```css
/* styles/globals.css */
.theme-dark {
  --color-primary: #6366f1;
  --color-background: #1f2937;
  --color-text: #f9fafb;
}

.theme-corporate {
  --color-primary: #059669;
  --color-background: #ffffff;
  --color-text: #111827;
}
```

---

## Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Storybook (porta 6006)
npm run storybook

# Build do Storybook
npm run build-storybook

# Verificação de código
npm run lint

# Formatação com Prettier
npm run format

# Executar testes
npm run test
```

---

## Estrutura do Projeto

```
DesignSystem/
├── .storybook/                    # Configurações do Storybook
│   ├── main.ts                   # Configuração principal
│   └── preview.ts                # Configuração de preview
├── components/                    # Biblioteca de componentes
│   ├── Button/                   # Componente Button
│   │   ├── Button.tsx            # Implementação
│   │   ├── Button.stories.tsx    # Stories do Storybook
│   │   └── Button.mdx            # Documentação
│   ├── Input/                    # Componente Input
│   ├── Link/                     # Componente Link
│   └── TextBlock/                # Componente TextBlock
├── pages/                         # Páginas da aplicação demo
│   ├── _app.tsx                  # App component
│   ├── _document.tsx             # Document customizado
│   └── index.tsx                 # Página inicial
├── video/                         # Assets de demonstração
│   └── Designsytem.gif           # GIF da demonstração
├── styles/                        # Estilos globais
│   └── globals.css               # CSS global + Tailwind
├── tailwind.config.js             # Configuração do Tailwind
├── tsconfig.json                  # Configuração TypeScript
└── package.json                   # Dependências e scripts
```

---

## Arquitetura

O projeto segue um padrão de design atômico com componentes composicionais:

```
Client
  → Vercel
    → Next.js / Storybook
      → components/<Component>/
        → Component.tsx (Implementação)
        → Component.stories.tsx (Documentação)
      → styles/ (Design Tokens + Tailwind)
        → tailwind.config.js (Tokens centralizados)
```

Os componentes são organizados como átomos independentes, cada um com sua implementação, stories e documentação. Os tokens de design no `tailwind.config.js` garantem consistência visual em todo o sistema.

---

## Testes e Qualidade

### Estratégia

- **Análise Estática** — ESLint para consistência de código
- **Testes Visuais** — Chromatic para regressão visual
- **Testes Manuais** — Storybook para validação interativa
- **Segurança** — CodeQL para análise de vulnerabilidades

### Métricas

- 100% dos componentes documentados
- Zero warnings de TypeScript
- Cobertura completa de testes visuais
- Performance otimizada com Lighthouse

---

## Deploy

### Vercel (Produção)

O projeto está configurado para deploy automático na Vercel. Cada push dispara um novo deploy.

1. Fork o repositório
2. Conecte sua conta Vercel ao GitHub
3. Importe o projeto na Vercel
4. Deploy automático a cada push

### Manual

```bash
# Build da aplicação
npm run build

# Build do Storybook
npm run build-storybook

# Arquivos gerados:
# - .next/ (aplicação)
# - storybook-static/ (documentação)
```

---

## Contribuindo

Contribuições são bem-vindas! Consulte os guias antes de enviar um PR:

- [CONTRIBUTING.md](CONTRIBUTING.md) — Guia de contribuição
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — Código de conduta
- [SECURITY.md](SECURITY.md) — Política de segurança
- [CHANGELOG.md](CHANGELOG.md) — Histórico de mudanças

---

## Licença

Este projeto está sob uma **Licença Customizada**. Veja o arquivo [LICENSE](LICENSE) para detalhes completos.

```
Permitido: Uso privado e comercial, modificações.
Proibido: Redistribuição, sublicenciamento, venda.
Obrigatório: Manter atribuição ao autor original.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#alfabit-design-system)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
