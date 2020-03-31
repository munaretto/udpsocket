# udpsocket

Este projeto tem como objetivo exemplificar o envio de mensagens em uma aplicação cliente-servidor utilizando sockets e o protocolo UDP.

## Como utilizar (Linux)

1. Clone o repositório com o comando ```git@github.com:munaretto/udpsocket.git``` para SSH, ou ```https://github.com/munaretto/udpsocket.git``` para HTTPS
2. Abra a pasta do projeto digitando ```cd udpsocket```
3. Instale as dependências do projeto com o comando ```npm install```
4. Abra duas instâncias do terminal: na primeira, suba o servidor com o comando ```node build/index.js```, e na segunda, suba o cliente com o comando ```node build/client/udpClient.js```
5. O resultado da troca de mensagem entre cliente e servidor deverá aparecer em suas respectivas instâncias do terminal.


## Possíveis problemas

### Problemas ao encontrar o caminho do arquivo
```
{
buffer.js:327
  throw new ERR_INVALID_ARG_TYPE(
  ^

TypeError [ERR_INVALID_ARG_TYPE]: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined
    at Function.from (buffer.js:327:9)
    at ReadFileContext.callback (/home/<path-to-repo-folder>/udpsocket/build/client/udpClient.js:22:32)
    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:261:13) {
  code: 'ERR_INVALID_ARG_TYPE'
}
```

Este erro ocorre na criação do Buffer com o conteúdo do arquivo de texto de testes pois o pacote ```fs``` não está conseguindo abrir o arquivo. Em alguns casos, alterar o caminho para os arquivos de teste no arquivo em ```client/udpClient.ts``` para absoluto resolve o problema.

**Exemplo:** 

  **De**
  ```
  const smallFilePath : string = './misc/smallfile.txt';
  const largeFilePath : string = './misc/largefile.txt';
  
  ```
  
  **Para**
  ```
  const smallFilePath : string = '/home/<usuario>/<caminho-ate-o-projeto>/udpsocket/misc/smallfile.txt';
  const largeFilePath : string = '/home/<usuario>/<caminho-ate-o-projeto>/udpsocket/misc/largefile.txt';
  
  ```
  
  Após fazer as alterações no código, compile utilizando o comando ```npm run tsc``` e suba o client com o comando ```node build/client/udpClient.js```
  
