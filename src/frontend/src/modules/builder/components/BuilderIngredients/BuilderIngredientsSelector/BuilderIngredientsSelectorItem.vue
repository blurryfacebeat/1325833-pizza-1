<template>
  <li class="ingridients__item">
    <AppDrag :transferData="ingredient" :isDraggable="isDraggable">
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
        :value="ingredientCounter"
        @input="changeIngredients($event)"
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
import { eventBus } from '@/main';
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
    eventBus.$on('setIngredientByDrop', (value) => {
      if (value.type === this.ingredient.type) {
        this.addIngredient();
      }
    });
    eventBus.$on('addPizzaInCart', () => {
      this.ingredientCounter = 0;
    });
  },
  methods: {
    removeIngredient() {
      if (this.ingredientCounter < 0) {
        this.ingredientCounter = 0;
      } else {
        this.ingredientCounter--;
      }
      this.emitEvent();
    },

    addIngredient() {
      if (this.ingredientCounter > 3) {
        this.ingredientCounter = 3;
      } else {
        this.ingredientCounter++;
      }
      this.emitEvent();
    },

    changeIngredients(event) {
      this.ingredientCounter = event.target.value;
      if (this.ingredientCounter < 0) {
        this.ingredientCounter = 0;
      } else if (this.ingredientCounter > 3) {
        this.ingredientCounter = 3;
      } else if (isNaN(this.ingredientCounter)) {
        this.ingredientCounter = 0;
      }
      this.emitEvent();
    },

    emitEvent() {
      this.$emit('changeIngredients', {
        type: this.ingredient.type,
        price: this.ingredient.price,
        name: this.ingredient.name,
        counter: this.ingredientCounter
      });
    }
  },
  computed: {
    removeButtonDisabled() {
      return this.ingredientCounter <= 0;
    },

    addButtonDisabled() {
      return this.ingredientCounter >= 3;
    },

    isDraggable() {
      return this.ingredientCounter < 3;
    }
  }
};
</script>

<style scoped lang="scss"></style>
