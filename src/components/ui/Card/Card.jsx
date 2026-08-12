const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-shadow
        duration-500
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;