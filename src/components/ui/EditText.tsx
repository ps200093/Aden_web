'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { forwardRef, InputHTMLAttributes } from 'react';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border border-border-success bg-input-background text-input-text focus:ring-primary-light',
        outline: 'border-2 border-border-primary bg-transparent focus:ring-primary-light',
        filled: 'border-0 bg-background-gray text-text-primary focus:ring-primary-light',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface EditTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof editTextClasses> {
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: 'center' | 'left' | 'right';
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "ADEN은 광고주의 \"전환율\"만으로 평가받습니다.",
  text_font_size = "text-base",
  text_font_family = "Noto Sans KR",
  text_font_weight = "font-medium",
  text_line_height = "leading-base",
  text_text_align = "left",
  text_color = "text-primary-dark",
  fill_background_color = "bg-background-success",
  border_border = "1px solid #a7f3d0",
  border_border_radius = "rounded-base",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  type = 'text',
  disabled = false,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles = {
    ...(text_font_family && !text_font_family?.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Parse border from string format
  const parseBorder = (borderStr: string | undefined) => {
    if (!borderStr || typeof borderStr !== 'string') return ''
    
    // Handle format like "1px solid #a7f3d0"
    const parts = borderStr?.split(' ')
    if (parts?.length >= 3) {
      const width = parts?.[0]
      const style = parts?.[1]
      const color = parts?.[2]
      
      // Map color to Tailwind if available
      const borderColor = color === '#a7f3d0' ? 'border-border-success' : `border-[${color}]`
      return `border-[${width}] border-${style} ${borderColor}`
    }
    return `border-[${borderStr}]`
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
    !variant ? parseBorder(border_border) : '',
    border_border_radius,
  ]?.filter(Boolean)?.join(' ')

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={customStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
})

EditText.displayName = 'EditText'

export default EditText

