export type LinkProps = {
  children: React.ReactNode
  disabled?: boolean
  variant?: 'default' | 'button' | 'subtle' | 'underline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  external?: boolean
  loading?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function getVariantStyles(variant: LinkProps['variant'], disabled: boolean) {
  const baseDisabled = 'text-disabled cursor-not-allowed pointer-events-none'

  switch (variant) {
    case 'button':
      return disabled
        ? `${baseDisabled} bg-disabled border border-disabled`
        : `text-white bg-primary border border-primary rounded-lg px-4 py-2
           hover:bg-hover hover:border-hover hover:shadow-lg hover:shadow-primary/25
           active:bg-click active:scale-95 active:shadow-sm
           focus:ring-4 focus:ring-primary/30 focus:outline-none
           transition-all duration-200 ease-in-out
           hover:-translate-y-0.5 active:translate-y-0
           inline-flex items-center justify-center gap-2`

    case 'subtle':
      return disabled
        ? baseDisabled
        : `text-gray-secondary hover:text-primary
           transition-colors duration-200 ease-in-out
           hover:underline decoration-2 underline-offset-4`

    case 'underline':
      return disabled
        ? baseDisabled
        : `text-primary underline decoration-2 underline-offset-4 decoration-primary/60
           hover:decoration-primary hover:text-hover
           active:text-click
           transition-all duration-200 ease-in-out`

    default: // default
      return disabled
        ? baseDisabled
        : `text-primary relative
           hover:text-hover active:text-click
           transition-all duration-200 ease-in-out
           after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-current after:transition-all after:duration-200
           hover:after:w-full
           focus:ring-2 focus:ring-primary/30 focus:outline-none focus:rounded-sm`
  }
}

function getSizeStyles(size: LinkProps['size']) {
  switch (size) {
    case 'sm':
      return 'text-sm'
    case 'md':
      return 'text-md'
    case 'lg':
      return 'text-lg'
    default:
      return getSizeStyles('md')
  }
}

const LoadingSpinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
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

const ExternalIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const Link = ({
  children,
  href,
  disabled = false,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'left',
  external = false,
  loading = false,
  className,
  ...rest
}: LinkProps) => {
  const isDisabled = disabled || loading
  const isExternal =
    external || (href?.startsWith('http') && !href.includes(window?.location?.hostname))

  const linkProps = {
    href: isDisabled ? undefined : href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
    'aria-disabled': isDisabled,
    className: `
      font-medium
      ${getSizeStyles(size)}
      ${getVariantStyles(variant, isDisabled)}
      ${className}
    `,
    ...rest,
  }

  if (loading) {
    return (
      <a {...linkProps}>
        <span className="flex items-center gap-2">
          <LoadingSpinner />
          <span className="opacity-70">Carregando...</span>
        </span>
      </a>
    )
  }

  return (
    <a {...linkProps}>
      <span
        className={` ${variant === 'button' ? 'flex items-center gap-2' : 'inline-flex items-center gap-1'} `}
      >
        {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}

        <span>{children}</span>

        {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}

        {isExternal && !icon && <ExternalIcon />}
      </span>
    </a>
  )
}

export default Link
