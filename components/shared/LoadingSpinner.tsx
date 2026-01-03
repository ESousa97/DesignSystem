import type { ReactNode } from 'react'

export type LoadingSpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface LoadingSpinnerProps {
  /** Size of the spinner */
  size?: LoadingSpinnerSize
  /** Custom class name */
  className?: string
}

const sizeClasses: Record<LoadingSpinnerSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-6 w-6',
}

/**
 * LoadingSpinner - A shared loading indicator component
 *
 * Used across Button, Input, Link and other components
 * that need to display a loading state.
 */
export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps): ReactNode => (
  <svg
    className={`animate-spin ${sizeClasses[size]} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="status"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

export default LoadingSpinner
