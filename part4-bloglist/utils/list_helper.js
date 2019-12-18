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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
