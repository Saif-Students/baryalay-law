import { motion } from 'framer-motion';

function GlobalAffiliations() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16  pt-16 lg:pt-28">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-color"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Global Affiliations
      </motion.h2>

      <motion.p
  className="text-base sm:text-lg md:text-xl mt-4"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <span className="font-variant-smallcaps">Baryalay.law</span> is a member of the Abasin Consult Global Network. As a member of the Abasin Consult Global Network, Baryalay.law is able to service clients across multiple service areas in Pakistan as well as the United Kingdom, Europe and the Middle East. The partner firms of Abasin Consult Global Network offer a comprehensive range of business advisory services including legal (corporate and dispute resolution), tax, accounting, audit and financial and business advisory services. 
</motion.p>

    </div>
  )
}

export default GlobalAffiliations
