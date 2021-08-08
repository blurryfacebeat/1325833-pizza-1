<template>
  <RadioWidget
    labelClass="radio ingridients__input"
    :checked="checked"
    name="sauce"
    @input="setPizzaSauce(sauce)"
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
      this.setPizzaSauce(this.sauce);
    }
  },
  methods: {
    setPizzaSauce(value) {
      this.$store.commit('builder/SET_PIZZA_SAUCE', value);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss"></style>
