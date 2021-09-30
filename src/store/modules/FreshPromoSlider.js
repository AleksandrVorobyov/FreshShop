export default {
    state: {
        promoSlider: {
            slides: [
                {
                    src: "promoSlide/01.jpg",
                    alt: "sale-october-promo",
                    link: "#",
                },
                {
                    src: "promoSlide/02.jpg",
                    alt: "sale-bershka-promo",
                    link: "#",
                },
                {
                    src: "promoSlide/03.jpg",
                    alt: "sale-technic-promo",
                    link: "#",
                },
                {
                    src: "promoSlide/04.jpg",
                    alt: "sale-phone-promo",
                    link: "#",
                },
            ],
            options: {
                rewind: true,
                perPage: 1,
                gap: "1rem",
                height: 300,
                speed: 1300,
                classes: {
                    arrows: 'splide__arrows promoSlide-class-arrows',
                    arrow: 'splide__arrow promoSlide-class-arrow',
                    prev: 'splide__arrow--prev promoSlide-class-prev',
                    next: 'splide__arrow--next promoSlide-class-next',

                    pagination: 'splide__pagination promoSlide-class-pagination', // container
                    page: 'splide__pagination__page promoSlide-class-page', // each button
                },
            },
        },
    },
    getters: {
        promoSlider(state) {
            return state.promoSlider;
        },
    },
    mutations: {
        promoSlider(state, payload) {
            console.log(state.promoSlider);
        },
    },
    actions: {
        promoSlider({ commit, state }, products) {
            console.log(commit.promoSlider);
        }
    }
}