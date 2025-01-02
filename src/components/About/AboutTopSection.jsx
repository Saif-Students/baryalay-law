import { motion } from 'framer-motion';

function AboutTopSection() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16  pt-16 lg:pt-28">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-color"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        About us
      </motion.h2>

      <motion.p
  className="text-base sm:text-lg md:text-xl mt-4"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <span className="font-variant-smallcaps">Baryalay.law</span> is a boutique corporate law firm in Pakistan providing comprehensive legal and tax advisory services, serving both domestic and international clients. With a deep understanding of Pakistan's legal landscape and international best practices, we deliver:
</motion.p>

    </div>
  );
}

export default AboutTopSection;
