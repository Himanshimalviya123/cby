//  import { useDispatch, useSelector } from "react-redux";
//  import {changecolor} from "./colorslice";
//  import { useState } from "react";
// const App=()=>{
//     const myclr=useSelector(state=>state.mycolor.color);
//     const dispatch=useDispatch();

//     const [val,setVal]=useState("");
//     return(
//       <>
//       <h1>my change color program</h1>
//       <h1>enter color:<input type="text" value={val}
//       onChange={(e)=>{setVal(e.target.value)}}/></h1>
//       <button onClick={()=>{dispatch(changecolor(val))}}>change name</button>
//       <hr/>
//       <div style={{width:"200px",height:"200px",border:"2px solid black",backgroundColor:myclr}}>

//       </div>
//       </>
//     )
//   }
//   export default App;
////////////////////////////////////////////////////////
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTask,RemoveTask,taskComplete,taskInComplete,myEditSave,} from"./todoslice";
function App() {
  const [txtVal, setTxtVal] = useState("");
  const [btnStatus, setbtnStatus] = useState(true);
  const [myid, setMyid] = useState("");
  const Data = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  console.log(Data);

  const dataEdit = (id, work) => {
    setTxtVal(work);
    setbtnStatus(false);
    setMyid(id);
  };

  const myEditData = () => {
    dispatch(myEditSave({ id: myid, work: txtVal }));
    setbtnStatus(true);
  };

  let sno = 0;
  const ans = Data.map((key) => {
    sno++;
    return (
      <>
<tr>
<td> {sno} </td>
<td>{key.taskStatus ? (
<> <span style={{ color: "red", textDecoration: "line-through" }}>{key.work}</span> </> ) : ( <>{key.work} </>)}</td>
          <td>
            <button
              onClick={() => {
                dispatch(RemoveTask({ id: key.id }));
              }}
            >
              Del
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(taskComplete({ id: key.id }));
              }}
            >
              Complete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(taskInComplete({ id: key.id }));
              }}
            >
              InComplete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dataEdit(key.id, key.work);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1> ToDo App </h1>
      Enter Your Task{" "}
      <input
        type="text"
        value={txtVal}
        onChange={(e) => {
          setTxtVal(e.target.value);
        }}
      />
      {btnStatus ? (
        <>
          <button
            onClick={() => {
              dispatch(
                addTask({ id: Date.now(), work: txtVal, taskStatus: false })
              );
            }}
          >
            Add
          </button>
        </>
      ) : (
        <>
          <button onClick={myEditData}>Edit Save</button>
        </>
      )}
      <hr />
      <table>
        <tr>
          <th> Sno</th>
          <th> Your Work </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th></th>
        </tr>
        {ans}
      </table>
    </>
  );
}

export default App;
