export default {
    state: {
        blogPage: {
            title: "Fruit and vegetables",
            bigPosts: [
                {
                    src: "blog/01.jpg",
                    alt: "big-post-01",
                    tag: "Dinner tips",
                    title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque aspernatur amet ea sunt at hic rem dicta natus maiores consequatur adipisci ex commodi vitae harum sapiente fugiat assumenda voluptatem, nulla velit! Voluptatem odio quos voluptatibus repellendus enim, delectus necessitatibus.",
                    srcAuthor: "avatars/max.jpg",
                    author: "Max",
                    date: "17. 6. 2021",
                    href: "/blog"
                },
                {
                    src: "blog/03.jpg",
                    alt: "big-post-03",
                    tag: "Dinner tips",
                    title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque aspernatur amet ea sunt at hic rem dicta natus maiores consequatur adipisci ex commodi vitae harum sapiente fugiat assumenda voluptatem, nulla velit! Voluptatem odio quos voluptatibus repellendus enim, delectus necessitatibus.",
                    srcAuthor: "avatars/anne.jpg",
                    author: "Anne",
                    date: "15. 6. 2021",
                    href: "/blog"
                },
            ],
            midPosts: {
                src: "blog/02.jpg",
                alt: "big-post-02",
                href: "/blog",
                tag: "Vegetable",
                title: "Which vegetable your family will love and want’s eat each day",
                author: "Anna",
                date: "15. 6. 2021"
            },
            aside: [
                {
                    title: "Archives",
                    asideLink: {
                        list: [
                            {
                                href: "#",
                                text: "March 2020"
                            },
                            {
                                href: "#",
                                text: "February 2020"
                            },
                            {
                                href: "#",
                                text: "January 2020"
                            },
                            {
                                href: "#",
                                text: "November 2019"
                            },
                            {
                                href: "#",
                                text: "December 2019"
                            },
                        ],
                    },
                },
                {
                    title: "Category",
                    asideLink: {
                        list: [
                            {
                                href: "#",
                                text: "Food"
                            },
                            {
                                href: "#",
                                text: "Chefs specialities"
                            },
                            {
                                href: "#",
                                text: "Vegetable"
                            },
                            {
                                href: "#",
                                text: "Meat"
                            },
                            {
                                href: "#",
                                text: "Recommendations"
                            },
                        ],
                    },
                },
                {
                    title: "Join our list",
                    subs: {
                        text: "Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.",
                        placeholder: "Your email address",
                        btn: "Subscribe",
                    },
                },
            ]
        },
    },
    getters: {
        blogPage(state) {
            return state.blogPage;
        },
    },
    mutations: {
        blogPage(state, payload) {
            console.log(state.blogPage);
        },
    },
    actions: {
        blogPage({ commit, state }, products) {
            console.log(commit.blogPage);
        }
    }
}