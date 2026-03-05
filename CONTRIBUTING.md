# Contributing to ALFABIT Design System

> [!WARNING]
> **REPOSITÓRIO ARQUIVADO**: Este projeto não está mais ativo e permanece público apenas para fins de estudo. **Não estamos aceitando contribuições** e Pull Requests não serão revisados ou mesclados.

Obrigado por considerar contribuir para o ALFABIT Design System! 🎉

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Convenções de Commit](#convenções-de-commit)

## Código de Conduta

Este projeto adota um Código de Conduta para garantir um ambiente acolhedor para todos. Por favor, leia [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) antes de contribuir.

## Como Posso Contribuir?

### 🐛 Reportando Bugs

1. Verifique se o bug já não foi reportado nas [Issues](https://github.com/ESousa97/DesignSystem/issues)
2. Se não encontrar uma issue existente, [crie uma nova](https://github.com/ESousa97/DesignSystem/issues/new?template=bug_report.md)
3. Use o template de bug report e forneça o máximo de detalhes possível

### ✨ Sugerindo Melhorias

1. Verifique se a sugestão já não existe nas [Issues](https://github.com/ESousa97/DesignSystem/issues)
2. [Crie uma nova feature request](https://github.com/ESousa97/DesignSystem/issues/new?template=feature_request.md)
3. Descreva claramente o problema que sua sugestão resolve

### 💻 Contribuindo com Código

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça suas alterações
4. Commit suas mudanças seguindo as [convenções de commit](#convenções-de-commit)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## Configuração do Ambiente

### Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ESousa97/DesignSystem.git
cd DesignSystem

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Ou inicie o Storybook
npm run storybook
```

### Scripts Disponíveis

| Script                    | Descrição                                         |
| ------------------------- | ------------------------------------------------- |
| `npm run dev`             | Inicia o servidor Next.js em modo desenvolvimento |
| `npm run build`           | Cria a build de produção                          |
| `npm run lint`            | Executa o ESLint                                  |
| `npm run lint:fix`        | Corrige problemas de lint automaticamente         |
| `npm run format`          | Formata o código com Prettier                     |
| `npm run format:check`    | Verifica formatação sem modificar                 |
| `npm run storybook`       | Inicia o Storybook na porta 6006                  |
| `npm run build-storybook` | Cria build estática do Storybook                  |

## Padrões de Código

### TypeScript

- Use tipagem explícita sempre que possível
- Evite `any` - prefira tipos específicos ou `unknown`
- Exporte tipos junto com os componentes

### React

- Use componentes funcionais com hooks
- Desestruture props no parâmetro da função
- Use `React.FC` apenas quando necessário (children explícito)

### Estilo

- Use TailwindCSS para estilização
- Siga o sistema de design tokens definido em `globals.css`
- Evite estilos inline quando possível

### Estrutura de Componentes

```
components/
└── ComponentName/
    ├── ComponentName.tsx      # Componente principal
    ├── ComponentName.stories.tsx  # Stories do Storybook
    └── ComponentName.mdx      # Documentação
```

## Processo de Pull Request

1. **Atualize sua branch** com a main antes de abrir o PR
2. **Preencha o template** de PR completamente
3. **Garanta que os checks passem**:
   - ✅ Lint sem erros
   - ✅ Build sem erros
   - ✅ Testes passando (quando aplicável)
4. **Solicite review** de pelo menos um maintainer
5. **Responda aos feedbacks** de forma construtiva

## Convenções de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensagens de commit padronizadas.

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

| Tipo       | Descrição                        |
| ---------- | -------------------------------- |
| `feat`     | Nova funcionalidade              |
| `fix`      | Correção de bug                  |
| `docs`     | Apenas documentação              |
| `style`    | Formatação, ponto-e-vírgula, etc |
| `refactor` | Refatoração de código            |
| `test`     | Adição ou correção de testes     |
| `chore`    | Manutenção, configs, deps        |

### Exemplos

```bash
feat(button): add loading state with spinner
fix(input): correct focus ring color on error state
docs(readme): update installation instructions
chore(deps): update storybook to v8.1.2
```

## 🙏 Reconhecimento

Contribuidores serão reconhecidos no README principal do projeto.

---

Dúvidas? Abra uma [Discussion](https://github.com/ESousa97/DesignSystem/discussions) ou entre em contato com os maintainers.
