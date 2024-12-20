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
  export default {
    data() {
      return {
        searchForm: {
            searchWord: '',
            category:''
        },
      };
    },
    props: ['categoryList'],
    methods: {
      handleSubmit(value) {
        this.$emit('submitInput', this.searchForm);
      },
      /**
       * 切换类目时候触发的函数
       */
      handleChange (value) {
        this.searchForm.category = value
        this.$emit('submit',this.serarchForm)
      },
     
    },
  };
  </script>
  <style scoped lang="less">
  .search-box {
    padding: 10px 30px;
  }
</style>
  