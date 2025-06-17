# 🚀 Deploy do JSON Server - Guia Completo

## ✅ **Opção 1: My JSON Server (MAIS FÁCIL!)**

**Zero configuração! Sua API já está online:**

### 🌐 URLs da API

```
Base: https://my-json-server.typicode.com/alwspiderc/GamesPoints
Rooms: https://my-json-server.typicode.com/alwspiderc/GamesPoints/rooms
Room específica: https://my-json-server.typicode.com/alwspiderc/GamesPoints/rooms/1
```

### 📝 Como usar

```javascript
// Buscar todas as salas
fetch('https://my-json-server.typicode.com/alwspiderc/GamesPoints/rooms')
	.then((response) => response.json())
	.then((data) => console.log(data));

// Criar nova sala (simulado)
fetch('https://my-json-server.typicode.com/alwspiderc/GamesPoints/rooms', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
		nome: 'Novo Jogo',
		nameRoom: 'Nova Sala'
	})
})
	.then((response) => response.json())
	.then((data) => console.log(data));
```

**✅ Prós:** Gratuito, automático, funciona imediatamente
**❌ Contras:** Dados não persistem (é mock)

---

## 🚂 **Opção 2: Railway (JSON Server REAL)**

### Passo a passo

1. **Acesse:** <https://railway.app>
2. **Faça login** com GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Selecione:** `alwspiderc/GamesPoints`
5. **Settings** → **General** → **Start Command:**

   ```
   npm start
   ```

### 🌐 Sua API estará em

```
https://seu-projeto.railway.app/api/rooms
```

**✅ Prós:** JSON Server real, dados persistem durante sessão
**❌ Contras:** Precisa configurar

---

## 🔮 **Opção 3: Render (Alternativa)**

### Passo a passo

1. **Acesse:** <https://render.com>
2. **Login** com GitHub
3. **New** → **Web Service**
4. **Connect** seu repositório
5. **Configurações:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

**✅ Prós:** Simples, gratuito
**❌ Contras:** Pode hibernar após inatividade

---

## 🧪 **Testando sua API**

### No browser

```
https://my-json-server.typicode.com/alwspiderc/GamesPoints/rooms
```

### Com curl

```bash
curl https://my-json-server.typicode.com/alwspiderc/GamesPoints/rooms
```

### No seu React

```javascript
// Substitua localhost:3001 por:
const API_URL = 'https://my-json-server.typicode.com/alwspiderc/GamesPoints';

// Use assim:
fetch(`${API_URL}/rooms`)
	.then((response) => response.json())
	.then((data) => setRooms(data));
```

---

## 🔄 **Para atualizar os dados:**

1. **Edite** `src/mock/db.json`
2. **Commit e push:**

   ```bash
   git add .
   git commit -m "Atualizando dados"
   git push
   ```

3. **Aguarde 1-2 minutos** - API atualizada automaticamente!

---

## 🎯 **Recomendação:**

**Para começar rapidamente:** Use a **Opção 1** (My JSON Server)
**Para projeto real:** Use a **Opção 2** (Railway)

## 🌟 **Sua aplicação completa:**

- **Frontend (Vercel):** <https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app>
- **API (My JSON Server):** <https://my-json-server.typicode.com/alwspiderc/GamesPoints>

**🎉 Tudo funcionando online!**
