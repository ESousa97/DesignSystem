import { Meta, StoryObj } from '@storybook/react'
import Input, { InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de entrada de texto moderno com múltiplas variações, estados e animações.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo do campo',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
    },
    multiline: {
      control: 'boolean',
      description: 'Renderizar como textarea',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    success: {
      control: 'boolean',
      description: 'Estado de sucesso',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do input',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Variação visual',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
    },
  },
}

export default meta

// Variações básicas
export const Default: StoryObj<InputProps> = {
  args: {
    placeholder: 'Digite aqui...',
    variant: 'default',
  },
}

export const Filled: StoryObj<InputProps> = {
  args: {
    placeholder: 'Input preenchido',
    variant: 'filled',
  },
}

export const Outlined: StoryObj<InputProps> = {
  args: {
    placeholder: 'Input com borda',
    variant: 'outlined',
  },
}

// Com labels
export const WithLabel: StoryObj<InputProps> = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
}

export const WithLabelRequired: StoryObj<InputProps> = {
  args: {
    label: 'Email *',
    placeholder: 'seu@email.com',
    type: 'email',
  },
}

// Estados de validação
export const WithError: StoryObj<InputProps> = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    error: 'Por favor, insira um email válido',
    value: 'email-invalido',
  },
}

export const WithSuccess: StoryObj<InputProps> = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    success: true,
    helperText: 'Email válido!',
    value: 'usuario@exemplo.com',
  },
}

export const WithHelperText: StoryObj<InputProps> = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    type: 'password',
    helperText: 'Deve conter pelo menos 8 caracteres',
  },
}

// Tamanhos
export const Small: StoryObj<InputProps> = {
  args: {
    placeholder: 'Input pequeno',
    size: 'sm',
  },
}

export const Medium: StoryObj<InputProps> = {
  args: {
    placeholder: 'Input médio',
    size: 'md',
  },
}

export const Large: StoryObj<InputProps> = {
  args: {
    placeholder: 'Input grande',
    size: 'lg',
  },
}

// Com ícones
export const WithLeftIcon: StoryObj<InputProps> = {
  args: {
    placeholder: 'Buscar...',
    leftIcon: '🔍',
  },
}

export const WithRightIcon: StoryObj<InputProps> = {
  args: {
    placeholder: 'Configurações',
    rightIcon: '⚙️',
  },
}

export const WithBothIcons: StoryObj<InputProps> = {
  args: {
    placeholder: 'Email com ícones',
    leftIcon: '📧',
    rightIcon: '✓',
    success: true,
  },
}

// Estados especiais
export const Loading: StoryObj<InputProps> = {
  args: {
    placeholder: 'Carregando...',
    loading: true,
    value: 'Verificando dados',
  },
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
    value: 'Não editável',
  },
}

export const DisabledWithLabel: StoryObj<InputProps> = {
  args: {
    label: 'Campo bloqueado',
    placeholder: 'Não editável',
    disabled: true,
    value: 'Valor fixo',
    helperText: 'Este campo não pode ser editado',
  },
}

// Multiline (Textarea)
export const Multiline: StoryObj<InputProps> = {
  args: {
    multiline: true,
    placeholder: 'Digite sua mensagem...',
    label: 'Mensagem',
  },
}

export const MultilineWithError: StoryObj<InputProps> = {
  args: {
    multiline: true,
    label: 'Comentário',
    placeholder: 'Deixe seu comentário...',
    error: 'Comentário muito curto',
    value: 'Muito curto',
  },
}

// Tipos específicos
export const Email: StoryObj<InputProps> = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'seu@email.com',
    leftIcon: '📧',
  },
}

export const Password: StoryObj<InputProps> = {
  args: {
    type: 'password',
    label: 'Senha',
    placeholder: 'Digite sua senha',
    leftIcon: '🔒',
    helperText: 'Mínimo 8 caracteres',
  },
}

export const Number: StoryObj<InputProps> = {
  args: {
    type: 'number',
    label: 'Idade',
    placeholder: '0',
    min: '0',
    max: '120',
  },
}

// Showcase
export const AllVariants: StoryObj<InputProps> = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input placeholder="Default" variant="default" />
      <Input placeholder="Filled" variant="filled" />
      <Input placeholder="Outlined" variant="outlined" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas as variações visuais do input',
      },
    },
  },
}

export const AllSizes: StoryObj<InputProps> = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos os tamanhos disponíveis do input',
      },
    },
  },
}

export const FormExample: StoryObj<InputProps> = {
  render: () => (
    <div className="w-96 space-y-6">
      <Input label="Nome completo *" placeholder="Digite seu nome" leftIcon="👤" />
      <Input label="Email *" type="email" placeholder="seu@email.com" leftIcon="📧" />
      <Input
        label="Telefone"
        type="tel"
        placeholder="(11) 99999-9999"
        leftIcon="📱"
        helperText="Formato: (xx) xxxxx-xxxx"
      />
      <Input
        label="Mensagem"
        multiline
        placeholder="Deixe sua mensagem..."
        helperText="Mínimo 10 caracteres"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de formulário completo com inputs variados',
      },
    },
  },
}
