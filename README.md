# API Connect

API REST desenvolvida para o gerenciamento de usuários de uma startup fictícia, construída como um MVP (Produto Mínimo Viável) para validar a arquitetura de back-end antes da adoção de um banco de dados definitivo.

## Objetivo

A API Connect tem como propósito oferecer um conjunto completo de operações CRUD (Create, Read, Update, Delete) para o recurso "usuário", servindo como base para que aplicações front-end possam listar, cadastrar, consultar, atualizar e remover perfis de usuários por meio de requisições HTTP padronizadas, com respostas em formato JSON.

## Tecnologias utilizadas

- Node.js
- Express (framework web)
- Nodemon (reinício automático em ambiente de desenvolvimento)

## Estrutura do projeto
api-connect/
├── server.js
├── package.json
├── .gitignore
├── routes/
│ └── userRoutes.js
├── controllers/
│ └── userController.js
└── data/
└── users.js

- `server.js`: ponto de entrada da aplicação, responsável por instanciar o Express e registrar os middlewares e rotas.
- `routes/`: define o mapeamento entre método HTTP + endpoint e a função do controller correspondente.
- `controllers/`: contém a lógica de negócio de cada operação (validação, busca, criação, atualização e remoção).
- `data/`: simula a camada de persistência por meio de um array em memória.

## Como executar o projeto localmente

Pré-requisito: ter o [Node.js](https://nodejs.org) instalado (versão LTS recomendada).

1. Clone o repositório:
```bash
git clone https://github.com/JamPassos/api-connect-jamile.git
cd api-connect-jamile
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
node server.js
```

Ou, em modo de desenvolvimento:
```bash
npx nodemon server.js
```

4. O servidor estará disponível em `http://localhost:3000`.

## Referência de endpoints

| Método | Endpoint     | Descrição                          | Corpo da requisição (exemplo)                                | Respostas possíveis |
|--------|--------------|-------------------------------------|------------------------------------------------------------------|----------------------|
| GET    | `/users`     | Lista todos os usuários cadastrados | —                                                                  | `200 OK`             |
| GET    | `/users/:id` | Busca um usuário específico por ID  | —                                                                  | `200 OK` / `404 Not Found` |
| POST   | `/users`     | Cadastra um novo usuário            | `{ "nome": "Ana Souza", "email": "ana@email.com" }`               | `201 Created` / `400 Bad Request` |
| PUT    | `/users/:id` | Atualiza um usuário existente       | `{ "nome": "Ana S. Silva", "email": "ana.silva@email.com" }`      | `200 OK` / `400 Bad Request` / `404 Not Found` |
| DELETE | `/users/:id` | Remove um usuário existente         | —                                                                  | `204 No Content` / `404 Not Found` |

### Exemplo de resposta de sucesso (POST)

```json
{
  "data": {
    "id": 3,
    "nome": "Ana Souza",
    "email": "ana@email.com"
  }
}
```

### Exemplo de resposta de erro (validação)

```json
{
  "error": "O campo \"email\" é obrigatório e deve ser um e-mail válido."
}
```

### Exemplo de resposta de erro (recurso não encontrado)

```json
{
  "erro": "Usuário não encontrado."
}
```

## Observações sobre persistência

Os dados são armazenados em um array em memória (`data/users.js`), portanto são reiniciados sempre que o servidor é reiniciado. Essa abordagem é intencional para o escopo de um MVP e deve ser substituída por um banco de dados real em uma versão de produção.

## Autor
Jamile Passos