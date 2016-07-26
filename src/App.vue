<template>
  <div id="app">
    <alphabet-navigation></alphabet-navigation>
    <div class="outer-container">
      <div class="container">
        <div class="panel"><h1>{{ msg }}</h1></div>
        <div id="list-container">
          <h2>List Items ({{items.length}})</h2>
          <search-filter :model.sync="filter"></search-filter>
          <list-item v-for="item in items | filterBy filter" :title="item"></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlphabetNavigation from './components/alphabet-navigation.vue'
import SearchFilter from './components/search-filter.vue'
import ListItem from './components/list-item.vue'

export default {
  components: { AlphabetNavigation, SearchFilter, ListItem },
  data () {
    return {
      msg: 'Hello VueJS!',
      items: ['Apple', 'Banana', 'Carrot', 'Donut', 'Fudge']
    }
  }
}
</script>

<style lang="sass">
@import "src/scss/asset-bundle";

body {
  font-family: Helvetica, sans-serif;
  color: $black;
  @extend .bg-light;
  padding:rem(20);
}

.outer-container {
  @include outer-container($grid-fixed);

  .container {
    @include span-columns(12);

    .panel {
      @include shadow;
      border:rem(5) solid $light;
      padding:rem(20);
      @extend .bg-white;
      margin-bottom:rem(20);

      h1:before {
        @include fa-icon();
        content:$fa-var-check;
        margin-right:rem(10);
        color:$green;
      }
    }
  }
}
</style>
