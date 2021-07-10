<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <BuilderSizeSelectorItem
          v-for="(size, index) in sizesData"
          :key="size.name"
          :size="size"
          :checked="index === 1"
          @setPizzaSize="setPizzaSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BuilderSizeSelectorItem from '@/modules/builder/components/BuilderSizeSelector/BuilderSizeSelectorItem';
export default {
  name: 'BuilderSizeSelector',
  components: { BuilderSizeSelectorItem },
  props: {
    sizesData: {
      type: Array,
      required: true,
      validator: (v) => v.length
    }
  },
  methods: {
    setPizzaSize(value) {
      this.$emit('setPizzaSize', value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
