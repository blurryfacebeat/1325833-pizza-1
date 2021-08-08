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
        <router-link to="/profile">
          <picture>
            <source
              type="image/webp"
              srcset="
                @/assets/img/users/user5.webp    1x,
                @/assets/img/users/user5@2x.webp 2x
              "
            />
            <img
              src="@/assets/img/users/user5.jpg"
              srcset="@/assets/img/users/user5@2x.jpg"
              alt="Василий Ложкин"
              width="32"
              height="32"
            />
          </picture>
          <span>Василий Ложкин</span>
        </router-link>
        <a href="#" class="header__logout"><span>Выйти</span></a>
      </div>
    </header>

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  computed: {
    cost() {
      return this.$store.getters['cart/CART_COST'];
    }
  }
};
</script>

<style scoped lang="scss"></style>
