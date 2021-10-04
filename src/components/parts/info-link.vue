<template lang="pug">
router-link.header__info-link.info-link(:to="link.href", :class="link.class") {{ link.text }}
</template>
<script>
export default {
  props: {
    link: Object,
  },
};
</script>
<style scoped lang="scss">
.info-link {
  position: relative;
  display: block;
  font-family: var(--fontRegular);
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: var(--clrLink);
  transition: color 0.4s linear;

  &::before {
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--clrActivegreen);
    content: "";
    opacity: 0;
    transition: opacity 0.4s linear;
  }

  &:hover {
    color: var(--clrActivegreen);
  }

  &:hover::before {
    opacity: 1;
  }
}

.orange-link {
  color: var(--clrActivegreen);
}
</style>