export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  rounded?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariantStyles(variant: ButtonProps['variant'], disabled: boolean) {
  const baseDisabled = 'bg-disabled text-disabled cursor-not-allowed border-disabled';
  
  switch (variant) {
    case 'primary':
      return disabled 
        ? baseDisabled
        : `bg-gradient-to-r from-primary to-secondary text-white 
           hover:from-hover hover:to-primary hover:shadow-xl hover:shadow-primary/25
           active:from-click active:to-hover active:scale-95
           focus:ring-4 focus:ring-primary/30 focus:outline-none
           transition-all duration-200 ease-in-out
           hover:-translate-y-1 active:translate-y-0
           before:absolute before:inset-0 before:rounded-inherit before:bg-gradient-to-r 
           before:from-white/20 before:to-transparent before:opacity-0 
           hover:before:opacity-100 before:transition-opacity before:duration-200`;
           
    case 'secondary':
      return disabled 
        ? baseDisabled
        : `bg-quaternary text-primary border-2 border-transparent
           hover:bg-tertiary hover:shadow-lg hover:shadow-primary/10
           active:bg-secondary active:scale-95
           focus:ring-4 focus:ring-primary/20 focus:outline-none
           transition-all duration-200 ease-in-out
           hover:-translate-y-0.5 active:translate-y-0`;
           
    case 'tertiary':
      return disabled 
        ? 'text-disabled cursor-not-allowed'
        : `text-primary bg-transparent border-2 border-transparent
           hover:bg-quaternary hover:text-hover
           active:bg-tertiary active:scale-95
           focus:ring-4 focus:ring-primary/20 focus:outline-none
           transition-all duration-200 ease-in-out`;
           
    case 'ghost':
      return disabled 
        ? 'text-disabled cursor-not-allowed'
        : `text-primary bg-transparent
           hover:bg-primary/10 hover:text-hover
           active:bg-primary/20 active:scale-95
           focus:ring-4 focus:ring-primary/20 focus:outline-none
           transition-all duration-200 ease-in-out`;
           
    case 'outline':
      return disabled 
        ? `${baseDisabled} border-2`
        : `bg-transparent text-primary border-2 border-primary
           hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25
           active:bg-hover active:border-hover active:scale-95
           focus:ring-4 focus:ring-primary/30 focus:outline-none
           transition-all duration-200 ease-in-out
           hover:-translate-y-0.5 active:translate-y-0`;
           
    default:
      return getVariantStyles('primary', disabled);
  }
}

function getSizeStyles(size: ButtonProps['size']) {
  switch (size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm h-8';
    case 'md':
      return 'px-4 py-2 text-md h-10';
    case 'lg':
      return 'px-6 py-3 text-lg h-12';
    case 'xl':
      return 'px-8 py-4 text-xl h-14';
    default:
      return getSizeStyles('md');
  }
}

const LoadingSpinner = ({ size }: { size: string }) => (
  <svg 
    className={`animate-spin ${size === 'sm' ? 'h-3 w-3' : size === 'lg' || size === 'xl' ? 'h-5 w-5' : 'h-4 w-4'}`}
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const Button = ({ 
  variant = 'primary', 
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  rounded = false,
  children, 
  className, 
  disabled, 
  ...rest 
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  
  return (
    <button
      className={`
        relative overflow-hidden font-medium
        ${rounded ? 'rounded-full' : 'rounded-lg'}
        ${getSizeStyles(size)}
        ${getVariantStyles(variant, isDisabled)}
        ${fullWidth ? 'w-full' : 'inline-flex'}
        items-center justify-center gap-2
        ${className}
      `}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <>
          <LoadingSpinner size={size} />
          <span className="opacity-70">Carregando...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="flex items-center">{icon}</span>
          )}
          <span className="relative z-10">{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="flex items-center">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button