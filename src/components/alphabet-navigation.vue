<template>
  <nav id="alphabet-navigation">
    <div class='alphabet-list'>
      <a class='alphabet-list-toggle'>
        <i class='fa fa-ellipsis-v'></i>
      </a>
      <a class='letter' href='#A'>a</a>
      <a class='letter' href='#B'>b</a>
      <a class='letter' href='#C'>c</a>
      <a class='letter' href='#D'>d</a>
      <a class='letter' href='#E'>e</a>
      <a class='letter' href='#F'>f</a>
      <a class='letter' href='#G'>g</a>
      <a class='letter' href='#H'>h</a>
      <a class='letter' href='#I'>i</a>
      <a class='letter' href='#J'>j</a>
      <a class='letter' href='#K'>k</a>
      <a class='letter' href='#L'>l</a>
      <a class='letter' href='#M'>m</a>
      <a class='letter' href='#N'>n</a>
      <a class='letter' href='#O'>o</a>
      <a class='letter' href='#P'>p</a>
      <a class='letter' href='#Q'>q</a>
      <a class='letter' href='#R'>r</a>
      <a class='letter' href='#S'>s</a>
      <a class='letter' href='#T'>t</a>
      <a class='letter' href='#U'>u</a>
      <a class='letter' href='#V'>v</a>
      <a class='letter' href='#W'>w</a>
      <a class='letter' href='#X'>x</a>
      <a class='letter' href='#Y'>y</a>
      <a class='letter' href='#Z'>z</a>
      <a class='top' href='#top' v-on:click="myEventHandler($event)">
        <i class='fa fa-arrow-circle-up'></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
    myEventHandler:function(event){
      console.log(event);
    }
  }
}
</script>

<style lang="sass">
@import "src/scss/asset-bundle";

$navigation-bg-color:$blue;

#alphabet-navigation {
  @include transition(left 0.5s);
  background: $navigation-bg-color;
  position: fixed;
  top: 0;
  left: rem(-25);
  height: 100%;

  &:hover { left: 0; }

  .alphabet-list {
    position: relative;

    a.letter,
    .alphabet-list-toggle { @include transition(color 0.8s, background 0.8s); }

    .alphabet-list-toggle {
      background: $navigation-bg-color;
      padding: rem(5) rem(10);
      position: absolute;
      left: 100%;
      top: 5%;
      color: $halfwhite;
      cursor: pointer;
      @include border-right-radius($radius);

      &:hover { color:white;}
    }

    a.letter,
    a.top {
      font-size: rem(10);
      display: block;
      text-transform: uppercase;
      text-decoration: none;
      color: $halfwhite;
      padding: rem(5) rem(10);
      &:hover { background:$halfblack; color:white;}
    }

    a.top {
      border-top: 1px solid $halfwhite;
    }
  }
}

</style>
