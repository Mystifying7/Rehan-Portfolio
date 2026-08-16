import { motion } from "framer-motion";

function SectionReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;