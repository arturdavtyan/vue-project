<template>
  <div id="app">
    
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.SetWindowWidth()
    window.addEventListener('resize', this.SetWindowWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.SetWindowWidth)
  },
  methods: {
    SetWindowWidth() {
      this.$store.commit('General/SetWindowWidth', window.innerWidth)
    }
  }
}
</script>