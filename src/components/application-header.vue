<template>
  <div id="application-header">
    <div class="header-controls">
      <div class="row">
        <div class="logo span-2">
          <a href="/">
            <svg class="hendrick-logo" enable-background="new 0 0 120 30" height="30" version="1.1" viewBox="0 0 120 30" width="120px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
              <g>
                <path d="M71.889,0l-7.371,19.265h-1.645c-0.371,0-1.033-0.271-1.361-0.809c-0.924-1.513-0.232-3.153,0.938-4.345c0.704-0.72,1.491-1.147,2.571-1.373c0.379-0.079,0.785-0.072,1.09-0.062l2.449-6.363c-1.09-0.059-2.228-0.078-3.129,0.032C61.715,6.8,58.533,9.1,56.871,12.412c-1.614,3.199-2.991,7.011-1.176,10.365c0.458,0.863,1.674,2.203,3.358,2.203h9.517L77.537,0H71.889z"></path>
                <path d="M116.104,6.301c-1.594,3.556-2.93,4.853-7.052,4.952L113.334,0h-4.871l-9.261,24.979l4.894,0.003l2.957-8.133c2.354-0.1,3.227,2.255,2.635,3.908l-1.494,4.225h5.184l0.834-2.369c0.42-1.284,0.869-2.814,0.979-3.837c0.188-1.637-0.025-3.38-0.938-4.792c1.207-0.569,2.285-1.419,3.152-2.444c1.043-1.215,2.016-2.635,2.379-4.118L120,6.301H116.104z"></path>
                <path d="M29.886,19.265c-0.841,0-1.459-0.828-1.621-1.561c-0.319-1.447,0-3.035,0.726-4.128c0.911-1.371,2.45-2.386,4.17-2.386h2.909l-6.388,7.359l5.067-0.007l6.346-7.327L42.903,6.3l-8.93,0.008c-3.19,0.005-6.196,1.446-8.269,3.854c-2.217,2.578-3.055,7.125-2.914,8.994c0.193,2.49,1.476,5.824,4.5,5.824h8.763l2.171-5.717h-8.338V19.265z"></path>
                <path d="M53.147,6.346l-9.053-0.045L37.18,24.982h4.832l5.118-13.786h2.344c0.762,0,1.221,0.789,0.955,1.476l-4.774,12.311h5.554l4.951-12.812C57.102,9.723,56.142,6.346,53.147,6.346z"></path>
                <path d="M22.163,0l-3.816,10.831h-6.883l-2.341,6.113h7.022L9.97,33.495l5.818-0.015L28.062,0H22.163z"></path>
                <path d="M96.586,19.265c-0.92-0.008-1.963-0.747-1.963-1.687c0-0.788,0.68-2.702,1.254-3.384c0.682-0.824,1.992-1.629,3.129-1.629h3.442l2.475-6.264l-3.021-0.005c-2.373,0-4.989,0.635-6.924,2.042c-2.875,2.088-4.41,4.092-5.383,6.951c-0.744,2.209-1.359,4.881-0.601,7.074c0.519,1.475,2.01,2.617,3.604,2.617h5.268L100,19.264L96.586,19.265L96.586,19.265z"></path>
                <path d="M83.055,12.566l2.182-6.264H84.08c-1.443,0-4.146,0.411-5.357,1.016c-2.272,1.133-3.744,2.561-4.711,5.254l-4.685,12.41h5.61l3.735-10.255c0.455-1.241,1.642-2.014,2.916-2.142L83.055,12.566z"></path>
                <path d="M9.653,0L0,24.982h5.249L14.809,0H9.653z"></path>
                <path d="M85.711,8.101l-6.006,16.881h5.578l6.094-16.881H85.711z"></path>
                <path d="M94.361,0h-5.723L86.37,6.256h5.674L94.361,0z"></path>
              </g>
            </svg>
          </a>
        </div>
        <nav class="menu span-10">
          <a class="menu-option" v-for="option in navigationMenu" href="{{option.path}}">
            <i v-if="option.icon" class="fa fa-{{option.icon}}"></i>
            <span v-if="option.label">{{option.label}}</span>
            <Badge v-if="option.badge" :label="option.badgeLabel", :icon="option.badgeIcon", :color="option.badgeColor"></Badge>
            
            <!-- <nav class="dropdown" v-if="option.subNavigation">
              <a v-for="item in option.subNavigation" href="{{item.path}}">{{item.label}}</a>
            </nav> -->
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import Badge from './badge.vue'

  export default {
    components: { Badge },
    props:['navigationMenu'],
    methods:{},
    data () { return { } }
  }
</script>

<style lang="sass">
  @import "src/scss/asset-bundle";
  @import "src/scss/dropdown";

  #application-header { 
    margin-bottom:rem(20);

    .header-controls {
      background-color:$blue;
      padding:rem(20) 0;

      .logo {
        svg.hendrick-logo { fill:$white; }
      }

      nav.menu {
        text-align:right;
        position:relative;
        top:rem(6);

        a.menu-option {
          @include transition(color, 0.8s);
          text-decoration:none;
          color:rgba(white, 0.5);
          text-transform:uppercase;
          margin-left:rem(10);
          font-size:rem(11);

          &:hover { color:$white }
        }
      }
    }
  }
</style>
    