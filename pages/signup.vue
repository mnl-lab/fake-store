<template>
    <div class="container">
        <form class="form" @submit.prevent="registerUSer">
            <div class="name">
                <label>username: </label>
                <input v-model="displayName" type="text">
            </div>
            <div class="email">
                <label>email: </label>
                <input v-model="email" type="email">
            </div>
            <div class="password">
                <label>password: </label>
                <input v-model="password" type="password">
            </div>
            <div class="confirm-password">
                <label>confirm password: </label>
                <input v-model="confirmPassword" type="password">
            </div>
            <div class="submit">
                <button type="submit">Submit</button>
            </div>
            <div class="login">
                <p>Already have an account? <router-link to="/">Login</router-link></p>
            </div>
        </form>

    </div>
</template>


<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from "vue-router";
import { signup } from '#imports';
const router = useRouter();
const displayName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

async function createUserDoc(uid) {
    try {
        // Validate the uid parameter
        if (!uid) {
            throw new Error("User ID is required");
        }

        const userData = {
            displayName: displayName.value,
            email: email.value,
            cart: [],
            purchases: 0
        }

        // Use try-catch to handle Firestore errors
        await setDoc(doc(db, "users", uid), userData);
        console.log("User data stored at document ID:", uid);
    } catch (error) {
        console.error("Error creating user document:", error);
        throw error; // Re-throw to handle in the calling function
    }
}

async function registerUSer() {
    try {
        if (password.value !== confirmPassword.value) {
            alert("Passwords don't match!");
            return;
        }
        const uid = await signup(email.value, password.value, displayName.value);
        console.log(uid);
        await createUserDoc(uid);
        alert('user created succesfully!');
        router.push("/home");
    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed: " + error.message);
    }
}


</script>