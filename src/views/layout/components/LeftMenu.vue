<template>
     <div class="menu-list">
      <a-menu
       :default-selected-keys="[defaultSelectedKey]"
       :default-open-keys="[defaultOpenKey]" mode="inline" theme="dark"
        :inline-collapsed="$store.state.collapsed">
        <template v-for="route in $store.state.menuList">
          <a-sub-menu v-if="!route.meta.hidden"  :key="route.name">
              <span slot="title">
                <a-icon :type="route.meta.icon"></a-icon>
                <span>{{ route.meta.title }}</span>
              </span>
              <template  v-for="child in route.children">
                <a-menu-item :key="child.name" v-if="!child.meta.hidden">
                  <router-link :to="{name: child.name}"><a-icon :type="child.meta.icon"/>{{ child.meta.title }}</router-link>
                </a-menu-item>
              </template>
          </a-sub-menu>
        </template>
      </a-menu> 
    </div>
</template>
<script>
export default {
  name:'LeftMenu',
  computed:{
    defaultSelectedKey: {
      get() {
        return this.$router.currentRoute.matched[1]?
        this.$router.currentRoute.matched[1].name :''
      }
    },
    defaultOpenKey: {
      get() {
        return this.$router.currentRoute.matched[0].name
      }
    },
  },
  created() {
  },
}
</script>