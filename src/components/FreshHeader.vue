<template lang="pug">
section.header
  .container
    .header-wrap
      .header__info
        .header__info-col(v-for="item in header.info", :key="item")
          .header__info-item(v-for="link in item.col")
            info-link(:link="link") 
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
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  z-index: 1000;
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
</style>