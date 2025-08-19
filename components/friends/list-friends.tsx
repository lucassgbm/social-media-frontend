import Image from "next/image";
import MessageIcon from "../icons/message";
import EllipsisVerticalIcon from "../icons/ellipsis";

export default function ListFriends() {
    return (
        <div className="bg-white dark:bg-neutral-800 text-center rounded-2xl p-4 mb-4">
            <h1 className="text-md font-semibold mb-4">Amigos</h1>
            <div className="w-full flex flex-col gap-4">

                <div className="w-full flex flex-row justify-center items-center">
                    <div className="w-[30%]">
                        <Image
                            src="/imgs/deadpool.jpg"
                            alt="Foto de perfil"
                            className="rounded-full w-[120px] mr-4 hover:opacity-90"
                            width={120}
                            height={120}
                            priority
                        />
                    </div>
                    <label className="w-[40%] flex text-sm font-semibold justify-start">Nome fulano</label>
                    <div className="w-[30%] flex justify-end">
                        <div className="bg-neutral-100 rounded-full p-2 hover:bg-neutral-200">
                            <MessageIcon />
                        </div>
                        <div className="bg-neutral-100 rounded-full p-2 ml-2 hover:bg-neutral-200">
                            <EllipsisVerticalIcon 
                                className={"size-6"}
                            />

                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <div className="w-[30%]">
                        <Image
                            src="/imgs/deadpool.jpg"
                            alt="Foto de perfil"
                            className="rounded-full w-[120px] mr-4 hover:opacity-90"
                            width={120}
                            height={120}
                            priority
                        />
                    </div>
                    <label className="w-[40%] flex text-sm font-semibold justify-start">Nome fulano</label>
                    <div className="w-[30%] flex justify-end">
                        <div className="bg-neutral-100 rounded-full p-2 hover:bg-neutral-200">
                            <MessageIcon />
                        </div>
                        <div className="bg-neutral-100 rounded-full p-2 ml-2 hover:bg-neutral-200">
                            <EllipsisVerticalIcon 
                                className={"size-6"}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}