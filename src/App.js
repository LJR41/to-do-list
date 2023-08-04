import logo from './logo.svg';
import './App.css';
import DisplayForm from './components/DisplayForm';
import ToDoForm from './components/ToDoForm';
import { useState } from 'react';

function App() {
  // a variable to be passed down to children
  const [nextToDo, setNextToDo] = useState([])
  // a function for the child to change variable above ^
  const addToList = (task) => {
    setNextToDo([...nextToDo,task ])
    console.log(nextToDo)
  }
  const deleteTask =(deleteIdx)=> {
    const filterList = nextToDo.filter((eachTask, idx) => idx !== deleteIdx);
    setNextToDo(filterList)
  }

  const updateTask = (updateIdx,isChecked) => {
    const newTasks = nextToDo.map((eachTask, Idx ) =>{
      if(updateIdx === Idx){
        return {...eachTask, isCompleted:isChecked}
      }
      else{
        return eachTask;
      }
    })
    setNextToDo(newTasks)
  }
  return (
    <div className="App">
      <ToDoForm newToDo={addToList}></ToDoForm>
      <DisplayForm nextToDo ={nextToDo} deleteTask={deleteTask} updateTask={updateTask}></DisplayForm>      
    </div>
  );
}

export default App;
