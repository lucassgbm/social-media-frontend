import Button from "./button";
import CloseIcon from "./icons/close";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Toaster(props: any){
    return (
        <div className="flex flex-row fixed bottom-4 right-4 bg-gradient-to-r from-gray-100 to-neutral-200 dark:bg-gradient-to-r dark:from-green-900 dark:to-neutral-900 dark:text-white w-[auto] min-w-[280px] h-[auto] text-sm font-semibold p-2 shadow-md items-center z-50">
          <p className="flex w-[80%]">
            {props.toaster.message}
          </p>
          <div className="flex w-[20%] justify-end">
            <Button onClick={() => props.setToaster({...props.toaster, show: false})}>
                <CloseIcon className="size-3 dark:text-white text-neutral-800"/>
            </Button>
          </div>
        </div>
    )
}