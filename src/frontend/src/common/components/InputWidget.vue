<template>
  <label class="input">
    <span class="input-label" v-if="labelContent">{{ labelContent }}</span>
    <input
      type="text"
      :placeholder="placeholder"
      :name="name"
      v-model.trim="inputValue"
      @input="input"
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
    }
  },
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    input() {
      this.$emit('input', this.inputValue);
    }
  }
};
</script>

<style scoped lang="scss"></style>
