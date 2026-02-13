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
          <div className="bg-primary/20 absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full" />
          <div className="bg-secondary/20 absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Header com ícone e título */}
        <div className="mb-3 flex items-start gap-3">
          {icon && (
            <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex-shrink-0 rounded-lg p-2 transition-colors duration-200">
              {icon}
            </div>
          )}

          <h3
            className={`text-gray-primary group-hover:text-primary transition-colors duration-200 ${sizeStyles.title} `}
          >
            {title}
          </h3>
        </div>

        {/* Texto principal */}
        <p className={`text-gray-secondary mb-4 leading-relaxed ${sizeStyles.text} `}>
          {textBlock}
        </p>

        {/* Botão de ação (se fornecido) */}
        {actionButton && (
          <button
            onClick={actionButton.onClick}
            className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 focus:ring-4 focus:outline-none ${
              actionButton.variant === 'secondary'
                ? 'bg-quaternary text-primary hover:bg-tertiary focus:ring-primary/20'
                : 'bg-primary hover:bg-hover hover:shadow-primary/25 focus:ring-primary/30 text-white hover:shadow-lg'
            } `}
          >
            {actionButton.text}
          </button>
        )}
      </div>

      {/* Hover Effect Line */}
      <div
        className={`from-primary to-secondary absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-300 group-hover:w-full ${variant === 'outlined' ? 'hidden' : ''} `}
      />

      {/* Shine Effect */}
      {variant === 'elevated' && (
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-full -left-full h-full w-full rotate-45 bg-gradient-to-br from-white/20 to-transparent transition-all duration-700 group-hover:top-full group-hover:left-full" />
        </div>
      )}
    </div>
  )
}

export default TextBlock
