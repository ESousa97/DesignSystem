export type InputProps = {
  label?: string;
  multiline?: boolean;
  error?: string;
  success?: boolean;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
  loading?: boolean;
} & (
  React.InputHTMLAttributes<HTMLInputElement> |
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

const InputOrTextArea = ({ multiline, ...props }: InputProps) => {
  if (multiline) {
    const { multiline: _, leftIcon, rightIcon, loading, size, variant, error, success, helperText, ...textareaProps } = props as any;
    return <textarea {...textareaProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
  }
  const { multiline: _, leftIcon, rightIcon, loading, size, variant, error, success, helperText, ...inputProps } = props as any;
  return <input {...inputProps as React.InputHTMLAttributes<HTMLInputElement>} />
}

function getSizeStyles(size: InputProps['size']) {
  switch (size) {
    case 'sm':
      return 'px-3 py-2 text-sm h-9';
    case 'md':
      return 'px-4 py-3 text-md h-11';
    case 'lg':
      return 'px-5 py-4 text-lg h-13';
    default:
      return getSizeStyles('md');
  }
}

function getVariantStyles(variant: InputProps['variant'], error?: string, success?: boolean, disabled?: boolean) {
  const baseStyles = 'transition-all duration-200 ease-in-out focus:outline-none';
  
  if (disabled) {
    return `${baseStyles} bg-disabled border-2 border-disabled text-disabled cursor-not-allowed`;
  }
  
  if (error) {
    return `${baseStyles} bg-white border-2 border-red-500 text-gray-primary 
            focus:border-red-600 focus:ring-4 focus:ring-red-500/20
            hover:border-red-600`;
  }
  
  if (success) {
    return `${baseStyles} bg-white border-2 border-green-500 text-gray-primary 
            focus:border-green-600 focus:ring-4 focus:ring-green-500/20
            hover:border-green-600`;
  }
  
  switch (variant) {
    case 'filled':
      return `${baseStyles} bg-quaternary border-2 border-transparent text-gray-primary 
              focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/20
              hover:bg-tertiary`;
              
    case 'outlined':
      return `${baseStyles} bg-transparent border-2 border-outline text-gray-primary 
              focus:border-primary focus:ring-4 focus:ring-primary/20 focus:bg-white
              hover:border-primary/60`;
              
    default: // default
      return `${baseStyles} bg-dark border-2 border-transparent text-gray-primary 
              focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/20
              hover:bg-quaternary`;
  }
}

const LoadingSpinner = () => (
  <svg 
    className="animate-spin h-4 w-4 text-primary"
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

const Input = ({ 
  label, 
  multiline = false,
  error,
  success = false,
  helperText,
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
  loading = false,
  className, 
  disabled,
  ...rest
}: InputProps) => {
  const hasLabel = !!label;
  const hasError = !!error;
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon || loading;
  
  return (
    <div className="w-full">
      {/* Label */}
      {hasLabel && (
        <label className={`
          block text-sm font-medium mb-2 transition-colors duration-200
          ${hasError ? 'text-red-600' : success ? 'text-green-600' : 'text-gray-primary'}
        `}>
          {label}
        </label>
      )}
      
      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {hasLeftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-icon z-10">
            {leftIcon}
          </div>
        )}
        
        {/* Input Field */}
        <InputOrTextArea
          className={`
            w-full rounded-lg font-medium placeholder:text-gray-tertiary
            ${getSizeStyles(size)}
            ${getVariantStyles(variant, error, success, disabled)}
            ${hasLeftIcon ? 'pl-10' : ''}
            ${hasRightIcon ? 'pr-10' : ''}
            ${multiline ? 'resize-y min-h-[120px]' : ''}
            ${className}
          `}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={hasError ? 'error-message' : helperText ? 'helper-text' : undefined}
          {...rest}
        />
        
        {/* Right Icon / Loading */}
        {hasRightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-icon z-10">
            {loading ? <LoadingSpinner /> : rightIcon}
          </div>
        )}
        
        {/* Focus Ring Enhancement */}
        <div className={`
          absolute inset-0 rounded-lg pointer-events-none transition-all duration-200
          ${!disabled && !hasError && !success ? 
            'group-focus-within:ring-4 group-focus-within:ring-primary/20' : ''}
        `} />
      </div>
      
      {/* Helper Text / Error Message */}
      {(hasError || helperText) && (
        <div className="mt-2 flex items-start gap-1">
          {hasError && (
            <svg className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )}
          
          {success && !hasError && (
            <svg className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          
          <p 
            id={hasError ? 'error-message' : 'helper-text'}
            className={`
              text-sm transition-colors duration-200
              ${hasError ? 'text-red-600' : success ? 'text-green-600' : 'text-gray-secondary'}
            `}
          >
            {hasError ? error : helperText}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
