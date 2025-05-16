import { addDoc, collection } from "firebase/firestore";
import { db } from "~/firebase";

export async function addProduct(data) {
    if (!data) {
        return null
    }
    try {
        const productData = {
            name: data[0],
            price: Number(data[1]),
            category: data[2],
            description: data[3]
        }
        const docRef = await addDoc(collection(db, "products"), productData);
        console.log("Document created with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.log(error);
        return null;
    }
}