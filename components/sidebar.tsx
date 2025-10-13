'use client';

import { useContext, useState } from "react";
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
import ArrowRightIcon from "./icons/arrow-right";
import Skeleton from "./skeleton";
import { AppContext } from "@/app/(pages)/social-media/layout";
import Card from "./card";
import RingImage from "./ring-image";
import PhotoIcon from "./icons/photo";
import CameraIcon from "./icons/camera";



export default function Sidebar() {

    
    const context = useContext(AppContext);

    const { myInfo } = context;

    const imageUser = myInfo?.photo
    ? `${process.env.NEXT_PUBLIC_STORAGE_API?.replace(/\/$/, '')}/${myInfo.photo?.replace(/^\//, '')}`
    : null;
    return (
        <>
            
            <Container className="sticky top-0 h-screen hidden sm:flex flex-col sm:w-1/6">
                <div className="flex justify-center mb-4">
                    {imageUser && (
                        
                        <RingImage className="relative w-[45px] sm:w-[80%]" padding="p-[2px] sm:p-[4px]">
                            <Image
                                src={imageUser ?? "/imgs/placeholder.png"}
                                alt="Foto de perfil"
                                className="rounded-full"
                                width={250}
                                height={250}
                                priority
                                unoptimized
                            />

                        </RingImage>
                       
                    )}

                    {!imageUser && (
                        <div className="w-full flex flex-col items-center">
                            <Skeleton height={"h-full"} width={"w-[80%]"}  rounded="full" className="aspect-[1/1] mb-4" />
                        </div>
                    )}
                </div>
                <Card className="flex flex-col md:flex-row rounded-lg gap-2 mb-4">
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <label className="font-semibold text-sm">213</label>
                        <label className="text-xs text-gray-400">friends</label>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <label className="font-semibold text-sm">16</label>
                        <label className="text-xs text-gray-400">Communities</label>
                    </div>
                    

                </Card>
                <nav className="w-full flex flex-col gap-2 overflow-y-auto">
                    <ul className="list-none">

                        <Link href="/social-media">
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">
                                
                                <Button>
                                    <HomeIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>
                                <label className="hidden md:flex text-sm font-semibold">Home</label>

                            </li>
                        </Link>
                        <Link href={`/social-media/profile/${myInfo?.name}`}>
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">
                                
                                <Button>
                                    <ProfileIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>
                                <label className="hidden md:flex text-sm font-semibold">Perfil</label>

                            </li>
                        </Link>
                        <Link href="/social-media/friends">
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">
                                <Button>
                                    <UsersIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>
                                <label className="hidden md:flex text-sm font-semibold">Amigos</label>

                            </li>
                        </Link>
                        <Link href="/social-media/communities">
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">
                                <Button>
                                    <CommunityIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>

                                <label className="hidden md:flex text-sm font-semibold">Comunidades</label>

                            </li>
                        </Link>
                        <Link href="/social-media/events">
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">
                                <Button>
                                    <TrophyIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>
                            
                                <label className="hidden md:flex text-sm font-semibold">Eventos</label>

                            </li>
                        </Link>
                        <Link href="/social-media/messages">
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">
                                
                                <Button>
                                    <MessageIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>
                                
                                <label className="hidden md:flex text-sm font-semibold">Mensagens</label> 
                                <span className="hidden md:flex bg-[#f53003] rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">3</span>
                                
                            </li>
                        </Link>
                        <Link href="/social-media/settings">
                            <li className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-green-400 cursor-pointer transition">

                                <Button>
                                    <SettingsIcon className="size-4 dark:text-white text-neutral-800"/>
                                </Button>
                                
                                <label className="hidden md:flex text-sm font-semibold">Preferências</label>
                            </li>
                        </Link>  
                    </ul>
                </nav>
            </Container>
        </>
    );
}