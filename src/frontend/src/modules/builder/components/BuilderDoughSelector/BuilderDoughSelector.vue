<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <BuilderDoughSelectorItem
          v-for="(dough, index) in doughList"
          :key="dough.name"
          :dough="dough"
          :checked="index === 0"
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
  computed: {
    doughList() {
      return this.$store.state.builder.doughData;
    }
  }
};
</script>

<style scoped lang="scss"></style>
