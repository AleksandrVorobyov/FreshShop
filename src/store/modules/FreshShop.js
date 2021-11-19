export default {
    state: {
        shop: {
            title: "Food Shop",
            products: {
                title: "products",
            },
            filter: {
                radio: [
                    {
                        id: "filter-shop-food",
                        text: "Food",
                        name: "main-filter"
                    },
                    {
                        id: "filter-shop-water",
                        text: "Water",
                        name: "main-filter"
                    },
                ],
                checkOne: {
                    id: "filter-shop-food-check-one",
                    text: "Food",
                    name: "new-filter"
                },
                checkTwo: {
                    id: "filter-shop-food-check-two",
                    text: "Water",
                    name: "new-filter"
                },
            },
            active: {
                title: "Applied filtres:",
                tags: [],
                null: "Null"
            },
            pagination: {
                prevBtn: "Prev page",
                nextBtn: "Next page",
                pageNumber: 0,
                maxComponetsImPage: '',
            },
            form: {
                filterBrend: [
                    {
                        id: "shop-filter-form-brend-01",
                        text: "Apple",
                        name: "brend-filter"
                    },
                    {
                        id: "shop-filter-form-brend-02",
                        text: "Zara",
                        name: "brend-filter"
                    },
                    {
                        id: "shop-filter-form-brend-03",
                        text: "Microsoft",
                        name: "brend-filter"
                    },
                    {
                        id: "shop-filter-form-brend-04",
                        text: "Opel",
                        name: "brend-filter"
                    },
                    {
                        id: "shop-filter-form-brend-05",
                        text: "Armani",
                        name: "brend-filter"
                    },
                ],
                filterStar: [
                    {
                        id: "shop-filter-form-star-01",
                        text: "★☆☆☆☆",
                        name: "star-filter",
                        class: "shop-filter-form-star"
                    },
                    {
                        id: "shop-filter-form-star-02",
                        text: "★★☆☆☆",
                        name: "star-filter",
                        class: "shop-filter-form-star"
                    },
                    {
                        id: "shop-filter-form-star-03",
                        text: "★★★☆☆",
                        name: "star-filter",
                        class: "shop-filter-form-star"
                    },
                    {
                        id: "shop-filter-form-star-04",
                        text: "★★★★☆",
                        name: "star-filter",
                        class: "shop-filter-form-star"
                    },
                    {
                        id: "shop-filter-form-star-05",
                        text: "★★★★★",
                        name: "star-filter",
                        class: "shop-filter-form-star"
                    },
                ]
            }
        },
        shopProductCards: [],
    },
    getters: {
        shop(state) {
            return state.shop;
        },
        pageShopCount(state) {
            let l = state.shopProductCards.length,
                s = state.shop.pagination.maxComponetsImPage;
            return Math.ceil(l / s);
        },
        paginatedShopData(state) {
            const start = state.shop.pagination.pageNumber * state.shop.pagination.maxComponetsImPage,
                end = start + state.shop.pagination.maxComponetsImPage;
            return state.shopProductCards.slice(start, end);
        },
        disabledShopPrev(state) {
            if (state.shop.pagination.pageNumber === 0) {
                return false;
            } else {
                return true
            }
        },
        disabledShopNext(state) {
            if ((state.shop.pagination.pageNumber + 1) == Math.ceil(state.shopProductCards.length / state.shop.pagination.maxComponetsImPage)) {
                return false;
            } else {
                return true
            }
        },
        shopProductCards(state) {
            return state.shopProductCards;
        },
    },
    mutations: {
        shopPageWindow(state) {
            if (window.innerWidth > 1170) {
                return state.shop.pagination.maxComponetsImPage = 14
            } else {
                return state.shop.pagination.maxComponetsImPage = 9
            }
        },
        shopCardsPrev(state) {
            state.shop.pagination.pageNumber--;
        },
        shopCardsNext(state) {
            state.shop.pagination.pageNumber++;
        },
        scrollTopShop() {
            const shop = document.getElementById('shop')
            shop.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        },
        cardRatingInit() {
            let ratingActive, ratingValue;
            const ratings = document.querySelectorAll(".rating");

            for (let i = 0; i < ratings.length; i++) {
                const rating = ratings[i];
                initRating(rating);
            }

            function initRating(rating) {
                initRatingVars(rating);
                setRatingActive();

                if (rating.classList.contains("rating__set")) {
                    setRating(rating);
                }
            }

            function initRatingVars(rating) {
                ratingActive = rating.querySelector(".rating__active");
                ratingValue = rating.querySelector(".rating__value");
            }

            function setRatingActive(i = ratingValue.innerHTML) {
                const ratingActiveWidth = i / 0.05;
                ratingActive.style.width = `${ratingActiveWidth}%`;
            }

            function setRating(rating) {
                const ratingItems = rating.querySelectorAll(".rating__star");

                for (let i = 0; i < ratingItems.length; i++) {
                    const ratingItem = ratingItems[i];

                    ratingItem.addEventListener("mouseenter", function (e) {
                        initRatingVars(rating);
                        setRatingActive(ratingItem.value);
                    });

                    ratingItem.addEventListener("mouseleave", function (e) {
                        setRatingActive();
                    });

                    ratingItem.addEventListener("click", function (e) {
                        initRatingVars(rating);
                        ratingValue.innerHTML = i + 1;
                        setRatingActive();
                    });
                }
            }
        },
        filterRangeOne() {
            let sliderOne = document.getElementById("slider-1");
            let sliderTwo = document.getElementById("slider-2");
            let displayValOne = document.getElementById("range1");
            let minGap = 0;
            let sliderTrack = document.querySelector(".slider-track");
            let sliderMaxValue = document.getElementById("slider-1").max;

            function fillColor() {
                let percent1 = (sliderOne.value / sliderMaxValue) * 100;
                let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
                sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #20b2aa ${percent1}% , #20b2aa ${percent2}%, #dadae5 ${percent2}%)`;
            }

            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            displayValOne.textContent = `Min: ${sliderOne.value}$`;
            fillColor();
        },
        filterRangeTwo() {
            let sliderOne = document.getElementById("slider-1");
            let sliderTwo = document.getElementById("slider-2");
            let displayValTwo = document.getElementById("range2");
            let minGap = 0;
            let sliderTrack = document.querySelector(".slider-track");
            let sliderMaxValue = document.getElementById("slider-1").max;

            function fillColor() {
                let percent1 = (sliderOne.value / sliderMaxValue) * 100;
                let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
                sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #20b2aa ${percent1}% , #20b2aa ${percent2}%, #dadae5 ${percent2}%)`;
            }

            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            displayValTwo.textContent = `Max: ${sliderTwo.value}$`;
            fillColor();
        }
    },
    actions: {
        async loadProductCards({ commit, state }) {
            const res = await fetch(
                "https://fresh-shop-18029-default-rtdb.europe-west1.firebasedatabase.app/cards.json"
            );
            state.shopProductCards = await res.json();
        },
    },
}