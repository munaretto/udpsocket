# udpsocket

Este projeto tem como objetivo exemplificar o envio de mensagens em uma aplicação cliente-servidor utilizando sockets e o protocolo UDP.

## Como utilizar (Linux)

1. Clone o repositório com o comando ```git@github.com:munaretto/udpsocket.git``` para SSH, ou ```https://github.com/munaretto/udpsocket.git``` para HTTPS
2. Abra a pasta do projeto digitando ```cd udpsocket```
3. Instale as dependências do projeto com o comando ```npm install```
4. Abra duas instâncias do terminal: na primeira, suba o servidor com o comando ```node /build/index.js```, e na segunda, suba o cliente com o comando ```node /build/client/udpClient.js```
5. O resultado da troca de mensagem entre cliente e servidor deverá aparecer em suas respectivas instâncias do terminal.
