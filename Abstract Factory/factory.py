from typing import Protocol

import pickaxe
import hoe


class ToolFactory(Protocol):
    def create_pickaxe(self) -> pickaxe.Pickaxe:
        pass

    def create_hoe(self) -> hoe.Hoe:
        pass


class StoneToolFactory(ToolFactory):
    def create_pickaxe(self) -> pickaxe.StonePickaxe:
        stone_pickaxe = pickaxe.StonePickaxe()
        print("-------------------------")
        print(f"Created {stone_pickaxe.name}")
        return stone_pickaxe

    def create_hoe(self) -> hoe.StoneHoe:
        stone_hoe = hoe.StoneHoe()
        print("-------------------------")
        print(f"Created {stone_hoe.name}")
        return stone_hoe


class IronToolFactory(ToolFactory):
    def create_pickaxe(self) -> pickaxe.IronPickaxe:
        iron_pickaxe = pickaxe.IronPickaxe()
        print("-------------------------")
        print(f"Created {iron_pickaxe.name}")
        return iron_pickaxe

    def create_hoe(self) -> hoe.IronHoe:
        iron_hoe = hoe.IronHoe()
        print("-------------------------")
        print(f"Created {iron_hoe.name}")
        return iron_hoe


class DiamondToolFactory(ToolFactory):
    def create_pickaxe(self) -> pickaxe.DiamondPickaxe:
        diamond_pickaxe = pickaxe.DiamondPickaxe()
        print("-------------------------")
        print(f"Created {diamond_pickaxe.name}")
        return diamond_pickaxe

    def create_hoe(self) -> hoe.DiamondHoe:
        diamond_hoe = hoe.DiamondHoe()
        print("-------------------------")
        print(f"Created {diamond_hoe.name}")
        return diamond_hoe
