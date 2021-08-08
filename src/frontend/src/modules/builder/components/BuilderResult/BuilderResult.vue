<template>
  <div class="content__pizza">
    <InputWidget
      placeholder="Введите название пиццы"
      name="pizza_name"
      v-model="pizzaName"
    />

    <BuilderResultView />

    <BuilderResultPrice />
  </div>
</template>

<script>
import BuilderResultPrice from '@/modules/builder/components/BuilderResult/BuilderResultPrice';
import BuilderResultView from '@/modules/builder/components/BuilderResult/BuilderResultView/BuilderResultView';
import InputWidget from '@/common/components/InputWidget';
import { eventBus } from '@/main';

export default {
  name: 'BuilderResult',
  components: { InputWidget, BuilderResultView, BuilderResultPrice },
  data() {
    return {
      pizzaName: ''
    };
  },
  mounted() {
    eventBus.$on('addPizzaInCart', () => {
      this.pizzaName = '';
    });
  },
  methods: {
    setPizzaName(value) {
      this.$store.commit('builder/SET_PIZZA_NAME', value);
    }
  },
  watch: {
    pizzaName() {
      this.setPizzaName(this.pizzaName);
    }
  }
};
</script>

<style scoped lang="scss"></style>
