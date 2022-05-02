import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountRealTimePayment from './real-time-payment';
import requireAuth from 'src/middlewares/require-auth';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    router.use(requireAuth); 

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    // Real Time Payment API
    const realTimePayment = express.Router();
    mountRealTimePayment(realTimePayment);
    router.use('/real-time-payment', realTimePayment);
}
