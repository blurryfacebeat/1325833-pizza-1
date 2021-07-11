<template>
  <label :class="['diameter__input', `diameter__input--${size.type}`]">
    <input
      type="radio"
      name="diameter"
      value="small"
      class="visually-hidden"
      :checked="checked"
      @input="setPizzaSize"
    />
    <span>{{ size.name }}</span>
  </label>
</template>

<script>
export default {
  name: 'BuilderSizeSelectorItem',
  props: {
    size: {
      type: Object,
      required: true
    },

    checked: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.checked) {
      this.setPizzaSize();
    }
  },
  methods: {
    setPizzaSize() {
      this.$emit('setPizzaSize', this.size);
    }
  }
};
</script>

<style scoped lang="scss"></style>
