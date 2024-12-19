<template>
    <div class="index">
        <Card/>
        <Cart/>
    </div>
</template>
<script>
import Card from '@/components/card.vue';
import Cart from '@/components/echarts.vue';
export default {
    components: {
        Card,
        Cart
    },
};
</script>