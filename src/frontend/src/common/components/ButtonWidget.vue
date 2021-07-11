<template>
  <button
    type="button"
    :disabled="disabled"
    :class="['button', disabledClass]"
    @click.stop.prevent="click"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  name: 'ButtonWidget',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    anyClass: {
      type: String
    },

    content: {
      type: String,
      default: 'Кнопка'
    }
  },

  methods: {
    click() {
      this.$emit('click');
    }
  },

  computed: {
    disabledClass() {
      return this.disabled ? 'button--disabled' : '';
    }
  }
};
</script>

<style scoped lang="scss"></style>
