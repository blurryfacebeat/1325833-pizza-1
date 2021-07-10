<template>
  <li class="ingridients__item">
    <AppDrag :transferData="ingredient">
      <span :class="['filling', `filling--${ingredient.type}`]">{{
        ingredient.name
      }}</span>
    </AppDrag>

    <div class="counter counter--orange ingridients__counter">
      <button
        type="button"
        class="counter__button counter__button--disabled counter__button--minus"
        :disabled="removeButtonDisabled"
        @click="removeIngredient"
      >
        <span class="visually-hidden">Меньше</span>
      </button>
      <input
        type="text"
        name="counter"
        class="counter__input"
        v-model="ingredientCounter"
      />
      <button
        type="button"
        class="counter__button counter__button--plus"
        :disabled="addButtonDisabled"
        @click="addIngredient"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>
  </li>
</template>

<script>
import AppDrag from '@/common/components/AppDrag';

export default {
  name: 'BuilderIngredientsSelectorItem',
  components: { AppDrag },
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ingredientCounter: 0
    };
  },
  mounted() {
    this.$root.$on('setIngredientByDrop', (value) => {
      if (value.type === this.ingredient.type) {
        this.addIngredient();
      }
    });
  },
  beforeDestroy() {
    this.$root.$off('setIngredientByDrop');
  },
  methods: {
    removeIngredient() {
      this.ingredientCounter--;
    },

    addIngredient() {
      this.ingredientCounter++;
    }
  },
  computed: {
    removeButtonDisabled() {
      return this.ingredientCounter <= 0;
    },
    addButtonDisabled() {
      return this.ingredientCounter >= 3;
    }
  },
  watch: {
    ingredientCounter() {
      if (this.ingredientCounter < 0) {
        this.ingredientCounter = 0;
      }
      if (this.ingredientCounter > 3) {
        this.ingredientCounter = 3;
      }
      if (isNaN(this.ingredientCounter)) {
        this.ingredientCounter = 0;
      }
      this.$emit('changeIngredients', {
        type: this.ingredient.type,
        price: this.ingredient.price,
        name: this.ingredient.name,
        counter: this.ingredientCounter
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
