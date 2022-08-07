import Client from './core/Client';
const client = new Client('Hello World', 9);

const argument = 'This is unused. Can eslint catch it? I think not!';

console.log(`${client.programName} ${client.token}`);
client.doSomething('my argument');
