<template lang="pug">
section.navigation(@mouseleave="navMenuLock")
  .container
    .navigation-wrap
      ul.navigation__list
        li.navigation__list-item(
          v-for="listItem in navigation.list",
          :key="listItem"
        )
          a.navigation__list-title(
            :href="listItem.link",
            @mouseenter="navMenuUnlock($event)",
            :id="listItem.id"
          ) {{ listItem.title }}
            span
              arrow-right
      .navigation__menu
        ul.navigation__menu-list
          li.navigation__menu-list-item(v-for="item in thisMenu")
            a.navigation__menu-list-link(:href="item.link") {{ item.title }}
</template>
<script>
import { mapGetters } from "vuex";
import arrowRight from "@/assets/img/icons/arrow-right.vue";

export default {
  computed: {
    ...mapGetters(["navigation", "thisMenu"]),
  },
  components: {
    arrowRight,
  },
  methods: {
    navMenuUnlock(event) {
      this.$store.commit("navMenuUnlock", event);
    },

    navMenuLock() {
      this.$store.commit("navMenuLock");
    },
  },
};
</script>
<style scoped lang="scss">
.navigation {
  position: relative;
  z-index: 1000;
}

.navigation-wrap {
  position: relative;
  border-top: 1px solid var(--borderHeaderInfo);
  padding: 15px 0;
}

.navigation__list {
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    justify-content: center;
  }

  @media (min-width: 970px) {
    justify-content: space-around;
  }
}

.navigation__list-item {
  position: relative;
}

.navigation__list-title {
  position: relative;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: #ffffff;
  transition: color 0.3s linear;

  @media (min-width: 1260px) {
    font-size: 16px;
  }

  &::before {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
    content: "";
    background: transparent;
    transition: background 0.3s linear;
  }

  span {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 60%;
    right: -20px;
    transform: translateY(-50%);

    svg {
      fill: #ffffff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: fill 0.3s linear;
    }
  }

  &:hover {
    color: var(--clrActivegreen);

    &::before {
      background: var(--clrActivegreen);
    }

    svg {
      fill: var(--clrActivegreen);
    }
  }
}

.navigation__menu {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 15px;
  width: 100%;
  min-height: 200px;
  background: var(--bgPage);
  box-shadow: 0px 0px 4px #0003;
  border-radius: 0px 0px 12px 12px;
  transform: rotateX(90deg);
  transform-origin: 50% 50% 0px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s ease-in;

  &::before {
    position: absolute;
    top: 15px;
    left: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    border-radius: 0px 0px 12px 12px;
    content: "";
    z-index: -1;
    background: #fff;
  }
}

.navigation__menu--active {
  transform: rotateX(0deg);
  transform-origin: 0;
  opacity: 1;
  pointer-events: all;
}

.navigation__menu-list {
  position: relative;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  width: 100%;
  height: 100%;

  @media (min-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
  }
}

.navigation__menu-list-link {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: var(--clrTtl);
  transition: color 0.3s linear;

  @media (min-width: 720px) {
    font-size: 16px;
  }

  &::before {
    position: absolute;
    bottom: -7px;
    left: 0px;
    width: 100%;
    height: 2px;
    content: "";
    z-index: -1;
    background: rgb(146, 146, 146);
    transition: background 0.3s linear;
  }

  &:hover {
    color: var(--clrActivegreen);

    &::before {
      background: var(--clrActivegreen);
    }
  }
}
</style>