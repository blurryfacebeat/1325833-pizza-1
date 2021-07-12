<template>
  <label :class="labelClass">
    <input
      type="radio"
      :name="name"
      :class="inputClass"
      :checked="checked"
      @input="input"
    />
    <b v-if="label">{{ label }}</b>
    <span v-if="description">{{ description }}</span>
  </label>
</template>

<script>
export default {
  name: 'RadioWidget',
  props: {
    labelClass: {
      type: [String, Array]
    },

    inputClass: {
      type: String
    },

    label: {
      type: String,
      default: ''
    },

    checked: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ''
    }
  },
  methods: {
    input() {
      this.$emit('input');
    }
  }
};
</script>

<style scoped lang="scss"></style>
