<template>
  <RadioWidget
    :labelClass="['dough__input', `dough__input--${dough.type}`]"
    inputClass="visually-hidden"
    name="dough"
    :checked="checked"
    :label="dough.name"
    :description="dough.description"
    @input="setPizzaDough(dough)"
  />
</template>

<script>
import RadioWidget from '@/common/components/RadioWidget';

export default {
  name: 'BuilderDoughSelectorItem',
  components: { RadioWidget },
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
      this.setPizzaDough(this.dough);
    }
  },
  methods: {
    setPizzaDough(value) {
      this.$store.commit('builder/SET_PIZZA_DOUGH', value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
