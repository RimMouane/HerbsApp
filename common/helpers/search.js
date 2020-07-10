const search = (array, word) => {
  return array.filter((e) => {
    return e.name?.includes(word);
  });
};

export default search;
