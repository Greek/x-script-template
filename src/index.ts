import Client from './core/Client';
const client = new Client('Hello World', 9);

console.log(`${client.programName} ${client.token}`);
client.doSomething('my argument');
