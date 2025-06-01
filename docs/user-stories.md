# Histórias de Usuário

## 1. Gerenciar salas e jogadores de boardgames

**Como** um(a) organizador(a) de jogos de tabuleiro,
**Quero** criar salas, adicionar jogadores e controlar a pontuação de cada um,
**Para que** eu possa acompanhar facilmente o andamento das partidas e manter o registro dos resultados.

### Critérios de Aceitação

- Devo conseguir criar uma nova sala informando nome, descrição, data e imagem.
- Devo visualizar uma lista de todas as salas criadas, podendo pesquisar pelo nome da sala.
- Ao acessar uma sala, devo ver a lista de jogadores participantes e suas pontuações.
- Devo conseguir adicionar novos jogadores à sala, informando nome, descrição e imagem.
- Devo poder aumentar ou diminuir a pontuação de cada jogador individualmente.
- Devo conseguir excluir uma sala, com confirmação antes da exclusão.
- O sistema deve ser fácil de usar, responsivo e acessível em diferentes dispositivos.
- As imagens dos jogadores e das salas podem ser escolhidas ou geradas aleatoriamente.

### Observações Técnicas

- O sistema deve funcionar com uma API fake (json-server) para simular o backend.
- O frontend deve ser desenvolvido em React, utilizando React-Bootstrap para o layout e componentes visuais.
