import Image from "next/image";
// default stylesheet for base components
import "@react-instastories/base/index.css";
// default stylesheet for external components
import "@react-instastories/external/index.css";


import {
  Configurable,
  InstaStories,
  Page,
  Pages,
  Preview,
  Stories,
  Story,
  useConfig
} from "@react-instastories/base";
 
import "@react-instastories/base/index.css";
import { Controls, Events, Preloadable } from "@react-instastories/external";



export default function ListStories(){


  
const stories = [
    {
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
      duration: 5000, // 5 seconds
      type: 'image',
      header: {
        heading: 'User One',
        subheading: 'Posted 1h ago',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
    {
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
      duration: 6000, // 6 seconds
      type: 'image',
      header: {
        heading: 'User Two',
        subheading: 'Posted 30m ago',
        profileImage: 'https://picsum.photos/100/100',
      },
      // You can also add a 'seeMore' component here if needed
      // seeMore: ({ close }) => <div onClick={close}>Click to close details</div>,
    },
    {
      url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video URL
      type: 'video',
      // Duration is ignored for videos as actual video duration is used
      header: {
        heading: 'User Three',
        subheading: 'Just now',
        profileImage: 'https://picsum.photos/100/100',
      },
    },
    {
      content: () => (
        <div style={{ background: 'lightblue', padding: 20, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'white' }}>Custom JSX Story!</h2>
        </div>
      ),
      duration: 4000, // Duration still applies to custom JSX stories
    },
  ];

    
 
 
  return (
    
    <InstaStories>
      <Stories className="flex flex-row sm:flex-col">
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
          start={0}
          onOpen={() => console.debug("Story opened!")}
          onClose={() => console.debug("Story closed!")}
        >
          <Preview>1</Preview>
          <Pages>
            <Page>Página 1</Page>
            <Page>Página 2</Page>
            <Page>Página 3</Page>
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