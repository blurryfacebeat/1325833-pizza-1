<template>
  <AppDrop @onDrop="setIngredientByDrop">
    <div class="content__constructor">
      <div
        :class="`pizza pizza--foundation--${pizzaResult.dough.size}-${pizzaResult.sauce.value}`"
      >
        <div class="pizza__wrapper">
          <div
            :class="['pizza__filling', `pizza__filling--${key.type}`]"
            v-for="key in pizzaResult.ingredients"
            :key="key.type"
          >
            {{ key.type }}
          </div>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from '@/common/components/AppDrop';
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
      this.$root.$emit('setIngredientByDrop', JSON.parse(value));
    }
  }
};
</script>

<style scoped lang="scss"></style>
