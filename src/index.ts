class Solution {
  chuckArray(arr: string[], chunkSize: number): string[][] {
    if (chunkSize < 1) {
      throw new Error('Invalid chunk size');
    }

    const result: string[][] = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }

    return result;
  }
}

const arrayChunk = new Solution();

console.log(arrayChunk.chuckArray(['a', 'b', 'c', 'd'], 2));
