# Movies API (Node.js/Express)

API construída com Node.js + Typescript e Express para gerenciar informações de filmes. As funcionalidades incluem:

* Criação de novos filmes.
* Listagem de todos os filmes.
* Listagem de filmes ordenados por ano de lançamento.
* Paginação para lidar com grandes volumes de dados.

Este projeto é a minha solução para o [Desafio Back-End Jr. dos Mestres da Web](http://github.com/Mestres-da-Web/desafio-backend-jr), criado com o intuito de aprendizado e demonstração de habilidades.

## Instalação

Para executar este projeto localmente, você precisará ter algumas ferramentas instaladas em sua máquina.

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados antes de prosseguir:

* **Node.js:** (Versão 20 ou superior recomendada) - Você pode baixar e instalar a versão mais recente ou a LTS (Long Term Support) do site oficial do [Node.js](https://nodejs.org/). Para verificar se o Node.js está instalado, abra seu terminal ou prompt de comando e execute:
    ```bash
    node -v
    ```
* **npm** (Node Package Manager) ou **yarn:** (Versão mais recente recomendada) - O npm é instalado automaticamente com o Node.js. O yarn é um gerenciador de pacotes alternativo que pode ser instalado globalmente através do npm:
    ```bash
    npm install -g yarn
    ```
    Para verificar se o npm ou yarn estão instalados, execute:
    ```bash
    npm -v
    # ou
    yarn --version
    ```

* **Typescript** (Versão 5.0 ou superior recomendada) - Você pode instalar o TypeScript globalmente usando o npm (Node Package Manager) ou yarn. A instalação global permite usar o compilador `tsc` em qualquer lugar do seu sistema.



    **Instalação global do TypeScript (recomendado):**
    ```bash
    npm install -g typescript
    # ou
    yarn global add typescript
    ```

    Após a instalação, você pode verificar a versão do TypeScript instalada executando:
    ```bash
    tsc -v
    ```

* **PostgreSQL:** (Versão 12 ou superior recomendada) - Este projeto utiliza o PostgreSQL como banco de dados. Você precisará ter o PostgreSQL instalado e em execução. Você pode baixá-lo e instalá-lo seguindo as instruções do site oficial do [PostgreSQL](https://www.postgresql.org/). Certifique-se de ter as credenciais de acesso (usuário, senha, host, porta e nome do banco de dados) configuradas.



Após garantir que os pré-requisitos estejam atendidos, siga estes passos para instalar e executar o projeto:

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd [NOME_DO_REPOSITORIO]
    ```
    *(Substitua `[URL_DO_REPOSITORIO]` pela URL do repositório Git e `[NOME_DO_REPOSITORIO]` pelo nome da pasta do projeto).*

2.  **Instale as dependências:**

    ```bash
    yarn install
    ```

    Este comando irá baixar e instalar todas as bibliotecas e dependências listadas no arquivo `package.json` do projeto.

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do seu projeto seguindo o `.env.example` e configure as variáveis de ambiente necessárias, especialmente as informações de conexão com o banco de dados PostgreSQL e. Exemplo:
    ```env
    USER_POSTGRES_NAME = nome do usuario postgresql

    USER_POSTGRES_PASSWORD = senha do usuario postgresql

    USER_POSTGRES_HOST = host do banco

    USER_POSTGRES_PORT = porta onde está rodando

    USER_POSTGRES_DATABASE = nome do banco

    JWT_SECRET = md5 hash
    ```
    *Certifique-se de substituir os valores de exemplo pelas suas configurações reais do PostgreSQL e Hash.*

    ## Como Gerar o Hash MD5

**Passos para gerar o hash MD5:**

1.  **Acesse o site:** Abra seu navegador e vá para [https://www.md5hashgenerator.com/](https://www.md5hashgenerator.com/).
2.  **Insira o texto:** Na caixa de texto disponível no site, digite a string para a qual você deseja gerar o hash MD5.
3.  **Visualize o hash:** O hash MD5 será gerado e exibido automaticamente abaixo da caixa de texto assim que você começar a digitar. Copie esse hash para utilizá-lo na configuração.

**Observação:** O MD5 é uma função de hash criptográfica amplamente utilizada que produz um valor de hash de 128 bits. Embora ainda seja útil para algumas verificações de integridade e assinaturas simples, é importante estar ciente de suas limitações em termos de segurança para aplicações mais críticas.

4. **Criar a Pasta de Uploads**

Para que a aplicação possa lidar com o upload de arquivos (como imagens, documentos, etc.), você precisará criar uma pasta chamada `uploads` na raiz do seu projeto.

5. ### Criação do Banco de Dados e Tabelas

**Passo 1: Criar o Banco de Dados**

1.  **Abra o cliente PostgreSQL:** Inicie o `psql` no seu terminal ou conecte-se ao seu servidor PostgreSQL utilizando o pgAdmin ou outra ferramenta de sua preferência.

2.  **Execute o comando para criar o banco de dados:** Substitua `nome_do_banco_de_dados` pelo nome que você deseja dar ao banco de dados do projeto (por exemplo, `movies_api`).

    ```sql
    CREATE DATABASE nome_do_banco_de_dados;
    ```

3.  **Conecte-se ao banco de dados criado:** Após a criação, conecte-se ao banco de dados que você acabou de criar:

    ```sql
    \c nome_do_banco_de_dados
    ```
    (No `psql`)

    Se estiver usando uma ferramenta gráfica, selecione o banco de dados na lista e clique para conectar.

**Passo 2: Criar as Tabelas**

As tabelas necessárias para a aplicação serão criadas executando os seguintes comandos SQL. Você pode executar esses comandos diretamente no seu cliente PostgreSQL conectado ao banco de dados (`nome_do_banco_de_dados`).

**Tabela `movies`:**

```sql
CREATE TABLE movies (
  ID  SERIAL PRIMARY KEY,
  movieName VARCHAR(50) NOT NULL,
  sinopse VARCHAR(500) NOT NULL,
  banner VARCHAR(100) NOT NULL,
  releasedate DATE NOT NULL
  );
```

**Tabela `users`:**

```sql
CREATE TABLE users (
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    userpassword VARCHAR(255) NOT NULL,
);
```



6.  **Inicie o servidor:**
    Para iniciar a API, execute o seguinte comando no seu terminal:
    ```bash
    yarn start
    ```
    Este comando geralmente inicia o servidor Node.js. Uma vez iniciado com sucesso, a API estará rodando localmente na porta `3000`.

    Você pode acessar a documentação da API, gerada pelo Swagger, através do seguinte endpoint no seu navegador:

    ```
    http://localhost:3000/docs
    ```

Após seguir estes passos, sua API de filmes deverá estar rodando localmente na porta 3000 e a documentação da API estará acessível em `/docs`. Consulte a documentação para obter informações detalhadas sobre os endpoints disponíveis e como interagir com eles.

![Documentação](./Screenshot%20from%202025-05-10%2016-18-39.png)

![Endpoints](./Screenshot%20from%202025-05-10%2016-19-44.png)
