import React from 'react';
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to='/aout'>About</Link>
        
        </div>
    )
}

export default Nav;