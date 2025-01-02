import { motion } from 'framer-motion';

function GlobalAffiliations() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16  pt-16 lg:pt-28">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-primary-color"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Affiliations
      </motion.h2>

      <motion.p
  className="text-base sm:text-lg md:text-xl mt-4"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <span className="font-variant-smallcaps">Baryalay.law</span> is a member firm of Abasin Consult, a global network of closely affiliated corporate advisory service providers. As a member of the Abasin Consult,  <span className="font-variant-smallcaps">Baryalay.law</span> is able to service clients across multiple service areas in Pakistan as well as the United Kingdom, Europe and the Middle East. The partner firms of Abasin Consult offer a comprehensive range of business advisory services including legal (corporate and dispute resolution), tax, accounting, audit and financial advisory and business/transaction advisory services.  
</motion.p>
      <motion.p
  className="text-base sm:text-lg md:text-xl mt-4 text-[#212121]"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  <strong>For more information, please visit the Abasin Consult website: <a className='underline text-primary-color' target='_blank'  href="http://www.abacon.com/">www.abacon.com/</a></strong>
</motion.p>

    </div>
  )
}

export default GlobalAffiliations
