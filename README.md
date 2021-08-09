# Manutençao de banco de dados &#128295;
  
  ## Descrição
  
  &nbsp;O código aqui disposto teve como objetivo eliminar espaços múltiplos de algumas células de uma tabela minha, pois estes estavam gerando bugs em funções que se relacionavam com o conteúdo do banco de dados.

  ## Intruções para instalação
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
   ## Tecnologias utilizadas:
<img align="left" alt="python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img align="left" alt="mysql" src="https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white" />
