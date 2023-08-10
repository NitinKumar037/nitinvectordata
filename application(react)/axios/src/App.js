import { useEffect,useState } from "react"
import axios from "axios"
import Row from "./Row"



let App=()=>{
  let [data,setData]=useState([])
  useEffect(
    ()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>{setData(res.data)}).catch((err)=>{console.log(err)})
    },[]
  )
  let del=(index)=>{
    data.splice(index,1)
    setData([...data])
  }

  return(
    <div>
      <table border={1}>
        <tr>
          <th>UID</th>
          <th>ID</th>
          <th>Title</th>
          <th>status</th>
          <th>Delete</th>
        </tr>
        {
          data.map((item,index)=><Row task={item}key={index} fun={del}id={index}/>)
        }
      </table>
      
    </div>
  )
}
export default App

