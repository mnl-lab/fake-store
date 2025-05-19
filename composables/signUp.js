import {auth} from "@/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { updateProfile } from "firebase/auth";

export async function signup(email, password, displayName) {
    try {
        // Wait for the user creation to complete
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Update profile with correct parameters (needs an object with displayName)
        await updateProfile(user, {
            displayName: displayName
        });
        
        console.log("signed up as ", user.uid, " : ", user.displayName);
        
        // Return the user ID AFTER the async operations complete
        return user.uid;
    } catch (error) {
        console.log("error creating user ", error);
        throw error;
    }
}