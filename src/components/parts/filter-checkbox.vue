<template lang="pug">
.filter-checkbox
  label.filter-checkbox__label(:class="filterCheck.class")
    input.filter-checkbox__label-input(
      type="checkbox",
      :name="filterCheck.name",
      :id="filterCheck.id"
    )
    .filter-checkbox__label-input-fake
    span.filter-checkbox__label-text {{ filterCheck.text }}
</template>
<script>
export default {
  props: {
    filterCheck: Object,
  },
};
</script>
<style scoped lang="scss">
.filter-checkbox {
  position: relative;
  user-select: none;
}

.filter-checkbox__label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter-checkbox__label-text {
  font-size: 14px;
  color: var(--clrTtl);
}

input:checked ~ .filter-checkbox__label-input-fake {
  background: var(--clrFilterInputGreen);

  &::before {
    opacity: 1;
  }
}

.filter-checkbox__label-input-fake {
  position: relative;
  margin-right: 10px;
  width: 24px;
  height: 24px;
  border: 1.5px solid #818181;
  border-radius: 6px;
  background: transparent;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    content: "";
    background: url("~@/assets/img/icons/check-arrow.png") center center /
      contain no-repeat;
    border-radius: 6px;
    transition: all 0.4s linear;
    opacity: 0;
  }
}

.shop-filter-form-star span {
  color: gold;
  font-size: 22px;
}
</style>