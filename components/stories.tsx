import Image from "next/image";

export default function Stories(){
    return (
        <>
            <Image
              src="/imgs/kratos.jpg"
              alt="Foto de perfil"
              className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer hover:opacity-90"
              width={100}
              height={100}
              priority
            />
            <Image
              src="/imgs/kratos.jpg"
              alt="Foto de perfil"
              className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
              width={100}
              height={100}
              priority
            />
            <Image
              src="/imgs/kratos.jpg"
              alt="Foto de perfil"
              className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
              width={100}
              height={100}
              priority
            />
            <Image
              src="/imgs/kratos.jpg"
              alt="Foto de perfil"
              className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
              width={100}
              height={100}
              priority
            />
            <Image
              src="/imgs/kratos.jpg"
              alt="Foto de perfil"
              className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
              width={100}
              height={100}
              priority
            />
        </>
    )
}