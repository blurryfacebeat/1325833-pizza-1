<template>
  <RadioWidget
    labelClass="radio ingridients__input"
    :checked="checked"
    name="sauce"
    @input="setPizzaSauce"
    :description="sauce.name"
  />
</template>

<script>
import RadioWidget from '@/common/components/RadioWidget';
export default {
  name: 'BuilderSauceSelectorItem',
  components: { RadioWidget },
  props: {
    sauce: {
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
