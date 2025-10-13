/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { AppContext } from "@/app/(pages)/social-media/layout";
import Modal from "./modal";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CameraIcon from "./icons/camera";

const PlayIcon = ({ className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"lucide lucide-play-icon lucide-play " + className}
    >
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  );
};

const PauseIcon = ({ className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"lucide lucide-pause-icon lucide-pause " + className}
    >
      <rect x="14" y="3" width="5" height="18" rx="1" />
      <rect x="5" y="3" width="5" height="18" rx="1" />
    </svg>
  );
};

const HeartIcon = ({ className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"lucide lucide-heart-icon lucide-heart " + className}
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
};

const Backdrop = ({ onClose }: any) => {
  return (
    <div
      className="flex fixed inset-0 z-[1000]"
      style={{
        pointerEvents: "auto",
        overflow: "hidden",
        backgroundColor: "rgba(1, 1, 1, 0.8)",
        opacity: 1,
      }}
      onClick={() => {
        onClose();
      }}
    />
  );
};

const ProgressBar = ({ slides, progress }: any) => {
  return (
    <div className="flex flex-row gap-1 px-4 py-2">
      {slides.map((_: any, i: number) => (
        <div
          key={i}
          className="h-[2px] flex-1 bg-white/30 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-white transition-[width] ease-linear"
            style={
              { width: `${progress[i] || 0}%` }
            }
          />
        </div>
      ))
    }
    </div>
  );
};

const UserRow = ({ data, postingTime }: any) => {
  return (
    <div id="user">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={data.avatarUrl}
          alt={data.user}
          className="w-7 h-7 rounded-full drop-shadow-xl"
        />
        <span className="text-white drop-shadow-2xl font-medium">
          {data.user}
        </span>
        <span className="text-white opacity-75 drop-shadow-2xl">
          {postingTime}
        </span>
      </div>
    </div>
  );
};

const Options = ({ isPlaying, setIsPlaying }: any) => {
  return (
    <div className="flex flex-row gap-4">
      <button
        className="cursor-pointer outline-0 hover:brightness-90 drop-shadow-2xl"
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying && <PauseIcon className="fill-white stroke-white w-4 h-4" />}
        {!isPlaying && <PlayIcon className="fill-white stroke-white w-4 h-4" />}
      </button>
    </div>
  );
};

const Topbar = ({
  slides,
  progress,
  showing,
  item,
  isPlaying,
  setIsPlaying,
}: any) => {
  return (
    <div className="flex flex-col gap-2 py-2 absolute z-20 w-full">
      <ProgressBar slides={slides} progress={progress} />
      <div className="flex flex-row items-center justify-between px-4">
        <UserRow data={item} postingTime={slides[showing].postingTime} />
        <Options isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </div>
  );
};

