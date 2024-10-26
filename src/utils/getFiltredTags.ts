export const getFiltredTags = (string: string) => {
  const fitredByLinebreak = string.split("\n").join(" ");
  const wordsArray = fitredByLinebreak.split(" ");
  const tagsArr = wordsArray.filter((el) => el[0] === "#");
  return Array.from(new Set(tagsArr));
};
