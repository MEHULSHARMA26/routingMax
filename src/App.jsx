
import './App.css'
import { Route, Routes,BrowserRouter,Link, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import User from './components/User'
import Userlist from './components/Userlist'
import Profile from './components/Profile'
function App() {
 
  return (
    <>
      
    
      <Header />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/:id' element={<User />}></Route>
         <Route path='/userlist'>
          <Route index element={<Userlist />}></Route>
          <Route path=':id' element={<Profile />}></Route>
         </Route>
       </Routes>
    
     
     
    </>
  )
}
function Header(){
  let navi = useNavigate();
  return(
    <>
    
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li> */}
          {/* <li><button onClick={()=>{
            navi("/")
          }}>Home</button></li>
          <li><button onClick={()=>{
            navi("/dashboard")
          }}>Dashboard</button></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/userlist">userlist</Link></li>

        

        </ul>
      </nav>
    
    </>
  )
}

export default App
