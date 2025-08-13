'use client';

import ProfileInfo from "../../../../components/profile/profile-info";
import Sidebar from "../../../../components/sidebar";
// @ts-expect-error missing types
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";

export default function Home(){
    return(
        <div className="flex bg-gray-100 min-h-screen p-6 gap-6 text-gray-600">    
            <Sidebar />

            <div className="w-3/6 flex flex-col">
                <div className="w-full flex flex-row gap-4 mb-4">
                    
                    <a href="friends" 
                        className="w-1/3 bg-white h-full hover:shadow-lg cursor-pointer rounded-2xl p-4"
                    >
                        <h2 className="text-xs font-semibold">Amigos</h2>
                        <div className="flex flex-col h-[50px] justify-end">
                            <span className="text-xs font-normal text-gray-500">200 amigos</span>
                        </div>
                    </a>
                    <a href="events" 
                        className="w-1/3 bg-white h-full hover:shadow-lg cursor-pointer rounded-2xl p-4"
                    >
                        <h2 className="text-xs font-semibold">Eventos</h2>
                        <div className="flex flex-col h-[50px] justify-end">
                            <span className="text-xs font-normal text-gray-500">2 eventos</span>
                        </div>
                    </a>
                    <a href="communities" 
                        className="w-1/3 bg-white h-full hover:shadow-lg cursor-pointer rounded-2xl p-4"
                    >
                        <h2 className="text-xs font-semibold">Comunidades</h2>
                        <div className="flex flex-col h-[50px] justify-end">
                            <span className="text-xs font-normal text-gray-500">10 comunidades</span>
                        </div>
                    </a>
                    
                </div>
                <ProfileInfo />
                <div className="w-full ">
                    <div className="bg-white text-center rounded-2xl p-4 mb-4">
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
                    </div>
                </div>
            </div>
            <div className="w-2/6 flex flex-col">
                <div className="w-full flex flex-col mb-4 bg-white h-[auto] rounded-2xl p-4">
                    <h2 className="text-xs font-semibold">Mensagens</h2>
                    <div className="flex flex-col">
                        <div className="w-full justify-center mt-2 hover:bg-gray-50 cursor-pointer">
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
                        <div className="w-full justify-center mt-2 hover:bg-gray-50 cursor-pointer">
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
                    
                </div>
            </div>
            
        </div>
    )
}