export default function Container(props: any)
{
    return (
        <div 
            className={`
            dark:bg-neutral-900 
            dark:text-white 
            bg-white 
            text-gra
            rounded-2xl 
            p-4 
            ${props.className || ""}`}
            >
            {props.children}
        </div>
    )
}