# Política de Segurança

## Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 0.1.x  | :white_check_mark: |

## Reportando Vulnerabilidades

A segurança do ALFABIT Design System é levada a sério. Se você descobrir uma vulnerabilidade de segurança, por favor reporte de forma responsável.

### Como Reportar

1. **NÃO** abra uma issue pública para vulnerabilidades de segurança
2. Envie um email para o maintainer do projeto através do perfil do GitHub: [@ESousa97](https://github.com/ESousa97)
3. Inclua o máximo de informações possível:
   - Descrição da vulnerabilidade
   - Passos para reproduzir
   - Possível impacto
   - Sugestões de correção (se houver)

### O Que Esperar

- **Confirmação**: Resposta em até 48 horas confirmando recebimento
- **Avaliação**: Análise da vulnerabilidade em até 7 dias
- **Correção**: Prazo estimado para correção será informado
- **Divulgação**: Coordenação sobre disclosure público

## Escopo de Segurança

### Em Escopo

- Código fonte dos componentes React
- Configurações de build e CI/CD
- Dependências diretas do projeto
- Documentação que possa expor informações sensíveis

### Fora do Escopo

- Vulnerabilidades em dependências transitivas já conhecidas publicamente
- Ataques de engenharia social
- Ataques físicos
- Vulnerabilidades que requerem acesso físico ao dispositivo

## Superfícies de Ataque

### Componentes React

| Superfície               | Risco | Controles                                                 |
| ------------------------ | ----- | --------------------------------------------------------- |
| Props de componentes     | Baixo | Tipagem TypeScript, validação de props                    |
| Eventos de usuário       | Baixo | Sanitização implícita do React                            |
| Renderização de conteúdo | Médio | Escape automático do React, sem `dangerouslySetInnerHTML` |

### Build e Deploy

| Superfície        | Risco | Controles                                |
| ----------------- | ----- | ---------------------------------------- |
| Dependências npm  | Médio | npm audit no CI, Dependabot habilitado   |
| GitHub Actions    | Baixo | Secrets gerenciados, permissões mínimas  |
| Storybook público | Baixo | Apenas documentação, sem dados sensíveis |

### Dados Sensíveis

Este projeto **NÃO** manipula:

- Dados de autenticação
- Informações pessoais (PII)
- Dados financeiros
- Tokens ou credenciais

## Práticas de Segurança

### Código

- ✅ ESLint com regras de segurança
- ✅ TypeScript strict mode
- ✅ Sem uso de `eval()` ou similar
- ✅ Sem `dangerouslySetInnerHTML`
- ✅ Dependências auditadas regularmente

### CI/CD

- ✅ GitHub Actions com permissões mínimas
- ✅ npm audit em cada build
- ✅ CodeQL analysis semanal
- ✅ Dependabot para updates automáticos

### Configuração

- ✅ Sem secrets hardcoded
- ✅ `.env` files ignorados no git
- ✅ CSP headers recomendados na documentação

## Vulnerabilidades Conhecidas

### Dependências com Vulnerabilidades Aceitas

| Pacote                    | Severidade | Justificativa                                          |
| ------------------------- | ---------- | ------------------------------------------------------ |
| `esbuild` (via Storybook) | Moderada   | Apenas ambiente de desenvolvimento, não afeta produção |

Estas vulnerabilidades são monitoradas e serão corrigidas quando updates estiverem disponíveis.

## Histórico de Segurança

| Data       | Descrição                                      | Status       |
| ---------- | ---------------------------------------------- | ------------ |
| 2026-01-03 | Audit inicial, correção de 44 vulnerabilidades | ✅ Resolvido |

## Recursos Adicionais

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [npm Security Best Practices](https://docs.npmjs.com/cli/v10/using-npm/security)

---

Última atualização: Janeiro 2026
