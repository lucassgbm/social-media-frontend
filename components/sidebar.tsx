import Image from "next/image";
import HomeIcon from "./icons/home";
import UsersIcon from "./icons/users";
import CommunityIcon from "./icons/community";
import TrophyIcon from "./icons/trophy";
import MessageIcon from "./icons/message";
import SettingsIcon from "./icons/settings";

export default function Sidebar() {
    return (
        <div className="w-1/6 bg-white rounded-2xl p-4">
            <div className="text-center mb-4">
                <Image
                    src="/imgs/kratos.jpg"
                    alt="Foto de perfil"
                    className="w-full rounded-full mb-4"
                    width={250}
                    height={250}
                    priority
                />
                <label className="text-lg font-semibold">Kleitones da Silva</label>
            </div>
            <nav className="flex flex-col gap-4 items-center">
                <ul className="list-none">
                    <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <div className="bg-gray-100 rounded-full p-2">
                        <HomeIcon />
                    </div>
                        <label className="text-sm font-semibold">Home</label>

                    </li>
                    <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <div className="bg-gray-100 rounded-full p-2">
                        <UsersIcon />
                    </div>
                    <label className="text-sm font-semibold">Amigos</label>

                    </li>
                    <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <div className="bg-gray-100 rounded-full p-2">
                        <CommunityIcon />
                    </div>
                    <label className="text-sm font-semibold">Comunidades</label>

                    </li>
                    <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <div className="bg-gray-100 rounded-full p-2">
                        <TrophyIcon />
                    </div>
                    <label className="text-sm font-semibold">Eventos</label>

                    </li>
                    
                    <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <div className="bg-gray-100 rounded-full p-2">
                        <MessageIcon />
                    </div>
                    
                    <label className="text-sm font-semibold">Mensagens</label> 
                    <span className="bg-[#f53003] rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">3</span>
                    
                    </li>
                    <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <div className="bg-gray-100 rounded-full p-2">
                        <SettingsIcon />
                    </div>
                    
                    <label className="text-sm font-semibold">Configurações</label>
                    
                    </li>
                    
                </ul>

            </nav>
        </div>
    );
}