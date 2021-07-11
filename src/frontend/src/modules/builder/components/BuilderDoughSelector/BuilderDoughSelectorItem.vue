<template>
  <label :class="['dough__input', `dough__input--${dough.type}`]">
    <input
      type="radio"
      name="dough"
      value="light"
      class="visually-hidden"
      @input="setPizzaDough"
      :checked="checked"
    />
    <b>{{ dough.name }}</b>
    <span>{{ dough.description }}</span>
  </label>
</template>

<script>
export default {
  name: 'BuilderDoughSelectorItem',
  props: {
    dough: {
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
      this.setPizzaDough();
    }
  },
  methods: {
    setPizzaDough() {
      this.$emit('setPizzaDough', this.dough);
    }
  }
};
</script>

<style scoped lang="scss"></style>
