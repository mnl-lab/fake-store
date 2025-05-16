<template>
    <div class="container">
        <div class="name"> {{ product.name }} </div>
        <div class="price">Price: {{ product.price }}</div>
        <div class="category">Gategory: {{ product.category }}</div>
        <div class="description">
            <fieldset class="product-description">
                <legend>Description</legend>
                <p>{{ product.description }}</p>
            </fieldset>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    product: {
        type: Object,
        required : true
    }
})
// const product = ref(null)
</script>