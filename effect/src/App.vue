<script setup lang="ts">
  // import { IButton } from '@tesla-vue-components/index';
  import { useDeveloper } from '@tesla-vue-components/hooks/useDeveloper';
  import { developFn } from '@tesla-vue-components/utils/myDevelop';

  const { num } = useDeveloper();

  function add() {
    developFn();
    num.value = num.value + 1;
  }

  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>
    组件实例：
    <i-button @click="add">按钮</i-button>
    {{ num }}
  </div>
</template>

<style>
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
