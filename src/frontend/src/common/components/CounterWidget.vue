<template>
  <div class="counter additional-list__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="disableDeleteButton"
      @click="deleteProduct"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="count"
      @input="inputProductCount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus counter__button--orange"
      @click="addProduct"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CounterWidget',
  props: {
    count: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      productCount: Number(this.count)
    };
  },
  methods: {
    inputProductCount($event) {
      this.productCount = Number($event.target.value);
    },

    addProduct() {
      this.productCount++;
    },

    deleteProduct() {
      this.productCount--;
    }
  },
  computed: {
    disableDeleteButton() {
      return !this.productCount ?? true;
    }
  },
  watch: {
    productCount() {
      this.$emit('updateProductCounter', this.productCount);
    }
  }
};
</script>

<style scoped lang="scss"></style>
