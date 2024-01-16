const exampleData = {
  tracksForHome: Array.from({ length: 10 }, (_, index) => ({
    id: `track_${index + 1}`,
    title: `Track ${index + 1}`,
    author: {
      name: "Grumpy Cat",
      photo:
        "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
    },
    thumbnail:
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: 1210,
    modulesCount: 6,
  })),
  reviews: Array.from({ length: 10 }, (_, index) => ({
    id: `review_${index + 1}`,
    rating: `${(index + 1) * 0.5}`,
    content: `This is review ${index + 1}.`,
  })),

  games: Array.from({ length: 10 }, (_, index) => ({
    id: `game_${index + 1}`,
    title: `Game ${index + 1}`,
    platform: ["iOS", "Android", "Web"],
  })),

  authors: Array.from({ length: 10 }, (_, index) => ({
    id: `author_${index + 1}`,
    name: `Author ${index + 1}`,
    photo: `author_photo_${index + 1}.jpg`,
    verified: index % 2 === 0, // Alternate between true and false
  })),
};
module.exports = exampleData;
