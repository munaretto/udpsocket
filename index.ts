import { createSocket } from "dgram";

const server = createSocket('udp4');

server.on('message', (messageContent, rinfo) => {
    
    console.log(`Servidor recebeu '${messageContent}' de ${rinfo.address}:${rinfo.port}`);

    server.send(messageContent, rinfo.port, 'localhost', (error) => {
        if (error) throw error
        console.log(`Servidor responde '${messageContent}' para ${rinfo.address}:${rinfo.port}`);
    });
});

server.bind(5800);
