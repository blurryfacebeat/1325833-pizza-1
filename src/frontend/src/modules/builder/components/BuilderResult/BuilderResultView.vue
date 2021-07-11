<template>
  <AppDrop @onDrop="setIngredientByDrop">
    <div class="content__constructor">
      <div
        :class="`pizza pizza--foundation--${pizzaResult.dough.size}-${pizzaResult.sauce.value}`"
      >
        <div class="pizza__wrapper">
          <div
            :class="[
              'pizza__filling',
              `pizza__filling--${key.type}`,
              setIngredientCounterClass(key.counter)
            ]"
            v-for="key in pizzaResult.ingredients"
            :key="key.type"
          ></div>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from '@/common/components/AppDrop';
import { eventBus } from '@/main';

export default {
  name: 'BuilderResultView',
  components: { AppDrop },
  props: {
    pizzaResult: {
      type: Object,
      required: true
    }
  },
  methods: {
    setIngredientByDrop(value) {
      eventBus.$emit('setIngredientByDrop', JSON.parse(value));
    },

    setIngredientCounterClass(count) {
      return count === 2
        ? 'pizza__filling--second'
        : count === 3
        ? 'pizza__filling--third'
        : '';
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss"></style>
