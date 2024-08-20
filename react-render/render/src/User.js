import React from 'react'

class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:'neha12@gmail.com'
        }
    }

    render()

    {
        console.log("Render Method" ,this.state.email)
        // console.log("Render Method" ,this.props) 
        return(
            <div>
                <h1>
                    User Component
                </h1>
                <button onClick={()=>this.setState({email:"renu@test.com"})}>Update Email</button>
            </div>
        )
    }
}

export default User;