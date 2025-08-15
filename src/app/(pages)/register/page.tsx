import Image from "next/image";
import HeaderLogin from "../../../../components/login/header-login";

export default function Home(){
    return(
        <div className="flex sm:flex-row flex-col">

            <div className="sm:w-full text-white flex flex-col w-full bg-gray-950 items-center justify-center p-4">
                
                <HeaderLogin />

                <h1 className="flex flex-end text-lg font-semibold mb-4">Cadastrar</h1>

                <div className="w-[90%] sm:w-[50%] flex flex-row">
                    <div className="w-full p-4">

                        <div className="flex flex-col mb-2">
                            <label className="font-semibold text-xs mb-2">Nome completo</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="text" placeholder="Digite o seu nome"></input>

                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Senha</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="text" placeholder="Digite uma senha"></input>

                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Data de aniversário</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="date" placeholder="Digite a data de aniversário"></input>

                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Interesses</label>
                            <div className="flex flex-row gap-2 flex-wrap mb-4">
                                <span className="bg-gray-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Automobilismo</span>
                                <span className="bg-gray-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Motociclismo</span>
                                <span className="bg-gray-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Gastronomia</span>
                                <span className="bg-gray-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Jogos eletrônicos</span>
                                <span className="bg-gray-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Saúde</span>
                                
                            </div>
                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="text" placeholder="Digite algum interesse"></input>

                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Autodescrição</label>
                            <textarea className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" rows={5}  placeholder="Como você se autodescreve?"></textarea>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Foto</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="file" ></input>

                        </div>
                        <div className="flex flex-row mb-4 items-center">

                            <input className="focus:outline-blue-400 " type="checkbox" ></input>
                            <p className="font-normal text-sm ml-2">Aceito os <span className="text-blue-500"><a href="#">Termos e condições</a></span></p>

                        </div>
                        <div className="flex flex-row mb-4 mt-6 justify-center">

                            <button className="w-[auto] bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-2 pl-6 pr-6 rounded-sm cursor-pointer">Enviar</button>
                        </div>
                    </div>

                </div>
            </div>  
 
        </div>
    )
}