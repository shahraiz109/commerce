import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import FaceIcon from "@mui/icons-material/Face";
import {useDispatch,useSelector} from "react-redux"
import { login,clearError,register } from '../../action/userAction';


import MialOutlinIcon from "@mui/icons-material/MailOutline"
import LockOpenIcon from "@mui/icons-material/LockOpen"

const Login = ({history}) => {

    const dispatch=useDispatch()

    const { error, loading,isAuthenticated } = useSelector((state) => state.user);


   const loginTab=useRef()
    const registerTab = useRef()
    const switcherTab = useRef()

    const [loginEmail,setLoginEmail]= useState()
    const[loginPassword,setLoginPassword]= useState()

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const{name,email,password}= user;

    const [avatar,setAvavtar]= useState()
    const [avatarPreview, setAvavtarPreview]= useState("/Profile.png")

    const loginSubmit= (e) => {
        e.preventDefault()
dispatch(login(loginEmail,loginPassword))

       
    }

    const registerSubmit=(e) => {
        e.preventDefault()

        const myForm= new FormData()

        myForm.set("name",name)
        myForm.set("email", email)
        myForm.set("password", password)
       
        myForm.set("avatar", avatar)

       dispatch(register(myForm))
    }

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader(); // Corrected typo here

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvavtarPreview(reader.result);
                    setAvavtar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch(clearError())
        }
        if(isAuthenticated){
            history.push("/account")
        }
    },[dispatch])

    const switchTabs= (e, tab) => {
   if(tab === "login"){
    switcherTab.current.classList.add("shiftToNeutral")
       switcherTab.current.classList.remove("shiftToRight")

       registerTab.current.classList.remove("shiftToNeutralForm")
       loginTab.current.classList.remove("shiftToLeft")
   }

     if(tab === "register"){
        switcherTab.current.classList.remove("shiftToNeutral")
         switcherTab.current.classList.add("shiftToRight")
 
         registerTab.current.classList.add("shiftToNeutralForm")
         loginTab.current.classList.add("shiftToLeft")

     }
    }

  return (
  <Fragment>
    <div className="logincontainer">
        <div className="signup">
            <div>
                <div className="loginsignup">
                    <p onClick={(e)=> switchTabs(e, "login")}>LOGIN</p>
                          <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
            </div>
            <form className="loginform" ref={loginTab} onSubmit={loginSubmit}>

             <div className="loginEmail">
                <MialOutlinIcon/>
                <input
                    type='email'
                    placeholder='Email'
                    required
                    value={loginEmail}
                    onChange={(e)=> setLoginEmail(e.target.value)}
                />
             </div>
             <div className="loginPassword">
                <LockOpenIcon/>
                <input type="password"
                placeholder='password'
                required
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
                />
             </div>
             <Link to="/password/forget">forget password</Link>
             <input type="submit" value="login" className='loginBtn'/>

            </form>

            <form 
            className='signupform'
            ref={registerTab}
            encType='multipart/form-data'
            onSubmit={registerSubmit}
            >
            <div className="signupName">
                <FaceIcon/>
                <input type="text"
                placeholder='Name'
                required
                name='name'
                value={name}
                onChange={registerDataChange}
                 />
            </div>
            <div className="signupEmail">
                          <input
                              type='email'
                              placeholder='Email'
                              required
                              value={email}
                              onChange={registerDataChange}
                          />
            </div>
            <div className="signupPassword">
                          <input type="password"
                              placeholder='password'
                              required
                              value={password}
                              onChange={registerDataChange}
                          />
            </div>
            <div id="registerImage">
                <img src={avatarPreview} alt='avatar preview'
                 />
                 <input type="file"
                  name='avatar'
                  accept='image/*'
                  onChange={registerDataChange}
                  />
            </div>
            <input type="submit"
            value="register"
            className='signupBtn'
       
             />

            </form>

        </div>
    </div>
  </Fragment>
  )
}

export default Login
