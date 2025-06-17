# 🚀 Deploy da Aplicação Games Points

## URLs da Aplicação

**🌐 Aplicação Principal:** https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app

## 📡 API Endpoints Disponíveis

Sua aplicação agora tem uma API funcionando! Use os seguintes endpoints:

### 🏠 Salas (Rooms)

**Base URL da API:** `https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app/api`

#### Endpoints:

- **GET** `/api/rooms` - Listar todas as salas
- **GET** `/api/rooms/:id` - Buscar sala específica
- **POST** `/api/rooms` - Criar nova sala
- **PUT** `/api/rooms/:id` - Atualizar sala
- **DELETE** `/api/rooms/:id` - Deletar sala

#### Exemplos de uso:

```javascript
// Buscar todas as salas
fetch(
	'https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app/api/rooms'
)
	.then((response) => response.json())
	.then((data) => console.log(data));

// Buscar sala específica
fetch(
	'https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app/api/rooms/1'
)
	.then((response) => response.json())
	.then((data) => console.log(data));

// Criar nova sala
fetch(
	'https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app/api/rooms',
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			nome: 'Novo Jogo',
			nameRoom: 'Sala Nova',
			description: 'Descrição do jogo',
			imagem: 'URL_da_imagem',
			data: '2024-12-01',
			playersList: []
		})
	}
)
	.then((response) => response.json())
	.then((data) => console.log(data));
```

## 🔧 Como Atualizar

Para fazer novos deploys, execute:

```bash
vercel --prod
```

## 📝 Notas Importantes

1. ✅ **Frontend e API** estão rodando na mesma URL
2. ✅ **CORS configurado** - pode fazer requests de qualquer domínio
3. ✅ **Dados mock** incluídos na API
4. 🔄 **Dados não persistem** - é uma API mock para testes

## 🆔 Alternativas para Dados Persistentes

Se quiser dados que persistem, considere:

1. **Supabase** (gratuito)
2. **MongoDB Atlas** (gratuito)
3. **Firebase** (gratuito)
4. **PlanetScale** (MySQL gratuito)

## 📱 Testando a API

Você pode testar a API diretamente no browser ou usar ferramentas como:

- **Postman**
- **Insomnia**
- **curl**

Exemplo com curl:

```bash
curl https://games-points-front-fca3ayfr6-alwspidercs-projects.vercel.app/api/rooms
```
