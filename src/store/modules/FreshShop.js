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
            } else if (window.innerWidth > 970 && window.innerWidth < 1170) {
                return state.shop.pagination.maxComponetsImPage = 9
            } else {
                return state.shop.pagination.maxComponetsImPage = 3
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