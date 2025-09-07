'use client';

import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
import EllipsisVerticalIcon from "../../../../components/icons/ellipsis";
import InfoIcon from "../../../../components/icons/info";
import MoneyIcon from "../../../../components/icons/money";
import Sidebar from "../../../../components/sidebar";
import Header from "../../../../components/header";
import Feed from "../../../../components/feed";
import Stories from "../../../../components/stories";
import Container from "../../../../components/container";
import Modal from "../../../../components/modal";
import PhotoIcon from "../../../../components/icons/photo";
import Button from "../../../../components/button";
import AirPlaneIcon from "../../../../components/icons/airplane";
import BottomMenu from "../../../../components/bottom-menu";
import Toaster from "../../../../components/toaster";
import { post, get, postFormData } from "../../../api/services/request";

interface NewPost {
  description: string;
  photo_path: File | "";
}

export default function Home() {

  useEffect(() => {
    getFeed();
  }, []);

const [openModalNewPost, setModalNewPost] = useState(false);
const [toaster, setToaster] = useState({
  show: false,
  message: "",
});

const [preview, setPreview] = useState<string | null>(null);

const [newPost, setNewPost] = useState<NewPost>({
  description: "",
  photo_path: "",
});

const [feed, setFeed] = useState([]);

const inputRef = useRef<HTMLInputElement>(null);

const handleButtonClick = () => {
  inputRef.current?.click();
};

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (file) {
    setNewPost({ ...newPost, photo_path: file });

    // libera a URL anterior da memória
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

  }


};

async function handlePost(e: React.FormEvent<HTMLFormElement>) {

  e.preventDefault();
  
  if(newPost.description === "" ){
    setToaster({ show: true, message: "Preencha a descrição." });
    return;
  }
  
  const formData = new FormData();
  formData.append("photo_path", newPost.photo_path);
  formData.append("description", newPost.description);

  try {
    
    const response = await postFormData("/social-media/post", newPost);
    setToaster({ show: true, message: "Post criado com sucesso!" });
    setNewPost({ description: "", photo_path: "" });
    setModalNewPost(false);
    setPreview(null);
    getFeed();

  } catch (error: any) {

    setToaster({ show: true, message: "Erro ao criar post: " +error.response.data.message });

  }
}

async function getFeed() {

  try {
    const response = await get("/social-media/feed");
    setFeed(response.data);
  } catch (error: any) {

    setToaster({ show: true, message: "Erro ao carregar feed" });
  }
}

