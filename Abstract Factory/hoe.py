from typing import Protocol, Literal


class Hoe(Protocol):
    name: str
    durability: int

    def till(self, block: Literal["dirt", "grass"]) -> None:
        print(f"{self.name} tilled a {block} block.")
        self.durability -= 1


class StoneHoe(Hoe):
    def __init__(self):
        self.name = "Stone Hoe"
        self.durability = 131


class IronHoe(Hoe):
    def __init__(self):
        self.name = "Iron Hoe"
        self.durability = 250


class DiamondHoe(Hoe):
    def __init__(self):
        self.name = "Diamond Hoe"
        self.durability = 1561
