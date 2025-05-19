<template>
    <div class="container">
        <div class="products">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
        <AddProduct @p-added="refresh"></AddProduct>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "@/composables/getProducts.js";
const products = ref([]);

async function fetchProducts() {
    try {
        products.value = await getProducts();
    } catch (error) {
        console.log(error);
    }
}

function refresh() {
    fetchProducts();
}

onMounted(async () => {
    fetchProducts();
})



</script>

<style scoped>
.products {
    display: flex;
    flex-wrap: wrap;
}

.container {
    padding: 1% 8%;
}
</style>