import { doc, getDoc } from "firebase/firestore";
import { db } from "~/firebase";

export async function getProduct(id) {
    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        const product = {
            pid: id,
            ...docSnap.data() 
        };
        return product;
    } catch (error) {
        console.log(error);
        return null; 
    }
}