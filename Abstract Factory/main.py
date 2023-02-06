import factory


class LackingOreException(Exception):
    pass


inventory = ["cobblestone"]


def create_crafting_table() -> factory.ToolFactory:
    if "diamonds" in inventory:
        return factory.DiamondToolFactory()
    elif "iron" in inventory:
        return factory.IronToolFactory()
    elif "cobblestone" in inventory:
        return factory.StoneToolFactory()

    raise LackingOreException


if __name__ == "__main__":
    crafting_table = create_crafting_table()

    print(f"Inventory: {inventory}")
    stone_pickaxe = crafting_table.create_pickaxe()
    print(f"Stone pickaxe durability: {stone_pickaxe.durability}")
    stone_pickaxe.mine("diamonds", inventory)
    stone_pickaxe.mine("iron", inventory)
    print(f"Stone pickaxe durability: {stone_pickaxe.durability}")
    print(f"Inventory: {inventory}")

    crafting_table = create_crafting_table()
    iron_pickaxe = crafting_table.create_pickaxe()
    iron_pickaxe.mine("diamonds", inventory)
    iron_pickaxe.mine("diamonds", inventory)
    print(f"Inventory: {inventory}")

    crafting_table = create_crafting_table()
    diamond_hoe = crafting_table.create_hoe()
    diamond_hoe.till("grass")
    diamond_hoe.till("dirt")
