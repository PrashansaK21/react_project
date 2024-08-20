function Student(props){
    return(
        <div style={{backgroundColor:"skyblue",margin:10}}>
            <h1>Hello {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>State: {props.other.state}</h3>
            <h4>City: {props.other.city}</h4>
        </div>
    )
}

export default Student;