<template lang="pug">
router-link.header__info-link.info-link(
  v-if="link.type == 'page'",
  :to="link.href",
  :class="link.class",
  @click="$emit('action')"
) {{ link.text }}
a.header__info-link.info-link(
  v-if="link.type == 'link'",
  :href="link.href",
  :class="link.class"
) {{ link.text }}
</template>
<script>
export default {
  props: {
    link: Object,
  },
  emits: ["action"],
};
</script>
<style scoped lang="scss">
.info-link {
  position: relative;
  display: block;
  font-family: var(--fontRegular);
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  color: var(--clrLink);
  transition: color 0.4s linear;

  @media (min-width: 970px) {
    font-size: 16px;
  }

  &::before {
    position: absolute;
    top: -23px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--clrActivegreen);
    content: "";
    opacity: 0;
    transition: opacity 0.4s linear;

    @media (min-width: 720px) {
      top: -15px;
    }
  }

  &:hover {
    color: var(--clrActivegreen);
  }

  &:hover::before {
    opacity: 1;
  }
}

.header__info-link.info-link.router-link-active {
  color: var(--clrActivegreen);

  &::before {
    opacity: 1;
  }
}

.active-link {
  color: var(--clrActivegreen);
}
</style>