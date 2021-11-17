<template lang="pug">
form.shop__form
  .shop__form-filter
    .shop__form-filter-row
      h3.shop__form-filter-title Categories
      ul.shop__form-filter-list
        li.shop__form-filter-list-item(v-for="item in 4")
          a.shop__form-filter-list-link(href="#") 
            p Category name
            span 320
    .shop__form-filter-row
      h3.shop__form-filter-title Brands
      .shop__form-filter-check-wrap
        .shop__form-filter-check(v-for="item in shop.form.filterBrend")
          filter-checkbox(:filterCheck="item")
    .shop__form-filter-row
      h3.shop__form-filter-title Rating
      .shop__form-filter-check-wrap
        .shop__form-filter-check(v-for="item in shop.form.filterStar")
          filter-checkbox(:filterCheck="item")
    .shop__form-filter-row
      h3.shop__form-filter-title Price
      .shop__form-filter-range
        .slider-track
        input#slider-1(
          type="range",
          min="0",
          max="10000",
          step="1",
          value="300",
          @input="filterRangeOne"
        )
        input#slider-2(
          type="range",
          min="0",
          max="10000",
          step="1",
          value="5000",
          @input="filterRangeTwo"
        )
      .shop__form-filter-value
        p#range1
        span &dash;
        p#range2
    .shop__form-filter-row.shop__form-filter-row--btns
      main-btn(
        btn="Apply",
        :class="'shop__form-filter-submit'",
        typeBtn="submit"
      )
      main-btn(
        btn="Reset",
        :class="'shop__form-filter-reset'",
        typeBtn="reset"
      )
</template>
<script>
import { mapGetters } from "vuex";
import mainBtn from "./main-btn.vue";
import filterCheckbox from "./filter-checkbox.vue";
export default {
  computed: {
    ...mapGetters(["shop"]),
  },
  components: {
    mainBtn,
    filterCheckbox,
  },
  data() {
    return {
      shopRangeMinPrice: 0,
      shopRangeMaxPrice: 10000,
    };
  },
  methods: {
    filterRangeOne() {
      this.$store.commit("filterRangeOne");
    },
    filterRangeTwo() {
      this.$store.commit("filterRangeTwo");
    },
  },
  mounted() {
    this.filterRangeOne();
    this.filterRangeTwo();
  },
};
</script>
<style scoped lang="scss">
.shop__form {
  position: relative;
  height: 100%;
}

@media (min-width: 970px) {
  .shop__form-filter-row + .shop__form-filter-row {
    margin-top: 30px;
  }
}

.shop__form-filter {
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 30px 10px;
  border-radius: 20px;
  background: var(--bgDescCards);
  display: grid;
  gap: 30px;
  margin: 0 auto;

  @media (min-width: 600px) {
    max-width: 600px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 970px) {
    position: sticky;
    top: 10px;
    width: 270px;
    grid-template-columns: auto;
    gap: 0px;
    max-width: 100%;
    margin: 0;
  }
}

.shop__form-filter-title {
  display: inline-block;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: var(--clrTtl);
}

.shop__form-filter-list,
.shop__form-filter-check-wrap {
  display: grid;
  gap: 10px;
}

.shop__form-filter-list-link {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    color: var(--clrTtl);
    line-height: 19px;
    transition: color 0.3s linear;
  }

  span {
    padding: 2px 10px;
    font-size: 12px;
    line-height: 18px;
    color: var(--clrFilterInputGreen);
    background: #f4f8ec;
    border-radius: 12px;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -6px;
    width: 3px;
    height: 100%;
    background: var(--clrFilterInputGreen);
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &:hover {
    p {
      color: var(--clrFilterInputGreen);
    }

    &::before {
      opacity: 1;
    }
  }
}

.shop__form-filter-range {
  position: relative;
  width: 100%;
  height: 10px;
  margin-bottom: 20px;
}

.shop__form-filter-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  font-size: 13px;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}

.slider-track {
  width: 100%;
  height: 5px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 5px;
}

input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 5px;
}

input[type="range"]::-ms-track {
  appearance: none;
  height: 5px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 1.7em;
  width: 1.7em;
  background-color: var(--clrActivegreen);
  cursor: pointer;
  margin-top: -9px;
  pointer-events: auto;
  box-shadow: 0px 0px 4px rgb(49, 49, 49);
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 1.7em;
  width: 1.7em;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--clrActivegreen);
  pointer-events: auto;
}

input[type="range"]::-ms-thumb {
  appearance: none;
  height: 1.7em;
  width: 1.7em;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--clrActivegreen);
  pointer-events: auto;
}

input[type="range"]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 3px solid var(--clrActivegreen);
}

.values {
  background-color: var(--clrActivegreen);
  width: 32%;
  position: relative;
  margin: auto;
  padding: 10px 0;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
}

.values:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border-top: 15px solid var(--clrActivegreen);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  margin: auto;
  bottom: -14px;
  left: 0;
  right: 0;
}

.shop__form-filter-row--btns {
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}
</style>