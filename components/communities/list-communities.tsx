import Image from "next/image";
import Card from "../card";
import Container from "../container";

export default function ListCommunities() {
    return (
        <Card className="rounded-2xl">

            <div className="w-full flex flex-col gap-4">

                <Image
                    src="/imgs/drift.jpg"
                    alt="Foto de perfil"
                    className="rounded-2xl w-full hover:opacity-90"
                    width={120}
                    height={120}
                    priority
                />
                <div className="flex flex-row space-x-2 justify-between">
                    <label className="text-md font-semibold">Nome comunidade</label>
                    <button className="w-[80px] bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2 px-3 rounded-2xl cursor-pointer">
                        Seguir
                    </button>
                </div>
                <div className="flex grid grid-cols-3 gap-2">
                    <div className="flex flex-col p-2 bg-neutral-700 items-center text-xs rounded-sm">30<span className="text-neutral-400">Membros</span></div>
                    <div className="flex flex-col p-2 bg-neutral-700 items-center text-xs rounded-sm">30<span className="text-neutral-400">Membros</span></div>
                    <div className="flex flex-col p-2 bg-neutral-700 items-center text-xs rounded-sm">30<span className="text-neutral-400">Membros</span></div>

                </div>
                <div>
                    <p className="text-sm text-justify text-gray-600 dark:text-gray-400">Descrição da comunidade. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
            </div>
        </Card>

    );
}