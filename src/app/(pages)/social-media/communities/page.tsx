'use client';
import Image from "next/image";
import Container from "../../../../../components/container";
import Button from "../../../../../components/button";
import CloseIcon from "../../../../../components/icons/close";
import CheckIcon from "../../../../../components/icons/check";
import SearchIcon from "../../../../../components/icons/search";
import PlusIcon from "../../../../../components/icons/plus";
import ListCommunities from "../../../../../components/communities/list-communities";
import Card from "../../../../../components/card";
import FilterIcon from "../../../../../components/icons/filter";
import { useState } from "react";
import Modal from "../../../../../components/modal";

export default function Home(){
    
    const [modalNewCommunity, setModalNewCommunity] = useState(false);
    return(
        <>
        
            <div className="w-5/6 flex flex-col">
                <Card className="rounded-2xl h-40 mb-4" gradient={true}></Card>
                <h1 className="text-2xl font-semibold mb-4">Comunidades</h1>
                <Container>
                    <div className="flex flex-row">
                    </div>
                    <div className="flex flex-row gap-2 mb-4">
                        <div className="flex flex-row w-full items-center bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg px-5 pl-5">
                            <SearchIcon className="dark:text-white"/>
                            <input className="ml-2 w-full focus:outline-none w-full text-gray-600 dark:text-white rounded-sm ml-2 pr-4" type="text" placeholder="Procurar comunidade"></input>
                        </div>
                        <Button>
                            <FilterIcon />
                        </Button>
                        
                    </div>
                    <div className="flex flex-col gap-4 mb-4 flex-wrap">
                        <div className="flex flex-row gap-2">
                            <Button 
                                onClick={() => setModalNewCommunity(true)}
                            >
                                <PlusIcon />
                            </Button>
                            <div className="w-full flex flex-row items-center gap-2">

                                <div className="flex flex-row items-center bg-neutral-800 hover:bg-neutral-900 text-xs font-semibold py-1 px-1 pl-2 pr-2 rounded-2xl cursor-pointer gap-2">
                                    Automobilismo
                                    <CloseIcon className="size-3" />
                                </div>
                                <div className="flex flex-row items-center bg-neutral-800 hover:bg-neutral-900 text-xs font-semibold py-1 px-1 pl-2 pr-2 rounded-2xl cursor-pointer gap-2">
                                    <CloseIcon className="size-3" />
                                    Automobilismo
                                </div>
                            </div>
                        </div>
                        <ListCommunities /> 
                        <ListCommunities /> 
                        <ListCommunities /> 
                        <ListCommunities />
                        <ListCommunities />
                        <ListCommunities /> 
                    </div>
                </Container>

            </div>
            <Modal 
                isOpen={modalNewCommunity} 
                onClose={() => {
                setModalNewCommunity(false);
                }} 
                title="Nova comunidade"
            >
                <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold text-xs mb-2">Nome</label>
                        <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="text" placeholder="Digite o nome da comunidade"></input>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="font-semibold text-xs mb-2">Categoria</label>
                        <select className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm">
                            <option value="">Selecione</option>
                            <option value="1">Automobilismo</option>
                            <option value="2">Programação</option>
                            <option value="3">Games</option>
                            <option value="4">Música</option>
                            <option value="5">Filmes</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="font-semibold text-xs mb-2">Foto</label>
                        <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="file" placeholder="Escolha uma foto"></input>

                    </div>
                    <div className="w-full flex flex-col">
                        <label className="font-semibold text-xs mb-2">Descrição</label>
                        <textarea className="w-full cols-1 rows-4 text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" placeholder="Digite uma descrição"></textarea>

                    </div>
                    <div className="w-full flex flex-col items-center">
                        <button type="submit" className="w-[100px] bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-2 pl-6 pr-6 rounded-sm cursor-pointer">
                            Criar
                        </button>
                    </div>
                </div>
            </Modal>
            

        </>
    )
}
