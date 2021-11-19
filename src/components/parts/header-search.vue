<template lang="pug">
#header-search.header-search
  .header-search__dropdown
    #header-search-drop-head.header-search__dropdown-head(
      @click="headerDrop()"
    )
      h3.header-search__dropdown-head__title {{ item.dropdown.title }}
      span
        img(:src="require('@/assets/img/' + item.dropdown.src)")
    #header-search-drop-body.header-search__dropdown-body
      .header-search__dropdown-body-item(
        v-for="drop in item.dropdown.categories",
        @click="dropChange($event), headerDrop()"
      ) 
        span {{ drop }}
  .header-search__input
    input#header-search-input.search-input(
      type="search",
      :placeholder="item.input.placeholder"
    )
  .header-search__btn
    button.search-btn
      img(:src="require('@/assets/img/' + item.btn.src)")
</template>
<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    headerDrop() {
      this.$store.commit("headerDrop");
    },
    dropChange(e) {
      this.$store.commit("dropChange", e);
    },
  },
};
</script>
<style scoped lang="scss">
.header-search {
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  background: var(--bgHeaderSearch);
  border-radius: 12px;
  z-index: 100;
  box-shadow: inset 0px 0px 1px 2px var(--shadowHeaderSearch);

  @media (min-width: 360px) {
    padding: 0px 20px;
  }

  @media (min-width: 550px) {
    width: 500px;
    padding: 0;
  }
}

@media (min-width: 550px) {
  .header-search__dropdown + .header-search__input {
    margin-left: 48px;
  }
}

.header-search__input {
  position: relative;

  @media (min-width: 550px) {
    &::before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -24px;
      content: "";
      background: var(--shadowHeaderSearch);
      height: 20px;
      width: 1px;
    }
  }
}

.header-search__dropdown-head {
  position: relative;
  display: none;
  padding: 10px 0 10px 15px;
  cursor: pointer;
  width: 130px;
  height: 50px;

  @media (min-width: 550px) {
    align-items: center;
    display: flex;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    pointer-events: none;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transform: rotateZ(90deg);
    }
  }
}

.header-search__dropdown-head__title {
  position: relative;
  display: inline-block;
  color: var(--clrTtl);
  font-size: 15px;
  font-weight: bold;
  pointer-events: none;
}

.header-search__dropdown-body {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  padding: 10px 15px;
  display: grid;
  gap: 10px;
  border-radius: 12px;
  background: var(--bgHeaderSearch);
  box-shadow: inset 0px 0px 1px 2px var(--shadowHeaderSearch),
    0px 0px 10px var(--shadowHeaderSearch);
  z-index: -50;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}

.header-search__dropdown-body--active {
  opacity: 1;
  pointer-events: all;
  z-index: 50;
}

.header-search__dropdown-body-item {
  position: relative;
  display: block;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s linear;
  border-radius: 12px;
  color: var(--clrTtl);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    background: var(--bgBodyDrop);
  }
}

.header-search__dropdown-body-item + .header-search__dropdown-body-item {
  &::before {
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--shadowHeaderSearch);
    content: "";
  }
}

.search-input {
  width: 220px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: var(--clrSearchText);
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  transition: border 0.3s linear;

  &:hover,
  &:focus {
    border-bottom: 2px solid var(--clrSearchText);
  }

  @media (min-width: 360px) {
    width: 260px;
  }
}

.header-search__input + .header-search__btn {
  margin-left: 15px;
}

.search-btn {
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  width: 22px;
  height: 22px;
  padding: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
  }
}
</style>