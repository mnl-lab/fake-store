<template>
    <div class="container">
        <img src="https://th.bing.com/th/id/OIF.tFdawF0ycFeR0QStG9bBzg?rs=1&pid=ImgDetMain" alt="jacket">
        <div class="text">
            <div class="name"> {{ product.name }} </div>
            <div class="price"> {{ product.price }} $ </div>
            <button @click="goToProductDetails">View Product</button>
        </div>

    </div>

</template>

<script setup>
import { useRouter } from '#app';
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
const router = useRouter();

function goToProductDetails() {
    router.push(`products/${props.product.id}`);
}


</script>