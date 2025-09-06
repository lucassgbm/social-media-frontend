'use client';
import { useCallback, useState } from "react";
import HeaderLogin from "../../../../../components/login/header-login";
import Cropper from "react-easy-crop";
import Modal from "../../../../../components/modal";

export default function Home(){

    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const [openModalCropImage, setModalCropImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        password: '',
        birthday: '',
        email: '',
        phone: '',
        interest: [],
        image_path: ''

    });

  // Carregar imagem no estado
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalCropImage(true);
    if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        setImageSrc(reader.result as string);
        setCroppedImage(null); // 🔹 reseta preview
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        };
    }
  };

  // Captura a área cortada
  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Gera preview cortado
  const handleCrop = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    const size = Math.min(croppedAreaPixels.width, croppedAreaPixels.height);

    canvas.width = size;
    canvas.height = size;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      size,
      size,
      0,
      0,
      size,
      size
    );

    const base64 = canvas.toDataURL("image/jpeg");
    setCroppedImage(base64); // 🔹 mostra preview
  };

  // Converter URL → objeto imagem
  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });

  // Enviar para API
  const handleUpload = async () => {
    if (!croppedImage) return;

    const blob = await (await fetch(croppedImage)).blob();

    const formData = new FormData();
    formData.append("file", blob, "imagem.jpg");

    // await fetch("http://localhost:3000/api/upload", {
    //   method: "POST",
    //   body: formData,
    // });

    // alert("Imagem enviada!");
  };

    return(
        <div className="flex sm:flex-row flex-col">

            <div className="sm:w-full text-white flex flex-col w-full bg-neutral-950 items-center justify-center p-4">
                
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
                                <span className="bg-neutral-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Automobilismo</span>
                                <span className="bg-neutral-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Motociclismo</span>
                                <span className="bg-neutral-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Gastronomia</span>
                                <span className="bg-neutral-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Jogos eletrônicos</span>
                                <span className="bg-neutral-700 w-[auto] text-xs font-normal py-1 px-2 rounded-full">Saúde</span>
                                
                            </div>
                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="text" placeholder="Digite algum interesse"></input>

                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Autodescrição</label>
                            <textarea className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" rows={5}  placeholder="Como você se autodescreve?"></textarea>
                        </div>
                        {croppedImage && (
                            <div className="flex flex-col mb-4 items-center">
                                {/* Preview da imagem cortada */}
                                <img src={croppedImage} alt="Preview" className="border rounded-full w-64 h-64 object-cover" />
                            </div>
                        )}
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-xs mb-2">Foto</label>

                            <input className="w-full text-sm text-gray-700 p-3 bg-white focus:outline-blue-400 rounded-sm" type="file" accept="image/*" onChange={onFileChange}></input>

                        </div>
                        <div className="flex flex-row mb-4 items-center">

                            <input className="focus:outline-blue-400 " type="checkbox" ></input>
                            <p className="font-normal text-sm ml-2">Aceito os <span className="text-blue-500"><a href="#">Termos e condições</a></span></p>

                        </div>
                        <div className="flex flex-row mb-4 mt-6 justify-center">

                            <button className="w-[auto] bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-2 pl-6 pr-6 rounded-sm cursor-pointer">Enviar</button>
                        </div>
                    </div>
                    {/* Editor de corte */}
                    {imageSrc && !croppedImage && (
                        <Modal isOpen={openModalCropImage} onClose={() => setModalCropImage(false)} title="Cortar imagem">
                            <div style={{ position: "relative", width: 400, height: 400 }}>
                                <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={1} // 🔹 força quadrado
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                                />
                            </div>

                            <button
                                onClick={() => {
                                    handleCrop(); 
                                    setModalCropImage(false)
                                }}
                                className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
                            >
                                Cortar
                            </button>
                        </Modal>
                    )}

                    

                </div>
            </div>  
 
        </div>
    )
}