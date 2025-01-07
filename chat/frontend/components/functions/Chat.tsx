"use client"

import {useEffect, useState} from "react";

export const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const roomId = "1234";
        // Conectar ao WebSocket ao carregar o componente
        const ws = new WebSocket(`ws://localhost:2006/ws?roomId=${roomId}`);
        setSocket(ws);

        ws.onmessage = (event) => {
            const message = event.data;
            setMessages((prev) => [...prev, message]);
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(input);
            setInput("");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Chat em Tempo Real</h1>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    height: "300px",
                    overflowY: "scroll",
                    marginBottom: "10px",
                }}
            >
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem"
                style={{ width: "80%", marginRight: "10px" }}
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>
    );
}