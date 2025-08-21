import Link from "next/link";
import Button from "./button";
import Container from "./container";
import HomeIcon from "./icons/home";
import SettingsIcon from "./icons/settings";
import CommunityIcon from "./icons/community";
import UsersIcon from "./icons/users";
import Image from "next/image";

export default function BottomMenu(){
    return (
        <Container className="sm:hidden flex fixed w-full bg-white -ml-6 bottom-0 rounded-0">
            <nav className="w-full">
                    
                    <ul className="flex flex-row list-none justify-center">
                        <Link href="/profile">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                
                                <Image
                                    src="/imgs/kratos.jpg"
                                    alt="Foto de perfil"
                                    className="w-[45px] rounded-full mb-4"
                                    width={250}
                                    height={250}
                                    priority
                                />
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                
                                <Button>
                                    <HomeIcon className="size-8 dark:text-white text-neutral-800"/>
                                </Button>

                            </li>
                        </Link>
                        
                        <Link href="/friends">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                <Button>
                                    <UsersIcon className="size-8 dark:text-white text-neutral-800"/>
                                </Button>

                            </li>
                        </Link>
                        <Link href="/communities">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">
                                <Button>
                                    <CommunityIcon className="size-8 dark:text-white text-neutral-800"/>
                                </Button>


                            </li>
                        </Link>
                        
                        <Link href="/settings">
                            <li className="flex w-full items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-950 cursor-pointer">

                            <Button>
                                <SettingsIcon className="size-8 dark:text-white text-neutral-800"/>
                            </Button>
                                                        
                            </li>
                        </Link>
                        
                    </ul>

                </nav>
        </Container>
    )
}