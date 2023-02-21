export type oreType =
  | "wood"
  | "stone"
  | "iron"
  | "gold"
  | "diamond"
  | "netherite";
export type typeType = "hoe" | "axe" | "shovel" | "pickaxe" | "sword";

interface Builder {
  reset: () => void;
  setName: (name: string) => void;
  setOre: (ore: oreType) => void;
  setType: (type: typeType) => void;
}

export default Builder;
