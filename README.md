# ⚽ Champions League API

API RESTful criada em Node.js + TypeScript, usando:

- **Express** → Server HTTP  
- **json-server** → simulação de banco de dados (JSON)  
- **Swagger** → documentação da API

---

## 🔗 Endpoints

Todas as rotas abaixo são prefixadas por:  
`http://localhost:3000`

---

## 🟦 Teams

### GET /teams  
Retorna todos os times.

**Exemplo de resposta:**


```bash
[
{
"id": 1,
"name": "Real Madrid",
"country": "Spain"
},
...
]
```


### GET /teams/{id}  
Retorna um time pelo ID.

**Parâmetros:**  
`id` (path) → integer

---

### POST /teams  
Cria um novo time.

**Body JSON:**


```bash
{
"name": "Barcelona",
"country": "Spain"
}
```


---

### PUT /teams/{id}  
Atualiza um time pelo ID.

**Parâmetros:**  
`id` (path) → integer

**Body JSON:**


```bash
{
"name": "Barcelona",
"country": "Spain"
}
```



---

### DELETE /teams/{id}  
Deleta um time pelo ID.

**Parâmetros:**  
`id` (path) → integer

---

### GET /teams/country?country={country}  
Retorna times filtrados por país.

**Query Param:**  
`country` → string

---

## 🟥 Matches

### GET /matches  
Retorna todas as partidas.

---

### GET /matches/{id}  
Retorna detalhes de uma partida pelo ID.

**Parâmetros:**  
`id` (path) → integer

---

### POST /matches  
Cria uma nova partida.

**Body JSON:**


```bash
{
"homeTeamId": 1,
"awayTeamId": 2,
"date": "2025-05-15T20:00:00Z",
"stadium": "Santiago Bernabéu",
"score": "2-1"
}
```



---

### PUT /matches/{id}  
Atualiza uma partida pelo ID.

**Parâmetros:**  
`id` (path) → integer

**Body JSON:**


```bash
{
"homeTeamId": 1,
"awayTeamId": 2,
"date": "2025-06-01T20:00:00Z",
"stadium": "Etihad Stadium",
"score": "1-1"
}

```


---

### DELETE /matches/{id}  
Deleta uma partida pelo ID.

**Parâmetros:**  
`id` (path) → integer

---

### GET /matches/team/{teamId}  
Retorna partidas de um time específico.

**Parâmetros:**  
`teamId` (path) → integer

---

### GET /matches/country?country={country}  
Retorna partidas de times de um país específico.

**Query Param:**  
`country` → string

---

## 📑 Swagger

A documentação completa da API está disponível via Swagger UI:

```bash
http://localhost:3000/api-docs
```



---

## 💻 Rodando o Projeto

1. **Clonar o repositório**


```bash
git clone git@github.com:reinaldoper/champions-league-api.git
cd champions-league-api

```


2. **Instalar dependências**

```bash
npm install
```



3. **Rodar json-server (banco fake)**

```bash
npm run json-server
```


O json-server sobe na porta 5000.

4. **Rodar a API Express (porta 3000)**  
Em outro terminal:


```bash
npm run dev

#ou

npm run start #roda os dois servidores simultaneos

#ou

npm run build #gera o build da aplicação
```



- API → `http://localhost:3000`  
- Swagger → `http://localhost:3000/api-docs`

---

## 🗂 Estrutura de Pastas

```bash
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config
│   │   └── jsonServer.ts
│   ├── controllers
│   │   ├── matchController.ts
│   │   └── teamController.ts
│   ├── db.json
│   ├── docs
│   │   └── swagger.ts
│   ├── middlewares
│   │   └── errorHandler.ts
│   ├── routes
│   │   ├── matchRoutes.ts
│   │   └── teamRoutes.ts
│   ├── server.ts
│   ├── services
│   │   ├── matchService.ts
│   │   └── teamService.ts
│   └── types
│       ├── Match.ts
│       └── Team.ts
└── tsconfig.json
```


---

## 🔧 Scripts

| Script             | Descrição                      |
|--------------------|-------------------------------|
| `npm run dev`      | Roda API Express (ts-node-dev) |
| `npm run json-server` | Inicia o json-server na porta 5000 |

---

## 📝 Tecnologias

- Node.js  
- TypeScript  
- Express  
- Axios  
- json-server  
- Swagger (swagger-jsdoc / swagger-ui-express)

---

## 👨‍💻 Autor

Reinaldo Pereira
