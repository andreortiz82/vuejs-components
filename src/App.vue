<template>
  <div id="app">
    <alphabet-navigation></alphabet-navigation>
    <div class="outer-container">
      <div class="container">
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import AlphabetNavigation from './components/alphabet-navigation.vue'

export default {
  components: { AlphabetNavigation },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style lang="sass">
@import "src/scss/asset-bundle";

body {
  font-family: Helvetica, sans-serif;
  color: $black;
  @extend .bg-ccc;
  padding:rem(20);
}

.outer-container {
  @include outer-container($grid-fixed);

  .container {
    @include span-columns(12);
    @include shadow;
    border:rem(5) solid $light;
    padding:rem(20);
    @extend .bg-white;

    h1:before {
      @include fa-icon();
      content:$fa-var-check;
      margin-right:rem(10);
      color:$green;
    }
  }
}
</style>
