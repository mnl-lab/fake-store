<template>
    <div class="container">
        <img class="pic"  src="https://th.bing.com/th/id/OIF.tFdawF0ycFeR0QStG9bBzg?rs=1&pid=ImgDetMain" alt="jacket">
        <div class="text">
            <h3 class="name"> {{ product.name }} </h3>
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

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    background-color: #ddd;
    text-align: center;
    width: fit-content;
    border: 1px black solid;
    border-radius: 5px;
    margin: 30px;
    padding: 2%;
    gap: 2px;
   
}


.pic{
    width: 240px;
    height: 240px;
}

button{
    background-color: green;
    width: 50%;
    border-radius: 5px;
    margin-top: 5px;
}
button:hover{
    translate: 0 -2px;
    cursor: pointer;
}



</style>