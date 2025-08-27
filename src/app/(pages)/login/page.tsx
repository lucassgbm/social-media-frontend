'use client';

import Image from "next/image";
import HeaderLogin from "../../../../components/login/header-login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../api/services/auth";
import Toaster from "../../../../components/toaster";

export default function Home(){
const [login, setLogin] = useState<{email: string, password: string}>({
    email: '',
    password: ''
});

const [toaster, setToaster] = useState({
  show: false,
  message: "",
});

const router = useRouter();

async function handleSubmit(e: React.FormEvent)  {
    e.preventDefault();

    if(login.email === '' || login.password === '') {
        setToaster({...toaster, show: true, message: 'Preencha todos os campos'});
        return;
    }
    try {
      const response = await auth(login.email, login.password);
    //   console.log("Login bem-sucedido! Token:", token);
      setToaster({...toaster, show: true, message:' Login realizado com sucesso! Redirecionando...'});

      router.push('/');
    } catch (err: any) {
        console.log(err);
      setToaster({...toaster, show: true, message: err.response.data.message});
    }
}
    return(
        <div className="flex sm:flex-row flex-col">

            <div className="sm:w-1/3 text-white flex flex-col w-full bg-neutral-950 h-screen items-center justify-center p-4">
                
                <HeaderLogin />

                <h1 className="flex flex-end text-lg font-semibold mb-4">Seja bem vindo</h1>

                <div className="w-[80%] flex flex-col">
                    <form onSubmit={handleSubmit}> 
                        <div className="flex flex-col mb-2">
                            <label className="font-semibold text-xs mb-2">Email</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" 
                                type="text" 
                                placeholder="Digite o seu e-mail"
                                onChange={(e) => {
                                    setLogin({...login, email: e.target.value})
                                    setToaster({...toaster, show: false})
                                }}
                            ></input>
                        </div>

                        <div className="flex flex-col mb-2">

                            <label className="font-semibold text-xs mt-4 mb-2">Password</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" 
                                type="password" 
                                placeholder="Digite a sua senha"
                                onChange={(e) => {
                                    setLogin({...login, password: e.target.value})
                                    setToaster({...toaster, show: false})
                                }}
                            ></input>
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 mt-6 mb-2 rounded-sm cursor-pointer">Login</button>
                        <br/>
                        <span className="text-xs mb-2 mt-2">Ainda não tem uma conta? 
                            <a href="request-register" className="text-xs text-blue-500"> Cadastrar</a>
                        </span>
                    </form>
                    <a href="forgot-password" className="text-xs text-blue-500">Esqueceu sua senha?</a>
                </div>
            </div>  
            <div className="sm:w-2/3 hidden sm:block flex w-full bg-neutral-50 h-screen items-center justify-center">
                <div className="relative w-[100%] h-[100%] overflow-hidden shadow-lg">
                    <Image
                        src="/imgs/img_login.jpg"
                        alt="Foto - tela de login"
                        fill 
                        className="object-cover"
                        priority
                    />
                </div>
            </div> 
            {toaster.show && (
                <Toaster 
                toaster={toaster}
                setToaster={setToaster}
                />
            )} 
        </div>
    )
}