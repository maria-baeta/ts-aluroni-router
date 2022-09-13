import items from "../items.json";

export const hadleOrder = (order: string, unorderedList: typeof items) => {
  switch (order) {
    case "lowestPrice":
      return unorderedList.sort((itemA, itemB) =>
        itemA.price > itemB.price ? 1 : -1
      );
    case "biggestPrice":
      return unorderedList.sort((itemA, itemB) =>
        itemA.price < itemB.price ? 1 : -1
      );

    case "smallPortions":
      return unorderedList.sort((itemA, itemB) =>
        itemA.size > itemB.size ? 1 : -1
      );
    case "bigPortions":
      return unorderedList.sort((itemA, itemB) =>
        itemA.size < itemB.size ? 1 : -1
      );

    case "forOne":
      return unorderedList.sort((itemA, itemB) =>
        itemA.serving > itemB.serving ? 1 : -1
      );
    case "forMore":
      return unorderedList.sort((itemA, itemB) =>
        itemA.serving < itemB.serving ? 1 : -1
      );

    default:
      return unorderedList;
  }
};

export const handleFilter = (filter: number | null, id: number) => {
  if (filter !== null) return filter === id;
  return true;
};

export const handleSearch = (search: string, title: string) => {
  const regex = new RegExp(search, "i");
  return regex.test(title);
};
