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
 import { useDispatch, useSelector } from "react-redux";
 import {addtask} from "./todoslice";
 import { useState } from "react";
const App=()=>{
    const work=useSelector(state=>state.todo.task);
    const dispatch=useDispatch();

    const [val,setVal]=useState("");
    console.log(work);
    let sno=0;
    const ans=work.map((key)=>{
      sno++;
      return(
        <>
        <tr>
          <td>{sno}</td>
          <td>{key.task}</td>
        </tr>
        </>
      )
    })
    
    return(
      <>
      <h1>todo program</h1>
      <h1>enter work:<input type="text" value={val}
      onChange={(e)=>{setVal(e.target.value)}}/></h1>
      <button onClick={()=>{dispatch(addtask({task:val}))}}>add</button>
      <hr/>
    <table border="5px" width="300px" >
      <tr>
        <th>s.no</th>
        <th>data</th>
      </tr>
      {ans}
    </table>
      </>
    )
  }
  export default App;
