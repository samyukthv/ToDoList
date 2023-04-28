import './App.css'
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  
  const deleteToDo = (id) => {
    setToDos(toDos.filter(todo => todo.id !== id))
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div>
        <div className="subHeading">
          <br />
          <h2>WHATS THERE FOR TODAY</h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setToDos([...toDos, {id:Date.now(), text: toDo,status:false}])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {
            toDos.map((obj,index)=>{
          return(
              <div key={obj.id} className="todo">
                <div className="left">
                  <input  onChange={(e)=>{
                    console.log(e.target.checked);
                    console.log(obj);
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked

                  };
                  return obj2;
                }));

                  }} 
                   value={obj.status} type="checkbox"/>
                
                  <p style={{textDecoration:obj.status ? 'line-through' : "none",}}>
                    <span style={{ color: obj.status ? "red":"green",textDecorationColor:"red"}}>
                    
                      {obj.text}</span> </p>
                                       
                </div>
                <div>
                  <p style={{fontSize:'15px'}}> {new Date().toLocaleDateString()}</p>
                </div>

                <div className="right">
                <i onClick={() => deleteToDo(obj.id)} className="fa-solid fa-trash"></i>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
