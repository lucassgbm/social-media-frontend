'use client';

import ProfileInfo from "../../../../../../components/profile/profile-info";
// @ts-expect-error missing types
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";
import Container from "../../../../../../components/container";
import Card from "../../../../../../components/card";
import UsersIcon from "../../../../../../components/icons/users";
import TrophyIcon from "../../../../../../components/icons/trophy";
import CommunityIcon from "../../../../../../components/icons/community";
import ColorButton from "../../../../../../components/color-button";
import PlusIcon from "../../../../../../components/icons/plus";
import { useContext, useState } from "react";
import { AppContext } from "../../layout";
import RingImage from "../../../../../../components/ring-image";
import MessageIcon from "../../../../../../components/icons/message";
import PencilSquareIcon from "../../../../../../components/icons/pencil-square";

export default function Home(){
    const context = useContext(AppContext);
    const { myInfo } = context;
    const [tab, setTab] = useState("fotos");

    const imageUser = myInfo?.photo
    ? `${process.env.NEXT_PUBLIC_STORAGE_API?.replace(/\/$/, '')}/${myInfo.photo?.replace(/^\//, '')}`
    : null;

    return(
        <>

            <div className="w-full sm:w-5/6 flex flex-col gap-4">
                <Container className="h-full " padding="p-0">
                    <div className="flex flex-col gap-4 mb-4 flex-wrap">
                        <div className="flex flex-col gap-2 border-b border-neutral-200 dark:border-neutral-800 p-4">
                            <p className="text-sm">
                                <span className="font-semibold text-neutral-400">
                                    <a href="/social-media">Home / </a> 
                                    
                                </span> Perfil
                            </p>
                            
                        </div>
                    </div>
                    <div className="w-full p-4">
                        <div className="flex flex-row gap-4 mb-4 items-center">
                            <RingImage>

                                <Image
                                    src={myInfo?.photo ? imageUser : "/imgs/placeholder.png"}
                                    alt="Capa do perfil"
                                    width={500}
                                    height={500}
                                    className="w-[200px] aspect-[1/1] object-cover rounded-full"
                                />
                            </RingImage>
                            <div className="w-full flex flex-col justify-end">

                                <h1 className="text-2xl font-semibold mb-4">{myInfo?.name}</h1>
                                <p className="text-sm mb-4">{myInfo?.autodescription}</p>
                                <div className="w-full flex flex-row gap-2 mb-4">

                                    <ColorButton className="rounded-md text-sm font-semibold w-[100px]">
                                        <div className="flex flex-row gap-2 items-center">
                                            <PlusIcon className="size-4"/>
                                            Adicionar

                                        </div>
                                    </ColorButton>
                                    <ColorButton className="rounded-md text-sm font-semibold">
                                        <div className="flex flex-row gap-2 items-center">
                                            <MessageIcon className="size-4"/>
                                            Mensagens

                                        </div>
                                    </ColorButton>

                                    <Link href="/social-media/profile/edit">
                                        <ColorButton className="rounded-md text-sm font-semibold" bgColor="bg-blue-500">
                                            <div className="flex flex-row gap-2 items-center">
                                                <PencilSquareIcon className="size-4"/>
                                                Editar

                                            </div>
                                        </ColorButton>
                                    </Link>
                                </div>
                                <div className="w-[40%] flex flex-row gap-2">
                                    <Card className="w-full rounded-2xl">
                                        <span className="text-xs text-neutral-400 font-semibold">200 Amigos</span>
                                    </Card>
                                    <Card className="w-full rounded-2xl">
                                        <span className="text-xs text-neutral-400 font-semibold">10 Comunidades</span>
                                    </Card>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex flex-row pl-4 border-b border-neutral-200 dark:border-neutral-800">
                        <div className="flex flex-row gap-2">
                            <div className="p-2 hover:bg-neutral-800 border-b-4 border-neutral-800 cursor-pointer font-semibold">Fotos</div>
                            <div className="p-2 hover:bg-neutral-800 border-b-4 border-transparent cursor-pointer font-semibold">Posts</div>
                            <div className="p-2 hover:bg-neutral-800 border-b-4 border-transparent cursor-pointer font-semibold">Amigos</div>
                            <div className="p-2 hover:bg-neutral-800 border-b-4 border-transparent cursor-pointer font-semibold">Comunidades</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-4">
                        
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                        <Card className="w-full rounded-2xl aspect-[1/1]" gradient/>
                    
                    </div>                    
                    
                </Container>
            </div>
                
        </>
    )
}