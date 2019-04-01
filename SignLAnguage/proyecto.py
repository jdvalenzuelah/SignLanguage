#Universidad del Valle de Guatemala
#HCI
#David valenzuela
#Marcos Gutierrez
#Fernando Hengstenebrg

#Librerias
from tkinter import *
from tkinter import messagebox as ms
#base de datos
import sqlite3
import os
import webbrowser

#Conectamos con base de datos y creamos usuarios
with sqlite3.connect('cuentas.db') as db:
    c = db.cursor()

c.execute('CREATE TABLE IF NOT EXISTS user (username TEXT NOT NULL ,password TEX NOT NULL);')
db.commit()
db.close()

#main Class
class main:
    def __init__(self,master):
    	# ventana
        self.master = master
        # variables
        self.Usuario = StringVar()
        self.password = StringVar()
        self.usuarioNuevo = StringVar()
        self.nuevaPassword = StringVar()
        self.widgets()

    #Funcion LOGIN
    def login(self):
    	#establecer coneccion
        with sqlite3.connect('cuentas.db') as db:
            c = db.cursor()

        #buscar usuario en dr
        find_user = ('SELECT * FROM user WHERE username = ? and password = ?')
        c.execute(find_user,[(self.Usuario.get()),(self.password.get())])
        result = c.fetchall()
        if result:
            f = open('alfabeto.html', 'r')
            mensaje = 'Se abrio el archivo'
            webbrowser.open_new_tab('alfabeto.html')
            
        else:
            ms.showerror('Oops!','La cuenta no se puede encontrar')

    def nuevoUsuario(self):
        with sqlite3.connect('cuentas.db') as db:
            c = db.cursor()

        #buscar usuario
        find_user = ('SELECT * FROM user WHERE username = ?')
        c.execute(find_user,[(self.Usuario.get())])
        if c.fetchall():
            ms.showerror('Error!','Ya existe el nombre de usuario Intente de Nuevo.')
        else:
            ms.showinfo('Success!','Cuenta Creada!')
            self.log()
        #Crear nueva cuenta
        insert = 'INSERT INTO user(username,password) VALUES(?,?)'
        c.execute(insert,[(self.usuarioNuevo.get()),(self.nuevaPassword.get())])
        db.commit()


    def log(self):
        self.Usuario.set('')
        self.password.set('')
        self.crf.pack_forget()
        #self.head['text'] = 'LOGIN'
        self.logf.pack()

    def crear(self):
        self.usuarioNuevo.set('')
        self.nuevaPassword.set('')
        self.logf.pack_forget()
        self.head['text'] = '             CREAR CUENTA             '
        self.crf.pack()


    def widgets(self):
    	#Encabezado de la ventana para iniciar sesion
        self.head = Label(self.master, text = '              INICIAR SESION            ', font = ('',20), pady = 10, bg='blue4', fg='white')
        self.head.pack()
        #Ventana principal
        self.logf = Frame(self.master,padx =10,pady = 10, bg='white')
        #Propiedades principales
        Label(self.logf,text = 'Usuario: ',font = ('',20),pady=5,padx=5, bg='white', fg='black').grid(sticky = W)
        Entry(self.logf,textvariable = self.Usuario,bd = 5,font = ('',15)).grid(row=0,column=1)
        Label(self.logf,text = 'Contraseña: ',font = ('',20),pady=5,padx=5, bg='white', fg='black').grid(sticky = W)
        Entry(self.logf,textvariable = self.password,bd = 5,font = ('',15),show = '*').grid(row=1,column=1)
        Button(self.logf,text = ' Crear cuenta ',bd = 3 ,font = ('',15),padx=5,pady=5,command=self.crear).grid()
        Button(self.logf,text = ' Login ',bd = 3 ,font = ('',15),padx=5,pady=5,command=self.login).grid(row=2,column=1)
        self.logf.pack()

        #Datos para la ventana de crear usuarios
        self.crf = Frame(self.master,padx =10,pady = 10, bg='white')
        #Propiedades para el ingreso de datos
        Label(self.crf,text = 'Usuario Nuevo: ',font = ('',20),pady=5,padx=5, bg='white', fg='black').grid(sticky = W)
        Entry(self.crf,textvariable = self.usuarioNuevo,bd = 5,font = ('',15)).grid(row=0,column=1)
        Label(self.crf,text = 'Contraseña: ',font = ('',20),pady=5,padx=5, bg='white', fg='black').grid(sticky = W)
        Entry(self.crf,textvariable = self.nuevaPassword,bd = 5,font = ('',15),show = '*').grid(row=1,column=1)
        Button(self.crf,text = 'Crear cuenta',bd = 3 ,font = ('',15),padx=5,pady=5,command=self.nuevoUsuario).grid()
        Button(self.crf,text = 'Ir a Login',bd = 3 ,font = ('',15),padx=5,pady=5,command=self.log).grid(row=2,column=1)

#crear la ventana
root = Tk()
main(root)
root.resizable(width=False, height=False)
root.mainloop()
