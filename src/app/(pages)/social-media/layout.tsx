'use client';

import { get } from "@/api/services/request";
import { createContext, useEffect, useState } from "react";
import Header from "../../../../components/header";
import Sidebar from "../../../../components/sidebar";
import BottomMenu from "../../../../components/bottom-menu";
import Footer from "../../../../components/footer";

type MyInfo = {
  name: string;
  photo: string;
};

type AppContextType = {
  myInfo: MyInfo | null;
  setMyInfo: React.Dispatch<React.SetStateAction<MyInfo | null>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    getMyInfo();
  },[]);

  const [myInfo, setMyInfo] = useState<MyInfo | null>(null);

  async function getMyInfo() {
  
    try {
      const response = await get("/social-media/user");
      setMyInfo(response);
    } catch (error: any) {
  
      console.log(error);
      // setToaster({ show: true, message: "Erro ao carregar informações" });
    }

  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <AppContext.Provider value={{myInfo, setMyInfo}}>
          <Header />
          <div className="flex flex-col sm:flex-row dark:bg-neutral-950 bg-neutral-100 min-h-screen p-6 gap-6 text-gray-600">
            <Sidebar />
            {children}
            <Footer/>
            <BottomMenu />
          </div>
        </AppContext.Provider>

      </body>
    </html>
  );
}
