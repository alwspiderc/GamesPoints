# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Como rodar este projeto

Siga o passo a passo abaixo, mesmo que você nunca tenha programado antes!

## 1. Instale o Node.js

- Acesse: [https://nodejs.org/](https://nodejs.org/)
- Baixe e instale a versão recomendada para o seu computador (Windows, Mac ou Linux).

## 2. Baixe o projeto

- Clique em "Code" (ou "Código") e depois em "Download ZIP" para baixar o projeto para o seu computador.
- Extraia o arquivo ZIP em uma pasta de sua preferência.

## 3. Abra a pasta do projeto

- No seu computador, abra a pasta onde você extraiu o projeto.

## 4. Abra o terminal (Prompt de Comando)

- **Windows:** Aperte a tecla `Windows`, digite "cmd" e pressione Enter.
- **Mac:** Abra o aplicativo "Terminal".
- **Linux:** Procure por "Terminal" no menu de aplicativos.

## 5. Instale as dependências

No terminal, digite o comando abaixo e pressione Enter:

```bash
npm install
```

Esse comando prepara o projeto para rodar no seu computador. Aguarde até terminar.

## 6. Rode o projeto

Ainda no terminal, digite:

```bash
npm run dev
```

- Aguarde alguns segundos.
- O terminal vai mostrar um endereço, geralmente algo como:  
  `http://localhost:5173`
- Copie esse endereço e cole no seu navegador (Chrome, Firefox, etc).

## 7. Rode a API fake (json-server)

Este projeto utiliza o [json-server](https://github.com/typicode/json-server) para simular uma API REST localmente.

No terminal, em uma nova aba ou janela, execute:

```bash
npx json-server --watch src/mock/db.json --port 3001
```

- Isso irá iniciar a API fake na porta 3001.
- O frontend já está configurado para consumir os dados desse endereço.
- Sempre que quiser testar o sistema, mantenha o json-server rodando junto com o projeto.

Se preferir instalar globalmente:

```bash
npm install -g json-server
```

E depois rode o comando acima normalmente.

---

**Dica:**  
Se tiver qualquer dúvida, peça ajuda para alguém que já tenha experiência com programação ou entre em contato com o responsável pelo projeto.
