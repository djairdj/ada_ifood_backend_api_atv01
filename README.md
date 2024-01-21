# Requisitos para executar a aplicação

Nesse projeto será usado TypeScript, então para executar a aplicação, será necessário um ambiente de execução JavaScript que suporta a transpilação de TypeScript, como exemplo:

- [NodeJs](https://nodejs.org/en/download)

Instale o `Node.js` na versão 18 ou superior de acordo com seu Sistema Operacional.

- Para Windows e Mac, instale o arquivo executável correspondente localizado no site do [NodeJs](https://nodejs.org/en/download).

- Para Linux entre no terminal e utilize o comando:

  ```bash
    sudo apt install nodejs
  ```

- Assegure-se que a instalação foi bem sucedida no seu sistema utilizando o seguinte comando em seu terminal:

  ```bash
    node -v
  ```

  Se estiver usando a branch de conexão com banco de dados, certifique-se de ajustar as permissões no arquivo [Connections.ts](src/base/Connection.ts)

- Para Fins de execução, execute os seguintes comandos:

```bash
  npm install
```

```bash
  ts-node src/index.ts
```

- Ou, para manutenção em desenvolvimento, utilize o:

```bash
  npm run dev
```
