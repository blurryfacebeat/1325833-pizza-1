<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <BuilderSizeSelectorItem
          v-for="(size, index) in sizesList"
          :key="size.name"
          :size="size"
          :checked="index === 1"
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
  computed: {
    sizesList() {
      return this.$store.state.builder.sizesData;
    }
  }
};
</script>

<style scoped lang="scss"></style>
