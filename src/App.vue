<template lang="pug">
#page.page(@click="clickDocument")
  <router-view/>
</template>

<script>
export default {
  methods: {
    clickDocument(e) {
      this.$store.dispatch("clickDocument", e);
    },
  },
};
</script>

<style lang="scss">
:root {
  --bgPage: linear-gradient(to right, #11b5cb 0, #481173 100%) no-repeat;
  --bgHeaderSearch: #f9f9f9;
  --bgBodyDrop: #dbdbdb;
  --bgMain: #fff;
  --bgCards: #20b2aa;
  --bgDescCards: #ececec;
  --bgCardsHover: bisque;

  --borderHeaderInfo: #bdbdbd;

  --clrWhite: #fff;
  --clrLink: #fff;
  --clrLinkActive: #fd4f1b;
  --clrActiveCart: #e5704b;
  --clrActivegreen: #20b2aa;
  --clrTtl: #151515;
  --clrText: #575757;
  --clrSearchText: #a9a9a9;
  --clrFilterInputGreen: #6a983c;

  --cartCount: "4";

  --shadowHeaderSearch: #d1d1d1;

  --fontRegular: "Open-Sans";
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

#page {
  position: relative;
  background: var(--bgPage);
}

html,
body {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: var(--fontRegular);
  color: var(--clrTtl);
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
}

@media (max-width: 1260px) {
  body.hidden {
    position: fixed;
    overflow: hidden;
  }
}

input,
textarea {
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
  -webkit-appearance: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  pointer-events: none;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1260px;
  width: 100%;
  margin: auto;
  padding: 0 15px;

  @media (min-width: 720px) {
    padding: 0 45px;
  }
}

.relative {
  position: relative;
}

#page > div > main {
  padding: 25px 0;
  background: linear-gradient(var(--bgMain), var(--bgMain));
  border-radius: 20px;

  & > section {
    padding-top: 25px;
    padding-bottom: 25px;
  }
}
</style>
