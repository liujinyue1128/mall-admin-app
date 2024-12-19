<template>
    <div class="product-list">
        <Serach @submit="handleSubmit"/>
    </div>
</template>
<script>
import Serach from '@/components/serach.vue';
export default {
    components: {
        Serach
    },
    methods: {
        handleSubmit(val) {
            console.log('serach', val);
        }
    }
}
</script>