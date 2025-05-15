import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getProducts() {
  try {
    const productsCollection = collection(db, "products");
    const querySnapshot = await getDocs(productsCollection);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
