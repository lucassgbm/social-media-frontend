import Image from "next/image";
import Card from "../card";
import Container from "../container";

export default function ListCommunities() {
    return (
        <Card className="rounded-2xl">

            <div className="w-full flex flex-row gap-4">

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
        </Card>

    );
}