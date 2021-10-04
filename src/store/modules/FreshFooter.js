export default {
    state: {
        footer: {
            copy: "Copyright © 2021",
            list: [
                {
                    title: "Get in touch",
                    list: [
                        {
                            linkText: "About Us",
                            href: "#"
                        },
                        {
                            linkText: "Careers",
                            href: "#"
                        },
                        {
                            linkText: "Press Releases",
                            href: "#"
                        },
                        {
                            linkText: "Blog",
                            href: "#"
                        },
                    ]
                },
                {
                    title: "Connections",
                    list: [
                        {
                            linkText: "Facebook",
                            href: "#"
                        },
                        {
                            linkText: "Twitter",
                            href: "#"
                        },
                        {
                            linkText: "Instagram",
                            href: "#"
                        },
                        {
                            linkText: "Youtube",
                            href: "#"
                        },
                        {
                            linkText: "LinkedIn",
                            href: "#"
                        },
                    ]
                },
                {
                    title: "Earnings",
                    list: [
                        {
                            linkText: "Become an Affiliate",
                            href: "#"
                        },
                        {
                            linkText: "Advertise your product",
                            href: "#"
                        },
                        {
                            linkText: "Sell on Market",
                            href: "#"
                        },
                    ]
                },
                {
                    title: "Account",
                    list: [
                        {
                            linkText: "Your account",
                            href: "#"
                        },
                        {
                            linkText: "Returns Centre",
                            href: "#"
                        },
                        {
                            linkText: "100 % purchase protection",
                            href: "#"
                        },
                        {
                            linkText: "Chat with us",
                            href: "#"
                        },
                        {
                            linkText: "Help",
                            href: "#"
                        },
                    ]
                },
            ],
            metaTitle: "Product tags",
            metaList: [
                {
                    text: "Beans",
                    href: "#"
                },
                {
                    text: "Carrots",
                    href: "#"
                },
                {
                    text: "Apples",
                    href: "#"
                },
                {
                    text: "Garlic",
                    href: "#"
                },
                {
                    text: "Mushrooms",
                    href: "#"
                },
                {
                    text: "Tomatoes",
                    href: "#"
                },
                {
                    text: "Chilli peppers",
                    href: "#"
                },
                {
                    text: "Broccoli",
                    href: "#"
                },
                {
                    text: "Watermelons",
                    href: "#"
                },
                {
                    text: "Oranges",
                    href: "#"
                },
                {
                    text: "Bananas",
                    href: "#"
                },
                {
                    text: "Grapes",
                    href: "#"
                },
                {
                    text: "Cherries",
                    href: "#"
                },
                {
                    text: "Meat",
                    href: "#"
                },
                {
                    text: "Seo tag",
                    href: "#"
                },
                {
                    text: "Fish",
                    href: "#"
                },
            ]
        },
    },
    getters: {
        footer(state) {
            return state.footer;
        },
    },
    mutations: {
        footer(state, payload) {
            console.log(state.footer);
        },
    },
    actions: {
        footer({ commit, state }, products) {
            console.log(commit.footer);
        }
    }
}