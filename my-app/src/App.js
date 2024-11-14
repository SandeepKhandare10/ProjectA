import React from 'react';
import "./App.css"
import One from './me.jpg'
// import "./App.test.js"
import Navbar  from './navbar.js';
import Button from './button.js';
import Cls from './clas.js';
const App = () => {
    // console.log("Sandeep");
    // alert("hii");
    return (
        <div>
           <Navbar name="Sandeep" />
          
            <h1 className='one'>Hello World</h1>
            <h1 style={{color:"red"}}>Hello</h1>
           
            <img src={One} alt='img' style={{width: '300px', height: '300px'}}/>
            <Button/>
            <Cls/>
            <Navbar />
        </div>
    )
}

export default App;