export default {
    state: {
        header: {
            info: [
                {
                    col: [
                        {
                            text: "Chat with us",
                            href: "#",
                            class: "",
                            type: "link",
                        },
                        {
                            text: "+420 336 775 664",
                            href: "tel:+420336775664",
                            class: "",
                            type: "link",
                        },
                        {
                            text: "info@freshnesecom.com",
                            href: "mailto:info@freshnesecom.com",
                            class: "",
                            type: "link",
                        },
                    ],
                    class: "page-header-link"
                },
                {
                    col: [
                        {
                            text: "Home",
                            href: "/",
                            class: "active-link",
                            type: "page",
                        },
                        {
                            text: "Blog",
                            href: "/blog",
                            class: "active-link",
                            type: "page",
                        },
                        {
                            text: "Shop",
                            href: "/shop",
                            class: "active-link",
                            type: "page",
                        },
                    ],
                    class: "page-header-nav"
                }
            ],
            nav: {
                logo: {
                    text: "FreshShopCom",
                    href: "/"
                },
                search: {
                    dropdown: {
                        title: "All categories",
                        src: "icons/arrow-right.svg",
                        categories: [
                            "Woman",
                            "Man",
                            "Children",
                            "Shoes",
                            "Accessories",
                            "Electronics",
                            "Books",
                            "Sport",
                            "School",
                            "Food",
                        ]
                    },
                    input: {
                        placeholder: "Search Products, categories ..."
                    },
                    btn: {
                        src: "icons/search.svg",
                    },
                },
                basket: {
                    profile: {
                        src: "icons/user.svg"
                    },
                    cart: {
                        src: "icons/cart.svg"
                    },
                },
            },
            burder: "Menu"
        },
    },
    getters: {
        header(state) {
            return state.header;
        },
    },
    mutations: {
        headerDrop() {
            const headerSearchDropBody = document.getElementById(
                "header-search-drop-body"
            );

            if (
                !headerSearchDropBody.classList.contains(
                    "header-search__dropdown-body--active"
                )
            ) {
                headerSearchDropBody.classList.add(
                    "header-search__dropdown-body--active"
                );
            } else {
                headerSearchDropBody.classList.remove(
                    "header-search__dropdown-body--active"
                );
            }
        },
        dropChange(_, e) {
            const dropTitle = document.querySelector(
                ".header-search__dropdown-head__title"
            );
            let newDropTitle = e.target.textContent;
            let oldDropTitle = dropTitle.textContent;

            return (
                (dropTitle.textContent = newDropTitle),
                (e.target.textContent = oldDropTitle)
            );
        },
        clickOutDrop() {
            const headerSearchDropBody = document.getElementById(
                "header-search-drop-body"
            );

            // document.onclick = function (e) {
            //     if (e.target.className != "header-search__dropdown-head") {
            //         headerSearchDropBody.classList.remove(
            //             "header-search__dropdown-body--active"
            //         );
            //     }
            // };
        }
    },
    actions: {
        header({ commit, state }, products) {
            console.log(commit.header);
        }
    }
}