import { createSocket, Socket } from 'dgram';
import * as fs from 'fs'

const host      : string = '127.0.0.1';
const port      : number =  3001;
const filePath  : string = './misc/textfile.txt';
const client    : Socket = createSocket("udp4");

client.on('message', (messageContent, info) => {
    console.log(`Client recebeu a mensagem '${messageContent.toString()}' do servidor.`);
    client.close();
});

fs.readFile(filePath, (err, content) => {
    const messageBuffer = Buffer.from(content);
    
    client.send(messageBuffer, 0, messageBuffer.length, port, host, (err, bytes) => {
        if (err) throw err;
        console.log(`Client enviou '${messageBuffer.toString()}' para ${host}:${port}`);
    });
});