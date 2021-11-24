<template lang="pug">
section#headerPage.header
  .container
    .header-wrap
      .header__info
        .header__info-col.header__info-col--burger
          button.header__info-burger-btn
            span 
          h5.header__info-burger-title {{ header.burder }}
        .header__info-col(
          v-for="item in header.info",
          :key="item",
          :class="item.class"
        )
          .header__info-item(v-for="link in item.col")
            info-link(:link="link" @action="scrollTop") 
      .header__nav
        .header__nav-logo-wrap
          logo(:logo="header.nav.logo")
        .header__nav-search
          header-search(:item="header.nav.search")
        .header__nav-basket
          menu-basket(:basket="header.nav.basket")
</template>
<script>
import { mapGetters } from "vuex";
import infoLink from "./parts/info-link.vue";
import logo from "./parts/logo.vue";
import headerSearch from "./parts/header-search.vue";
import menuBasket from "./parts/menu-basket.vue";

export default {
  computed: {
    ...mapGetters(["header"]),
  },
  components: {
    infoLink,
    logo,
    headerSearch,
    menuBasket,
  },
  methods: {
    headerScroll() {
      this.$store.commit("headerScroll");
    },
    scrollTop() {
      this.$store.dispatch("scrollTop");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.headerScroll);
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  z-index: 1500;
  width: 100%;

  &--dark {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    animation: headerScrollAnim 0.4s linear 0s;

    .header__nav {
      display: none;
    }
  }
}

.header-wrap {
  position: relative;
}

.header__info {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--borderHeaderInfo);
}

.header__info-col {
  display: flex;
}

.header__info-col.page-header-link,
.header__info-col.page-header-nav {
  display: none;
  @media (min-width: 360px) {
    display: flex;
  }
}

.header__info-col.page-header-link {
  display: none;
  @media (min-width: 720px) {
    display: flex;
  }
}

.header__info-col.header__info-col--burger {
  display: flex;
  align-items: center;
  @media (min-width: 720px) {
    display: none;
  }
}

.header__info-item + .header__info-item {
  margin-left: 15px;

  @media (min-width: 970px) {
    margin-left: 30px;
  }
}

.header__nav-logo-wrap {
  display: flex;
  height: 100%;
  align-items: center;
}

.header__nav-basket {
  height: 100%;
}

.header__nav {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & > * + * {
    margin-top: 30px;
  }

  @media (min-width: 970px) {
    flex-direction: row;

    & > * + * {
      margin-top: 0px;
    }
  }
}

.header__info-burger-btn {
  position: relative;
  width: 40px;
  height: 30px;
  cursor: pointer;
  border: 2px solid var(--clrWhite);
  background: #fff3;
  cursor: pointer;
  outline: none;
  border-radius: 6px;

  &::before {
    position: absolute;
    top: 5px;
    left: 3px;
    height: 2px;
    width: calc(100% - 6px);
    background: var(--clrWhite);
    content: "";
  }

  &::after {
    position: absolute;
    bottom: 5px;
    left: 3px;
    height: 2px;
    width: calc(100% - 6px);
    background: var(--clrWhite);
    content: "";
  }

  span::before {
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    height: 2px;
    width: calc(100% - 6px);
    background: var(--clrWhite);
    content: "";
  }
}

.header__info-burger-title {
  margin-left: 10px;
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  color: var(--clrWhite);
}

@keyframes headerScrollAnim {
  from {
    top: -200px;
    opacity: 0;
  }
}
</style>