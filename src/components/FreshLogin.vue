<template lang="pug">
section#loginSection.login
  .container.relative
    form.login__form
      h4.login__title {{ login.create.title }}
      label.login__label(:for="login.create.inputNameId") 
        span {{ login.create.inputName }}
      input.login__input(type="name", :id="login.create.inputNameId")
      label.login__label(:for="login.create.inputEmailId") 
        span {{ login.create.inputEmail }}
      input.login__input(type="email", :id="login.create.inputEmailId")
      label.login__label(:for="login.create.inputPasswordId") 
        span {{ login.create.inputPassword }}
      input.login__input(
        type="password",
        :id="login.create.inputPasswordId",
        :placeholder="login.create.inputPasswordPlace"
      )
      label.login__label(:for="login.create.inputPasswordRep") 
        span {{ login.create.inputPasswordRep }}
      input.login__input(
        type="password",
        :id="login.create.inputPasswordRep",
        :placeholder="login.create.inputPasswordRepPlace"
      )
      p.login__form-desc {{ login.create.formDesc }}
      main-btn(:btn="login.create.btn", :class="'login__form-btn'")
      .login__form-btn-change
        p.login__form-btn-change-text {{ login.create.changeFormText }}
        button.login__form-btn-change-btn(
          @click.prevent.stop="formLoginOrSignFunc()",
          type="button"
        ) {{ login.create.changeFormBtn }}
</template>

<script>
import { mapGetters } from "vuex";
import mainBtn from "./parts/main-btn.vue";
export default {
  computed: {
    ...mapGetters(["login"]),
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
.login {
  position: relative;
}

.login--active .login__form {
  opacity: 1;
  transform: translateX(50%) translateY(0px);
  pointer-events: all;

  @media (min-width: 970px) {
    transform: translateY(0);
  }
}

.login__form {
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

.login__title {
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

.login__label {
  display: block;
  font-size: 18px;
  line-height: 1;
  color: var(--clrTtl);
  letter-spacing: 1px;
}

.login__input {
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

.login__form-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--clrTtl);
  letter-spacing: 1px;
}

.main-btn.login__form-btn {
  padding: 10px 15px;
  font-size: 16px;
  line-height: 1;
  color: var(--clrTtl);
  letter-spacing: 1px;
}

.login__form-btn-change {
  display: flex;
  align-items: center;
}

.login__form-btn-change-text,
.login__form-btn-change-btn {
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

.login__form-btn-change-btn {
  transition: color 0.3s linear;
  cursor: pointer;
  color: var(--clrActivegreen);

  &:hover {
    color: var(--clrLinkActive);
  }
}
</style>