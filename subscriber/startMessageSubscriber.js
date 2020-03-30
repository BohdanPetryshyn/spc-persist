const AMQP_HOST = process.env.AMQP_HOST || 'localhost';
const AMQP_URL = `amqp://${AMQP_HOST}`;

const spcAmqpClient = require('@bpetryshyn/spc-amqp-client');

const storeMessage = require('./storeMessage');

module.exports = async () => {
  const amqpClient = await spcAmqpClient(AMQP_URL);

  amqpClient.createPersistentMessageConsumer(
    'history',
    async (message, ack) => {
      await storeMessage(message);
      console.log('Message persisted: ', message);
      ack();
    }
  );
};
