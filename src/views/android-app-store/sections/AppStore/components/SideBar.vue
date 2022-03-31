<template>
  <div class="column is-side-bar is-hidden-mobile">
    <h2 class="title">Marketplace</h2>
    <div v-for="item in category" :key="item.name">
      <h3 class="subtitle">
        <a class="side-bar-link is-all" href="#" @click="setState({})">{{ item.name }}</a>
      </h3>
      <div v-for="i in item.items" :key="i.id" class="type-item">
        <a class="side-bar-link" href="#" @click="item.id=='category'?setState({ useCase: i.id }):setState({ type: i.id })">{{
          i.name
        }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { category } from '/@/utils/data';
console.log('category: ', category);

const setState = ({ useCase, type }) => {
  const state = { useCase, type };
  let url = '#';
  if (useCase) {
    url = '#category=' + useCase;
  } else if (type) {
    url = '#type=' + type;
  }
  console.log(url);
  console.log(state);
  history.pushState(state, null, url);
};
</script>
