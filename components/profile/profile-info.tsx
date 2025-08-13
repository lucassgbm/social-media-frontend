import WhatsappIcon from "../icons/whatsapp";

export default function ProfileInfo() {
    return (
        <div className="w-1/4">
            <div className="bg-white text-center rounded-2xl p-4 mb-4">
                <h1 className="text-md font-semibold mb-4">Perfil</h1>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">Nome</label>
                    <label className="w-1/2 text-sm font-normal">Kleitones da Silva</label>
                </div>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">Idade</label>
                    <label className="w-1/2 text-sm font-normal">33 anos</label>
                </div>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">Profissão</label>
                    <label className="w-1/2 text-sm font-normal">Analista de sistemas</label>
                </div>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">Profissão</label>
                    <label className="w-1/2 text-sm font-normal">Analista de sistemas</label>
                </div>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">UF</label>
                    <label className="w-1/2 text-sm font-normal">DF</label>
                </div>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">Cidade</label>
                    <label className="w-1/2 text-sm font-normal">Brasília</label>
                </div>
                <div className="flex flex-row text-left mb-2">
                    <label className="w-1/2 text-sm font-semibold">Telefone</label>
                    <label className="w-1/2 text-sm font-normal">
                        61 99999-9999
                        <WhatsappIcon />
                    </label>

                </div>
                <div className="flex flex-row text-left mb-2">
                    <button className="w-2/2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold p-2 mt-4">Editar</button>
                </div>

            </div>
        </div>
    )
}