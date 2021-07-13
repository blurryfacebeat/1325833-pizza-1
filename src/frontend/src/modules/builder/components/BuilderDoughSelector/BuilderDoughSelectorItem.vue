<template>
  <RadioWidget
    :labelClass="['dough__input', `dough__input--${dough.type}`]"
    inputClass="visually-hidden"
    name="dough"
    :checked="checked"
    :label="dough.name"
    :description="dough.description"
    @input="setPizzaDough"
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
