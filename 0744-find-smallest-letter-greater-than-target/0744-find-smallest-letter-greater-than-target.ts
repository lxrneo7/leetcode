function nextGreatestLetter(letters: string[], target: string): string {
  const numLetters = letters.length;
  let leftIndex = 0;
  let rightIndex = numLetters;

  while (leftIndex < rightIndex) {
      let middleIndex = leftIndex + ((rightIndex - leftIndex) >>> 1); 

      if (letters[middleIndex] > target) {
          rightIndex = middleIndex;
      } else {
          leftIndex = middleIndex + 1;
      }
  }

  return letters[leftIndex % numLetters];
}