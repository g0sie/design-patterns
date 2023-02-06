from typing import Protocol, Literal, List


class OreDoesntExistException(Exception):
    pass


class Pickaxe(Protocol):
    name: str
    durability: int

    def mine(self, ore: str, inventory: List[str]) -> None:
        pass


class StonePickaxe(Pickaxe):
    def __init__(self):
        self.name = "Stone Pickaxe"
        self.durability = 131

    def mine(self, ore: Literal["coal", "iron"], inventory: List[str]) -> None:
        if ore in ["coal", "iron"]:
            self.durability -= 1
            inventory.append(ore)
            print(f"{self.name} mined {ore}.")
        elif ore in ["diamonds"]:
            self.durability -= 1
            print(f"{self.name} is too weak to mine {ore}")
        else:
            raise OreDoesntExistException(f"{ore} is not a valid ore")


class IronPickaxe(Pickaxe):
    def __init__(self):
        self.name = "Iron Pickaxe"
        self.durability = 250

    def mine(
        self, ore: Literal["coal", "iron", "diamonds"], inventory: List[str]
    ) -> None:
        if ore in ["coal", "iron", "diamonds"]:
            self.durability -= 1
            if not ore in inventory:
                inventory.append(ore)
            print(f"{self.name} mined {ore}.")
        else:
            raise OreDoesntExistException(f"{ore} is not a valid ore")


class DiamondPickaxe(Pickaxe):
    def __init__(self):
        self.name = "Diamond Pickaxe"
        self.durability = 1561

    def mine(
        self, ore: Literal["coal", "iron", "diamonds"], inventory: List[str]
    ) -> None:
        if ore in ["coal", "iron", "diamonds"]:
            self.durability -= 1
            if not ore in inventory:
                inventory.append(ore)
            print(f"{self.name} mined {ore}.")
        else:
            raise OreDoesntExistException(f"{ore} is not a valid ore")
