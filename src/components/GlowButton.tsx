import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined';
  className?: string;
}

const GlowButton = ({ children, href, onClick, type = 'button', variant = 'filled', className = '' }: GlowButtonProps) => {
  const button = (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`glow-button ${variant} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className={`glow-button ${variant} ${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return button;
};

export default GlowButton;
