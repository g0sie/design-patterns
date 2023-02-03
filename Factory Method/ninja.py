from abc import ABC, abstractmethod

import jutsu


class DeadNinjaException(Exception):
    pass


class Ninja(ABC):
    name: str
    hp: int
    color: str

    def __init__(self):
        self.is_dead = False

    @abstractmethod
    def create_jutsu(self) -> jutsu.Jutsu:
        pass

    def attack(self, other_ninja: "Ninja") -> None:
        if self.is_dead:
            raise DeadNinjaException("Dead ninjas can't attack")

        jutsu = self.create_jutsu()
        damage = jutsu.damage
        other_ninja.hp -= damage

        self.print(
            f"{self.name} attacked {other_ninja.name} with {jutsu.name} (-{damage} hp)."
        )
        other_ninja.print_hp()

        if other_ninja.hp <= 0:
            other_ninja.die()

    def print_hp(self) -> None:
        self.print(f"{self.name} has {self.hp} hp.")

    def die(self) -> None:
        self.is_dead = True
        self.print(f"{self.name} is dead.")

    def print(self, str: str) -> None:
        """prints with color"""
        print(self.color + str + "\x1b[0m")


class Naruto(Ninja):
    def __init__(self):
        super().__init__()
        self.name = "Naruto"
        self.hp = 35
        self.color = "\x1b[1;33;40m"

    def create_jutsu(self) -> jutsu.Jutsu:
        return jutsu.Rasengan()


class Sasuke(Ninja):
    def __init__(self):
        super().__init__()
        self.name = "Sasuke"
        self.hp = 36
        self.color = "\x1b[1;34;40m"

    def create_jutsu(self) -> jutsu.Jutsu:
        return jutsu.Chidori()
