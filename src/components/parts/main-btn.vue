<template lang="pug">
button.main-btn(@click="$emit('action')" :class="class" :type="typeBtn ? typeBtn : 'button'") {{ btn }}
</template>
<script>
export default {
  props: {
    btn: String,
    class: String,
    typeBtn: String
  },
  emits: ["action"],
};
</script>
<style scoped lang="scss">
.main-btn {
  position: relative;
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 400;
  color: var(--clrText);
  cursor: pointer;
  outline: none;
  border: 1px solid #d1d1d1;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  z-index: 10;

  &:hover {
    background: transparent;
    text-shadow: none;
  }

  &:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }

  &:before {
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
}

.main-btn.disabled-on {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}
</style>