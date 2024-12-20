<template>
  <a-table :columns="columns" :data-source="data" :pagination="page" @change="changeTable">
    <div slot="operation" slot-scope="text,record">
      <a-button @click="handleEdit(record)">编辑</a-button>
        <a-popconfirm
          title="确定删除这条记录么"
          ok-text="确定"
          cancel-text="却笑"
          @confirm="handleRemove(record)"
        >
          <a-button>
            删除
          </a-button>
      </a-popconfirm>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'category',
    ellipsis: true,
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
    ellipsis: true,
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    width: 200,
    customRender: function (text,record) {
      return record == 1 ? '上架' : '下架';
    }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 200,
    scopedSlots: { customRender: 'operation' }
  }
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: ['data','page'],
  computed:{
    tableData() {
      return this.data.map(item=>{
        return {
          ...item,
          key: item.id
        }
      })
    }
  },
  methods: {
    changeTable(page, filters, sorter) {
      this.$emit('handleChange',page)
    },
    handleEdit() {
      this.$emit('edit',record)
    },
    handleRemove() {
      this.$emit('remove',record)
    },
   
  }
};
</script>
