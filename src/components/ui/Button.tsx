'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-background text-primary-foreground hover:bg-primary-dark focus:ring-primary-light',
        secondary: 'bg-secondary-background text-secondary-foreground hover:bg-secondary-light focus:ring-secondary-dark',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-light',
        danger: 'bg-accent-red text-primary-foreground hover:bg-red-700 focus:ring-accent-red',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'center' | 'left' | 'right';
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  border_border?: string;
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  margin?: string;
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults
  text = "",
  text_font_size = "text-lg",
  text_font_family,
  text_font_weight = "font-medium",
  text_line_height = "leading-lg",
  text_text_align = "center",
  text_color = "text-primary-foreground",
  fill_background_color = "bg-accent-emerald",
  border_border_radius = "rounded-base",
  
  // Optional parameters (no defaults)
  border_border,
  layout_gap,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== ''
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidBorder ? `border-[${border_border}]` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles = {
    ...(text_font_family && !text_font_family?.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family?.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'left' ? 'text-left' : text_text_align === 'right' ? 'text-right' : '',
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    border_border_radius,
  ]?.filter(Boolean)?.join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event?.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button

