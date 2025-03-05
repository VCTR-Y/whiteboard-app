function Ribbon(props) {

  const {setDrawingColor, clearCanvas, eraserMode, setEraserMode, strokeWidth, setStrokeWidth} = props;
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Cyan", "Purple", "Grey", "Pink", "Brown", "Black", "White"];

  return (
    <div className="p-3 bg-gray-200 flex justify-between items-center gap-3">
      <div className="flex justify-between items-center gap-3"> 
        <div className="grid-cols-6 gap-3 grid">
        {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => {
            setDrawingColor(color);
            if (eraserMode) {
              setEraserMode(false);
          }
        }}
          className="w-8 h-8 rounded border border-gray-300 hover:border-gray-500 cursor-pointer"
          style={{ backgroundColor: color }}
        />
      ))}
        </div>
        <button onClick={() => setEraserMode((prev) => !prev)} className="w-12 h-16 bg-gray-400 border-gray-300 text-white rounded border hover:border-gray-500 cursor-pointer">
        Eraser
      </button>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="stroke-width">Stroke Width:</label>
        <input
          type="range"
          id="stroke-width"
          min="1"
          max="20"
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
          className="w-24"
        />
      </div>
      <button
        onClick={clearCanvas}
        className="w-1/32 h-1/2 bg-red-500 text-white rounded hover:bg-red-300 cursor-pointer"
      >
        Clear
      </button>
  </div>
  );

}

export default Ribbon;