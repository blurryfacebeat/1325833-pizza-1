<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <BuilderDoughSelectorItem
          v-for="(dough, index) in doughData"
          :key="dough.name"
          :dough="dough"
          :checked="index === 0"
          @setPizzaDough="setPizzaDough"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BuilderDoughSelectorItem from '@/modules/builder/components/BuilderDoughSelector/BuilderDoughSelectorItem';
export default {
  name: 'BuilderDoughSelector',
  components: { BuilderDoughSelectorItem },
  props: {
    doughData: {
      type: Array,
      required: true,
      validator: (v) => v.length
    }
  },
  methods: {
    setPizzaDough(value) {
      this.$emit('setPizzaDough', value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
