from typing import Protocol
import random


class Jutsu(Protocol):
    name: str
    damage_range: range

    @property
    def damage(self) -> int:
        return random.choice(self.damage_range)


class Rasengan(Jutsu):
    def __init__(self):
        self.name = "Rasengan"
        self.damage_range = range(10, 15)


class Chidori(Jutsu):
    def __init__(self):
        self.name = "Chidori"
        self.damage_range = range(5, 20)
