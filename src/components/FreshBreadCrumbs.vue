<template lang="pug">
section.bread-crumbs
  .container
    .bread-crumbs-wrap
      ul.bread-crumbs__list
        li.bread-crumbs__list-item(v-for="item in breadCrumbs.adress")
          router-link(:to="item.link") {{ item.text }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["breadCrumbs"]),
  },
  methods: {
    breadCrumbsAdress() {
      this.$store.commit("breadCrumbsAdress");
    },
  },
  mounted() {
    this.breadCrumbsAdress();
  },
};
</script>
<style scoped lang="scss">
.bread-crumbs {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.bread-crumbs-wrap {
  padding: 15px 0;
  position: relative;
}

.bread-crumbs__list {
  display: flex;
  gap: 20px;
}

.bread-crumbs__list-item a {
  position: relative;
  color: var(--clrWhite);
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  transition: color 0.3s linear;

  &::before {
    position: absolute;
    top: 50%;
    left: -10px;
    width: 1px;
    height: 10px;
    background: var(--clrWhite);
    content: "";
    transform: translateY(-50%) rotate(30deg);
  }

  &:hover {
    color: var(--clrActivegreen);
  }
}

.bread-crumbs__list-item:first-child a::before {
  content: none;
}
</style>