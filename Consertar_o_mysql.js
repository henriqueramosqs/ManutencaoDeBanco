const mysql = require('mysql')

var db  = mysql.createPool({
    connectionLimit : 10,
    host            : '<host>',
    user            : '<user>',
    password        : '<password>',
    database        : '<database>'
  });

  var first =[0,0,0,0,0]
  var second =[0,0,0,0,0]
  var third=[0,0,0,0,0]
  var fourth = [0,0,0,0,0]
  var letras =["A","B","C","D","E"]

  db.query("SELECT * FROM questoes WHERE alternativas=5", (err, result)=>{
        
      if(err){
        throw err
      }

      console.log("Quantidade total de questões: " + result.length)
      for(var i = 0; i<result.length; i++){
        
          for(var j = 0; j<5; j++){
            if(result[i].enunciado.indexOf(letras[j] +"( )") != -1){
              first[j]+=1             
            } else if(result[i].enunciado.indexOf(letras[j] +" ( )") != -1){
              second[j]+=1             
            } else if(result[i].enunciado.indexOf(letras[j] +"()") != -1){
              third[j]+=1             
            } else if(result[i].enunciado.indexOf(letras[j] +" ()") != -1){
              fourth[j]+=1             
            }else{
              console.log("Nenhum dos casos:" + result[i].id +" letra" + letras[j])
            }
          }
        
      }
        
      console.log("    x( ) x ( )  x()  x () \n")
      for(var j = 0; j<5; j++){ 
        console.log("%s   %d    %d    %d    %d \n ", letras[j], first[j], second[j], third[j], fourth[j])
      }


    })

  /*

    x( ) x ( )  x()  x () 

A   24    244    2    3 

B   28    234    3    2

C   22    244    4    2

D   19    247    4    1

E   18    253    3    0


    x( ) x ( )  x()  x ()

A   0    263    0    0

B   0    261    0    0

C   0    263    0    0

D   0    263    0    0

E   0    264    0    0

  
  */
