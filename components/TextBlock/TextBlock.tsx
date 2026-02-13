export type TextBlockProps = {
  title: string
  textBlock: string
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  actionButton?: {
    text: string
    onClick: () => void
    variant?: 'primary' | 'secondary'
  }
  className?: string
  animated?: boolean
}

function getVariantStyles(variant: TextBlockProps['variant']) {
  switch (variant) {
    case 'elevated':
      return `bg-white border border-outline shadow-lg hover:shadow-xl
              hover:-translate-y-1 transition-all duration-300 ease-out`

    case 'outlined':
      return `bg-transparent border-2 border-primary/20 hover:border-primary/40
              hover:bg-primary/5 transition-all duration-200`

    case 'gradient':
      return `bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10
              border border-primary/20 hover:from-primary/15 hover:via-secondary/15 hover:to-tertiary/15
              transition-all duration-300`

    default: // default
      return `bg-dark hover:bg-quaternary border border-transparent hover:border-outline/50
              transition-all duration-200`
  }
}

function getSizeStyles(size: TextBlockProps['size']) {
  switch (size) {
    case 'sm':
      return {
        container: 'p-4 gap-2',
        title: 'text-lg font-bold',
        text: 'text-sm',
      }
    case 'md':
      return {
        container: 'py-6 px-6 gap-3',
        title: 'text-xl font-extrabold',
        text: 'text-md',
      }
    case 'lg':
      return {
        container: 'py-8 px-8 gap-4',
        title: 'text-2xl font-extrabold',
        text: 'text-lg',
      }
    default:
      return getSizeStyles('md')
  }
}

const TextBlock = ({
  title,
  textBlock,
  variant = 'default',
  size = 'md',
  icon,
  actionButton,
  className,
  animated = false,
}: TextBlockProps) => {
  const sizeStyles = getSizeStyles(size)

  return (
    <div
      className={`group relative flex flex-col items-start justify-center overflow-hidden rounded-xl ${sizeStyles.container} ${getVariantStyles(variant)} ${animated ? 'animate-fadeIn' : ''} ${className} `}
    >
      {/* Background Pattern (apenas para variant gradient) */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-30">
          <div className="w-32 h-32 -translate-y-16 translate-x-16 absolute right-0 top-0 rounded-full bg-primary/20" />
          <div className="w-24 h-24 translate-y-12 -translate-x-12 absolute bottom-0 left-0 rounded-full bg-secondary/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Header com ícone e título */}
        <div className="mb-3 flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary transition-colors duration-200 group-hover:bg-primary/20">
              {icon}
            </div>
          )}

          <h3
            className={`text-gray-primary transition-colors duration-200 group-hover:text-primary ${sizeStyles.title} `}
          >
            {title}
          </h3>
        </div>

        {/* Texto principal */}
        <p className={`mb-4 leading-relaxed text-gray-secondary ${sizeStyles.text} `}>
          {textBlock}
        </p>

        {/* Botão de ação (se fornecido) */}
        {actionButton && (
          <button
            onClick={actionButton.onClick}
            className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-4 ${
              actionButton.variant === 'secondary'
                ? 'bg-quaternary text-primary hover:bg-tertiary focus:ring-primary/20'
                : 'bg-primary text-white hover:bg-hover hover:shadow-lg hover:shadow-primary/25 focus:ring-primary/30'
            } `}
          >
            {actionButton.text}
          </button>
        )}
      </div>

      {/* Hover Effect Line */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full ${variant === 'outlined' ? 'hidden' : ''} `}
      />

      {/* Shine Effect */}
      {variant === 'elevated' && (
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -left-full -top-full h-full w-full rotate-45 bg-gradient-to-br from-white/20 to-transparent transition-all duration-700 group-hover:left-full group-hover:top-full" />
        </div>
      )}
    </div>
  )
}

export default TextBlock
