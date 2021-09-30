<template lang="pug">
section.promo-cards
  .container
    .promo-cards-wrap
      promo-card(v-for="(card, idx) in promoCards.cards", :key="card" :option="card" :idx="idx + 1")
</template>
<script>
import { mapGetters } from "vuex";
import PromoCard from "./parts/promo-card.vue";
export default {
  computed: {
    ...mapGetters(["promoCards"]),
  },
  components: {
    PromoCard,
  },
};
</script>
<style scoped lang="scss">
.promo-cards {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.promo-cards-wrap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>