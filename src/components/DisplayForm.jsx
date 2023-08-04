import React,{useState} from 'react'

const DisplayForm = (props) => {
    // const [complete, setComplete] = useState(false)

    const removeTask = (Idx) => {
        props.deleteTask(Idx)

    }
    const makeComplete =(Idx, isChecked) => {
        props.updateTask(Idx, isChecked)
    }
    return (
        <div style={{display:'inline-flex', alignContent:'center', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'column'}}>
            {props.nextToDo.map((eachTask, Idx) =>{
                return (
                    
                    <div style = {{background:'tomato', height:50, width:200, margin: 25, alignItems:'center'}}>
                        {eachTask.isCompleted?<p style={{textDecoration: 'line-through'}}>{eachTask.toDo}</p>:<p>{eachTask.toDo}</p>}
                        
                        <input type="checkbox" checked={eachTask.isCompleted} onChange={(e)=>makeComplete(Idx,e.target.checked)}/>  
                        {/* do an  onChange={e=>}   (arrIdx, targetBool) */}
                        <p>{Idx}</p>
                        <button name="delete" onClick={()=>removeTask(Idx)}>Delete</button>
                    </div>
                )
            })}
            
            
        </div>
    )
}

export default DisplayForm