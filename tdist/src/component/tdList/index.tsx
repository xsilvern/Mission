import {useState,ChangeEvent, CSSProperties,useEffect} from "react";
import axios from "axios";
type Todo = {
    id: number;
    description: string;
};
const border:CSSProperties={
    width:200,
    height:22,
    border:"1px solid black",
};
const right:CSSProperties={
    float:"right"
};

const ToDoList=(): JSX.Element=>{
    const [List,setList]=useState<Todo[]>([]);
    const readTodos= async ()=>{ 
        const {data}= await axios.get("http://localhost:5000/todo");
        setList(data);
    };
    useEffect(()=>{
        readTodos();
    },[List]);
    
    const [lastValue,newLastValue]=useState<string>("");
    const changeString=(event: ChangeEvent<HTMLInputElement>)=>{
        newLastValue(event.currentTarget.value);
    };
    const addList=()=>{
        axios.post("http://localhost:5000/todo",{
                description:lastValue,
        })

        newLastValue("");
    };
    const deleteList=(n:number)=>{
        return ()=>{
            axios.delete('http://localhost:5000/todo/'+n);
        };
    }
    console.debug("ddd");
    return (<>
    <section>
      <input type="text" value={lastValue} onChange={changeString} />
      <input type="button" onClick={addList} value={"등록"}/>
      <br/><br/>
      {
          List.map((todo):JSX.Element=>{
              return (<>
                <div style={border}>{todo.description}<input type="button" onClick={deleteList(todo.id)} value={"X"} style={right}/></div>
                
                <br/>
              </>);
          })
      }
    </section>
        </>);
};                                                                                                              
export default ToDoList;