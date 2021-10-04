<template lang="pug">
.card-title
  h3.card-title__title {{ cardTitle.title }}
  ul.card-title__list
    li.card-title__list-item(v-for="item in cardTitle.list")
      a.card-title__list-link(:href="item.href") {{ item.text }}
  button.card-title__btn
    span {{ cardTitle.btn }}
</template>
<script>
export default {
  props: {
    cardTitle: Object,
  },
};
</script>
<style scoped lang="scss">
.card-title {
  position: relative;
  overflow: hidden;
  z-index: 100;
}

.card-title__title {
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: var(--clrTtl);
}

.card-title__list {
  margin-bottom: 30px;
}

.card-title__list-item + .card-title__list-item {
  margin-top: 15px;
}

.card-title__list-link {
  position: relative;
  color: var(--clrTtl);
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: underline;
  transition: color 0.3s linear;

  &:hover {
    color: var(--clrActivegreen);
  }
}

.card-title__btn {
  position: relative;
  display: block;
  padding: 10px 20px;
  font-size: 22px;
  line-height: 1;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
  overflow: hidden;
  background: var(--bgCardsHover);
  cursor: pointer;
  position: relative;
  border: 2px solid var(--bgCardsHover);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.card-title__btn:hover {
  background: transparent;
  text-shadow: none;
}

.card-title__btn:hover:before {
  bottom: 0%;
  top: auto;
  height: 100%;
}

.card-title__btn:before {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 0px;
  width: 100%;
  z-index: -1;
  content: "";
  background: var(--bgCards);
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
</style>