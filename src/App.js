import {useState} from "react";

function App() {
    const [horizontal,setHorizontal] = useState(10)
    const [vertical,setVertical] = useState(10)
    const [blur,setBlur] = useState(10)
    const [spread,setSpread] = useState(10)
    const [color,setColor] = useState("#000")
  return (
    <div className="container p-4 min-h-screen flex flex-col md:flex-row justify-center items-center gap-6" dir="rtl">
      <div className="flex-1 p-3 flex flex-col items-center justify-around gap-4 w-full">
        <div className="w-full flex flex-col gap-2">
            <label className="px-2 py-1 font-bold text-sky-700">طول افقی</label>
            <input type="range" className="w-full" min="-30" max="30" value={horizontal} onChange={e => setHorizontal(e.target.value)}/>
        </div>
          <div className="w-full flex flex-col gap-2">
              <label className="px-2 py-1 font-bold text-sky-700">طول عمودی</label>
              <input type="range" className="w-full" min="-30" max="30" value={vertical} onChange={e => setVertical(e.target.value)}/>
          </div>
          <div className="w-full flex flex-col gap-2">
              <label className="px-2 py-1 font-bold text-sky-700">تاری</label>
              <input type="range" className="w-full" min="0" max="30" value={blur} onChange={e => setBlur(e.target.value)}/>
          </div>
          <div className="w-full flex flex-col gap-2">
              <label className="px-2 py-1 font-bold text-sky-700">گسترش رنگ</label>
              <input type="range" className="w-full" min="0" max="30" value={spread} onChange={e => setSpread(e.target.value)}/>
          </div>
          <div className="flex justify-start gap-2">
              <label className="px-2 py-1 font-bold text-sky-700">رنگ</label>
              <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
          </div>
      </div>
        <div className="flex-1 flex justify-center items-center w-full">
            <div style={{boxShadow : ` ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`}} className="bg-sky-900 w-full h-60 flex justify-center items-center w-2/3 p-2">
                <p className="text-center p-3 bg-gray-400">{`Box Shadow : ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
