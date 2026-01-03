import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TextBlock, { TextBlockProps } from './TextBlock'

const meta: Meta<TextBlockProps> = {
  title: 'Design System/TextBlock',
  component: TextBlock,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de bloco de texto moderno com múltiplas variações, ícones e animações.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do bloco',
    },
    textBlock: {
      control: 'text',
      description: 'Conteúdo do texto',
    },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'gradient'],
      description: 'Variação visual do bloco',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do bloco',
    },
    animated: {
      control: 'boolean',
      description: 'Animação de entrada',
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais',
    },
  },
}

export default meta

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const shortText =
  'Uma descrição mais concisa do produto ou serviço, destacando os principais benefícios.'

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// Variações básicas
export const Default: StoryObj<TextBlockProps> = {
  args: {
    title: 'Título Padrão',
    textBlock: sampleText,
    variant: 'default',
  },
}

export const Elevated: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco Elevado',
    textBlock: sampleText,
    variant: 'elevated',
  },
}

export const Outlined: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco com Borda',
    textBlock: sampleText,
    variant: 'outlined',
  },
}

export const Gradient: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco Gradiente',
    textBlock: sampleText,
    variant: 'gradient',
  },
}

// Tamanhos
export const Small: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco Pequeno',
    textBlock: shortText,
    size: 'sm',
  },
}

export const Medium: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco Médio',
    textBlock: sampleText,
    size: 'md',
  },
}

export const Large: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco Grande',
    textBlock: longText,
    size: 'lg',
  },
}

// Com ícones
export const WithIcon: StoryObj<TextBlockProps> = {
  args: {
    title: 'Recursos Premium',
    textBlock:
      'Acesse funcionalidades exclusivas e tenha uma experiência completa com nossa plataforma.',
    icon: '⭐',
    variant: 'elevated',
  },
}

export const WithIconGradient: StoryObj<TextBlockProps> = {
  args: {
    title: 'Segurança Avançada',
    textBlock:
      'Proteção de dados com criptografia de ponta e monitoramento 24/7 para garantir sua segurança.',
    icon: '🔒',
    variant: 'gradient',
  },
}

export const WithIconOutlined: StoryObj<TextBlockProps> = {
  args: {
    title: 'Suporte Técnico',
    textBlock:
      'Nossa equipe especializada está sempre pronta para ajudar você com qualquer dúvida ou problema.',
    icon: '🛠️',
    variant: 'outlined',
  },
}

// Com botões de ação
export const WithActionButton: StoryObj<TextBlockProps> = {
  args: {
    title: 'Comece Hoje Mesmo',
    textBlock:
      'Junte-se a milhares de usuários que já descobriram como nossa solução pode transformar seu trabalho.',
    icon: '🚀',
    variant: 'elevated',
    actionButton: {
      text: 'Começar Agora',
      onClick: () => alert('Ação executada!'),
      variant: 'primary',
    },
  },
}

export const WithSecondaryButton: StoryObj<TextBlockProps> = {
  args: {
    title: 'Saiba Mais',
    textBlock:
      'Descubra todos os detalhes sobre nossos planos e como eles podem se adequar às suas necessidades.',
    icon: '📋',
    variant: 'gradient',
    actionButton: {
      text: 'Ver Detalhes',
      onClick: () => alert('Mostrando detalhes...'),
      variant: 'secondary',
    },
  },
}

// Estados especiais
export const Animated: StoryObj<TextBlockProps> = {
  args: {
    title: 'Bloco Animado',
    textBlock: 'Este bloco aparece com uma animação suave quando carregado.',
    animated: true,
    variant: 'elevated',
  },
}

// Casos de uso específicos
export const FeatureCard: StoryObj<TextBlockProps> = {
  args: {
    title: 'Analytics Avançado',
    textBlock:
      'Acompanhe métricas detalhadas e insights em tempo real para tomar decisões mais inteligentes e estratégicas.',
    icon: '📊',
    variant: 'elevated',
    actionButton: {
      text: 'Ver Demo',
      onClick: () => alert('Abrindo demo...'),
      variant: 'primary',
    },
  },
}

export const TestimonialCard: StoryObj<TextBlockProps> = {
  args: {
    title: 'Maria Silva, CEO',
    textBlock:
      '"A plataforma revolucionou nossa forma de trabalhar. Aumentamos nossa produtividade em 300% no primeiro mês."',
    icon: '💬',
    variant: 'outlined',
    size: 'sm',
  },
}

export const PricingCard: StoryObj<TextBlockProps> = {
  args: {
    title: 'Plano Premium',
    textBlock:
      'Acesso completo a todas as funcionalidades, suporte prioritário e recursos exclusivos para sua empresa.',
    icon: '👑',
    variant: 'gradient',
    actionButton: {
      text: 'Assinar Agora',
      onClick: () => alert('Redirecionando para pagamento...'),
      variant: 'primary',
    },
  },
}

export const NewsCard: StoryObj<TextBlockProps> = {
  args: {
    title: 'Nova Atualização Disponível',
    textBlock:
      'Lançamos novos recursos de colaboração em tempo real e melhorias significativas de performance.',
    icon: '🎉',
    variant: 'default',
    actionButton: {
      text: 'Ler Mais',
      onClick: () => alert('Abrindo artigo completo...'),
      variant: 'secondary',
    },
  },
}

export const HelpCard: StoryObj<TextBlockProps> = {
  args: {
    title: 'Precisa de Ajuda?',
    textBlock:
      'Nossa equipe de suporte está disponível 24/7 para resolver suas dúvidas e problemas técnicos.',
    icon: '❓',
    variant: 'outlined',
    actionButton: {
      text: 'Contatar Suporte',
      onClick: () => alert('Abrindo chat de suporte...'),
      variant: 'primary',
    },
  },
}

// Showcase
export const AllVariants: StoryObj<TextBlockProps> = {
  render: () => (
    <div className="md:grid-cols-2 grid max-w-4xl grid-cols-1 gap-6">
      <TextBlock title="Padrão" textBlock={shortText} variant="default" />
      <TextBlock title="Elevado" textBlock={shortText} variant="elevated" />
      <TextBlock title="Contornado" textBlock={shortText} variant="outlined" />
      <TextBlock title="Gradiente" textBlock={shortText} variant="gradient" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas as variações do TextBlock em um grid responsivo',
      },
    },
  },
}

export const AllSizes: StoryObj<TextBlockProps> = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <TextBlock title="Pequeno" textBlock={shortText} size="sm" variant="elevated" />
      <TextBlock title="Médio" textBlock={shortText} size="md" variant="elevated" />
      <TextBlock title="Grande" textBlock={longText} size="lg" variant="elevated" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos diferentes tamanhos do TextBlock',
      },
    },
  },
}
