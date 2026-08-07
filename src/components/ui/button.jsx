import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
}) => {

  const styles = {
    primary:
      "bg-black text-white hover:bg-zinc-800",

    secondary:
      "bg-white text-black border border-black hover:bg-gray-100",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`
        px-6
        py-3
        rounded-xl
        transition-all
        duration-300
        ${styles[variant]}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;