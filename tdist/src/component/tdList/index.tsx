import {useState,ChangeEvent, CSSProperties} from "react";
type ToDoType={
    id:number;
    todo:string;
};
const border:CSSProperties={
    width:200,
    height:22,
    border:"1px solid black",
};
const right:CSSProperties={
    float:"right"
};
const ToDoList=()=>{
    const [List,newList]=useState<ToDoType[]>([]);
    const [i,newI]=useState<number>(0);
    const [lastValue,newLastValue]=useState<string>("");
    const changeString=(event: ChangeEvent<HTMLInputElement>)=>{
        newLastValue(event.currentTarget.value);
    };
    const addList=()=>{
        const t:ToDoType={id:i,todo:lastValue};
        List.push(t);
        newI(i+1);
        newList([...List]);
        newLastValue("");
    };
    const deleteList=(n:number)=>{
        return ()=>{
            newList(List.filter((item)=>{
                return item.id!==n}));
        };
    }

    return (<>
    <section>
      <input type="text" value={lastValue} onChange={changeString} />
      <input type="button" onClick={addList} value={"등록"}/>
      <br/><br/>
      {
          List.map((s)=>{
              return (<>
                <div style={border}>{s.todo}<input type="button" onClick={deleteList(s.id)} value={"X"} style={right}/></div>
                
                <br/>
              </>);
          })
      }
    </section>
        </>);
};                                                                                                              
export default ToDoList;