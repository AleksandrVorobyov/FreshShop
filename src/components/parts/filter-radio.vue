<template lang="pug">
.filter-radio
  label.filter-radio__label(v-for="item in filter")
    input.filter-radio__label-radio(
      type="radio",
      :id="item.id",
      :name="item.name"
    )
    .filter-radio__label-fake
    span.filter-radio__label-text {{ item.text }}
</template>
<script>
export default {
  props: {
    filter: Object,
  },
};
</script>
<style scoped lang="scss">
.filter-radio {
  position: relative;
  padding: 5px 10px;
  overflow: hidden;
  z-index: 500;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  display: inline-flex;
  gap: 20px;
  user-select: none;

  @media (min-width: 720px) {
    padding: 9px 16px;
  }
}

.filter-radio__label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter-radio__label-text {
  font-size: 12px;
  color: var(--clrTtl);

  @media (min-width: 480px) {
    font-size: 14px;
  }
}

input:checked ~ .filter-radio__label-fake {
  &::before {
    width: calc(50%);
    height: calc(50%);
  }
}

.filter-radio__label-fake {
  position: relative;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border: 1.5px solid #d1d1d1;
  border-radius: 50%;
  background: var(--clrFilterInputGreen);

  @media (min-width: 480px) {
    width: 24px;
    height: 24px;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    content: "";
    border-radius: 50%;
    background: #f9f9f9;
    transition: all 0.4s linear;
  }
}
</style>