import Image from "next/image";
import ProfileInfo from "../../../../components/profile/profile-info";
import Sidebar from "../../../../components/sidebar";

export default function Profile(){
    return(
        <div className="flex bg-gray-100 min-h-screen p-6 gap-6 text-gray-600">    
            <Sidebar />
            <ProfileInfo />
            <div className="w-3/4 flex flex-col">
                <div className="w-full ">
                    <div className="bg-white text-center rounded-2xl p-4 mb-4">
                        <h1 className="text-md font-semibold mb-4">Amigos</h1>
                        <div className="w-full flex flex-row gap-4">

                            <div className="w-[120px] flex flex-col">
                                <Image
                                    src="/imgs/drift.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-md w-[120px] mr-4 hover:opacity-90"
                                    width={120}
                                    height={120}
                                    priority
                                />
                                <label className="text-sm font-semibold">Nome fulano</label>

                            </div>
                            <div className="w-[120px] flex flex-col">
                                <Image
                                    src="/imgs/drift.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-md w-[120px] mr-4 hover:opacity-90"
                                    width={120}
                                    height={120}
                                    priority
                                />
                                <label className="text-sm font-semibold">Nome fulano</label>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="bg-white text-center rounded-2xl p-4 mb-4">
                        <h1 className="text-md font-semibold mb-4">Comunidades</h1>
                        <div className="w-full flex flex-row gap-4">

                            <div className="w-[120px] flex flex-col">
                                <Image
                                    src="/imgs/drift.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-md w-[120px] mr-4 hover:opacity-90"
                                    width={120}
                                    height={120}
                                    priority
                                />
                                <label className="text-sm font-semibold">Nome comunidade</label>

                            </div>
                            <div className="w-[120px] flex flex-col">
                                <Image
                                    src="/imgs/drift.jpg"
                                    alt="Foto de perfil"
                                    className="rounded-md w-[120px] mr-4 hover:opacity-90"
                                    width={120}
                                    height={120}
                                    priority
                                />
                                <label className="text-sm font-semibold">Nome comunidade</label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}