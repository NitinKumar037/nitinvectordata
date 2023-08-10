let Row=(props)=>{
    let x=props.task
    return(
        <tr>
            <td>{x.userId}</td>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.completed.toString()}</td>
            <td><button onClick={()=>props.fun(props.id)}>Delete</button></td>
        </tr>
    )
}
export default Row