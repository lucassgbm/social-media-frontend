import Image from "next/image";
import Container from "./container";
import Card from "./card";

export default function Messages(){
    return(
        <div className="absolute h-screen right-0 w-full sm:w-[350px] flex flex-col">
            <Container className="flex flex-col mb-4 h-screen">
                <h2 className="text-xs font-semibold">Mensagens</h2>
                <Card className="mt-2">

                    <div className="flex flex-col">
                        <div className="w-full justify-center hover:bg-neutral-900 cursor-pointer">
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
                        <div className="w-full justify-center hover:bg-neutral-900 cursor-pointer">
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
                </Card>
                
            </Container>
        </div>
    )
}