import { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import Button, { ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de botão moderno com animações, efeitos hover e múltiplas variações.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'outline'],
      description: 'Variação visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Botão ocupar toda a largura',
    },
    rounded: {
      control: 'boolean',
      description: 'Bordas completamente arredondadas',
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
  args: {
    onClick: fn(),
  },
}

export default meta

// Variações básicas
export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Primário',
    variant: 'primary',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /botão primário/i })

    await expect(button).toBeInTheDocument()
    await expect(button).toBeEnabled()

    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Terciário',
    variant: 'tertiary',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Ghost',
    variant: 'ghost',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Outline',
    variant: 'outline',
  },
}

// Estados
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Desabilitado',
    disabled: true,
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    children: 'Carregando',
    loading: true,
  },
}

// Tamanhos
export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Pequeno',
    size: 'sm',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    children: 'Médio',
    size: 'md',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    children: 'Grande',
    size: 'lg',
  },
}

export const ExtraLarge: StoryObj<ButtonProps> = {
  args: {
    children: 'Extra Grande',
    size: 'xl',
  },
}

// Variações especiais
export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    children: 'Largura Total',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const Rounded: StoryObj<ButtonProps> = {
  args: {
    children: 'Arredondado',
    rounded: true,
  },
}

// Com ícones (usando emojis para demonstração)
export const WithLeftIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Com Ícone',
    icon: '⭐',
    iconPosition: 'left',
  },
}

export const WithRightIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Com Ícone',
    icon: '→',
    iconPosition: 'right',
  },
}

// Tema violeta
export const VioletPrimary: StoryObj<ButtonProps> = {
  args: {
    children: 'Violeta Primário',
    className: 'theme-violet',
  },
}

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Violeta Secundário',
    variant: 'secondary',
    className: 'theme-violet',
  },
}

export const VioletOutline: StoryObj<ButtonProps> = {
  args: {
    children: 'Violeta Outline',
    variant: 'outline',
    className: 'theme-violet',
  },
}

// Showcase com múltiplos botões
export const AllVariants: StoryObj<ButtonProps> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas as variações do botão em um só lugar',
      },
    },
  },
}

export const AllSizes: StoryObj<ButtonProps> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
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
