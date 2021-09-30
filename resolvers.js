const movies = [
    {
        title: "Django",
        year: 2005,
        reviews: [
            {
                author: "Anthony",
                title: "My thoughts and feelings",
                body: "Great movie!",
            },
            {
                author: "Me",
                title: "original was better",
                body: "prefer Jenga",
            },
        ],
    },
];

const resolvers = {
    Query: {
        movies: () => movies,
    },
};

module.exports = resolvers;
