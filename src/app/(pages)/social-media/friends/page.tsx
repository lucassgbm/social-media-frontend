
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
import ButtonNew from "../../../../../components/button-new";
import FilterIcon from "../../../../../components/icons/filter";
import ArrowLeftIcon from "../../../../../components/icons/arrow-left";
import ArrowRightIcon from "../../../../../components/icons/arrow-right";

export default function Home() {
    return (
        <>

            <div className="w-5/6 flex flex-row gap-4">
                <Container className="w-full h-full " padding="p-0">
                    <div className="flex flex-col gap-2 border-b border-neutral-200 dark:border-neutral-800 p-4">
                        <div>

                            <h1 className="text-2xl font-semibold mb-4">Amigos</h1>
                        </div>
                        
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 p-4">

                        <Card className="h-auto col-span-2 rounded-2xl mb-4">
                            <div className="flex flex-col mb-4 p-2">
                                <div className="flex flex-row mb-4">
                                    <h2 className="w-[200px] text-sm text-neutral-800 dark:text-white font-semibold">Favoritos</h2>
                                    <div className="w-full flex justify-end">

                                        <input className="text-sm text-gray-700 dark:text-white bg-white dark:bg-neutral-700 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg pl-2 py-2" type="text" placeholder="Procurar"></input>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-2">

                                    <ListFriends />
                                    <ListFriends />
                                    <ListFriends />
                                    <ListFriends />
                                    <ListFriends />
                                    <ListFriends />
                                </div>
                            </div>
                        </Card>
                        <Card className="h-[200px] rounded-2xl p-4">
                            <h2 className="text-md mb-4">
                                Pedido de amizade
                            </h2>
                            <div className="flex flex-col gap-2">

                                <div className="h-[auto] flex flex-row justify-between items-center">
                                    <Image
                                        src="/imgs/bmw.jpg"
                                        alt="Foto de perfil"
                                        className="rounded-full w-[60px] mr-4 hover:opacity-90"
                                        width={120}
                                        height={120}
                                    />
                                    <Button>
                                        <CloseIcon className="size-4" />
                                    </Button>
                                    <Button>
                                        <CheckIcon className="size-4" />

                                    </Button>
                                </div>
                                <div className="h-[auto] flex flex-row justify-between items-center">
                                    <Image
                                        src="/imgs/bmw.jpg"
                                        alt="Foto de perfil"
                                        className="rounded-full w-[60px] mr-4 hover:opacity-90"
                                        width={120}
                                        height={120}
                                    />
                                    <Button>
                                        <CloseIcon className="size-4" />
                                    </Button>
                                    <Button>
                                        <CheckIcon className="size-4" />

                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-col p-4">
                        <Card className="p-4 mb-4 rounded-2xl">
                            <div className="flex flex-row mb-4">

                                <h2 className="w-[200px] text-sm text-neutral-800 dark:text-white font-semibold">Todos os amigos</h2>
                                <div className="w-full flex justify-end">

                                    <input className="text-sm text-gray-700 dark:text-white bg-white dark:bg-neutral-700 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg pl-2 py-2" type="text" placeholder="Procurar"></input>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                    
                                <div className="flex flex-row gap-2 mb-4">

                                    <ButtonNew>
                                        <PlusIcon />
                                    </ButtonNew>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <ListFriends />
                                <ListFriends />
                                <ListFriends />
                                <ListFriends />
                                <ListFriends />
                                <ListFriends />
                            </div>
                        </Card>
                    </div>
                </Container>
            </div>

        </>
    )
}