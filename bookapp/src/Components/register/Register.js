import React from 'react'
import './Register.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    function RegisterUserHandler() {
        fetch('http://localhost:8084/userservice/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({ username,email,password })
        }).then(res =>{            
            if(res.status==200){               
               alert("Registered Succesfully")          
            
              }            else{             
                 alert("Unsuceessfull")          
              }        });
        ;
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item" id="logo">
              
             <span><i class="fas fa-book-open"></i></span>
            </li>
            <li className="nav-item" id="title">
              
              <a className="nav-link active" aria-current="page" href="#">BOOK LAND</a>
            </li>
            
          </ul>
          {/* <ul className="navbar-nav ml-auto" id="home">
                  <li className="nav-item">
                          <a href="/" className="nav-link">Home</a>
                      </li>
                  </ul> */}
                  <ul  className="navbar-nav ml-auto" id="btn" >
                     
                      <li className="nav-item" id="log">
                      <Link to="/" className="nav-link">Home</Link>
                      </li>
                  </ul>
          
        
      </div>
    </nav>
        
        <div className="container mt-3" id="register">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center">Register Here</h2>      
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} className="form-control" placeholder="Username"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-2">
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-success" onClick={RegisterUserHandler}>Register</button>
                    </div>
                </div>
            </div> 
        </div>

    
        <div className="footer">
        <h2>BookLand &copy; 2021</h2>
        </div>
    


        </div>

    )
}
