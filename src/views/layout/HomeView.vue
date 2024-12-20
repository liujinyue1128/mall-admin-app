<template>
  <div class="home">
    <LeftMenu :key="key"/>
    <div :class="{ 'main-content': true, 'menu-unfold': $store.state.collapsed }">
      <SliderNav/>
      <!-- 二级路由出口 -->
        <router-view></router-view>
    </div>

  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import SliderNav from './components/SliderNav.vue';
export default {
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    // 监听路由变化，重新渲染视图，更新菜单高亮
    $route() {
      this.key = new Date().getTime();
    }
  },
  components: {
    LeftMenu,
    SliderNav,
  },
  methods: {
  },
};
</script>
<style lang="less">
@import url("@/assets/css/home.less");
</style>
