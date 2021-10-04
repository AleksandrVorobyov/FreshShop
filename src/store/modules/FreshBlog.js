export default {
    state: {
        blog: {
            nav: {
                title: "Read our Blog posts",
                href: "/blog",
                link: "Go to Blog",
            },
            bigPost: {
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
            midPost: {
                src: "blog/02.jpg",
                alt: "big-post-02",
                href: "/blog",
                tag: "Vegetable",
                title: "Which vegetable your family will love and want’s eat each day",
                author: "Anna",
                date: "15. 6. 2021"
            },
            ltlPosts: [
                {
                    src: "blog/03.jpg",
                    alt: "big-post-03",
                    title: "Salat is kinda good start to your morning routines",
                    author: "Lera",
                    date: "15. 6. 2021",
                    href: "/blog"
                },
                {
                    src: "blog/04.jpg",
                    alt: "big-post-04",
                    title: "Our chef tips for a great and healthy breakfast",
                    author: "Eva",
                    date: "13. 4. 2021",
                    href: "/blog"
                },
                {
                    src: "blog/05.jpg",
                    alt: "big-post-05",
                    title: "Prepare a simple and delicious breads",
                    author: "Andrey",
                    date: "14. 7. 2021",
                    href: "/blog"
                },
            ]
        },
    },
    getters: {
        blog(state) {
            return state.blog;
        },
    },
    mutations: {
        blog(state, payload) {
            console.log(state.blog);
        },
    },
    actions: {
        blog({ commit, state }, products) {
            console.log(commit.blog);
        }
    }
}