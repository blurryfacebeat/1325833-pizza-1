<template>
  <li class="ingridients__item">
    <span :class="['filling', `filling--${ingredient.type}`]">{{
      ingredient.name
    }}</span>

    <div class="counter counter--orange ingridients__counter">
      <button
        type="button"
        class="counter__button counter__button--disabled counter__button--minus"
        :disabled="removeButtonDisabled"
        @click="addIngredient"
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
        @click="removeIngredient"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'BuilderIngredientsSelectorItem',
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
  methods: {
    addIngredient() {
      this.ingredientCounter--;
    },

    removeIngredient() {
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
    }
  }
};
</script>

<style scoped lang="scss"></style>
