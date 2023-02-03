import random
import ninja

if __name__ == "__main__":
    naruto = ninja.Naruto()
    sasuke = ninja.Sasuke()

    opponent = {naruto: sasuke, sasuke: naruto}

    naruto.print_hp()
    sasuke.print_hp()

    while not (sasuke.is_dead or naruto.is_dead):
        attacker = random.choice([naruto, sasuke])
        attacker.attack(opponent[attacker])
