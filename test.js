import { createClient } from 'redis';

// CONNECTING
const client = await createClient(
  {
    username: 'default', 
    password: '{PASSWORD}', // use your password here
    socket: {
      host: '{HOST_URL}',
      port: 25061,
      tls: true,
    }
  })
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

// PUBLISHING
await client.publish('live-updates', 'hello world');

// LISTENING
const listener = (message, channel) => console.log(message, channel);
await client.subscribe('live-updates', listener);

// DISCONNECTING
await client.disconnect();
