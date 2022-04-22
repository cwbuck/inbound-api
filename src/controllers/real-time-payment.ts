//========================================
// Imports

import createLogger from 'src/services/logger';
const logger = createLogger('controllers/real-time-payment');
import { insertPPWEBPAY } from 'src/models/ppwebpay';
import { realTimePaymentRequest } from 'src/types/real-time-payment-request';
import APIError from 'src/APIError';
import transport from 'src/services/connection';
var requestType:string;


// ==============================================
// Modules

export const processRealTimePayment = async function (request: realTimePaymentRequest): Promise<any> {
    logger.debug('Request is ', request);

    try {
        // Determine payment notification type; follows legacy PAYMENT, EDIT, CANCEL types
        if (request.type == 'payment.created') {
            requestType = 'PAYMENT';
        } else if (request.type == 'payment.updated') {
            requestType = 'EDIT';
        } else if (request.type == 'payment.cancelled') {
            requestType = 'CANCEL';
        };
        // Map fields in request to params to pass for insert
        /* eslint-disable camelcase */
        const params = {
            confirmationNumber: request.data.payment.confirmation_number,
            id: request.data.payment.customer_account.id,
            paymentMethod: request.data.payment.payment_method,
            amount: +request.data.payment.amount,
            feeAmount: +request.data.payment.fee.fee_amount,
            paymentDate: request.data.payment.payment_date,
            currentBalance: +request.data.payment.customer_account.current_balance,
            requestType: requestType,
            paymentDueDate: request.data.payment.customer_account.payment_due_date
        };
        /* eslint-enable camelcase */
        await transport.execute(insertPPWEBPAY, params);
    } catch (error) {
        logger.error(error);
        throw new APIError(500, 'Error Inserting database record', error);
    }
    return { message: 'Inserted Record' };
};
