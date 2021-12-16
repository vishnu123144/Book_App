import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css';

export default function Login() {

    // const [username, setusername] = useState('');
    // const [password, setpassword] = useState('');
    // function login(){
    //     fetch('http://localhost:3001/auth/v1',{
    //         method:'POST',
    //         headers:{
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify({username,password})
    //     })
    //     .then(res=>res.json())
    //     .then(data=>localStorage.setItem('token', data.token));
    // }
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
     //const [error, seterror] = useState(false)
   
    const handleSubmit = () => {
        fetch('http://localhost:8084/userservice/api/v1/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('email', email);
             //setError(false);
             //setIsAuthenticated(true);
              //history.push('/');
            } else {
            //  setError(true);
            }
          });
        console.log(email, password);
      };
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
                      <li className="nav-item" id="reg">
                         <Link to="/" className="nav-link">Home</Link>
                      </li>
                     
                  </ul>
          
        
      </div>
    </nav>



        <div className="container mt-3" id="login">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center">Login</h2>      
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} className="form-control" placeholder="email"/>
                    </div>
                    <div className="mb-2">
                        <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-success" onClick={handleSubmit}>Login</button>
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
