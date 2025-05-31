import { useState } from 'react';
import {BrowserRouter, Routes, Route,Link, useNavigate,Outlet} from "react-router-dom";
import './App.css';

function App() {


  return <div>
<BrowserRouter>
{/* <a href="http:/"></a>  // we cannot use this because it loads whole html again  hence we see loader , insteeed of this we use LINK tag*/} 

 <Routes>
<Route path='/' element={<Landing/>}>
  <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
  <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/results' element={<Results/>}/>
  <Route path='/books' element={<Books/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='*' element={<ErrorPage/>}/>
</Route>

 
 </Routes>
 </BrowserRouter>
  </div>

}
function ErrorPage() {
  return (
    <div style={{
      height: "100vh", // Full viewport height
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "center",     // Center vertically
      flexDirection: "column",  // Stack elements vertically
      textAlign: "center"
    }}>
      <p>Sorry, page not found</p>
      <img 
        src="https://www.talentlms.com/blog/wp-content/uploads/2017/07/the-learning.jpg" 
        alt="Learning" 
        style={{ width: "50%", maxWidth: "300px", height: "auto" }}/>

    </div>
  );
}

function Landing() {
  return <div style={{
    backgroundColor:"white",
    height:'100vh',
    
    
  }}>
   <Header/>
<Banner/>




   <div style={{ backgroundColor: '#809bc9', height: '90vh' }}>

    
    
   <Outlet/> 
   
  </div>

<div>
  <Footer/>
</div>
  </div>
  
}





function Header() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '3px ',
      backgroundColor: '#f5f5f5'
    }}>
      <Link to="/" style={{ margin: '0 20px', color: 'black' }}>Allen |</Link>
      <Link to="/neet/online-coaching-class-11" style={{ margin: '0 20px', color: 'black' }}>Class11 |</Link>
      <Link to="/neet/online-coaching-class-12" style={{ margin: '0 20px', color: 'black' }}>Class12 |</Link>
      <Link to="/courses" style={{ margin: '0 20px', color: 'black' }}>Courses |</Link>
      <Link to="/books" style={{ margin: '0 20px', color: 'black' }}>Books |</Link>
      <Link to="/results" style={{ margin: '0 20px', color: 'black' }}>Results |</Link>

      
        
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/login">
          <button style={{ padding: '10px', borderRadius: '10px', background: 'white', borderColor: 'blue' }}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}



function Banner(params) {
  
  return <div style={{background:'#019370',padding:5, borderRadius:7, textAlign:'center',display:'flex', justifyContent:'center'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0t1nKcJvuiXBwy7PYHNBuJ70w1WIlRcworQ&s" alt="image" width={34} />
   <b  style={{color:'yellow'}}>Get upto 90% of scholarship</b> 
   <div style={{color:'white', marginLeft:15}}>on NEET Leader & Achiever Online Courses</div>
  </div>
  
}



function Footer() {
  return (
    <footer style={{ backgroundColor: '#f2f2f2', padding: '40px 20px', color: '#333' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        <div style={{ flex: ' 200px', marginBottom: '20px' }}>
          <h4>About</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>About us</li>
            <li>Blog</li>
            <li>News</li>
            <li>MyExam EduBlogs</li>
            <li>Privacy policy</li>
            <li>Public notice</li>
            <li>Careers</li>
            <li>Dhoni Inspires NEET Aspirants</li>
            <li>Dhoni Inspires JEE Aspirants</li>
          </ul>
        </div>

        
        <div style={{ flex: '200px', marginBottom: '20px' }}>
          <h4>Help & Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Refund policy</li>
            <li>Transfer policy</li>
            <li>Terms & Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>

        
        <div style={{ flex: ' 200px', marginBottom: '20px' }}>
          <h4>Popular goals</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>NEET Coaching</li>
            <li>JEE Coaching</li>
            <li>6th to 10th</li>
          </ul>
        </div>

        
        <div style={{ flex: ' 200px', marginBottom: '20px' }}>
          <h4>Courses</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Online Courses</li>
            <li>Distance Learning</li>
            <li>Online Test Series</li>
            <li>International Olympiads Online Course</li>
            <li>NEET Test Series</li>
            <li>JEE Test Series</li>
            <li>JEE Main Test Series</li>
          </ul>
        </div>

        
        <div style={{ flex: '200px', marginBottom: '20px' }}>
          <h4>Centers</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Kota</li>
            <li>Bangalore</li>
            <li>Indore</li>
            <li>Delhi</li>
            <li>More centres</li>
          </ul>
        </div>

        
        <div style={{ flex: ' 200px', marginBottom: '20px' }}>
          <h4>Exam Information</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>JEE Main</li>
            <li>JEE Advanced</li>
            <li>NEET UG</li>
            <li>CBSE</li>
            <li>NCERT Solutions</li>
            <li>Olympiad</li>
            <li>NEET 2025 Results</li>
            <li>NEET 2025 Answer Key</li>
            <li>JEE Advanced 2025 Answer Key</li>
            <li>JEE Advanced Rank Predictor</li>
          </ul>
        </div>
      </div>

     
    </footer>
  );
}



function Class11Program() {
  return <div>
    <div style={{
      display:'flex',
      justifyContent:'center',
      gap:20,
      padding:10,
      
    }}>
      <button style={{background:'white', borderRadius:8,borderColor:'blue',padding:5}}>Online</button>
      <button style={{background:'white', borderRadius:8,borderColor:'blue',padding:5}}>Offline</button>
    </div>
   
  </div>
}

function Results() {
  return <div>

  </div>
  
}

function Books() {
  return <div>

  </div>
  
}

function Courses() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      padding: '40px',
      
    }}>
      
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        width: '250px',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2>NEET Section</h2>
        <p>NEET preparation programs with expert guidance.</p>
        
      </div>

      
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        width: '250px',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2>JEE Section</h2>
        <p>JEE preparation programs designed for success.</p>
        
      </div>
    </div>
  );
}




function Class12Program() {
  //usenavigate  is use as like user click on class12 then after 10 sec it have to return  on landing page
  const navigate = useNavigate();
  return <div>
    NEET program for class 12
  </div>
}



function Login() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundColor: '#809bc9',
    }}>
      <div style={{
        width: '350px',
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ marginBottom: '20px' }}>Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
          <input
            type="email"
            placeholder="Email"
            required
            style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{
            padding: '10px',
            background: '#019370',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}



export default App;
