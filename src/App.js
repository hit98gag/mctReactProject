import { useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Protected } from './Components/Protected/Protected';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Components/Product/Product';
import { Users } from './Components/Users/Users';
import { Contact } from './Components/Contact/Contact';
import { Provider } from "react-redux";
import store from './Redux/store'
import { Productdetails } from './Components/Product/Productdetails';




function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkinput, setCheckinput]= useState(false)

  const location= useLocation()
  return (
    <div className="app">
      <Provider store={store}>
      {location.pathname !=='/' && <Navbar />}
        <Routes>
        <Route path='/' element={    <Login email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword} 
        checkinput ={checkinput}
        setCheckinput ={setCheckinput}/>}></Route>
          
          <Route path='/home' element={ <Protected Component={Home} />}></Route>
          <Route path='/products' element={ <Protected Component={Product} />}>
          <Route path='/products:category' element={ <Protected Component={Product} />}></Route>
          </Route>
          <Route   path="/productdetails/:id" element={<Productdetails /> }/>
          <Route path='/users' element={ <Protected Component={Users} />}></Route>
          <Route path='/contact-us' element={ <Protected Component={Contact} />}></Route>



          

        </Routes>
        </Provider>
    </div>
  );
}

export default App;
 