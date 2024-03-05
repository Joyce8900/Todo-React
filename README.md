# Aplicativo de Lista de Tarefas em React

Este é um simples aplicativo de lista de tarefas em React onde os usuários podem criar, editar e excluir tarefas.

## Como Começar

Para começar com este projeto, siga estes passos:

1. Clone este repositório para a sua máquina local.
2. Instale as dependências necessárias executando `npm install`.
3. Inicie o servidor de desenvolvimento executando `npm start`.

## Funcionalidades

- Criar novas tarefas fornecendo um título e tempo estimado.
- Marcar tarefas como completadas.
- Excluir tarefas quando não forem mais necessárias.

## Tecnologias Utilizadas

- React
- React Icons
- Fetch API
- CSS

## Uso

1. Insira o título da tarefa e o tempo estimado nos campos de entrada.
2. Clique no botão "Criar Tarefa" para criar a tarefa.
3. Para marcar uma tarefa como concluída, clique no ícone de marcador ao lado dela.
4. Para excluir uma tarefa, clique no ícone de lixeira ao lado dela.

## API

Este aplicativo se comunica com uma API RESTful para realizar operações CRUD nas tarefas. Os endpoints da API são os seguintes:

- `GET /todos`: Obter todas as tarefas.
- `POST /todos`: Criar uma nova tarefa.
- `PUT /todos/:id`: Atualizar uma tarefa (marcar como concluída).
- `DELETE /todos/:id`: Excluir uma tarefa.


## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
