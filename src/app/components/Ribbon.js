function Ribbon(props) {

  const {setDrawingColor, clearCanvas} = props;
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Cyan", "Purple", "Grey", "Pink", "Brown", "Black", "White"];


  return (
    <div className="p-3 bg-gray-200 flex justify-between items-center gap-3">
      <div className="grid-cols-6 gap-3 grid">
      {colors.map((color, index) => (
      <button
        key={index}
        onClick={() => setDrawingColor(color)}
        className="w-8 h-8 rounded border border-gray-300 hover:border-gray-500 cursor-pointer"
        style={{ backgroundColor: color }}
      />
    ))}
      </div>
      {/* <button onClick={() => setEraserMode((prev) => !prev)} className="w-1/24 h-1/2 bg-gray-400 text-white rounded hover:bg-gray-300 cursor-pointer">
        Eraser
      </button> */}
      <button
        onClick={clearCanvas}
        className="w-1/24 h-1/2 bg-red-500 text-white rounded hover:bg-red-300 cursor-pointer"
      >
        Clear
      </button>
  </div>
  );

}

export default Ribbon;