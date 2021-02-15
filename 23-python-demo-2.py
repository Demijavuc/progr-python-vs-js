def sveiciens(vards):
    print(f"Labdien, {vards}")

def taisnsturaLaukums(mala1, mala2):
    if mala1 > 0 and mala2 > 0:
        return mala1 * mala2
    return 0

def pirkumaSumma(cena):
    jamaksa = cena
    if cena > 100:
        jamaksa = cena*0.95
    elif cena > 50:
        jamaksa = cena*0.97
    print(f"Par pirkumu jāmaksā {jamaksa}")
    print('pielabot!')

# sveiciens("12. klase")
# print(taisnsturaLaukums(2, 3))
# print(taisnsturaLaukums(-6, 7))
# pirkumaSumma(101)
