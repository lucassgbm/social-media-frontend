import { ReactNode } from "react";
interface ContainerProps {
  className?: string;
  children?: ReactNode;
  transparent?: boolean
}

export default function Container({ className, children, transparent }: ContainerProps)
{
    return (
        <div 
            className={`
            ${transparent ? 'bg-transparent' : 'dark:bg-neutral-900 dark:shadow-neutral-md bg-white shadow-md'}
            dark:text-white
            text-gray 
            p-4 
            ${className}`}
            >
            {children}
        </div>
    )
}