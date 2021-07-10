<template>
  <div class="content__pizza">
    <InputWidget
      placeholder="Введите название пиццы"
      name="pizza_name"
      @inputHandler="setPizzaName"
    />

    <BuilderResultView :pizzaResult="pizzaResult" :key="pizzaResult.price" />

    <BuilderResultPrice
      :price="pizzaResult.price"
      :pizzaName="pizzaResult.name"
      @orderPizza="orderPizza"
    />
  </div>
</template>

<script>
import BuilderResultPrice from '@/modules/builder/components/BuilderResult/BuilderResultPrice';
import BuilderResultView from '@/modules/builder/components/BuilderResult/BuilderResultView';
import InputWidget from '@/common/components/InputWidget';

export default {
  name: 'BuilderResult',
  components: { InputWidget, BuilderResultView, BuilderResultPrice },
  props: {
    pizzaResult: {
      type: Object,
      required: true
    }
  },
  methods: {
    orderPizza() {
      this.$emit('orderPizza');
    },

    setPizzaName(value) {
      this.$emit('setPizzaName', value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