const BottomBar = ({
  item,
  setItems,
  showing,
  slides,
  likeStory,
  commentStory,
}: any) => {
  const [text, setText] = useState("");

  // Build a stable "storyId" for the backend (ownerId + index)
  const ownerId = item?.id;
  const storyId = ownerId != null ? `${ownerId}:${showing}` : null;

  const handleSubmit = async () => {
    if (!text.trim() || storyId == null) return;
    try {
      await commentStory(text.trim(), ownerId, storyId);
      setText("");
    } catch (e) {
      console.error(e);
    }
  };

  const handleLike = async () => {
    if (storyId == null) return;
    // Optimistic UI: toggle immediately
    setItems((prev: any) =>
      prev.map((it: any) => {
        if (it.id !== item.id) return it;
        return {
          ...it,
          slides: it.slides.map((sl: any, idx: number) =>
            idx === showing ? { ...sl, liked: !sl.liked } : sl
          ),
        };
      })
    );
    try {
      await likeStory(ownerId, storyId);
    } catch (e) {
      console.error(e);
      // Revert on error
      setItems((prev: any) =>
        prev.map((it: any) => {
          if (it.id !== item.id) return it;
          return {
            ...it,
            slides: it.slides.map((sl: any, idx: number) =>
              idx === showing ? { ...sl, liked: !sl.liked } : sl
            ),
          };
        })
      );
    }
  };

  const liked = slides?.[showing]?.liked;

  return (
    <div className="absolute bottom-4 gap-8 w-full px-5 z-20 flex flex-row items-center justify-between">
      <input
        className="border-2 border-[#cecece] rounded-full py-2 px-4 outline-0 placeholder:text-white drop-shadow-2xl w-full text-md"
        placeholder={
          item?.user ? `Responda a ${item.user}...` : "Escreva um comentário..."
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />

      <button
        className="cursor-pointer drop-shadow-2xl"
        onClick={handleLike}
        aria-label={liked ? "Remover like" : "Curtir"}
      >
        <HeartIcon
          className={`w-8 h-8 drop-shadow-2xl ${
            liked ? "stroke-[#FF3140] fill-[#FF3140]" : "stroke-white"
          }`}
        />
      </button>
    </div>
  );
};

export function Stories({
  data = {},
  onClose,
  setItems,
  items,
  likeStory,
  commentStory,
}: any) {
  /**
   * Features:
   * - Shows user's stories.
   * - Like on story shown and save on backend.
   * - Comment on story shown and save on backend.
   * - Press to play/pause image.
   * - Opens user selected to see its stories.
   *
   *
   * Usage example:
   *  {story.show && ( <Stories data={story.data} setItems={setItems} items={items} onClose={() => { setStory({ show: false, data: {} }); }} commentStory={commentStory} likeStory={likeStory} /> )}
   */

  const [showing, setShowing] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [didFinish, setDidFinish] = useState(false);
  const raf: any = useRef(null);
  const startRef: any = useRef(0);
  const elapsedRef: any = useRef(0);
  const downRef: any = useRef(0);
  const finishedRef: any = useRef(false);

  // --- derived
  const item = useMemo(
    () => items.find((it: any) => it.id === data.id) ?? data,
    [items, data.id]
  );
  const slides = item?.slides ?? [];
  const dur = slides[showing]?.durationMs || 0;

  // progress array (UI state)
  const [progress, setProgress] = useState(() =>
    new Array(slides.length).fill(0)
  );

  // --- helpers
  const TAP_MS = 180;

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setDidFinish(true);
  }, []);

  const advance = useCallback(
    (delta: any) =>
      setShowing((s) => {
        const next = s + delta;
        if (next < 0) return 0;
        if (next < slides.length) return next;
        finish();
        return s;
      }),
    [slides.length, finish]
  );

  // --- pointer handlers
  const handlePointerDown = (e: any) => {
    e.preventDefault();
    downRef.current = performance.now();
    setIsPlaying(false);
  };

  const handlePointerUp = (e: any) => {
    e.preventDefault();
    const dt = performance.now() - downRef.current;
    setIsPlaying(true);
    if (dt < TAP_MS) advance(1);
  };

  const resumeIfNeeded = () => setIsPlaying(true);

  // --- ticking
  const tick = useCallback(
    (t: any) => {
      const elapsed = elapsedRef.current + (t - startRef.current);
      const pct = Math.min((elapsed / dur) * 100, 100);

      setProgress((p) =>
        p.map((_, i) => (i === showing ? pct : i < showing ? 100 : 0))
      );

      if (pct >= 100) {
        elapsedRef.current = 0;
        if (showing < slides.length - 1) {
          setShowing((s) => s + 1);
        } else {
          finish();
        }
        return;
      }

      raf.current = requestAnimationFrame(tick);
    },
    [dur, showing, slides.length, finish]
  );

  // --- effects
  // Start/stop RAF
  useEffect(() => {
    if (!dur || didFinish || !isPlaying) return;
    startRef.current = performance.now();
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = null;
    };
  }, [dur, isPlaying, didFinish, tick]);

  // Pause bookkeeping
  useEffect(() => {
    if (isPlaying || didFinish || !dur || !startRef.current) return;
    elapsedRef.current += performance.now() - startRef.current;
  }, [isPlaying, didFinish, dur]);

  // When slide index changes, reset elapsed & progress for current
  useEffect(() => {
    setProgress((p) =>
      p.map((_, i) => (i < showing ? 100 : i === showing ? 0 : 0))
    );
    elapsedRef.current = 0;
  }, [showing, slides.length]);

  // When item changes, reset finish flags & slide index
  useEffect(() => {
    finishedRef.current = false;
    setDidFinish(false);
    setShowing(0);
    setProgress(new Array(slides.length).fill(0));
    elapsedRef.current = 0;
  }, [item.id, slides.length]);

  // On finish: mark seen & close
  useEffect(() => {
    if (!didFinish) return;
    if (raf.current) {
      cancelAnimationFrame(raf.current);
      raf.current = null;
    }
    setItems((prev: any) =>
      prev.map((it: any) =>
        it.id === item.id ? { ...it, hasSeenAll: true } : it
      )
    );
    onClose?.();
  }, [didFinish, setItems, item.id, onClose]);

  return (
    <div>
      <Backdrop onClose={onClose} />
      <div
        className="
          bg-gray-500 w-full lg:w-[450px] md:w-[450px]
          h-full lg:h-[95%] md:h-[95%]
          fixed z-[1000] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
          rounded-md shadow-md overflow-hidden flex flex-col
        "
      >
        {!!slides.length && (
          <img
            src={slides[showing].src}
            alt={`${item.user}_story_${showing}`}
            className="z-0 w-full h-full object-cover touch-none cursor-pointer"
            style={{ touchAction: "none" }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={resumeIfNeeded}
            onPointerLeave={resumeIfNeeded}
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 md:h-44 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-44 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

        <div className="absolute top-0 left-0 right-0">
          <Topbar
            slides={slides}
            progress={progress}
            showing={showing}
            item={item}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>

        <BottomBar
          item={item}
          setItems={setItems}
          showing={showing}
          slides={slides}
          likeStory={likeStory}
          commentStory={commentStory}
        />
      </div>
    </div>
  );
}

export function StoriesBar({ items = [], setStory, storyRingSize = 30 }: any) {

  const context = useContext(AppContext);
  const { myInfo } = context;
  const [isOpen, setModalNewStory] = useState(false);

  const imageUser = myInfo?.photo
    ? `${process.env.NEXT_PUBLIC_STORAGE_API?.replace(/\/$/, '')}/${myInfo.photo?.replace(/^\//, '')}`
    : null;
  /**
   * Features:
   * - Lists horizontally the users' stories.
   * - Sorts by unseen first.
   * - Sets story icon width and height.
   * - Opens user selected to see its stories.
   *
   * Usage example:
   *  <StoriesBar items={items} storyRingSize={58} setStory={setStory} />
   *
   */

  return (
    <>
      <div className="flex flex-row sm:flex-col items-center gap-3 overflow-x-auto py-2 px-4">
        
        <button
          className={`w-full min-w-[50px] aspect-[1/1] flex items-center justify-center cursor-pointer rounded-full
            drop-shadow-md
            hover:brightness-90
            p-[3px]
            border-green-500/90 group
        `}
          style={{
            borderWidth: 2.5,
          }}
          aria-label={`New ${myInfo?.name}'s story`}
        >
          <img
            src={myInfo?.photo ? imageUser : "/imgs/placeholder.png"}
            alt={`Add new ${myInfo?.name}'s story`}
            className={`w-full aspect-[1/1] rounded-full object-cover`}
            style={{
              // width: storyRingSize,
              // height: storyRingSize,
              width: `full`,
              height: `full`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-full cursor-pointer" onClick={() => setModalNewStory(true)}>
              <CameraIcon className="size-10 text-white dark:text-neutral-300 "/>

          </div>
        </button>

        {items
          .sort((a: any, b: any) => a.hasSeenAll - b.hasSeenAll)
          .map((it: any) => {
            return (
              <button
                key={it.id}
                onClick={() => {
                  setStory({ show: true, data: it });
                }}
                className={`w-full min-w-[50px] aspect-[1/1] flex items-center justify-center cursor-pointer rounded-full
                  drop-shadow-md
                  hover:brightness-90
                  p-[3px]
                  ${!it.hasSeenAll ? "border-green-500/90" : "border-[#DBDBDB]"}
              `}
                style={{
                  borderWidth: 2.5,
                }}
                aria-label={`Open ${it.user}'s story`}
              >
                <img
                  src={it.avatarUrl}
                  alt={it.user}
                  className={`w-full aspect-[1/1] rounded-full object-cover transition-transform duration-300 hover:scale-110`}
                  style={{
                    // width: storyRingSize,
                    // height: storyRingSize,
                    width: `full`,
                    height: `full`,
                  }}
                />
              </button>
            );
          })}
      </div>
      <Modal 
          isOpen={isOpen} 
          onClose={() => setModalNewStory(false)}
          title="Novo story"
      >
          <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center pb-2">
                  <button onClick={() => setModalNewStory(false)} className="text-gray-500 hover:text-gray-700">
                      <span className="sr-only">Close</span>
                  </button>    
              </div>  
              
          </div>
      </Modal>
    </>
  );
}

export default function Page() {
  const [story, setStory]: any = React.useState({ show: false, data: {} });

  const [items, setItems] = React.useState([
    {
      id: "u1",
      user: "Sarah",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQPMuNoK5SK9biSwayCuhWNufIjLF88ovmg&s",
      hasSeenAll: true,
      slides: [
        {
          type: "image",
          src: "/stories/s1-1.jpg",
          durationMs: 5000,
          caption: "Morning ☀️",
          postingTime: "15h",
          liked: false,
        },
        {
          type: "image",
          src: "/stories/s1-1.jpg",
          durationMs: 5000,
          caption: "Morning ☀️",
          postingTime: "15h",
          liked: false,
        },
        {
          type: "video",
          src: "/stories/s1-2.mp4",
          durationMs: 8000,
          caption: "Coffee time",
          postingTime: "20h",
          liked: false,
        },
      ],
    },
    {
      id: "u2",
      user: "Michael",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrcayxm7EZrNIkPciDCwVan0AnBMiWtxVwQ&s",
      hasSeenAll: false,
      slides: [
        {
          type: "image",
          src: "https://www.jessleephotos.com/images/xl/teton-overlook-autumn.jpg",
          durationMs: 5000,
          caption: "Morning ☀️",
          postingTime: "15h",
          liked: true,
        },
        {
          type: "image",
          src: "https://i.redd.it/qvkg5jyfvywb1.jpg",
          durationMs: 8000,
          caption: "Coffee time",
          postingTime: "20h",
          liked: false,
        },
      ],
    },
    {
      id: "u3",
      user: "Ingrid",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMOmqF3CHR7lPy8KqD9cjzZsm6Ell1hOOCQ&s",
      hasSeenAll: false,
      slides: [
        {
          type: "image",
          src: "/stories/s1-1.jpg",
          durationMs: 5000,
          caption: "Morning ☀️",
          postingTime: "15h",
          liked: false,
        },
        {
          type: "video",
          src: "/stories/s1-2.mp4",
          durationMs: 8000,
          caption: "Coffee time",
          postingTime: "20h",
          liked: false,
        },
      ],
    },
    {
      id: "u4",
      user: "Joaquim",
      avatarUrl:
        "data:image/jpeg;base64,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",
      hasSeenAll: false,
      slides: [
        {
          type: "image",
          src: "/stories/s1-1.jpg",
          durationMs: 5000,
          caption: "Morning ☀️",
          postingTime: "15h",
          liked: false,
        },
        {
          type: "video",
          src: "/stories/s1-2.mp4",
          durationMs: 8000,
          caption: "Coffee time",
          postingTime: "20h",
          liked: false,
        },
      ],
    },
    {
      id: "u5",
      user: "Pedro",
      avatarUrl:
        "https://img.freepik.com/fotos-premium/perfil-de-cabeca-de-dispersao-de-inteligencia-artificial-de-um-robo-cromado-fundo-lilas-escuro-maquete-de-banner-de-cabecalho-com-espaco-de-copia-gerado-por-ia_868611-1548.jpg",
      hasSeenAll: false,
      slides: [
        {
          type: "image",
          src: "/stories/s1-1.jpg",
          durationMs: 5000,
          caption: "Morning ☀️",
          postingTime: "15h",
          liked: false,
        },
        {
          type: "video",
          src: "/stories/s1-2.mp4",
          durationMs: 8000,
          caption: "Coffee time",
          postingTime: "20h",
          liked: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!story.show || !story.data?.id) return;
    const live = items.find((i) => i.id === (story.data as any).id);
    if (live && live.hasSeenAll !== (story.data as any).hasSeenAll) {
      setStory((s: any) => ({
        ...s,
        data: { ...(s.data as any), hasSeenAll: live.hasSeenAll },
      }));
    }
  }, [items, story.show, story.data]);

  const likeStory = async (userId: any, storyId: any) => {
    let req;
    try {
      req = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          storyId: storyId,
        }),
      }).then(async (res) => {
        return await res.json();
      });
    } catch (e) {
      console.log(e);
    }
  };

  const commentStory = async (comment: string, userId: any, storyId: any) => {
    let req;
    try {
      req = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          userId: userId,
          storyId: storyId,
        }),
      }).then(async (res) => {
        return await res.json();
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <StoriesBar items={items} storyRingSize={58} setStory={setStory} />

      {story.show && (
        <Stories
          data={story.data}
          setItems={setItems}
          items={items}
          onClose={() => {
            setStory({ show: false, data: {} });
          }}
          commentStory={commentStory}
          likeStory={likeStory}
        />
      )}
    </>
  );
}