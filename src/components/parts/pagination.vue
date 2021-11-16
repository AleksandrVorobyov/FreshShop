<template lang="pug">
.pagination
  .pagination-link
    h3.pagination-link-title Page:
    span {{ objectInfo.pagination.pageNumber + 1 }}
    span /
    span(v-html="pageShopCount")
  .pagination-btns
    main-btn(
      :btn="objectInfo.pagination.prevBtn",
      :class="'pagination-btn pagination-btn--prev ' + (disabledShopPrev ? '' : 'disabled-on')",
      @action="$emit('btnPrev'), $emit('scrollToSection')"
    )
    main-btn(
      :btn="objectInfo.pagination.nextBtn",
      :class="'pagination-btn pagination-btn--next ' + (disabledShopNext ? '' : 'disabled-on')",
      @action="$emit('btnNext'), $emit('scrollToSection')"
    )
</template>
<script>
import mainBtn from "./main-btn.vue";
export default {
  props: {
    objectInfo: Object,
    pageShopCount: Number,
    disabledShopPrev: Boolean,
    disabledShopNext: Boolean,
  },
  emits: ["btnPrev", "btnNext", "scrollToSection"],
  components: {
    mainBtn,
  },
};
</script>

<style scoped lang="scss">
.pagination {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 40px;

  @media (min-width: 720px) {
    flex-direction: row;
    gap: 0;
  }
}

.pagination-link {
  display: flex;
  align-items: flex-end;

  @media (min-width: 720px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  span {
    margin-left: 15px;
  }
}

.pagination-btns {
  display: flex;
  gap: 15px;
}

.pagination-btn {
  padding: 5px 15px;
}
</style>