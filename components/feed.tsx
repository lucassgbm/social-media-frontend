import Image from "next/image";
import HeartIcon from "./icons/heart";
import MessageIcon from "./icons/message";

export default function Feed(){
    return (

        <div className="bg-white rounded-2xl p-4 mb-4">
            <div className="flex flex-row gap-4 items-center mb-4">

                <Image
                src="/imgs/kratos.jpg"
                alt="Foto de perfil"
                className="rounded-full"
                width={50}
                height={50}
                priority
                />
                <div className="flex flex-col">
                <label className="text-sm font-semibold">Kleitones da Silva</label>
                <label className="text-sm font-normal text-gray-400">01/08/2025</label>
                </div>
            </div>
            <Image
                src="/imgs/s1000rr.webp"
                alt="Foto de perfil"
                className="w-full"
                width={500}
                height={500}
                priority
            />
            <p className="text-sm mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="w-full flex flex-row gap-4 items-center mt-4">
                <div className="flex flex-row gap-1 items-center">
                    <HeartIcon />
                    <label className="text-sm font-semibold">177</label>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <MessageIcon />
                    <label className="text-sm font-semibold">8</label>

                </div>
            </div>
        </div>
    )
}