# Trivia
A simple wrapper around the Mashape Trivia API

This package utilizes this [API](https://market.mashape.com/pareshchouhan/trivia/) to provide access to tens of thousands of trivia questions. 
In order to use it, you must obtain an API key from mashape [here](http://docs.mashape.com/api-keys). 

## Installation 

```
$ npm install trivia --save
```

## Usage 

```javascript
var trivia = require('trivia')(YOUR_MASHAPE_KEY);

//Get questions for a specific category
trivia.questions({
  limit: 10,
  page: 3,
  categoryId: 50
}, function(err, questions) {
  console.log(questions);
});

//Page through all questions in the database
trivia.questions({
  limit: 10,
  page: 1
}, function(err, questions) {
  console.log(questions);
});

//List all categories
trivia.categories({
  limit: 10,
  page: 2
}, function(err, categories) {
  console.log(categories);
});

//Get a random question from the database
trivia.random({
  limit: 10,
  page: 4
}, function(err, random) {
  console.log(random);
});

//Total number of questions in the system
trivia.count({
  limit: 10,
  page: 4
}, function(err, count) {
  console.log(count);
});

```

## License 
MIT (See LICENSE for more info)
