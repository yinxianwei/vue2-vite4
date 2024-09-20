<template>
  <div class="">
    <a-button
      type="primary"
      @click="testClick()"
      >test</a-button
    >
  </div>
</template>
<script lang="jsx">
export default {
  mixins: [],
  props: {},
  components: {},
  computed: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    testClick() {
      console.log(111)
      this.$message.info({
        content: () => <span>1234441</span>
      })
    }
  }
}
</script>
<style></style>
