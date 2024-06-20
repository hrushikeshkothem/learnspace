const express = require('express');
const http = require('http');
const promClient = require('prom-client');
const { createLogger } = require('winston');
const LokiTransport = require('winston-loki');

// initialize the centrailized logger with Loki transport
const options = {
    transports: [
        new LokiTransport({
            host: 'http://192.168.4.150:3100',
        }),
    ],
}
const logger = createLogger(options);

// Initialize the Prometheus client and register the default metrics
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ register: promClient.register });

// Create a custom counter metric
const apiHits = new promClient.Counter({
    name: 'api_hits',
    help: 'Number of hits to the API',
});
const httpRequests = new promClient.Counter({
    name: 'http_requests',
    help: 'Number of HTTP requests',
    labelNames: ['route','method', 'status'],
});

// Create a express app and a http server
const app = express();
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Server routes
// Simulate a fast request
app.get('/fast', (_, res) => {
    apiHits.inc();
    httpRequests.inc({ route: '/fast', method: 'GET', status: 200 });
    try{
        logger.info('This is a fast request hit!');
        res.send('This is a fast request!');
    } catch (error) {
        logger.error('An error occurred!');
        res.status(500).send('An error occurred!');
    }
});

// Simulate a slow request by waiting for 3 seconds
app.get('/slow', async(_, res) => {
    apiHits.inc();
    httpRequests.inc({ route: '/slow', method: 'GET', status: 200 });
    try {
        logger.info('This is a slow request hit!');
        await new Promise(resolve => setTimeout(resolve, 3000));
        res.send('This is a slow request!');
    } catch (error) {
        logger.error('An error occurred!');
        res.status(500).send('An error occurred!');
    }
});

// A api that exposes the metrics for Prometheus to scrape
app.get('/metrics', async(_, res) => {
    logger.info('This is a metrics request hit!');
    const metrics = await promClient.register.metrics();
    res.setHeader('Content-Type', promClient.register.contentType);
    res.send(metrics);
});