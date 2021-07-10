<template>
  <button
    type="button"
    :disabled="disabled"
    :class="['button', disabledClass]"
    @click.stop.prevent="clickHandler"
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
      default: () => {
        return false;
      }
    },

    anyClass: {
      type: String
    },

    content: {
      type: String,
      default: () => {
        return 'Кнопка';
      }
    }
  },

  methods: {
    clickHandler() {
      this.$emit('clickHandler');
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
