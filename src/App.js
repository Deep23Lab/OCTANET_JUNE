
import './App.css';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState("")
  const [disc , setDisc] = useState("")
  const [task, setTask] = useState([])
  const [add,setAdd] = useState(false)
  const [complete , setComplete] = useState([])


  const submitHandler = () => {
    setTask([...task,{title,disc}])
    setTitle('')
    setDisc('')
  }
  const deleteHandler = (i) => {
    let remove = [...task]
    remove.splice(i ,1)
    setTask(remove)
  }

  const succedHandler = (i) => {
      let comp = task[i];
      setComplete([...complete , comp])
      deleteHandler(i)
  }

  const updateDelete = (i) => {
      let dlt = [...complete]
      dlt.splice(i,1)
      setComplete(dlt)
  }


  let noTask = <h3>No task Availabe</h3>
  if(task.length > 0 && !add){
  noTask = task.map((e,i) => (
    <div key={i}>
      <h2>{e.title}</h2>
      <h4>{e.disc}</h4>
      <button onClick = {() => deleteHandler(i)}  >Delete</button>
      <button onClick = {() => succedHandler(i)}>Complete</button>
    </div>
  ) )
}else if(add && complete.length > 0){
    noTask = complete.map((e,i) => (
      <div key={i}>
          <h2>{e.title}</h2>
          <h4>{e.disc}</h4>
          <button onClick={() => updateDelete(i)}>Delete</button>
      </div>
    ))
}

  return (
    <div className="App">
      <div>
        <input 
          type='text'
          placeholder='Enter Your Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Task Details'
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
        />
        <button onClick={submitHandler}>Add</button>
      </div>
      <div>
        <button className={`${!add && 'active'}`} onClick={() => setAdd(false)}>Todo</button>
        <button className={`${!add && 'active'}`} onClick={() => setAdd(true)}>Complete</button>
      </div>
      <div>
        {noTask}
      </div>
    </div>
  );
}

export default App;
