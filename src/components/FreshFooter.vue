<template lang="pug">
section.footer
  .container
    .footer-wrap
      .footer__list
        .footer__list-col(v-for="col in footer.list")
          h3.footer__list-title {{ col.title }}
          ul.footer__list-wrap
            li.footer__list-item(v-for="item in col.list")
              a.footer__list-link(:href="item.href") {{ item.linkText }}
      .footer__meta
        h4.footer__meta-title {{ footer.metaTitle }}
        ul.footer__meta-list
          li.footer__meta-list-item(v-for="item in footer.metaList")
            a.footer__meta-list-link(:href="item.href") {{ item.text }}
      .footer__copy
        p.footer__copy-text {{ footer.copy }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["footer"]),
  },
};
</script>
<style scoped lang="scss">
.footer {
  position: relative;
  padding: 60px 0;
  overflow: hidden;
  z-index: 500;
}

.footer-wrap {
  position: relative;
  display: grid;
  gap: 30px;
}

.footer__list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: start;
  gap: 30px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media (min-width: 970px) {
    grid-template-columns: repeat(4, 200px);
    justify-content: space-between;
    gap: 0;
  }
}

.footer__list-title {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  color: #ffffff;
}

.footer__list-link {
  padding: 10px 0;
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  transition: color 0.3s linear;

  &::before {
    position: absolute;
    top: 50%;
    left: -10px;
    width: 3px;
    height: 100%;
    content: "";
    background: transparent;
    transition: background 0.3s linear;
    transform: translateY(-50%);
  }

  &:hover {
    color: var(--clrActivegreen);

    &::before {
      background: var(--clrActivegreen);
    }
  }
}

.footer__meta-title {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  color: #ffffff;
}

.footer__meta-list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.footer__meta-list-link {
  position: relative;
  display: block;
  padding: 5px 10px;
  background: #fff5ff80;
  border-radius: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  transition: background 0.3s linear;

  &:hover {
    background: var(--clrActivegreen);
  }
}

.footer__copy-text {
  display: block;
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  color: #ffffff;
  text-align: center;
}
</style>