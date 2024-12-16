<template>
     <div class="content-top">
        <a-button type="primary" style="margin-bottom: 16px" @click="$store.dispatch('changeCollapsed')">
          <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="bread">
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>统计</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="user-info">
          <ul>
            <li class="user-name">{{$store.state.userInfo.username}}<a-icon style="margin-left: 5px;" type="down" /></li>
            <li class="user-layout" @click="layout">退出
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
export default {
  methods: {
    /**
     * 1. 退出登录
     */
    layout() {
      this.$store.dispatch("setLayoutUserInfo");
      this.$router.push({ path: "/login" })
    },
  },
 }
</script>