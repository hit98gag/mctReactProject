import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'


export const Login = (props) => {
    const navigate= useNavigate()
    const loginpage =()=>{
        if(props.email !=="" && props.password !=="" && props.checkinput !== false){
            if(props.email ==="Hitesh123" && props.password ==="1234" && props.checkinput === true){
                localStorage.setItem('login',true)
                navigate('/home')  
                props.setEmail("")
                props.setPassword("")
                props.setCheckinput(false)
            }
            else{
                alert("please enter valid details")
            }
           
        }
        else{
            alert("please enter valid details")
        }
       
    }

    // useEffect(() => {
    //     let login= localStorage.getItem('login')
    //     if(login){
    //       navigate('/home')
    //     }
    //     else{
    //         navigate('/')

    //     }
        
      
    
    
    // })

   
  return (
    <div className='login_form'>
        <div className="login-container">
            <div className="login-heading">
                <h1>Welcome back to Pretty Login </h1>
                <p>It's great to have yout back!</p>
            </div>
            <div className="login-input-container">
                <label> Email</label>
                <input type="text" value={props.email} onChange={(e)=>{
                    props.setEmail(e.currentTarget.value)
 
                }}/>
                <label> Password</label>
                <input type="password"  value={props.password} onChange={(e)=>{
                    props.setPassword(e.target.value)

 
                }} />
            </div>
            <div className="forget-container">
                <div className="checkbox">
                <input  checked={props.checkinput}type="checkbox"  onChange={(e)=>{
                    props.setCheckinput(e.target.checked)
                }}/>
                <label>Remember me</label>
                </div>
               
                <p>forget password?</p>

            </div>

            <div className="login-buttons">
                <button className='btn-pink' onClick={()=>{
loginpage()
                }
                    
                }>Login</button>
                <button className='btn-white'>Create Account</button>

            </div>
            <div className="others-logins">
                <p> or login with</p>
                <h4>Facebook  Google</h4>
            </div>

        </div>
        <div className="image-container">
            <img src="https://th-i.thgim.com/public/incoming/hy1gx4/article66435367.ece/alternates/FREE_1200/IMG_0893.jpg" alt="" />

        </div>
    </div>
  )
}
