<template>
  <div id="app">
    <alphabet-navigation></alphabet-navigation>
    <div class="outer-container">
      <div class="container">
        <div class="panel">
        <h1>{{ msg }}</h1>
        <button type="button" v-on:click="getItems"> Get Data </button>
        </div>
        <div id="list-container">
          <h2>List Items ({{items.length}})</h2>
          <search-filter :model.sync="filter"></search-filter>
          <list-item v-for="item in items | filterBy filter" :title="item.title" :body="item.body"></list-item>
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
      items: []
    }
  },
  methods:{
    beforeReq:function(){
      console.log('getItems:beforeReq')
    },
    getItems:function(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=20',
          {before:this.beforeReq()}).then((response) => {
          console.log('getItems:response', response.text())
          this.items = response.json()
      }, (response) => {
          console.log('ERROR', response);
      })
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

button {
  @include border-radius($radius);
  border:none;
  background-color:$green;
  padding:rem(10) rem(15);
  color:$white;
  font-weight:bold;
  cursor:pointer;
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
