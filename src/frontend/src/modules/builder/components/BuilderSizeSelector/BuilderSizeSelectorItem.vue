<template>
  <RadioWidget
    :description="size.name"
    :checked="checked"
    @input="setPizzaSize(size)"
    inputClass="visually-hidden"
    :labelClass="['diameter__input', `diameter__input--${size.type}`]"
    name="diameter"
  />
</template>

<script>
import RadioWidget from '@/common/components/RadioWidget';

export default {
  name: 'BuilderSizeSelectorItem',
  components: { RadioWidget },
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
      this.setPizzaSize(this.size);
    }
  },
  methods: {
    setPizzaSize(value) {
      this.$store.commit('builder/SET_PIZZA_SIZE', value);
      this.$store.dispatch('builder/SET_PIZZA_COST');
    }
  }
};
</script>

<style scoped lang="scss"></style>
