import { Meta, StoryObj } from '@storybook/react'
import Link, { LinkProps } from './Link'

const meta: Meta<LinkProps> = {
  title: 'Design System/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de link moderno com animações, múltiplas variações e suporte a ícones.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do link',
    },
    href: {
      control: 'text',
      description: 'URL de destino',
    },
    variant: {
      control: 'select',
      options: ['default', 'button', 'subtle', 'underline'],
      description: 'Variação visual do link',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do texto',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    external: {
      control: 'boolean',
      description: 'Link externo (abre em nova aba)',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posição do ícone',
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais',
    },
  },
}

export default meta

// Variações básicas
export const Default: StoryObj<LinkProps> = {
  args: {
    children: 'Link padrão',
    href: '#',
  },
}

export const Button: StoryObj<LinkProps> = {
  args: {
    children: 'Link como botão',
    href: '#',
    variant: 'button',
  },
}

export const Subtle: StoryObj<LinkProps> = {
  args: {
    children: 'Link sutil',
    href: '#',
    variant: 'subtle',
  },
}

export const Underline: StoryObj<LinkProps> = {
  args: {
    children: 'Link sublinhado',
    href: '#',
    variant: 'underline',
  },
}

// Estados
export const Disabled: StoryObj<LinkProps> = {
  args: {
    children: 'Link desabilitado',
    href: '#',
    disabled: true,
  },
}

export const Loading: StoryObj<LinkProps> = {
  args: {
    children: 'Carregando',
    href: '#',
    loading: true,
  },
}

// Tamanhos
export const Small: StoryObj<LinkProps> = {
  args: {
    children: 'Link pequeno',
    href: '#',
    size: 'sm',
  },
}

export const Medium: StoryObj<LinkProps> = {
  args: {
    children: 'Link médio',
    href: '#',
    size: 'md',
  },
}

export const Large: StoryObj<LinkProps> = {
  args: {
    children: 'Link grande',
    href: '#',
    size: 'lg',
  },
}

// Com ícones
export const WithLeftIcon: StoryObj<LinkProps> = {
  args: {
    children: 'Download',
    href: '#',
    icon: '⬇️',
    iconPosition: 'left',
  },
}

export const WithRightIcon: StoryObj<LinkProps> = {
  args: {
    children: 'Próxima página',
    href: '#',
    icon: '→',
    iconPosition: 'right',
  },
}

export const ButtonWithIcon: StoryObj<LinkProps> = {
  args: {
    children: 'Salvar arquivo',
    href: '#',
    variant: 'button',
    icon: '💾',
    iconPosition: 'left',
  },
}

// Links externos
export const External: StoryObj<LinkProps> = {
  args: {
    children: 'Site externo',
    href: 'https://example.com',
    external: true,
  },
}

export const ExternalButton: StoryObj<LinkProps> = {
  args: {
    children: 'Abrir em nova aba',
    href: 'https://example.com',
    variant: 'button',
    external: true,
  },
}

// Tema violeta
export const VioletDefault: StoryObj<LinkProps> = {
  args: {
    children: 'Link violeta',
    href: '#',
    className: 'theme-violet',
  },
}

export const VioletButton: StoryObj<LinkProps> = {
  args: {
    children: 'Botão violeta',
    href: '#',
    variant: 'button',
    className: 'theme-violet',
  },
}

// Casos de uso específicos
export const NavigationLink: StoryObj<LinkProps> = {
  args: {
    children: 'Sobre nós',
    href: '/about',
    variant: 'subtle',
  },
}

export const CallToAction: StoryObj<LinkProps> = {
  args: {
    children: 'Começar agora',
    href: '/signup',
    variant: 'button',
    size: 'lg',
    icon: '🚀',
    iconPosition: 'right',
  },
}

export const DocumentLink: StoryObj<LinkProps> = {
  args: {
    children: 'Manual do usuário',
    href: '/docs/manual.pdf',
    icon: '📄',
    iconPosition: 'left',
  },
}

// Showcase
export const AllVariants: StoryObj<LinkProps> = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Link href="#" variant="default">
        Link padrão
      </Link>
      <Link href="#" variant="button">
        Link como botão
      </Link>
      <Link href="#" variant="subtle">
        Link sutil
      </Link>
      <Link href="#" variant="underline">
        Link sublinhado
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas as variações do link em um só lugar',
      },
    },
  },
}

export const AllSizes: StoryObj<LinkProps> = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Link href="#" size="sm">
        Link pequeno
      </Link>
      <Link href="#" size="md">
        Link médio
      </Link>
      <Link href="#" size="lg">
        Link grande
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos os tamanhos disponíveis',
      },
    },
  },
}

export const UsageExamples: StoryObj<LinkProps> = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-primary">Navegação</h3>
        <div className="flex space-x-4">
          <Link href="#" variant="subtle">
            Home
          </Link>
          <Link href="#" variant="subtle">
            Produtos
          </Link>
          <Link href="#" variant="subtle">
            Sobre
          </Link>
          <Link href="#" variant="subtle">
            Contato
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-primary">Ações</h3>
        <div className="flex space-x-4">
          <Link href="#" variant="button">
            Comprar agora
          </Link>
          <Link href="#" variant="default">
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-primary">Documentos</h3>
        <div className="space-y-1">
          <div>
            <Link href="#" icon="📄" iconPosition="left">
              Termos de uso
            </Link>
          </div>
          <div>
            <Link href="#" icon="🔒" iconPosition="left">
              Política de privacidade
            </Link>
          </div>
          <div>
            <Link href="#" icon="❓" iconPosition="left">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplos práticos de uso do componente Link',
      },
    },
  },
}
