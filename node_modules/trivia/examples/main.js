var trivia = require('../trivia')(process.env.MASHAPE_KEY);

//Get questions for a specific category
trivia.questions({
  limit: 40,
  page: 1,
  categoryId: 50
}, function(err, questions) {
  console.log(questions);
});

//Page through all questions in the database
trivia.questions({
  limit: 40,
  page: 1
}, function(err, questions) {
  console.log(questions);
});

//List all categories
trivia.categories({
  limit: 100,
  page: 4
}, function(err, categories) {
  console.log(categories);
});

//Get a random question from the database
trivia.random({
  limit: 100,
  page: 4
}, function(err, random) {
  console.log(random);
});

//Total number of questions in the system
trivia.count({
  limit: 100,
  page: 4
}, function(err, count) {
  console.log(count);
});
