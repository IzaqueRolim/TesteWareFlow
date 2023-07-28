
## Sobre o projeto

> Um software de armazenamento e compatilhamento de arquivos, desenvolvido em ReactJs(front-end) e Spring boot(back-end).


## Funcionalidades

>- Login
>- Cadastro
>- Criação, edição e exclusão de pastas
>- Upload e dowload de arquivos
>- Compartilhamento de uma pasta com outro usuario

## Screenshots

<!-- Define o tamanho das imagens como 300px de largura -->
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/1.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/2.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/3.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/4.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/5.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/6.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/7.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/8.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/9.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/10.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/11.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/12.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/13.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/14.jpeg?raw=true" width="300">
<img src="https://github.com/IzaqueRolim/TesteWareFlow/blob/main/Screenshots/15.jpeg?raw=true" width="300">


##  Meus Aprendizados

>  - **Arquitetura e Estrutura do Projeto**: Aprendi sobre organização de projetos em pacotes, classes e módulos. Apliquei a arquitetura MVC no Spring: controllers, services,repositories, models, dto, etc.

> - **Configuração do Spring Boot**: Aprendi a configurar o Spring Boot e suas dependências usando arquivos de propriedades, classes de configuração e anotações.

> - **Mapeamento de Requisições**: Aprendi a mapear as requisições HTTP para os controllers trabalharem com diferentes métodos HTTP (GET, POST, PUT, DELETE, etc.).

> - **Persistência de Dados**: Aprendi a utilizar o Spring Data JPA (Repository) para interagir com o banco de dados e como realizar operações de CRUD.

> - **Gerenciamento de Dependências**: Aprendi como o Maven ou o Gradle são usados para gerenciar as dependências do projeto e garantir que as bibliotecas necessárias estejam disponíveis.


## Documentação da API

 EndPoints

| Metodo       |URL                |Descricao                          |
| :----------|:---                 |:---------------------------------- |
| POST       | /usuario/login      |Retorna os dados do usuario quando informado o login e a senha |
| POST       | /usuario/registro   |Cria um usuário |
| POST       | /pasta/{id}         |Cria uma pasta |
| POST       | /arquivo/upload/{id}|Faz o upload do arquivo para a pasta |
| GET        | /arquivo/download/  |Faz o download do arquivo |
| GET        | /usuario/{id}       |Procura o usuario pelo id |
| GET        | /pasta/{id}         |Procura uma pasta pelo id |
| PUT        | /pasta/{id}         |Edita o nome de uma pasta |
| PUT        | /pasta/{id}         |Compartilha a pasta com outro usuário |
| DELETE     | /pasta              |Deleta uma pasta |


Body

<details>
  <summary>Login</summary>

  - Entrada
      - ```http
        GET /api/items/${id}
        ```
  - Saida
      - ```http
        GET /api/items/${id}
        ```
</details>


<details>
<summary>Registro</summary>

- Entrada
     ```http
      {
        "nomeUsuario":"Usuario 1",
        "email":"usuario1@gmail.com",
        "senha":"12345",
      }
- Saida
     ```http
      {
        "id_usuario": "982e731a-59a4-41a4-9021-1233a5d11d72",
        "nomeUsuario": "Usuario 1",
        "email": "usuario1@gmail.com",
        "senha": "7110eda4d09e062aa5e4a390b0a572ac0d2c0220",
        "pastas": []
      }
</details>

<details>
<summary>Criar Pasta</summary>

- Entrada
    - ```http
      {
        "nomePasta":"Pasta 1"
      }
- Saida
    - ```http
      {
        "id": "f0389abd-562b-4db5-a740-cfb67f4912af",
        "nomePasta": "Pasta 1",
        "data_criacao": "2023-07-26",
        "rota_compartilhamento": "9hipgdd2",
        "arquivos":[],
        "usuarios": [
          {
            "id_usuario": "982e731a-59a4-41a4-9021-1233a5d11d72",
            "nomeUsuario": "Raquel",
            "email": "raquel@gmail.com",
            "senha": "7110eda4d09e062aa5e4a390b0a572ac0d2c0220",
            "pastas": [
              {
                "id_pasta": "f0389abd-562b-4db5-a740-cfb67f4912af",
                "nomePasta": "Pasta do Izaque",
                "data_criacao": "2023-07-26",
                "rota_compartilhamento": "9hipgdd2",
                "arquivos": []
              }]  
          }]
      }
</details>

<details>
<summary>Editar nome da Pasta</summary>

- Entrada
    - ```http
      GET /api/items/${id}
      ```
- Saida
    - ```http
      GET /api/items/${id}
      ```
</details>

<details>
<summary>Adicionar Usuario na Pasta</summary>

- Entrada
    - ```http
      GET /api/items/${id}
      ```
- Saida
    - ```http
      GET /api/items/${id}
      ```
</details>

