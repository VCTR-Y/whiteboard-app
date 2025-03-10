'use client'
import { useEffect, useState, useRef } from "react";
import Ribbon from "./components/Ribbon";

export default function Home() {
    const canvasRef = useRef(null);
    const drawingColorRef = useRef("Black");
    const strokeWidthRef = useRef(1);
    const [drawingColor, setDrawingColor] = useState("Black"); 
    const [eraserMode, setEraserMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(1);

    const clearCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {        
        const ctx = canvas.getContext('2d');

      // Set canvas dimensions
      canvas.width = 0.99 * window.innerWidth;
      canvas.height = 0.99 * window.innerHeight;

      // Drawing state
      let isDrawing = false;

      // Start drawing
      const startDrawing = (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
      };

      // Draw while moving
      const draw = (e) => {
        if (isDrawing) {
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.strokeStyle = drawingColorRef.current;
          ctx.lineWidth = strokeWidthRef.current;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      };

      // Stop drawing
      const stopDrawing = () => {
        isDrawing = false;
      };

      // Add event listeners  
      canvas.addEventListener("pointerdown", startDrawing);
      canvas.addEventListener("pointermove", draw);
      canvas.addEventListener("pointerup", stopDrawing);
      canvas.addEventListener("pointercancel", stopDrawing);
      canvas.addEventListener("pointerout", stopDrawing);

      return () => {
        canvas.removeEventListener('pointerdown', startDrawing);
        canvas.removeEventListener('pointermove', draw);
        canvas.removeEventListener('pointerup', stopDrawing);
        canvas.removeEventListener('pointercancel', stopDrawing);
        canvas.removeEventListener('pointerout', stopDrawing);
      };

      }
    }, []);

    useEffect(() => {
      if (eraserMode) {
        drawingColorRef.current = "White";
      } else {
        drawingColorRef.current = drawingColor;
      }
    }, [drawingColor, eraserMode]);

    useEffect(() => {
      strokeWidthRef.current = strokeWidth;
    }, [strokeWidth]);

  return (
    <div className="h-screen flex flex-col">
      <Ribbon setDrawingColor={setDrawingColor} clearCanvas={clearCanvas} eraserMode={eraserMode} setEraserMode={setEraserMode} strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth}/>
      <canvas ref={canvasRef} style={{touchaction: 'none'}}></canvas>
    </div>
  );
}
