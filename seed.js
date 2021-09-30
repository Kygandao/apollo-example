const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017'); 
const movies = [
    {
        title: "Django 2",
        year: 2012,
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

const seed = async () => {
    const connection = await client.connect().catch(console.error);
    const Movies = connection.db('moviesGQL').collection('movies');
    Movies.insertMany({movies}).then(console.log);
    connection.close();
}

seed();
