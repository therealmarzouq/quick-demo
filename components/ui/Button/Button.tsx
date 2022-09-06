import cn from 'clsx'
import React, {
  forwardRef,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from 'react'
import mergeRefs from 'react-merge-refs'
import s from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'text'
    | 'iconPrimary'
    | 'iconOutline'
    | 'socialAuthentication'
    | 'custom'
  size?: 'lg' | 'md' | 'sm'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  Component?: string | JSXElementConstructor<any>
  width?: string | number
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant,
    size,
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(
    s.root,
    {
      [s.small]: size === 'sm',
      [s.medium]: size === 'md',
      [s.large]: size === 'lg',
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
      [s.outline]: variant === 'outline',
      [s.text]: variant === 'text',
      [s.iconOutline]: variant === 'iconOutline',
      [s.socialAuthentication]: variant === 'socialAuthentication',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Button
