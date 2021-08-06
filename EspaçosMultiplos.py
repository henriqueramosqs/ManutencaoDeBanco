import mysql.connector

mydb = mysql.connector.connect(
    host= 'sql131.main-hosting.eu',
    user='u659347430_henrique3107',
    password='Megareaper3107!',
    database='u659347430_questoes'
)

registrosCorrigidos = 0

mycursor = mydb.cursor(buffered=True)

mycursor.execute("SELECT * FROM  questoes")

myresult = mycursor.fetchall()

for x in myresult:
    string =x[5]
    id=x[0]
    newString=""
    caracterAnteriorÉEspaço = False
    houveAlteração = False

    for x in range(len(string)):

        if string[x] != " ":
            newString += string[x]
            caracterAnteriorÉEspaço = False
            if string[x] == "\\":
                newString +=string[x]
        else:
            if caracterAnteriorÉEspaço == False:
                newString += string[x]
                caracterAnteriorÉEspaço = True
            else:
                caracterAnteriorÉEspaço = True
                houveAlteração =True

    if (houveAlteração == False):
        print("Registro correto: " + id)

    if (houveAlteração == True):
        registrosCorrigidos+=1
        
        print("Registro corrigido: " + id)

        sql = "UPDATE questoes SET enunciado  ='"+ newString + "' WHERE id ='" + id + "'"

        mycursor.execute(sql)

mydb.commit()        
print("Registros Corrigidos totais:", registrosCorrigidos)
