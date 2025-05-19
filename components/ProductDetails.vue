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
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
}

.price {
    font-size: 18px;
    color: #e74c3c;
    margin-bottom: 10px;
}

.category {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
}

.description {
    margin-top: 20px;
}

.product-description {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #f9f9f9;
}

.product-description legend {
    padding: 0 10px;
    font-weight: bold;
    color: #444;
}

.product-description p {
    margin: 10px 0;
    line-height: 1.5;
}
</style>