import UserContext from "../contexts/UserContext"
import { useContext } from "react";


export default function Today(){

    const { userData, setUserData } = useContext(UserContext);

    console.log(userData)
    return (<></>)
}