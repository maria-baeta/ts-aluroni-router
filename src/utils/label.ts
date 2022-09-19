/* eslint-disable indent */
export const convertLabel = (label: string) => {
  switch (label) {
    case "Massas":
      return "pastas";
    case "Veganos":
      return "vegans";
    case "Carnes":
      return "meat";
    default:
      return "combos";
  }
};
