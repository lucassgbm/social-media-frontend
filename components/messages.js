import Image from "next/image";
import Container from "./container";
import Card from "./card";

import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import AirPlaneIcon from "./icons/airplane";
import Button from "./button";

const isBrowser = typeof window !== "undefined";

export const socket = isBrowser ? io("http://localhost:4000") : undefined;

export default function Messages() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("mensagem", (message) => {
      setMessages((prev) => [...prev, ` ${message}`]);
    });

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("mensagem");
    };
  }, []);
  const sendMessage = () => {
    socket.emit("mensagem", inputMessage);
    setInputMessage("");
  };
  return (
    <div className="absolute h-screen right-0 w-full sm:w-[350px] flex flex-col">
      <Container className="flex flex-col mb-4 h-screen">
        <h2 className="text-xs font-semibold">Mensagens</h2>
        <Card className="mt-2">
          <div>
            <p>Status: {isConnected ? "connected" : "disconnected"}</p>
            <p>Transport: {transport}</p>

            <div className="mt-4">
              <h2>Mensagens:</h2>
              <div id="messages" className="border p-2 h-40 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div key={idx} className="flex flex-row text-sm">
                    {msg}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Digite uma mensagem"
                className="border px-2 py-1 flex-1"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </Card>

      </Container>
    </div>
  )
}