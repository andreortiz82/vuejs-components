<template>
  <div id="search-filter">
    <i></i>
    <input name="search" v-model="model" placeholder="Search by name or code" type="text">
  </div>
</template>
<script>
export default {
  props:['model'],
  data () {
    return {

    }
  }
}
</script>
<style lang="sass">
  @import "src/scss/asset-bundle";

  #search-filter {
    margin-bottom:rem(20);

    i:before {
      @include fa-icon();
      content: $fa-var-search;
      color: $blue;
    }

    input {
      @include transition(width 0.5s);
      height: rem(30);
      border: none;
      border-bottom:1px solid $ccc;
      outline: none;
      width: 40%;
      background:$trans;

      &:focus {
        border-bottom:1px solid $blue;
        width: 80%;
      }
    }
  }
</style>