<template>
  <div
    :draggable="isDraggable"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDrag',
  props: {
    transferData: {
      type: Object,
      required: true
    },

    isDraggable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.setData('ingredient', JSON.stringify(this.transferData));
      this.$emit('onDrag');
    }
  }
};
</script>

<style scoped lang="scss"></style>
