<template>
  <label class="input">
    <span class="input-label" v-if="labelContent">{{ labelContent }}</span>
    <input
      type="text"
      :placeholder="placeholder"
      :name="name"
      v-model.trim="inputValue"
      @input="inputHandler"
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
    inputHandler() {
      this.$emit('inputHandler', this.inputValue);
    }
  }
};
</script>

<style scoped lang="scss"></style>
