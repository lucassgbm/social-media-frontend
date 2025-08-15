import Image from "next/image";
import MessageIcon from "../../components/icons/message";
import HeartIcon from "../../components/icons/heart";
import ClipeIcon from "../../components/icons/clipe";
import AirPlaneIcon from "../../components/icons/airplane";
import EllipsisVerticalIcon from "../../components/icons/ellipsis";
import InfoIcon from "../../components/icons/info";
import MoneyIcon from "../../components/icons/money";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Feed from "../../components/feed";
import Stories from "../../components/stories";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row bg-gray-100 min-h-screen p-6 gap-6 text-gray-600">
        
        <Sidebar />
        <div className="w-full sm:w-5/6 flex flex-col-reverse sm:flex-row gap-6">
          
          <div className="w-full sm:w-5/6">
            <div className="flex flex-row gap-6">
              <div className="w-full sm:w-3/4 h-full rounded-2xl mb-4">
                <div className="flex flex-row gap-4 bg-white rounded-2xl p-4 mb-4">
                  <Image
                    src="/imgs/kratos.jpg"
                    alt="Foto de perfil"
                    className="rounded-full"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="flex flex-row bg-gray-100 w-full rounded-full pl-4 pr-4">
                    <input 
                      type="text" 
                      placeholder="O que temos para hoje?"
                      className="w-full hover:text-border-0 ml-2 focus:outline-none"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-full p-4">
                    <ClipeIcon />
                  </div>
                  <div className="bg-blue-600 hover:bg-blue-500 cursor-pointer rounded-full p-4">
                    <AirPlaneIcon 
                      className={
                        "text-white size-6"
                      }
                    />
                  </div>
                  
                </div>

                <Feed />

                <Feed />
                
              </div>
              <div className="hidden sm:block w-1/4">
                <div className="bg-white text-center rounded-2xl p-4 mb-4">
                  <label className="text-sm font-semibold mb-4">Próximo Evento</label>
                  <div className="flex flex-col h-full mt-2">
                    <div className="flex flex-row items-center mb-4">
                      <Image
                        src="/imgs/drift.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[70px] mr-4 hover:opacity-90"
                        width={70}
                        height={70}
                        priority
                      />
                      <h2 className="text-md font-semibold">Drift Racing</h2>
                    </div>
                    <div className="text-left bg-gray-100 rounded-2xl p-2">
                      <p className="text-sm font-semibold">Arena BRB - Mané Garrincha </p>
                      <p className="text-xs">02/08/2025 | 10:00 às 18:00</p>
                    </div>
                    <div className="flex flex-row justify-center gap-2 mt-4">
                      
                      <button className="bg-blue-500 text-sm hover:bg-blue-600 text-white py-1 px-1 rounded-full cursor-pointer">
                        <InfoIcon />
                      </button>
                      <button className="bg-bg-white text-sm border-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-1 px-1 rounded-full cursor-pointer">
                        <MoneyIcon />
                      </button>
                    </div>

                  </div>
                </div>
                <div className="bg-white h-auto text-center rounded-2xl p-4 mb-4">
                  <label className="text-sm font-semibold">Sugestões de Eventos</label>
                  <div className="flex flex-col justify-center mt-4">
                    <div className="flex flex-row items-center bg-gray-100 rounded-sm p-2">
                      <Image
                        src="/imgs/bmw.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[45px] mr-2 hover:opacity-90"
                        width={45}
                        height={45}
                        priority
                      />
                      <h2 className="text-xs font-semibold">Drift Racing</h2>
                      <div className="ml-auto bg-gray-200 hover:bg-gray-300 rounded-full p-1 m-1 cursor-pointer">
                        <EllipsisVerticalIcon 
                          className={"size-4"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4">
                    <div className="flex flex-row items-center bg-gray-100 rounded-sm p-2">
                      <Image
                        src="/imgs/bmw.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[45px] mr-2 hover:opacity-90"
                        width={45}
                        height={45}
                        priority
                      />
                      <h2 className="text-xs font-semibold">Drift Racing</h2>
                      <div className="ml-auto bg-gray-200 hover:bg-gray-300 rounded-full p-1 m-1 cursor-pointer">
                        <EllipsisVerticalIcon 
                          className={"size-4"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4">
                    <div className="flex flex-row items-center bg-gray-100 rounded-sm p-2">
                      <Image
                        src="/imgs/bmw.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[45px] mr-2 hover:opacity-90"
                        width={45}
                        height={45}
                        priority
                      />
                      <h2 className="text-xs font-semibold">Drift Racing</h2>
                      <div className="ml-auto bg-gray-200 hover:bg-gray-300 rounded-full p-1 m-1 cursor-pointer">
                        <EllipsisVerticalIcon 
                          className={"size-4"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-auto text-center rounded-2xl p-4 mb-4">
                  <label className="text-sm font-semibold">Comunidades</label>
                  
                  <div className="flex flex-col justify-center mt-4 bg-gray-100 rounded-xl cursor-pointer hover:shadow-md">
                    <div className="flex flex-row items-center rounded-sm p-2">
                      <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full w-[40px] mr-2 hover:opacity-90"
                        width={40}
                        height={40}
                        priority
                      />
                      <div className="flex flex-col text-left">
                        <label className="text-xs font-semibold">Drift Racing</label>
                        <p className="text-xs font-normal text-gray-500">lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center border-t-1 border-gray-200 p-1">
                      <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full w-[20px] mr-2 hover:opacity-90"
                        width={20}
                        height={20}
                        priority
                      />
                      <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full w-[20px] ml-[-16px] hover:opacity-90"
                        width={20}
                        height={20}
                        priority
                      />
                      <label className="text-xs font-semibold text-gray-500 ml-auto">243 join</label>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center mt-4 bg-gray-100 rounded-xl cursor-pointer hover:shadow-md">
                    <div className="flex flex-row items-center rounded-sm p-2">
                      <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full w-[40px] mr-2 hover:opacity-90"
                        width={40}
                        height={40}
                        priority
                      />
                      <div className="flex flex-col text-left">
                        <label className="text-xs font-semibold">Drift Racing</label>
                        <p className="text-xs font-normal text-gray-500">lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center border-t-1 border-gray-200 p-1">
                      <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full w-[20px] mr-2 hover:opacity-90"
                        width={20}
                        height={20}
                        priority
                      />
                      <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full w-[20px] ml-[-16px] hover:opacity-90"
                        width={20}
                        height={20}
                        priority
                      />
                      <label className="text-xs font-semibold text-gray-500 ml-auto">243 join</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            

          </div>

          <div className="flex flex-row sm:flex-col w-full gap-4 overflow-x-auto scrollbar-hide sm:w-1/6 bg-white rounded-2xl p-4 mb-4 sm:mb-0">
              <Stories />
          </div>
        </div>
      </div>
    
    </>
  );
}
