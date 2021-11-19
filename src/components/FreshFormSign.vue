<template lang="pug">
section#signSection.form-sign
  .container.relative
    form.form-sign-wrap
      h4.form-sign__title {{ formSign.title }}
      label.form-sign__label(:for="formSign.email.id") 
        span {{ formSign.email.text }}
      input.form-sign__input(type="email", :id="formSign.email.id")
      label.form-sign__label(:for="formSign.password.id") 
        span {{ formSign.password.text }}
      input.form-sign__input(
        type="password",
        :id="formSign.password.id",
        :placeholder="formSign.password.inputPasswordPlace"
      )
      p.form-sign__form-desc {{ formSign.desc }}
      main-btn(:btn="formSign.btnSubmit", :class="'form-sign__form-btn'")
      .form-sign__form-btn-change
        p.form-sign__form-btn-change-text {{ formSign.change.desc }}
        button.form-sign__form-btn-change-btn(
          @click.prevent.stop="formLoginOrSignFunc()",
          type="button"
        ) {{ formSign.change.link }}
</template>
<script>
import { mapGetters } from "vuex";
import mainBtn from "./parts/main-btn.vue";
export default {
  computed: {
    ...mapGetters(["formSign"]),
  },
  components: {
    mainBtn,
  },
  methods: {
    formLoginOrSignFunc() {
      this.$store.dispatch("formLoginOrSignFunc");
    },
  },
};
</script>
<style scoped lang="scss">
.form-sign {
  position: relative;
}

.form-sign-wrap {
  position: absolute;
  top: 100%;
  right: 50%;
  padding: 20px;
  overflow: hidden;
  z-index: 2000;
  background: white;
  box-shadow: 0px 0px 10px #00000080;
  opacity: 0;
  transform: translateX(50%) translateY(-30px);
  transition: all 0.4s linear;
  pointer-events: none;
  display: grid;
  gap: 10px;
  border-radius: 12px;
  grid-template-columns: minmax(0, 350px);
  width: 100%;
  justify-content: center;

  @media (min-width: 480px) {
    width: 390px;
    justify-content: start;
  }

  @media (min-width: 970px) {
    right: 45px;
    transform: translateY(-30px);
  }
}

.form-sign--active .form-sign-wrap {
  opacity: 1;
  transform: translateX(50%) translateY(0px);
  pointer-events: all;

  @media (min-width: 970px) {
    transform: translateY(0);
  }
}

.form-sign__title {
  display: block;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  color: var(--clrTtl);
  letter-spacing: 1px;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 24px;
    text-align: left;
  }
}

.form-sign__label {
  display: block;
  font-size: 18px;
  line-height: 1;
  color: var(--clrTtl);
  letter-spacing: 1px;
}

.form-sign__input {
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 6px;
  box-shadow: 0 0 5px #0003;
  font-size: 16px;
  line-height: 1;
  color: var(--clrTtl);
  outline-color: bisque;
  letter-spacing: 1px;
  border: 2px solid var(--borderHeaderInfo);

  &::placeholder {
    font-size: 16px;
    line-height: 1;
    color: var(--clrTtl);
    letter-spacing: 1px;
  }
}

.form-sign__form-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--clrTtl);
  letter-spacing: 1px;
}

.main-btn.form-sign__form-btn {
  padding: 10px 15px;
  font-size: 16px;
  line-height: 1;
  color: var(--clrTtl);
  letter-spacing: 1px;
}

.form-sign__form-btn-change {
  display: flex;
  align-items: center;
}

.form-sign__form-btn-change-text,
.form-sign__form-btn-change-btn {
  display: inline-block;
  position: relative;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  line-height: 1;
  color: var(--clrTtl);
  letter-spacing: 1px;
  text-align: left;
}

.form-sign__form-btn-change-btn {
  transition: color 0.3s linear;
  cursor: pointer;
  color: var(--clrActivegreen);

  &:hover {
    color: var(--clrLinkActive);
  }
}
</style>