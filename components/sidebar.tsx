import Image from "next/image";
import HomeIcon from "./icons/home";
import UsersIcon from "./icons/users";
import CommunityIcon from "./icons/community";
import TrophyIcon from "./icons/trophy";
import MessageIcon from "./icons/message";
import SettingsIcon from "./icons/settings";
import Link from "next/link";
import ProfileIcon from "./icons/profile";
import Container from "./container";
import Button from "./button";
import ArrowLeftIcon from "./icons/arrow-left";
import { useState } from "react";
import ArrowRightIcon from "./icons/arrow-right";

export default function Sidebar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <Button
                className="absolute fixed sm:hidden flex" 
                onClick={() => setShowMenu(!showMenu)}>
                <ArrowRightIcon className="size-6 dark:text-white text-neutral-800"/>
            </Button>
            <Container className={`${showMenu ? "hidden" : ""} absolute fixed sm:relative sm:flex flex-col sm:w-1/6`}>
                <div className="flex justify-center mb-4">
                    <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="w-[45px] sm:w-full rounded-full mb-4"
                        width={250}
                        height={250}
                        priority
                    />
                </div>
                <nav className="flex flex-col gap-4 items-center">
                    <ul className="list-none">
                        <li className="sm:hidden flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                            
                            <Button onClick={() => setShowMenu(!showMenu)}>
                                <ArrowLeftIcon className="size-6 dark:text-white text-neutral-800"/>
                            </Button>
                        </li>

                        <Link href="/">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                
                                <Button>
                                    <HomeIcon className="size-6 dark:text-white text-neutral-800"/>
                                </Button>
                                <label className="hidden md:block text-sm font-semibold">Home</label>

                            </li>
                        </Link>
                        <Link href="/profile">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                
                                <Button>
                                    <ProfileIcon className="size-6 dark:text-white text-neutral-800"/>
                                </Button>
                                <label className="hidden md:block text-sm font-semibold">Perfil</label>

                            </li>
                        </Link>
                        <Link href="/friends">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                <Button>
                                    <UsersIcon className="size-6 dark:text-white text-neutral-800"/>
                                </Button>
                                <label className="hidden md:block text-sm font-semibold">Amigos</label>

                            </li>
                        </Link>
                        <Link href="/communities">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                <Button>
                                    <CommunityIcon className="size-6 dark:text-white text-neutral-800"/>
                                </Button>

                                <label className="hidden md:block text-sm font-semibold">Comunidades</label>

                            </li>
                        </Link>
                        <Link href="/events">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                <Button>
                                    <TrophyIcon className="size-6 dark:text-white text-neutral-800"/>
                                </Button>
                            
                            <label className="hidden md:block text-sm font-semibold">Eventos</label>

                            </li>
                        </Link>
                        <Link href="/messages">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                            
                            <Button>
                                <MessageIcon className="size-6 dark:text-white text-neutral-800"/>
                            </Button>
                            
                            <label className="hidden md:block text-sm font-semibold">Mensagens</label> 
                            <span className="hidden md:block bg-[#f53003] rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">3</span>
                            
                            </li>
                        </Link>
                        <Link href="/settings">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">

                            <Button>
                                <SettingsIcon className="size-6 dark:text-white text-neutral-800"/>
                            </Button>
                            
                            <label className="hidden md:block text-sm font-semibold">Configurações</label>
                            
                            </li>
                        </Link>
                        
                    </ul>

                </nav>
            </Container>
        </>
    );
}