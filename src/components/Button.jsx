import { twMerge } from 'tailwind-merge'
import { buttonStyle } from './buttonStyle'


const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
        {...props}
        className={twMerge(buttonStyle({variant,size}), className)}
    />
  )
}

export default Button