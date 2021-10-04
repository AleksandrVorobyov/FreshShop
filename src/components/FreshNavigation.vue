<template lang="pug">
section.navigation
  .container
    .navigation-wrap
      ul.navigation__list
        li.navigation__list-item(
          v-for="listItem in navigation.list",
          :key="listItem"
        )
          a.navigation__list-title(:href="listItem.link") {{ listItem.title }}
            span
              arrow-right
</template>
<script>
import { mapGetters } from "vuex";
import arrowRight from "@/assets/img/icons/arrow-right.vue";

export default {
  computed: {
    ...mapGetters(["navigation"]),
  },
  components: {
    arrowRight,
  },
};
</script>
<style scoped lang="scss">
.navigation {
  position: relative;
  z-index: 500;
}

.navigation-wrap {
  position: relative;
  border-top: 1px solid var(--borderHeaderInfo);
  padding: 15px 0;
}

.navigation__list {
  display: flex;
  justify-content: space-around;
}

.navigation__list-item {
  position: relative;
}

.navigation__list-title {
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  transition: color 0.3s linear;

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
</style>