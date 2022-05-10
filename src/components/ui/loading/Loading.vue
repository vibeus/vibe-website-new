<template>
  <div
    id="vue-loading"
    class="loading"
  >
    <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
 
<script setup>
</script>
 
<style lang="sass" scoped>
.loading
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  margin: 0 auto
  text-align: center
  box-sizing: border-box
  padding: 400px 0 0 0
  background: rgba(255, 255, 255, 0.6)
  z-index: 1000
  display: block
.loadEffect
  width: 200px
  height: 200px
  position: relative
  margin: 0 auto
  box-sizing: border-box
  padding: 0
 
.loadEffect span
  display: inline-block
  width: 20px
  height: 20px
  border-radius: 50%
  background: #089eff
  position: absolute
  -webkit-animation: load 1.04s ease infinite
@-webkit-keyframes load
  0%
    opacity: 1
  100%
    opacity: 0.2
.loadEffect span:nth-child(1)
  left: 0
  top: 50%
  margin-top: -15px
  -webkit-animation-delay: 0.13s
.loadEffect span:nth-child(2)
  left: 25px
  top: 25px
  -webkit-animation-delay: 0.26s
.loadEffect span:nth-child(3)
  left: 50%
  top: 0px
  margin-left: -15px
  -webkit-animation-delay: 0.39s
.loadEffect span:nth-child(4)
  top: 25px
  right: 25px
  -webkit-animation-delay: 0.52s
.loadEffect span:nth-child(5)
  right: 0
  top: 50%
  margin-top: -15px
  -webkit-animation-delay: 0.65s
.loadEffect span:nth-child(6)
  right: 25px
  bottom: 25px
  -webkit-animation-delay: 0.78s
.loadEffect span:nth-child(7)
  bottom: 0
  left: 50%
  margin-left: -15px
  -webkit-animation-delay: 0.91s
.loadEffect span:nth-child(8)
  bottom: 25px
  left: 25px
  -webkit-animation-delay: 1.04s
</style>
