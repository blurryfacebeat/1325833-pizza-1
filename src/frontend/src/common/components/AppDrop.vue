<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDrop',
  methods: {
    onDrop({ dataTransfer }) {
      this.$emit('onDrop', dataTransfer.getData('ingredient'));
    }
  }
};
</script>

<style scoped lang="scss"></style>
