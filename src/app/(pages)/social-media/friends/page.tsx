
import Image from "next/image";
import Container from "../../../../../components/container";
import ListFriends from "../../../../../components/friends/list-friends";
import Button from "../../../../../components/button";
import CloseIcon from "../../../../../components/icons/close";
import CheckIcon from "../../../../../components/icons/check";
import SearchIcon from "../../../../../components/icons/search";
import PlusIcon from "../../../../../components/icons/plus";
import Card from "../../../../../components/card";
import Modal from "../../../../../components/modal";

export default function Home(){
    return(
        <>
        
            <div className="w-5/6 flex flex-row gap-4">
                <div className="w-4/6 flex flex-col">
                    <h1 className="text-2xl font-semibold mb-4">Amigos</h1>
                    <Container>
                        <div className="flex flex-row">
                        </div>
                        <div className="flex flex-row gap-2 mb-4">
                            <div className="flex flex-row w-3/4 items-center bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg px-5 pl-5">
                                <SearchIcon className="dark:text-white"/>
                                <input className="ml-2 w-full focus:outline-none w-full text-gray-600 dark:text-white rounded-sm ml-2 pr-4" type="text" placeholder="Procurar amigo"></input>
                            </div>
                            <div className="flex flex-row w-1/4 justify-end items-center">
                                <Button>
                                    <PlusIcon />
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 mb-4 flex-wrap">
                            <ListFriends /> 
                            <ListFriends /> 
                            <ListFriends /> 
                            <ListFriends />
                            <ListFriends />
                            <ListFriends /> 
                        </div>
                    </Container>

                </div>

                <div className="w-2/6 flex flex-col">
                    <Container>
                        <h2 className="text-md mb-4">
                            Pedido de amizade
                        </h2>
                        <div className="flex flex-col gap-2">

                            <div className="h-[auto] flex flex-row justify-between items-center">
                                <Image
                                    src="/imgs/kratos.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-full w-[60px] mr-4 hover:opacity-90"
                                    width={120}
                                    height={120}
                                />
                                <Button>
                                    <CloseIcon className="size-4"/>
                                </Button>
                                <Button>
                                    <CheckIcon className="size-4"/>

                                </Button>
                            </div>
                            <div className="h-[auto] flex flex-row justify-between items-center">
                                <Image
                                    src="/imgs/kratos.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-full w-[60px] mr-4 hover:opacity-90"
                                    width={120}
                                    height={120}
                                />
                                <Button>
                                    <CloseIcon className="size-4"/>
                                </Button>
                                <Button>
                                    <CheckIcon className="size-4"/>

                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

        </>
    )
}