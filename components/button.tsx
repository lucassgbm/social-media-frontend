
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ onClick, children }: ButtonProps) {

  return (
    <button className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:opacity-80 transition cursor-pointer" onClick={onClick}>
      
        <div>{children}</div>
    </button>

  );
}
