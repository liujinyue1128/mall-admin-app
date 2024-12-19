<template>
    <div class="search-box">
        <a-form-model layout="inline" :model="searchForm" @submit="handleSubmit" @submit.native.prevent>
        <a-form-model-item label="搜索关键字">
            <a-input v-model="searchForm.searchWord" placeholder="请输入关键字" allowClear>
            </a-input>
        </a-form-model-item>
        <a-form-model-item label="商品类目">
            <a-select allowClear placeholder="请选择商品类目" style="width: 200px" @change="handleChange">
                <a-select-option  v-for="cate in searchForm.categoryList" :value="cate.id" :key="cate.id">
                    {{cate.name}}
                </a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item>
            <a-button
            type="primary"
            html-type="submit"
            >
            搜索
            </a-button>
        </a-form-model-item>
        </a-form-model>
    </div>
  </template>
  <script>
  import api from "@/api/category.js";
  export default {
    data() {
      return {
        searchForm: {
            searchWord: '',
            category:''
        },
        categoryList: [],
      };
    },
    created () {
        console.log('api',api)
        this.initCategoryList()
    },
    mounted() {

    },
    methods: {
      handleSubmit(e) {
        console.log(this.searchForm);
      },
      /**
       * 切换类目时候触发的函数
       */
      handleChange (value) {
        this.searchForm.category = value
        this.$emit('submit',this.serarchForm)
      },
      async initCategoryList () {
        const res = await api.getCategoryList();
        if (res.status == 'success') {
            this.categoryList = res.data.data
            console.log('我是类目列表',res)
        }
      },
    },
  };
  </script>
  <style scoped lang="less">
  .search-box {
    padding: 10px 30px;
  }
</style>
  