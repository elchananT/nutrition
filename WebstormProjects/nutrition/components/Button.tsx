import React, {ReactNode} from 'react'

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    size?: 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button = ({ onClick, children, variant = 'primary', className = "", size = 'large' }: ButtonProps) => {
    const variants = {
        primary: "bg-[#00FF99] text-black rounded-xl font-semibold glow-button focus-ring transition-all duration-300",
        secondary: "border border-[#00FF99] text-[#00FF99] rounded-xl font-semibold hover:bg-[#00FF99] hover:text-black focus-ring transition-all duration-300"
    }
    const sizes = {
        medium: "px-6 py-2",
        large: "px-8 py-4 text-lg max-md:text-md"
    }

    return (
        <button
            onClick={onClick}
            className={`${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    )
}
export default Button
