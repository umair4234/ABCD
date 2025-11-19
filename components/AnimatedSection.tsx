import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 0, style, ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      {...rest}
      ref={ref}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;