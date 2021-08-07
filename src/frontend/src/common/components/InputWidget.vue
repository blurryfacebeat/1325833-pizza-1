<template>
  <label class="input">
    <span class="input-label" v-if="labelContent">{{ labelContent }}</span>
    <input
      type="text"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="input($event)"
    />
  </label>
</template>

<script>
export default {
  name: 'InputWidget',
  props: {
    labelContent: {
      type: String
    },

    placeholder: {
      type: String,
      default: 'Поле ввода'
    },

    name: {
      type: String
    },

    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
