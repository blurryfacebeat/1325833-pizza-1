<template>
  <label class="radio ingridients__input">
    <input
      type="radio"
      name="sauce"
      :value="sauce.value"
      :checked="checked"
      @input="setPizzaSauce"
    />
    <span>{{ sauce.name }}</span>
  </label>
</template>

<script>
export default {
  name: 'BuilderSauceSelectorItem',
  props: {
    sauce: {
      type: Object,
      required: true
    },

    checked: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  mounted() {
    if (this.checked) {
      this.setPizzaSauce();
    }
  },
  methods: {
    setPizzaSauce() {
      this.$emit('setPizzaSauce', this.sauce);
    }
  }
};
</script>

<style scoped lang="scss"></style>
