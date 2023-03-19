#--------------------------------------
# Primeira tela grafica com pyyhon
# @autor: Daniel Hogans
#--------------------------------------
from tkinter import *
class Application:
    def __init__(self, master=None):
        def response ():
            print ("você precionou!")
        btn = Button(text="Pressione-me!", command=response())
        btn.pack()
        resposta = response()
        label = Label(textvariable=resposta)
        label.pack()
        entry = Entry(textvariable="seu texto")
        entry.pack()
        pass
root = Tk()             #chamos a classe Tkinter,
root.title("Meu App")   #aqui você coloca o titulo da janela por fora da classe
root.geometry('400x300') #aqui você determian o tamanho por fora da classe

Application(root)   # digo que minha classe vai executar a classe chamada
root.mainloop()     # e coloco em loop