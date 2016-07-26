<template>
  <div class="list-item">
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>
<style lang="sass">
  @import "src/scss/asset-bundle";

  .list-item {
    border-bottom:rem(1) solid $light;
    padding:rem(5) rem(20);
    @extend .bg-white;
  }
</style>