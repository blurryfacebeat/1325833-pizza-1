<template>
  <div class="content__pizza">
    <InputWidget
      placeholder="Введите название пиццы"
      name="pizza_name"
      @input="setPizzaName"
    />

    <BuilderResultView />

    <BuilderResultPrice />
  </div>
</template>

<script>
import BuilderResultPrice from '@/modules/builder/components/BuilderResult/BuilderResultPrice';
import BuilderResultView from '@/modules/builder/components/BuilderResult/BuilderResultView/BuilderResultView';
import InputWidget from '@/common/components/InputWidget';

export default {
  name: 'BuilderResult',
  components: { InputWidget, BuilderResultView, BuilderResultPrice },
  methods: {
    setPizzaName(value) {
      this.$store.commit('builder/SET_PIZZA_NAME', value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
