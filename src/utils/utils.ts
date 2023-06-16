export const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

export const countUniqLetters = (str: string): string => {
  let uniq: Record<string, number> = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (uniq[str[i]]) {
      uniq[str[i]] += 1;
    } else {
      uniq[str[i]] = 1;
    }
  }
  const sortedKeys = Object.keys(uniq);
  sortedKeys.sort();
  sortedKeys.forEach((key) => {
    result += key + uniq[key];
  });

  return result;
};

export const rle = (str: string): string => {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++;
    } else {
      if (count === 1) {
        result += str[i - 1];
      } else {
        result += str[i - 1] + count;
        count = 1;
      }
    }
  }
  return result;
};
