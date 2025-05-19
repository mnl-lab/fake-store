<template>
    <div class="container">
        <div class="back">
            <button @click="goBack">back</button>
        </div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const pid = ref(null);
const route = useRoute();
const router = useRouter();
const product = ref([]);
pid.value = route.params.id;

onMounted(async () => {
    product.value = await getProduct(pid.value);
})
function goBack() {
    router.replace("/");
}
</script>