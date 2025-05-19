import {auth} from "@/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


export function login(email, password) {
    try {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("logged in as: ", user.uid);
            
            
        })
    } catch (error) {
        console.log("error login in ", error);
        throw error;
    }
}