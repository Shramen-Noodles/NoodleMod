"use strict";

var request = require('request');

var Trivia = function(apiKey) {
  if (!apiKey) {
    throw new Error('Must specify a valid API key');
  }
  this.key = apiKey;
}

Trivia.prototype.questions = function(opts, callback) {
  if(typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else {
    opts = opts || {};
  }

  var resource = "";

  var params = {
    limit : opts.limit || 10,
    page : opts.page || 1
  };

  if(opts && opts.categoryId) {
    resource = "getQuizQuestionsByCategory";
    params.categoryId = opts.categoryId;
  } else {
    resource = 'getAllQuizQuestions';
  }

  this.makeRequest(resource, params, callback);
}

Trivia.prototype.categories = function(opts, callback) {
  var resource = 'getCategoryList';

  if(typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else {
    opts = opts || {};
  }

  this.makeRequest(resource, {}, callback);
}

Trivia.prototype.random = function(opts, callback) {
  var resource = 'getRandomQuestion';

  if(typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else {
    opts = opts || {};
  }

  this.makeRequest(resource, {}, callback);
}

Trivia.prototype.count = function(opts, callback) {
  var resource = 'questionCount';

  if(typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else {
    opts = opts || {};
  }

  this.makeRequest(resource, {}, callback);
}


Trivia.prototype.makeRequest = function(resource, params, callback) {
  var base = "https://pareshchouhan-trivia-v1.p.mashape.com/v1/";
  var url = base + resource;
  request.get({
    url: url,
    qs: params,
    headers : {
      'X-Mashape-Key' : this.key,
      'Accept' : 'application/json'
    },
    json: true
  }, function(err, res) {
      callback(err, res.body)
  })
}

module.exports = function(apiKey){
  return new Trivia(apiKey);
}
