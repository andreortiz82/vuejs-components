<template>
  <span class="badge bg-{{color}}">
    <i v-if="icon" class="fa fa-{{icon}}"></i>
    {{ label }}
  </span>
</template>

<script>
  export default {
    props:['label', 'icon', 'color'],
    methods:{},
    data () { return {} }
  }
</script>

<style lang="sass">
  @import "src/scss/asset-bundle";
  .badge { 
    @include border-radius($radius);
    background-color:$red; 
    color:$white;
    font-size:rem(10);
    display:inline;
    text-align:center;
    position:relative;
    top:rem(-10);
    left:rem(-5);
    line-height:rem(15);
    height:rem(15);
    width:rem(15);
    display:inline-block;

    .fa { margin:auto }
  }
</style>
    