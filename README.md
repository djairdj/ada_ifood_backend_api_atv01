### Requisitos para executar a aplicação

___
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

- Comece as instalações das dependências

```bash
  npm init -y
```

```bash
  npm i -D typescript
```

Inicialize o Typescript:

```bash
  tsc --init
```

Provavelmente já estarás vendo o arquivo `tsconfig.json` na raiz do projeto, você poderá subtituir todas as linhas de dentro dele pelas correspondentes abaixo:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "rootDir": "./src/",
    "sourceMap": true,
    "outDir": "./dist/",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

```bash
  npm install axios fs.promises express ts-node @types/node @types/express readline uuid
```

```bash
  npm install --save-dev nodemon
```
