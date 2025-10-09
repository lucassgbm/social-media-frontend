'use client';

import { get } from "@/api/services/request";
import { createContext, useEffect, useState } from "react";
import Header from "../../../../components/header";
import Sidebar from "../../../../components/sidebar";
import BottomMenu from "../../../../components/bottom-menu";
import Footer from "../../../../components/footer";
import Messages from "../../../../components/messages";
import { usePathname } from "next/navigation";

type MyInfo = {
  name: string;
  photo: string;
  autodescription: string;
};

type AppContextType = {
  myInfo: MyInfo | null;
  setMyInfo: React.Dispatch<React.SetStateAction<MyInfo | null>>;
  openMessages: boolean;
  setOpenMessages: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    getMyInfo();
  }, []);

  const [myInfo, setMyInfo] = useState<MyInfo | null>(null);

  const [openMessages, setOpenMessages] = useState(false);

  const pathname = usePathname();

  async function getMyInfo() {

    try {
      const response = await get("/social-media/user");
      setMyInfo(response);
    } catch (error: any) {

      console.log(error);
      // setToaster({ show: true, message: "Erro ao carregar informações" });
    }

  }

  const noSidebarRoutes = [
    "/social-media/profile",
    "/social-media/profile/edit",
  ];

  const hideSidebar = noSidebarRoutes.some((route) => pathname.startsWith(route));

  return (
    /*openMessages, setOpenMessages*/
    <AppContext.Provider value={{ myInfo, setMyInfo, openMessages, setOpenMessages }}>
      <Header />
      <div className="flex flex-col sm:flex-row dark:bg-neutral-950 bg-neutral-100 min-h-screen p-6 gap-6 text-gray-600 justify-center" suppressHydrationWarning={true}>
        {/* Renderiza a sidebar somente se não estiver na página de perfil */}
        {!hideSidebar && <Sidebar />}
        {children}
        {openMessages && (
                
          <Messages openMessages={openMessages} setOpenMessages={setOpenMessages}/>
        )}
        <Footer />
        <BottomMenu />
      </div>
    </AppContext.Provider>

  );
}
