const lodash = require('lodash');

const dummy = () => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, current) => {
    return sum + current.likes;
  };

  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const reducer = (found, current) => {
    return found === null
      ? current
      : found.likes < current.likes
        ? current
        : found;
  };

  const result = blogs.reduce(reducer, null);

  return {
    title: result.title,
    author: result.author,
    likes: result.likes
  };
};

const mostBlogs = (blogs) => {
  const countedByAuthor = lodash.countBy(blogs, 'author');
  let author = '';
  let num = 0;

  for (let key in countedByAuthor) {
    if (countedByAuthor[key] > num) {
      author = key;
      num = countedByAuthor[key];
    }
  }

  return {
    author: author,
    blogs: num
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
};
