# Casos de Uso

## Casos de Uso Funcionais

1. **Criar Sala**

   - O usuário pode criar uma nova sala informando nome, descrição, data e imagem.
   - O sistema valida os campos obrigatórios e exibe feedback visual.

2. **Listar Salas**

   - O usuário pode visualizar todas as salas cadastradas em formato de cards responsivos.

3. **Pesquisar Sala**

   - O usuário pode pesquisar salas pelo nome, descrição ou subtítulo.

4. **Editar Sala**

   - O usuário pode editar as informações de uma sala existente.

5. **Excluir Sala**

   - O usuário pode excluir uma sala, com confirmação antes da exclusão.

6. **Visualizar Jogadores da Sala**

   - O usuário pode acessar uma sala e ver a lista de jogadores participantes e suas pontuações.

7. **Adicionar Jogador**

   - O usuário pode adicionar um novo jogador à sala, informando nome, descrição e imagem.

8. **Alterar Pontuação**

   - O usuário pode aumentar ou diminuir a pontuação de cada jogador individualmente.

9. **Excluir Jogador**
   - O usuário pode remover um jogador da sala (se implementado).

---

## Casos de Uso Não Funcionais

1. **Usabilidade**

   - O sistema deve ser fácil de usar, com interface intuitiva e feedback visual claro.

2. **Responsividade**

   - O sistema deve funcionar corretamente em diferentes tamanhos de tela (desktop, tablet, celular).

3. **Acessibilidade**

   - O sistema deve ser acessível para pessoas com deficiência, utilizando boas práticas de acessibilidade (ex: labels, contraste, navegação por teclado).

4. **Performance**

   - O carregamento das salas e jogadores deve ser rápido, mesmo com muitos registros.

5. **Confiabilidade**

   - As operações de criação, edição e exclusão devem ser confiáveis, com mensagens de erro claras em caso de falha.

6. **Compatibilidade**

   - O sistema deve funcionar nos principais navegadores modernos (Chrome, Firefox, Edge, Safari).

7. **Documentação**

   - O projeto deve conter documentação clara de instalação, uso e contribuição.

8. **Simulação de Backend**
   - O sistema deve funcionar com uma API fake (json-server), permitindo testes sem necessidade de backend real.
