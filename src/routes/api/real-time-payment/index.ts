//========================================
// Imports

import { Router } from 'express';
import respond from 'src/middlewares/respond';
import validate from 'src/middlewares/validate';
import * as controller from 'src/controllers/real-time-payment';
import * as validators from './validators';

//========================================
// HTTP Requests

// POST
export default function mountRealTimePayment(router: Router) {
    router.post(
        '/',
        validate(validators.validatePOST),
        respond((req: any) => controller.processRealTimePayment(req.body))
    );
}
