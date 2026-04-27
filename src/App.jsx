import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Content from "./content/content.jsx";

function App() {
  const [ids,setId]= useState(0)
  const [notes,upNotes]=useState([])
  const [text, setText] = useState('');
  let num = 0

  const save = (a)=>{
    setText(a.target.value)
  }

  const Add = ()=> {
    upNotes(why => [...why,{content:text,id:ids}])
    console.log(notes)
    setId(id=>id+1)
    setText('')
    

  }

  const hello = (key)=>{
    console.log(key)
    
    upNotes(notes => notes.filter(a=> a.id !== key))
  }
  return (
    <div className="middle">
      <div>
        <h1 className="title">Note pad</h1>
        <textarea value={text} type="text" className="bigText" onChange={save} />
        <div className="align">
          <button className="button" type="button" onClick={Add} >
            Add
          </button>
        </div>
        <div className="extend">
          {notes.map((string) => !(string.content=='')&&(<Content text = {string.content} id={string.id} fun={hello}/>))}
        </div>
      </div>
    </div>
  );
}

export default App;
