# Manutençao de banco de dados &#128295;
  <ol>
  1. <a href="#el">Eliminação de espaços múltiplos</a> <br>
  2. <a href="#padr">Padronização do banco</a>
  </ol>
    
  <h2 id="el"> Eliminação de espaços múltiplos </h2>
  
  ### Descrição
  
  &nbsp;O código aqui disposto teve como objetivo eliminar espaços múltiplos de algumas células de uma tabela minha, pois estes estavam gerando bugs em funções que se relacionavam com o conteúdo do banco de dados.

  ### Intruções para instalação
  &nbsp; Primeramente, se direcione para o diretório de sua máquina onde deseja ter a aplicação e digite no terminal:
   
  ```
   git clone https://github.com/henriqueramosqs/ManutencaoDeBanco
   ```
   
  &nbsp;Um arquivo com o nome de ManutencaoDeBanco será clonado para a raíz do diretório escolhido. Dentro desse arquivo, altere as os comandos que acessam elementos das tuplas,do tipo x[i], para que as variáveis id e string assumam os valores da primary_key de sua tabela e 
  das colunas em que deseja fazer as alterações.
  
   &nbsp; <b>aaaah!</b> Não posso me esquecer de dizer: mesmo o comando commit() aceitando rollback(), fazer o backup da sua database não é lá uma má ideia.
   
   &nbsp;Agora, é só ir para  o diretório .../<nome do diretório escolhido>/ManutencaoDeBanco e e digitar no prompt:
   ```
   py EspaçosMultiplos.py
   ```
   ### Tecnologias utilizadas:
<img align="left" alt="python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img align="left" alt="mysql" src="https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white" />

<br><h2 id="padr"> Padronização do Banco de Questões </h2>
  
  ### Descrição
  
  &nbsp; Uma tabela do meu banco de dados armazena inúmeras questões de vestibular para o meu site <a href="tteste.com">T Teste</a>. Porém, após o tratamento das questões, que converte os formatos em .txt com trechos de TeX, as alternativas por vezes aparecem escritas de forma diferente. Por exemplo, a opção "a" às vezes aparecia como "A ()", outras como "A()", outras como "A ( )", e como efeito disso, no trecho do meu código que extraia os enunciados, eu tinha que incluir mais intruções para lidar com cada uma dessas situações.
  &nbsp; O primeiro passo para endereçar esse problema foi fazer uma consulta para saber qual forma de escrever seria transformada no padrão.(o código para isso pode ser visto <a href="https://github.com/henriqueramosqs/ManutencaoDeBanco/blob/main/Consertar_o_mysql.js">aqui</a>. O resultado foi:
```
    x( ) x ( )  x()  x () 
A   24    244    2    3 
B   28    234    3    2
C   22    244    4    2
D   19    247    4    1
E   18    253    3    0
```
&nbsp; Então, foi escolhido o padrão "x ( )". Executado o código de alteração (arquivo PadronizaçãoDoBanco.js deste repositório), o resultado da consulta foi:
```
   x( ) x ( )  x()  x () 
A   0    263    0    0   
B   0    261    0    0   
C   0    263    0    0   
D   0    263    0    0   
E   0    264    0    0   
````
&nbsp; Asssim como o esperado
 
   ### Tecnologias utilizadas:
<img align="left" alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img align="left" alt="mysql" src="https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white" />

