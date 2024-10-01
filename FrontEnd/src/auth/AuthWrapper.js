//create protected router
import { createContext,useContext,useState } from "react";

import {RenderHeader} from "../component/structure/Header";
import {RenderMenu,RenderRouter} from "../component/structure/RenderNavigation";


const AuthContext= createContext();
export const AuthData=()=>useContext(AuthContext);

export const AuthWrapper=()=>{
    const [user,setUser] = useState({type:"",isAuthenticated:false});
    const login = (email,password) =>{
        //Make a call

        return new Promise((resolve,reject)=>{
            if(password==='password'){
                setUser({type:"student",isAuthenticated:true});
                resolve("success");
            } else {
                reject("Incorrect password");
            }
        })
    }

    const logout = () => {
        setUser({...user,isAuthenticated:false})
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            <>
                <RenderHeader/>
                <RenderMenu/>
                <RenderRouter/>
            </>
        </AuthContext.Provider>
    )
}