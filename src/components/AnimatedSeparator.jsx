import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedSeparator = () => {
  const { scrollYProgress } = useScroll();
  const gradientProgress = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <motion.div 
      className="w-full h-[1px] mb-9 relative"
      style={{
        background: useTransform(
          gradientProgress,
          (value) => `linear-gradient(90deg, 
            rgba(96, 165, 250, ${1 - value/100}) 0%,
            rgba(167, 139, 250, ${value/100}) 50%,
            rgba(236, 72, 153, ${1 - value/100}) 100%
          )`
        )
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default AnimatedSeparator; 