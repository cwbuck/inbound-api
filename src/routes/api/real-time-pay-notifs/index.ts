//========================================
// Imports

import { Router } from 'express';
import respond from 'src/middlewares/respond';
import validate from 'src/middlewares/validate';
import * as realTimePayController from 'src/controllers/realTimePayNotifs';
import * as validators from './validators';


//========================================
// HTTP Requests

// POST
export default function mountUSBank(router: Router) {
    router.post(
        '/',
        validate(validators.checkRequest),
        respond((req: any) => realTimePayController.insertIVRPaymentInformation(req.body))
    );
}