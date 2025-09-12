'use client';

import ProfileInfo from "../../../../../components/profile/profile-info";
// @ts-expect-error missing types
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";
import Container from "../../../../../components/container";
import Card from "../../../../../components/card";
import UsersIcon from "../../../../../components/icons/users";
import TrophyIcon from "../../../../../components/icons/trophy";
import CommunityIcon from "../../../../../components/icons/community";

export default function Home(){
    return(
        <>

            <div className="w-full sm:w-5/6 flex flex-col sm:flex-row gap-4">
                <Container className="w-full sm:w-3/5 flex flex-col">

                    <div className="flex flex-row gap-4 mb-4">
                    
                        <Link href="friends" className="w-1/3 h-full hover:shadow-lg cursor-pointer">
                            <Card className="rounded-2xl hover:shadow-lg cursor-pointer">
                                <Card className="w-10 h-10 rounded-sm">
                                    <UsersIcon />
                                </Card>
                                <div className="flex flex-col h-[50px] justify-end">
                                    <h2 className="text-xs font-semibold">Amigos</h2>
                                    <p className="text-xs font-normal"><span className="text-lg font-bold">200</span> amigos</p>
                                </div>
                            </Card>
                        </Link>
                        <Link href="events" className="w-1/3 h-full hover:shadow-lg cursor-pointer">
                            <Card className="rounded-2xl hover:shadow-lg cursor-pointer">
                                <Card className="w-10 h-10 rounded-sm">
                                    <TrophyIcon />
                                </Card>
                                <div className="flex flex-col h-[50px] justify-end">
                                    <h2 className="text-xs font-semibold">Eventos</h2>
                                    <p className="text-xs font-normal"><span className="text-lg font-bold">2</span> eventos</p>

                                </div>
                            </Card>
                        </Link>
                        <Link href="communities" className="w-1/3 h-full hover:shadow-lg cursor-pointer">
                            <Card className="rounded-2xl hover:shadow-lg cursor-pointer">
                                <Card className="w-10 h-10 rounded-sm">
                                    <CommunityIcon />
                                </Card>
                                <div className="flex flex-col h-[50px] justify-end">
                                    <h2 className="text-xs font-semibold">Comunidades</h2>
                                    <p className="text-xs font-normal"><span className="text-lg font-bold">10</span> comunidades</p>
                                </div>
                            </Card>
                        </Link>
                        
                    </div>
                    <h1 className="text-2xl font-semibold mb-4">Perfil</h1>
                    <ProfileInfo />
                    <Card className="rounded-2xl h-40 mb-4" gradient={true}></Card>
                    <div className="w-full ">
                        <Container className="text-center mb-4">
                            <h1 className="text-md font-semibold mb-4">Minhas fotos</h1>
                            <Splide 
                                options={{
                                    type: 'loop',
                                    perPage: 3,
                                    autoplay: true,
                                    focus: 'center',
                                    gap: '1rem'
                                }}
                                aria-label="My Favorite Images">
                                <SplideSlide>
                                    <Image
                                        src="/imgs/drift.jpg"
                                        alt="Foto de perfil"
                                        className="rounded-md w-[250px] mr-4 hover:opacity-90"
                                        width={250}
                                        height={250}
                                        priority
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <Image
                                        src="/imgs/drift.jpg"
                                        alt="Foto de perfil"
                                        className="rounded-md w-[250px] mr-4 hover:opacity-90"
                                        width={250}
                                        height={250}
                                        priority
                                    />
                                </SplideSlide>
                            </Splide>
                            <div className="w-full flex flex-row mt-4 justify-end">
                                <a className="text-sm font-normal text-blue-400 cursor-pointer">Ver todos</a>
                            </div>
                        </Container>
                    </div>
                </Container>
                <div className="w-full sm:w-2/5 flex flex-col">
                    <Container className="flex flex-col mb-4 h-screen">
                        <h2 className="text-xs font-semibold">Mensagens</h2>
                        <div className="flex flex-col">
                            <div className="w-full justify-center mt-2 hover:bg-neutral-50 cursor-pointer">
                                <div className="flex flex-row items-center rounded-sm p-2">
                                <Image
                                    src="/imgs/bmw.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-md w-[45px] mr-2 hover:opacity-90"
                                    width={45}
                                    height={45}
                                    priority
                                />
                                <h2 className="text-xs font-semibold">Drift Racing</h2>
                                <div className="ml-auto">
                                    <span className="bg-[#f53003] rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">3</span>
                        
                                </div>
                                </div>
                            </div>
                            <div className="w-full justify-center mt-2 hover:bg-neutral-50 cursor-pointer">
                                <div className="flex flex-row items-center rounded-sm p-2">
                                <Image
                                    src="/imgs/bmw.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-md w-[45px] mr-2 hover:opacity-90"
                                    width={45}
                                    height={45}
                                    priority
                                />
                                <h2 className="text-xs font-semibold">Drift Racing</h2>
                                <div className="ml-auto">
                                    <span className="bg-[#f53003] rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">3</span>
                        
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </Container>
                </div>
            </div>
                
        </>
    )
}