<template>
  <div>
    <form action="test.html" method="post" class="layout-form">
      <main class="content cart">
        <div class="container">
          <div class="cart__title">
            <h1 class="title title--big">Корзина</h1>
          </div>

          <PizzasContainer />

          <AdditionalItemsContainer />

          <CartForm />
        </div>
      </main>
      <CartFooter @openThankfulModal="openThankfulModal" />
    </form>

    <ThankfulModal v-if="showThankfulModal" @closeModal="closeThankfulModal" />
  </div>
</template>

<script>
const ThankfulModal = () =>
  import(
    /* webpackChunkName: 'ThankfulModal' */ '@/modules/cart/modals/ThankfulModal'
  );
import PizzasContainer from '@/modules/cart/components/PizzasContainer';
import AdditionalItemsContainer from '@/modules/cart/additional-items/AdditionalItemsContainer';
import CartForm from '@/modules/cart/additional-items/CartForm';
import CartFooter from '@/modules/cart/additional-items/CartFooter';

export default {
  name: 'Cart',
  components: {
    ThankfulModal,
    CartFooter,
    CartForm,
    AdditionalItemsContainer,
    PizzasContainer
  },
  data() {
    return {
      showThankfulModal: false
    };
  },
  methods: {
    openThankfulModal() {
      this.showThankfulModal = true;
    },

    closeThankfulModal() {
      this.showThankfulModal = false;
      this.$router.push('/');
    }
  }
};
</script>

<style scoped lang="scss">
form {
  height: calc(100vh - 81px);
}

.footer {
  margin-top: auto;
}
</style>
