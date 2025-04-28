import { useState } from "react"
import { useNavigate } from "react-router-dom";



const Login=()=>{
    const nav=useNavigate();
    const initialValue={
        Name:"Jerin",
        Pass:"1111"
    }

    const [name,setName]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit=()=>{
        console.log(name);
        console.log(pass);
        
        
        try{
            if(initialValue.Name==name&&initialValue.Pass==pass){
                nav("/Home")
                localStorage.setItem("userName",name)
                alert("You have login successfully")
          }else{
            alert("Check you details twice before login")
          }
        }catch(err){
            alert(err)
        }
    }
    return(
        
        <>
        <div className="Main">

            

            <div className="img">
            <h1>Image</h1>
            </div>
         
       <div>
        <div><label htmlFor="Name">Enter Your Name</label></div>


           <div><input className="Name-input" type="text" 
           value={name}
           onChange={(e)=>setName(e.target.value)}
           /></div>


           <div><label htmlFor="Password">Enter Your password</label></div>
           <div><input className="Password-input" type="password"
           value={pass}
           onChange={(e)=>setPass(e.target.value)}
           /></div>

           <div><button  onClick={handleSubmit}> Submit</button></div>
           </div>
         </div>
        </>

    )
}
export default Login
        