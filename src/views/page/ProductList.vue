<template>
    <div class="product-list">
        <Serach @submitInput="handleSubmit" :categoryList="categoryList"/>
        <a-button class="product-add-btn">
            <router-link :to="{ name: 'ProductAdd'}">增加商品</router-link>
            <router-link :to="{ name: 'ProductEdit'}">编辑商品</router-link>
        </a-button>
        <ProductTable 
            :data="tableData"
            :page="page"
            @change="handleChange"
            @edit="handleEdit"
            @remove="handleRemove"
          />
    </div>
</template>
<script>
import Serach from '@/components/serach.vue';
import ProductTable from '@/components/productTable.vue';
import api from '@/api/product.js'
import cateApi from "@/api/category.js";

export default {
    data() {
        return {
            tableData:[],
            searchForm: {
            },
            page: {
                // current: 1,
                // pageSize: 10,
                // total: 1,
                // showSizeChanger: false,
                // pageSizeOptions:['10', '20', '30', '40']	
            },
            categoryList: [],
            categoryObj: {}
        }
    },
    components: {
        Serach,
        ProductTable
    },
    async created() {
        const res = await cateApi.getCategoryList();
        if (res.status == 'success') {
            this.categoryList = res.data.data
            res.data?.data?.forEach(item => {
                this.categoryObj[item.id] = item
            })
        }
        this.getTableData();
    },
    methods: {
        handleSubmit(val) {
            this.searchForm = val;
            this.getTableData()
        },
        async getTableData () {
            const res = await api.getTableData({
                page: this.page.current,
                pageSize: this.page.pageSize,
                ...this.searchForm
            });
            if (res.status == 'success') {
                this.page.total = res.data.total;
                this.tableData = res.data?.data?.map(item=>{
                    return {
                        ...item,
                        categoryName: this.categoryObj[item.category].name
                    }
                });

            }
        },
        handleChange (page) {
            this.page = page;
            this.getTableData();
        },
        handleEdit(record) {
            this.$router.push({
                name: 'ProductEdit',
                params:{
                    id: '16'
                    // id: record.id
                }
            })
        },
        async handleRemove(record) {
            const res = await api.removeProductRecord(record.id);
            if (res.status == 'success') {
                this.getTableData()
            }
        }
    }
}
</script>
<style lang="less">
.product-list {
    position: relative;
    .product-add-btn {
        position: absolute;
        right: 10px;
        top: 14px;
    }
}
</style>