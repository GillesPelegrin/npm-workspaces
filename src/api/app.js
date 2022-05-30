import express from 'express';
import taskRoute from './task-router.js'

export default function createServer() {
    const app = express()
    app.use(express.json())

    app.use(taskRoute);

    return app;
}