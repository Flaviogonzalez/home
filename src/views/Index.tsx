// src/App.tsx
import React, { useEffect, useRef, useState } from 'react';

const Index: React.FC = () => {
    const [message, setMessage] = useState('');
    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080'); // URL del servidor WebSocket

    ws.current.onopen = () => {
      setMessage('WebSocket connected');
    };

    ws.current.onclose = (event) => {
      console.log('WebSocket closed:', event.reason);
      // Reintentar la conexión después de un retraso si es necesario
      setTimeout(() => {
        ws.current = new WebSocket('ws://localhost:8080');
      }, 5000);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      setCoordinates({ x: clientX, y: clientY });

      if (ws.current && ws.current.readyState === WebSocket.OPEN) {

        ws.current.send(JSON.stringify({ x: clientX, y: clientY })); // esta info llega al servidor WebSocket
      }
    };

    // recibir informacion del servidor WebSocket
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage(`Received message from server: ${JSON.stringify(data)}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <h1>WebSocket Ejemplo</h1>
      <p>{message}</p>
      <p>Mouse: {coordinates.x}, {coordinates.y}</p>
    </div>
  )
};

export default Index;
