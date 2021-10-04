<template lang="pug">
router-link.logo(:to="logo.href") {{ logo.text }}
</template>
<script>
export default {
  props: {
    logo: Object,
  },
};
</script>
<style scoped lang="scss">
.logo {
  font-family: var(--fontRegular);
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: var(--clrLink);
}
</style>