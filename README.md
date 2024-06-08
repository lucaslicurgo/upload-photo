# App de Upload de Fotos
## Guia de Utilização
### Configuração do Banco de Dados
- Importe o esquema do banco de dados PostgreSQL do arquivo backend/src/db/dump.sql.
### Instalação e Configuração
#### Backend
1. Navegue até a pasta backend:
```bash
cd backend
```
2. Instale as dependências necessárias:
```bash
npm install
```
3. Crie um arquivo .env na raiz da pasta backend e siga o exemplo do arquivo .env_exp, adicionando as credenciais do seu banco de dados:
```
DB_HOST=Host_do_seu_banco_de_dados
DB_PORT=Porta_do_banco_de_dados
DB_USER=Usuario_do_banco_de_dados
DB_PASS=Senha_do_banco_de_dados
DB_DATABASE=Nome_do_banco_de_dados
```
#### Frontend
1. Navegue até a pasta frontend:
```bash
cd ..
cd frontend
```
2. Instale todas as dependências necessárias:
```bash
npm install
```
### Inicialização
#### Backend
1. Inicie o servidor backend:
```bash
npm run dev
```
#### Frontend
1. Inicie o projeto na pasta frontend:
```bash
npm start
```
### Utilização
Agora o aplicativo está pronto para uso.
