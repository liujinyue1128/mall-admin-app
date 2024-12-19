<template>
     <div class="menu-list">
      <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark"
        :inline-collapsed="$store.state.collapsed">
        <a-sub-menu v-for="route in $store.state.menuList" :key="route.name">
          <span slot="title">
            <a-icon type="mail"></a-icon>
            <span>{{ route.meta.title }}</span>
          </span>
          <a-menu-item v-for="child in route.children" :key="child.name">
            {{ child.meta.title }}
          </a-menu-item>
        </a-sub-menu>
        <!-- <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>-->
      </a-menu> 
    </div>
</template>
<script>
export default {
  name:'LeftMenu',
  methods: {

  },
}
</script>