<template>
  <div class="tooltip__wrapper"
       @mouseenter="onTooltip"
       @mouseleave="offTooltip"
  >
    <slot></slot>
    <div class="tooltips"
         :class="{'tooltips__on' :tooltipShow === true}"
         :style="style"

    >
      {{ title }}
    </div>
  </div>
</template>

<script>
import {right} from "core-js/internals/array-reduce";

export default {
  name: 'tooltip',
  props: {
    title: [String, Number]
  },
  data() {
    return {
      tooltipShow: {
        type: Boolean,
        default: false,
      },
      style: {
        type: String,
        default:''
      }
    }
  },
  methods: {
    right,
    onTooltip() {
      this.tooltipShow = true
      window.addEventListener('mousemove', this.mouseIsMoving);
      // console.log('tooltipShow', this.tooltipShow)
      // console.log('X', this.x)
      // console.log(this.style)
    },
    offTooltip() {
      this.tooltipShow = false
      window.removeEventListener('mousemove', this.mouseIsMoving);
    },
    //TODO учитывать край окна и перекидывать тултип в противоположную сторону!
    mouseIsMoving(e) {
      const x = e.pageX.toString()
      const y = e.pageY.toString()
      this.style = `left:calc(${x}px - 20px); top:calc(${y}px - 70px)`
    },
  }
}
</script>

<style lang="scss" scoped>
.tooltip__wrapper {
  //position: relative;
  //width: auto;

  .tooltips {
    display: none;

    &__on {
      //background-color: rgba(255,255,255,0.25);
      //backdrop-filter: blur(5px);
      background-color: white;
      display: flex;
      position: absolute;
      width: auto;
      border: 1px solid gainsboro;
      padding: 10px 12px;
      border-radius: 5px;
      transition-duration: .7s;
      color: black;

    }
  }
}

</style>