<template lang="pug">
.menu-basket
  .menu-basket__item
    button#menu-basket-profile.menu-basket__btn(
      @click="formUnlockFunc()"
    )
      user-icon
  .menu-basket__item
    button#menu-basket-cart.menu-basket__btn
      cart-icon
</template>
<script>
import userIcon from "@/assets/img/icons/user.vue";
import cartIcon from "@/assets/img/icons/cart.vue";

export default {
  props: {
    basket: Object,
  },
  components: {
    userIcon,
    cartIcon,
  },
  methods: {
    formUnlockFunc() {
      this.$store.dispatch("formUnlockFunc");
    },
  },
};
</script>
<style scoped lang="scss">
.menu-basket {
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto 0;
}

.menu-basket__item + .menu-basket__item {
  margin-left: 40px;
}

.menu-basket__btn {
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  transition: all 0.3s linear;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
    transition: all 0.3s linear;
    fill: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  &:hover {
    svg {
      fill: rgb(212, 185, 185);
    }
  }
}

#menu-basket-cart::before {
  position: absolute;
  content: var(--cartCount);
  width: 16px;
  height: 16px;
  background: var(--clrActiveCart);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  top: -5px;
  right: -5px;
  z-index: 10;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: var(--clrWhite);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>