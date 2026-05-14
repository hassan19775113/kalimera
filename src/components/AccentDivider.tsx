interface AccentDividerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-4 md:h-5',
  md: 'h-6 md:h-8',
  lg: 'h-8 md:h-10',
};

const AccentDivider = ({ className = '', size = 'md' }: AccentDividerProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src="/willkommen-icon.png.webp"
        alt=""
        aria-hidden="true"
        className={`${sizeMap[size]} w-auto opacity-90 select-none`}
        draggable={false}
      />
    </div>
  );
};

export default AccentDivider;
