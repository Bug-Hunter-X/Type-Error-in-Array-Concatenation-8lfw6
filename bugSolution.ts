function combine(arr1: number[], arr2: number[]): number[] {
  // Type guard to check if both arrays contain only numbers
  const isNumberArray = (arr: any[]): arr is number[] => arr.every(item => typeof item === 'number');

  if (!isNumberArray(arr1) || !isNumberArray(arr2)) {
    throw new Error('Both arrays must contain only numbers.');
  }

  return arr1.concat(arr2);
} 