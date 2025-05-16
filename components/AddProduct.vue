<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div>
                <label>Name:</label>
                <input type="text" v-model="formData[0]">
            </div>
            <div>
                <label>Price: </label>
                <input type="number" v-model="formData[1]">
            </div>
            <div>
                <label>category: </label>
                <input type="text" v-model="formData[2]">
            </div>
            <div>
                <label>description: </label>
                <input type="text" v-model="formData[3]">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(["p-added"]);

// const name = ref("");
// const price = ref(0);
// const category = ref("");
// const description = ref("");

const formData = ref([]);

function submitForm() {
    console.log(formData.value);
    addProduct(formData.value);
    formData.value = [];
    emit("p-added");
}

</script>