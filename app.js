const startMessageSubscriber = require('./subscriber/startMessageSubscriber');
const startHistoryServer = require('./api/startHistoryServer');

startMessageSubscriber();
startHistoryServer();
