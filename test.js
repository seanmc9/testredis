import { createClient } from 'redis';

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

await client.publish('myradioshow', 'hello world');
await client.disconnect();
