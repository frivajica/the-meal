export const groupByTwo = <Item>(array: Item[]): Item[][] => {
  const groupedArray: Item[][] = [];

  for (let i = 0; i < array.length; i += 2) {
    const group: Item[] = [array[i]];

    if (i + 1 < array.length) group.push(array[i + 1]);
    groupedArray.push(group);
  }

  return groupedArray;
};
