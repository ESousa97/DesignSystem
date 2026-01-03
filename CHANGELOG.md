# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added

- Componente `LoadingSpinner` compartilhado para reutilização
- Arquivo de exports centralizados (`components/index.ts`)
- Configuração de Prettier para formatação consistente
- `.editorconfig` para consistência entre editores
- `.gitattributes` para normalização de line endings
- GitHub Actions workflow para CI (lint, build, test)
- CodeQL workflow para análise de segurança
- Dependabot configurado para updates automáticos
- Templates de Issue e Pull Request
- Documentação completa: CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG

### Changed

- Atualizado Next.js para 14.2.35 (correções de segurança)
- Melhorado `.gitignore` com mais padrões
- ESLint configurado com regras mais rigorosas
- Package.json com scripts adicionais e metadados

### Security

- Corrigidas 44 vulnerabilidades de dependências
- Removidas vulnerabilidades críticas do Next.js
- Adicionada política de segurança (SECURITY.md)

### Fixed

- Corrigidos warnings de variáveis não utilizadas

## [0.1.0] - 2024-XX-XX

### Added

- Componente `Button` com 5 variantes (primary, secondary, tertiary, ghost, outline)
- Componente `Input` com 3 variantes (default, filled, outlined)
- Componente `Link` com 4 variantes (default, button, subtle, underline)
- Componente `TextBlock` com 4 variantes (default, elevated, outlined, gradient)
- Sistema de design tokens centralizados
- Integração com Storybook para documentação
- Suporte a TypeScript
- Estilização com TailwindCSS
- Deploy automático no Vercel

### Technical

- Next.js 14 como framework base
- React 18 com componentes funcionais
- TypeScript para tipagem estática
- TailwindCSS para utility-first CSS
- Storybook 8 para documentação de componentes

---

## Tipos de Mudanças

- `Added` para novas funcionalidades
- `Changed` para mudanças em funcionalidades existentes
- `Deprecated` para funcionalidades que serão removidas
- `Removed` para funcionalidades removidas
- `Fixed` para correção de bugs
- `Security` para correções de vulnerabilidades

[Unreleased]: https://github.com/ESousa97/DesignSystem/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/ESousa97/DesignSystem/releases/tag/v0.1.0
