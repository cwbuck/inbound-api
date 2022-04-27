import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountRealTimePayment from './real-time-payment';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    // Real Time Payment API
    const realTimePayment = express.Router();
    mountRealTimePayment(realTimePayment);
    router.use('/realTimePayment', realTimePayment);

}
