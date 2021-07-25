<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <router-link to="/" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </router-link>
      </div>
      <div class="header__cart">
        <router-link to="/cart">{{ cost }} ₽</router-link>
      </div>
      <div class="header__user">
        <router-link to="/login" class="header__login"
          ><span>Войти</span></router-link
        >
      </div>
    </header>

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    cost() {
      return this.$store.state.cart.orderFullCost;
    }
  }
};
</script>

<style scoped lang="scss"></style>
