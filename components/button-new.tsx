
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string
};

export default function ButtonNew({ className, onClick, children }: ButtonProps) {

  return (
    <button className={` p-2 rounded-full text-white dark:text-neutral-800 bg-green-400 hover:opacity-80 transition cursor-pointer ${className}`} onClick={onClick}>
      
        <div>{children}</div>
    </button>

  );
}
