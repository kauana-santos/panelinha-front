# 🍳 Panelinha Mobile

O **Panelinha** é um aplicativo mobile desenvolvido com React Native e Expo, criado para facilitar o acesso a receitas culinárias. Com uma interface simples e intuitiva, o usuário pode visualizar uma lista de receitas e acessar seus detalhes, incluindo ingredientes e modo de preparo.

O aplicativo consome uma API desenvolvida em Java com Spring Boot, responsável por fornecer os dados das receitas.

##  Funcionalidades

-  **Tela inicial:** apresentação do aplicativo e acesso às receitas.
-  **Listagem de receitas:** exibição das receitas disponíveis, com imagem, título e descrição.
-  **Detalhes da receita:** visualização das informações completas de cada receita.
-  **Ingredientes:** listagem dos ingredientes necessários para o preparo.
-  **Modo de preparo:** apresentação das etapas para preparar cada receita.
-  **Estado de carregamento:** indicação enquanto os dados são buscados na API.
-  **Tratamento de erros:** exibição de uma tela de erro quando não é possível carregar as receitas.
-  **Página não encontrada:** tela personalizada para rotas inexistentes.

## 🛠️ Tecnologias utilizadas

- **React Native:** desenvolvimento da interface mobile.
- **Expo:** ambiente e ferramentas para desenvolvimento e execução do aplicativo.
- **TypeScript:** tipagem estática e organização do código.
- **Expo Router:** gerenciamento das rotas e navegação entre telas.
- **TanStack Query:** gerenciamento das consultas e dos estados de carregamento e erro.
- **Fetch API:** comunicação HTTP com o backend.
- **Java e Spring Boot:** tecnologias utilizadas na API que fornece os dados das receitas.

## Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm
- [Expo Go](https://expo.dev/go/) ou um emulador compatível
- O backend Panelinha executando e acessível pela rede

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a URL da API

Nas funções de consulta, configure o endereço do backend para que o aplicativo consiga acessar as receitas.

Arquivos envolvidos:

- `src/api/get-receitas.ts`
- `src/api/get-receita.ts`

Exemplo:

```typescript
const resposta = await fetch("http://SEU_IP:8080/receitas");
```

Na consulta de uma receita específica, utilize o mesmo endereço-base, incluindo o identificador da receita.

**Importante:** substitua `SEU_IP` pelo endereço IP local do computador que executa a API. Ao utilizar um dispositivo físico, não use `localhost`, pois ele apontaria para o próprio celular. O computador e o dispositivo devem estar na mesma rede, e a porta da API precisa estar acessível.

### 4. Inicie o aplicativo

```bash
npx expo start
```

Após iniciar o Expo:

- Escaneie o QR Code com o Expo Go, se compatível com o seu ambiente.
- Ou pressione a tecla indicada no terminal para executar o aplicativo em um emulador.

### 5. Inicie o backend

Certifique-se de que a API Java com Spring Boot esteja em execução e que os endpoints estejam respondendo corretamente.

Endpoints utilizados:

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/receitas` | Retorna a lista de receitas. |
| GET | `/receitas/{id}` | Retorna os detalhes de uma receita específica. |

## 🔄 Integração com a API

O aplicativo utiliza a Fetch API para realizar as requisições HTTP e o TanStack Query para gerenciar as consultas.

A listagem utiliza a função `searchRecipes()`, enquanto os detalhes de uma receita são consultados por meio da função `searchRecipe(id)`.

O identificador da receita é utilizado na navegação para abrir a tela de detalhes correspondente.

## Objetivo do projeto

O projeto tem como objetivo praticar o desenvolvimento de aplicações mobile com React Native, a criação de interfaces reutilizáveis, a navegação entre telas e a integração com uma API REST desenvolvida em Java.

Também busca aplicar boas práticas de organização do código e tratamento dos estados de carregamento e erro durante a comunicação com o backend.

Desenvolvido por **Kauana**
