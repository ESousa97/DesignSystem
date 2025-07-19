export type TextBlockProps = {
  title: string;
  textBlock: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  actionButton?: {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  };
  className?: string;
  animated?: boolean;
}

function getVariantStyles(variant: TextBlockProps['variant']) {
  switch (variant) {
    case 'elevated':
      return `bg-white border border-outline shadow-lg hover:shadow-xl
              hover:-translate-y-1 transition-all duration-300 ease-out`;
              
    case 'outlined':
      return `bg-transparent border-2 border-primary/20 hover:border-primary/40
              hover:bg-primary/5 transition-all duration-200`;
              
    case 'gradient':
      return `bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10
              border border-primary/20 hover:from-primary/15 hover:via-secondary/15 hover:to-tertiary/15
              transition-all duration-300`;
              
    default: // default
      return `bg-dark hover:bg-quaternary border border-transparent hover:border-outline/50
              transition-all duration-200`;
  }
}

function getSizeStyles(size: TextBlockProps['size']) {
  switch (size) {
    case 'sm':
      return {
        container: 'p-4 gap-2',
        title: 'text-lg font-bold',
        text: 'text-sm'
      };
    case 'md':
      return {
        container: 'py-6 px-6 gap-3',
        title: 'text-xl font-extrabold',
        text: 'text-md'
      };
    case 'lg':
      return {
        container: 'py-8 px-8 gap-4',
        title: 'text-2xl font-extrabold',
        text: 'text-lg'
      };
    default:
      return getSizeStyles('md');
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
  animated = false
}: TextBlockProps) => {
  const sizeStyles = getSizeStyles(size);
  
  return (
    <div 
      className={`
        group relative overflow-hidden
        flex flex-col justify-center items-start rounded-xl
        ${sizeStyles.container}
        ${getVariantStyles(variant)}
        ${animated ? 'animate-fadeIn' : ''}
        ${className}
      `}
    >
      {/* Background Pattern (apenas para variant gradient) */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full translate-y-12 -translate-x-12" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Header com ícone e título */}
        <div className="flex items-start gap-3 mb-3">
          {icon && (
            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-200">
              {icon}
            </div>
          )}
          
          <h3 className={`
            text-gray-primary group-hover:text-primary transition-colors duration-200
            ${sizeStyles.title}
          `}>
            {title}
          </h3>
        </div>
        
        {/* Texto principal */}
        <p className={`
          text-gray-secondary leading-relaxed mb-4
          ${sizeStyles.text}
        `}>
          {textBlock}
        </p>
        
        {/* Botão de ação (se fornecido) */}
        {actionButton && (
          <button
            onClick={actionButton.onClick}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              focus:ring-4 focus:outline-none
              ${actionButton.variant === 'secondary' 
                ? 'bg-quaternary text-primary hover:bg-tertiary focus:ring-primary/20' 
                : 'bg-primary text-white hover:bg-hover focus:ring-primary/30 hover:shadow-lg hover:shadow-primary/25'
              }
            `}
          >
            {actionButton.text}
          </button>
        )}
      </div>
      
      {/* Hover Effect Line */}
      <div className={`
        absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary
        w-0 group-hover:w-full transition-all duration-300
        ${variant === 'outlined' ? 'hidden' : ''}
      `} />
      
      {/* Shine Effect */}
      {variant === 'elevated' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -top-full -left-full w-full h-full bg-gradient-to-br from-white/20 to-transparent rotate-45 group-hover:top-full group-hover:left-full transition-all duration-700" />
        </div>
      )}
    </div>
  );
};

export default TextBlock;
