const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;