return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row dark:bg-neutral-950 bg-neutral-100 min-h-screen p-6 gap-6 text-gray-600">
        
        <Sidebar />
        <BottomMenu />
        <div className="w-full sm:w-5/6 flex flex-col-reverse sm:flex-row gap-6">
          
          <div className="w-full sm:w-5/6">
            <div className="flex flex-row gap-6">
              <div className="w-full sm:w-3/4 h-full rounded-2xl mb-4">
                <Container className="flex flex-row gap-2 mb-4 items-center">
                  <Image
                    src="/imgs/kratos.jpg"
                    alt="Foto de perfil"
                    className="rounded-full w-[50px]"
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="flex flex-row bg-neutral-100 dark:bg-neutral-800 dark:text-white w-full rounded-full pl-4 pr-4">
                    <div
                      className="w-full hover:text-border-0 ml-2 focus:outline-none p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400 cursor-pointer"
                      onClick={() => setModalNewPost(true)}
                    >Diga algo para a galera...
                    </div>
                  </div>
                  
                </Container>

                <Feed feed={feed} />
                
              </div>
              <div className="hidden sm:block w-1/4">
                <Container className="mb-4 text-center">
                  <label className="text-sm font-semibold mb-4 ">Próximo Evento</label>
                  <div className="flex flex-col h-full mt-2">
                    <div className="flex flex-col sm:flex-row items-center mb-4">
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
                    <div className="text-left bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-2">
                      <p className="text-sm font-semibold">Arena BRB - Mané Garrincha </p>
                      <p className="text-xs">02/08/2025 | 10:00 às 18:00</p>
                    </div>
                    <div className="flex flex-row justify-center gap-2 mt-4">
                      
                      <Button>
                        <InfoIcon />
                      </Button>

                      <Button>
                        <MoneyIcon />
                      </Button>
                      
                    </div>

                  </div>
                </Container>
                
                <Container className="mb-4">
                  <label className="text-sm font-semibold">Sugestões de Eventos</label>
                  <div className="flex flex-col justify-center mt-4">
                    <div className="flex flex-row items-center bg-neutral-100 dark:bg-neutral-800 rounded-sm p-2 gap-2">
                      <Image
                        src="/imgs/bmw.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[45px] mr-2 hover:opacity-90"
                        width={45}
                        height={45}
                        priority
                      />
                      <h2 className="text-xs font-semibold">Drift Racing</h2>
                      <Button>
                        <EllipsisVerticalIcon 
                          className={"size-4"}
                        />
                      </Button>

                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4">
                    <div className="flex flex-row items-center bg-neutral-100 dark:bg-neutral-800 rounded-sm p-2 gap-2">
                      <Image
                        src="/imgs/bmw.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[45px] mr-2 hover:opacity-90"
                        width={45}
                        height={45}
                        priority
                      />
                      <h2 className="text-xs font-semibold">Drift Racing</h2>
                      
                      <Button>
                        <EllipsisVerticalIcon 
                          className={"size-4"}
                        />
                      </Button>

                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4">
                    <div className="flex flex-row items-center bg-neutral-100 dark:bg-neutral-800 rounded-sm p-2 gap-2">
                      <Image
                        src="/imgs/bmw.jpg"
                        alt="Foto de perfil"
                        className="rounded-md w-[45px] mr-2 hover:opacity-90"
                        width={45}
                        height={45}
                        priority
                      />
                      <h2 className="text-xs font-semibold">Drift Racing</h2>
                      
                      <Button>
                        <EllipsisVerticalIcon 
                          className={"size-4"}
                        />
                      </Button>

                    </div>
                  </div>
                </Container>
                <Container className="text-center mb-4">
                  <label className="text-sm font-semibold">Comunidades</label>
                  
                  <div className="flex flex-col justify-center  mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl cursor-pointer hover:shadow-md">
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
                        <p className="text-xs font-normal">lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center border-t-1 border-gray-200 dark:border-gray-800 p-1">
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
                      <label className="text-xs font-semibold ml-auto">243 join</label>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center  mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl cursor-pointer hover:shadow-md">
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
                        <p className="text-xs font-normal">lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center border-t-1 border-gray-200 dark:border-gray-800 p-1">
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
                      <label className="text-xs font-semibold ml-auto">243 join</label>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>

          <Container className="flex flex-row sm:flex-col w-full h-[auto] sm:h-auto gap-4 overflow-x-auto scrollbar-hide sm:w-1/6 sm:mb-0">
              <Stories />
          </Container>
        </div>

        <Modal 
          isOpen={openModalNewPost} 
          onClose={() => {
            setModalNewPost(false);
            setPreview(null);
          }} 
          title="Novo post">
          {preview && (
            <div className="w-full flex flex-col p-4 items-center">
              <p className="font-semibold mb-4">Preview:</p>
              <Image
                src={preview}
                className="w-[200px] h-[200px] object-cover"
                alt="preview"
                width={200}
                height={200}
              />
            </div>
          )}
          <div className="flex flex-row bg-neutral-100 dark:bg-neutral-800 dark:text-white w-full rounded-full p-4 gap-2">
            <input 
              type="text" 
              placeholder="Diga algo para a galera..."
              className="w-full hover:text-border-0 ml-2 focus:outline-none rounded-full bg-neutral-100 dark:bg-neutral-800 dark:text-white text-neutral-800"
              onChange={(e) => {
                setNewPost({...newPost, description: e.target.value});
                setToaster({...toaster, show: false});
              }}
            />
            <Button onClick={handleButtonClick}>
                <PhotoIcon className="size-6 dark:text-white text-neutral-800"/>
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              />
            <Button onClick={(e) => handlePost(e)}>
                <AirPlaneIcon className="size-6 dark:text-white text-neutral-800"/>
            </Button>
          </div>
        </Modal>
        {toaster.show && (
          <Toaster 
            toaster={toaster}
            setToaster={setToaster}
          />
        )}
        
      </div>
    
    </>
  );
}
