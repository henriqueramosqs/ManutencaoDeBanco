const mysql = require('mysql')

var db  = mysql.createPool({
    connectionLimit : 10,
    host            : 'sql131.main-hosting.eu',
    user            : 'u659347430_henrique3107',
    password        : 'Megareaper3107!',
    database        : 'u659347430_questoes'
  });


  var letras =["A","B","C","D","E"]
  var contagemDeAlterações = 0

  db.query("SELECT * FROM questoes WHERE alternativas=5", (err, result)=>{

      if(err){
        throw err
      }

      console.log("Executando pesquisa...\n")
      for(i=0; i<result.length;i++){
          id = result[i].id
          string = result[i].enunciado
          newString = string
          houveAlterção = false

          for(j=0; j<5;j++){

            if(result[i].enunciado.indexOf(letras[j] +"( )") != -1){
                newString = newString.replace(letras[j] +"( )",letras[j] +" ( )" )
                houveAlterção = true            
              } 
            else if(result[i].enunciado.indexOf(letras[j] +"()") != -1){
                newString = newString.replace(letras[j] +"()",letras[j] +" ( )" )
                houveAlterção = true            
              } 
            else if(result[i].enunciado.indexOf(letras[j] +" ()") != -1){
                newString = newString.replace(letras[j] +" ()",letras[j] +" ( )" )
                houveAlterção= true
             }       
      }

      if(houveAlterção ==true){
          db.query("UPDATE questoes SET enunciado  ='"+ newString + "' WHERE id ='" + id + "'",(err)=>{
              if(err){
                  console.log("Jouve erro" + err + " " + id)
              }else{
                  console.log("Alteração feita em: " + id )
              }
          })
          contagemDeAlterações ++;
          
      }else{
          console.log("Houve não" + id)
      }
      
    }
        console.log("\n"+"Foram feitas " + contagemDeAlterações + " alterações")
})
