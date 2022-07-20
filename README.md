<div align="center">
  <h1>Coffee Delivery API</h1>
</div>

Esta API tem como objetivo gerenciar os pedidos de uma cafeteria

## 👀 Requisitos

- [x] Deve ser capaz de listar Categorias
- [x] Deve ser capaz de cadastrar uma Categoria
- [x] Deve ser capaz de cadastrar um Café
- [x] Deve ser capaz de listar Cafés
- [] Deve ser capaz de adicionar uma imagem de um Café
- [x] Deve ser capaz de cadastrar um Pedido
- [x] Deve ser capaz de listar Pedidos
- [x] Deve ser capaz de visualizar detalhes de um Pedido
- [x] Deve ser capaz de editar o status de um Pedido
- [x] Deve ser capaz de criar uma nova Conta
- [x] Deve ser capaz de autenticar uma Conta

## ⚙ Regras de negócio

- [x] Não deve ser possível acessar rotas protegidas sem passar um token válido de autenticação
- [x] Não deve ser possível cadastrar uma Categoria com o mesmo
- [x] Não deve ser possível cadastrar um Café sem estar autenticado
- [x] Não deve ser possível cadastrar um Café sem Categorias
- [x] Não deve ser possível editar o status de um Pedido inexistente
- [x] Não deve ser possível editar o status de um Pedido finalizado ou cancelado
- [x] Não deve ser possível visualizar um Pedido inexistente
- [x] Não deve ser possível criar uma Conta com o mesmo e-mail
- [x] Não deve ser possível fazer login com um e-mail não cadastrado
- [x] Não deve ser possível fazer login com uma senha incorreta

## 🛠 Como iniciar

1. Caso não possua um banco de dados instalado, inicie um container:

```
docker-compose up
```

2. Instale as dependências:

```sh
yarn install
```

3. Configure as variáveis de ambiente:

```env
STORAGE_DISK="local"
PORT=3333
DATABASE_URL=
JWT_SECRET=
APP_URL=
```

4. Inicie a aplicação:

```
yarn dev
```
