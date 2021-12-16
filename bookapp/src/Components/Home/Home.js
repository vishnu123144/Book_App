import React from 'react'
import { Link} from "react-router-dom";
import '../Home.css';
export default function Home() {
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
            <ul className="navbar-nav ml-auto" id="home">
                    <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                    <ul  className="navbar-nav ml-auto" id="btn" >
                        <li className="nav-item" id="reg">
                           <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item" id="log">
                        <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
            
          
        </div>
      </nav>
           
         
            <section>
            <container>
            <h5 class="text-uppercase">Welcome to</h5>
            <h1 class="text-uppercase">"The Book Land..!"</h1>	
            </container>

            <section1 id="img">
                <img src="/images/bookStore.png"/>
            </section1>
            <section2>
                <img src="/images/tenor.gif"/>
            </section2>

           
            </section>

        <div className="footer">
            <h2>BookLand &copy; 2021</h2>
        </div>
    

            </div>
    )
}
