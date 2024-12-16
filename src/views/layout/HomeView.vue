<template>
  <div class="home">
    <LeftMenu/>
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
    };
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
