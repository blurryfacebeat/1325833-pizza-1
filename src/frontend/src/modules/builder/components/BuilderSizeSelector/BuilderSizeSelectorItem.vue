<template>
  <RadioWidget
    :description="size.name"
    :checked="checked"
    @input="setPizzaSize"
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
      this.setPizzaSize();
    }
  },
  methods: {
    setPizzaSize() {
      this.$emit('setPizzaSize', this.size);
    }
  }
};
</script>

<style scoped lang="scss"></style>
