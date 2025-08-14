import Image from "next/image";

export default function Home(){
    return(
        <div className="flex sm:flex-row flex-col">
            <div className="sm:w-1/2 hidden sm:block flex w-full bg-gray-50 h-screen items-center justify-center p-4">
                <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/imgs/img_login.jpg"
                        alt="Foto - tela de login"
                        fill 
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className="sm:w-1/2 flex flex-col w-full bg-gray-50 h-screen items-center justify-center p-4">
                <div className="flex mb-4">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                    </a>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                    Participe de Comunidades, Divulgue o seu evento, faça amigos.
                </p>
                <h1 className="flex flex-end text-md font-semibold mb-4">Seja bem vindo</h1>

                <div className="w-[50%] text-gray-800 flex flex-col">


                    <span className="text-xs mb-4 mt-2 text-gray-500">Entre com login e senha</span>

                    <label className="font-semibold text-xs mb-2">Email</label>

                    <input className="w-full text-sm border-1 border-gray-300 p-3 bg-white focus:outline-blue-400 rounded-sm" type="text" placeholder="Digite o seu e-mail"></input>

                    <label className="font-semibold text-xs mt-4 mb-2">Password</label>

                    <input className="w-full text-sm border-1 border-gray-300 p-3 bg-white focus:outline-blue-400 rounded-sm" type="password" placeholder="Digite a sua senha"></input>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-2 rounded-full mt-4 mb-2 rounded-sm cursor-pointer">Login</button>

                    <span className="text-xs mb-2 mt-2">Ainda não tem uma conta? 
                        <a href="#" className="text-xs text-blue-500"> Cadastrar</a>
                    </span>

                    <a href="#" className="text-xs text-blue-500">Esqueceu sua senha?</a>
                </div>
            </div>    
        </div>
    )
}