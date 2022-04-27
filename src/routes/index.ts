import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountRealTimePayment from './api/real-time-payment';

export default function addRoutes(router: Router) {
    const api = express.Router();
    const auth = express.Router();

    mountAPI(api);
    mountAuth(auth);

    router.get(
        '/',
        respond(() => ({ message: 'Up and running!' }))
    );

    router.use('/api', api);
    router.use('/auth', auth);

    // Real Time Payment API 
    const realTimePayment = express.Router();
    mountRealTimePayment(realTimePayment);
    router.use('/realTimePayment', realTimePayment);
}
