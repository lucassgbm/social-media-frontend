import Image from "next/image";

import {
  Configurable,
  InstaStories,
  Page,
  Pages,
  Preview,
  Stories,
  Story
} from "@react-instastories/base";
 
import "@react-instastories/base/index.css";
import { Controls, Events, Preloadable } from "@react-instastories/external";

export default function Vibes(){
  
    // return (
    //     <>
    //         <Image
    //           src="/imgs/kratos.jpg"
    //           alt="Foto de perfil"
    //           className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer hover:opacity-90"
    //           width={100}
    //           height={100}
    //           priority
    //         />
    //         <Image
    //           src="/imgs/kratos.jpg"
    //           alt="Foto de perfil"
    //           className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
    //           width={100}
    //           height={100}
    //           priority
    //         />
    //         <Image
    //           src="/imgs/kratos.jpg"
    //           alt="Foto de perfil"
    //           className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
    //           width={100}
    //           height={100}
    //           priority
    //         />
    //         <Image
    //           src="/imgs/kratos.jpg"
    //           alt="Foto de perfil"
    //           className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
    //           width={100}
    //           height={100}
    //           priority
    //         />
    //         <Image
    //           src="/imgs/kratos.jpg"
    //           alt="Foto de perfil"
    //           className="w-[65px] h-[65px] sm:w-xl sm:h-auto rounded-full cursor-pointer"
    //           width={100}
    //           height={100}
    //           priority
    //         />
    //     </>
    // )

    
 
 
  return (
    
    <InstaStories>
      <Stories>
        <Configurable.Container>
          <Configurable.Viewer
            events={[
              Events.Mount.AutoClose,
              Events.Mount.Interactive,
              Events.Focus.Timer,
              Events.Keyboard.Close,
              Events.Keyboard.Stories
            ]}
          >
            <Controls.Viewer.Background />
            <Controls.Viewer.Close />
            <Controls.Stories.Next />
            <Controls.Stories.Previous />
            <Preloadable.Stories unloadable next={1} previous={1} />
            <Preloadable.Pages unloadable next={1} previous={1} />
          </Configurable.Viewer>
        </Configurable.Container>
        <Story 
          preload
          duration={2000}
          start={1}
          onOpen={() => console.debug("Story opened!")}
          onClose={() => console.debug("Story closed!")}
        >
          <Preview>AAAA</Preview>
          <Pages>
            <Page>Page with index #0</Page>
            <Page>Page with index #1</Page>
            <Page>Page with index #2</Page>
          </Pages>
        </Story>
        
        <Story>
          <Preview>BBBB</Preview>
          <Pages>
            <Page>Page Content For Page #2 in Story #1</Page>
          </Pages>
        </Story>
      </Stories>
    </InstaStories>
  );
  
}