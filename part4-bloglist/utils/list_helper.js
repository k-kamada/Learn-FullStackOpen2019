const dummy = () => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, current) => {
    return sum + current.likes;
  };

  return blogs.reduce(reducer, 0);
};

module.exports = {
  dummy,
  totalLikes
};
