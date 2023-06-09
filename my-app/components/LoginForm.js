import React, { useState } from "react";

const LoginForm = () => {

    const [isLogin,setLogin] = useState(true)
    const [Error,setError] = useState("")

    const handleRegister = () => {
        setLogin(!isLogin)
    }
  return (
    isLogin ? (
    <div>
      <div className=" md:w-3/4 mx-auto h-3/4 my-auto p-4 text-black">
        <div className="border rounded-xl p-2 bg-gradient-to-t from-blue-500 to-purple-500" >
        <h1 className="text-center p-4 text-2xl text-black">LOGIN</h1>
          <div className="p-1 my-5">
            
            <label className=" bg-yellow-500 p-1 rounded-md w-max border rounded-b-sm ">User Name</label>
            <div className="">
              <input
                className="bg-inherit border p-1  w-full  text-white text-center my-2 mt-1 rounded-b-lg"
                type="email"
                placeholder="example@gmail.com"
                
              ></input>
            </div>
          </div>
          <div className=" p-1">
            <label className=" bg-yellow-500 p-1 rounded-md w-max border rounded-b-sm ">Password</label>
            <div className="">
              <input
                className="bg-inherit border p-1 rounded-lg text-white text-center w-full my-1 rounded-t"
                type="password"
                placeholder="******"
                
              ></input>
            </div>
          </div>
          <div className="text-center border rounded-xl my-4 mx-8 p-1  bg-gradient-to-tr from-slate-700 via-slate-400 to-slate-900  hover:animate-pulse">
            <button>Login</button>
          </div>
          <div className="text-right m-4  text-black ">
            <button className="bg-white rounded-md py-1 px-4 m-1" onClick={handleRegister}>
                Register
            </button>
          </div>
        </div>
      </div>
    </div>
    ) : (
        <div>
        <div className=" md:w-3/4 mx-auto h-3/4 my-auto p-4 text-black">
          
          <div className="border rounded-xl p-2 bg-gradient-to-t from-blue-500 to-purple-500" >
          <h1 className="text-center p-4 text-2xl text-black">REGISTER</h1>
            <div className="p-1 my-5">
           
              <label className=" bg-yellow-500 p-1 rounded-md w-max border rounded-b-sm ">User Name</label>
              <div className="">
                <input
                  className="bg-inherit border p-1  w-full  text-white text-center my-2 mt-1 rounded-b-lg"
                  type="email"
                  placeholder="example@gmail.com"
                  
                ></input>
              </div>
            </div>
            <div className=" p-1">
              <label className=" bg-yellow-500 p-1 rounded-md w-max border rounded-b-sm ">Password</label>
              <div className="">
                <input
                  className="bg-inherit border p-1 rounded-lg text-white text-center w-full my-1 rounded-t"
                  type="password"
                  placeholder="******"
                  
                ></input>
              </div>
            </div>
            <div className="text-center border rounded-xl my-4 mx-8 p-1  bg-gradient-to-tr from-slate-700 via-slate-400 to-slate-900  hover:animate-pulse">
              <button>Register</button>
            </div>
            <div className="text-right m-4  text-black ">
              <button className="bg-white rounded-md py-1 px-4 m-1" onClick={handleRegister}>
                  Login
              </button>
            </div>
          </div>
        </div>
      </div>
    )

    

    
  );
};

export default LoginForm;
