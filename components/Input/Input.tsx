export type InputProps = {
  label?: string
  multiline?: boolean
  error?: string
  success?: boolean
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'filled' | 'outlined'
  loading?: boolean
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

const InputOrTextArea = ({ multiline, ...props }: InputProps) => {
  if (multiline) {
    const {
      multiline: _multiline,
      leftIcon: _li,
      rightIcon: _ri,
      loading: _l,
      size: _s,
      variant: _v,
      error: _e,
      success: _su,
      helperText: _ht,
      ...textareaProps
    } = props as any
    void [_multiline, _li, _ri, _l, _s, _v, _e, _su, _ht]
    return <textarea {...(textareaProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
  }
  const {
    multiline: _multiline2,
    leftIcon: _li2,
    rightIcon: _ri2,
    loading: _l2,
    size: _s2,
    variant: _v2,
    error: _e2,
    success: _su2,
    helperText: _ht2,
    ...inputProps
  } = props as any
  void [_multiline2, _li2, _ri2, _l2, _s2, _v2, _e2, _su2, _ht2]
  return <input {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)} />
}

function getSizeStyles(size: InputProps['size']) {
  switch (size) {
    case 'sm':
      return 'px-3 py-2 text-sm h-9'
    case 'md':
      return 'px-4 py-3 text-md h-11'
    case 'lg':
      return 'px-5 py-4 text-lg h-13'
    default:
      return getSizeStyles('md')
  }
}

function getVariantStyles(
  variant: InputProps['variant'],
  error?: string,
  success?: boolean,
  disabled?: boolean
) {
  const baseStyles = 'transition-all duration-200 ease-in-out focus:outline-none'

  if (disabled) {
    return `${baseStyles} bg-disabled border-2 border-disabled text-disabled cursor-not-allowed`
  }

  if (error) {
    return `${baseStyles} bg-white border-2 border-red-500 text-gray-primary 
            focus:border-red-600 focus:ring-4 focus:ring-red-500/20
            hover:border-red-600`
  }

  if (success) {
    return `${baseStyles} bg-white border-2 border-green-500 text-gray-primary 
            focus:border-green-600 focus:ring-4 focus:ring-green-500/20
            hover:border-green-600`
  }

  switch (variant) {
    case 'filled':
      return `${baseStyles} bg-quaternary border-2 border-transparent text-gray-primary 
              focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/20
              hover:bg-tertiary`

    case 'outlined':
      return `${baseStyles} bg-transparent border-2 border-outline text-gray-primary 
              focus:border-primary focus:ring-4 focus:ring-primary/20 focus:bg-white
              hover:border-primary/60`

    default: // default
      return `${baseStyles} bg-dark border-2 border-transparent text-gray-primary 
              focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/20
              hover:bg-quaternary`
  }
}

const LoadingSpinner = () => (
  <svg
    className="h-4 w-4 animate-spin text-primary"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

function getLabelTextClass(hasError: boolean, success: boolean) {
  if (hasError) return 'text-red-600'
  if (success) return 'text-green-600'
  return 'text-gray-primary'
}

function getHelperTextClass(hasError: boolean, success: boolean) {
  if (hasError) return 'text-red-600'
  if (success) return 'text-green-600'
  return 'text-gray-secondary'
}

function getAriaDescribedBy(hasError: boolean, helperText?: string) {
  if (hasError) return 'error-message'
  if (helperText) return 'helper-text'
  return undefined
}

function getInputClassName({
  size,
  variant,
  error,
  success,
  disabled,
  hasLeftIcon,
  hasRightIcon,
  multiline,
  className,
}: {
  size: InputProps['size']
  variant: InputProps['variant']
  error?: string
  success: boolean
  disabled?: boolean
  hasLeftIcon: boolean
  hasRightIcon: boolean
  multiline: boolean
  className?: string
}) {
  return [
    'w-full rounded-lg font-medium placeholder:text-gray-tertiary',
    getSizeStyles(size),
    getVariantStyles(variant, error, success, disabled),
    hasLeftIcon ? 'pl-10' : '',
    hasRightIcon ? 'pr-10' : '',
    multiline ? 'min-h-[120px] resize-y' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

type InputLabelProps = {
  label?: string
  hasError: boolean
  success: boolean
}

const InputLabel = ({ label, hasError, success }: InputLabelProps) => {
  if (!label) return null

  return (
    <label
      className={`mb-2 block text-sm font-medium transition-colors duration-200 ${getLabelTextClass(
        hasError,
        success
      )}`}
    >
      {label}
    </label>
  )
}

type InputAdornmentProps = {
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

const LeftAdornment = ({ hasLeftIcon = false, leftIcon }: InputAdornmentProps) => {
  if (!hasLeftIcon) return null

  return (
    <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform text-icon">
      {leftIcon}
    </div>
  )
}

const RightAdornment = ({
  hasRightIcon = false,
  rightIcon,
  loading = false,
}: InputAdornmentProps) => {
  if (!hasRightIcon) return null

  return (
    <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform text-icon">
      {loading ? <LoadingSpinner /> : rightIcon}
    </div>
  )
}

type InputHelperProps = {
  error?: string
  success: boolean
  helperText?: string
  hasError: boolean
}

const InputHelper = ({ error, success, helperText, hasError }: InputHelperProps) => {
  if (!hasError && !helperText) return null

  return (
    <div className="mt-2 flex items-start gap-1">
      {hasError && (
        <svg
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      )}

      {success && !hasError && (
        <svg
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}

      <p
        id={hasError ? 'error-message' : 'helper-text'}
        className={`text-sm transition-colors duration-200 ${getHelperTextClass(hasError, success)}`}
      >
        {hasError ? error : helperText}
      </p>
    </div>
  )
}

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
  const hasError = !!error
  const hasLeftIcon = !!leftIcon
  const hasRightIcon = !!rightIcon || loading
  const describedBy = getAriaDescribedBy(hasError, helperText)
  const inputClassName = getInputClassName({
    size,
    variant,
    error,
    success,
    disabled,
    hasLeftIcon,
    hasRightIcon,
    multiline,
    className,
  })

  return (
    <div className="w-full">
      <InputLabel label={label} hasError={hasError} success={success} />

      <div className="relative">
        <LeftAdornment hasLeftIcon={hasLeftIcon} leftIcon={leftIcon} />

        <InputOrTextArea
          className={inputClassName}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          {...rest}
        />

        <RightAdornment hasRightIcon={hasRightIcon} rightIcon={rightIcon} loading={loading} />

        <div
          className={`pointer-events-none absolute inset-0 rounded-lg transition-all duration-200 ${
            !disabled && !hasError && !success
              ? 'group-focus-within:ring-4 group-focus-within:ring-primary/20'
              : ''
          } `}
        />
      </div>

      <InputHelper error={error} success={success} helperText={helperText} hasError={hasError} />
    </div>
  )
}

export default Input
