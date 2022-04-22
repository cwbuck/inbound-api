// ==============================================
// Imports

import { body } from 'express-validator';


// ==============================================
// Modules

// Validate POST request body for real time payment data
export const validatePOST = [
    body('api_version').exists().isString(),
    body('channel').exists().isString(),
    body('client_key').exists().isString().isLength( {min: 1, max: 50}).withMessage('client_key is required and cannot be more than 50 characters'),
    body('data').exists().isObject(),
    body('data.payment').exists().isObject(),
    body('data.payment.amount').exists().isString(),
    body('data.payment.confirmation_number').exists().isString(),
    body('data.payment.payment_method').exists().isString(),
    body('data.payment.fee.fee_amount').exists().isString(),
    body('data.payment.payment_date').exists().isString(),
    body('data.payment.customer_account').exists().isObject(),
    body('data.payment.customer_account.id').exists().isString(),    
    body('data.payment.customer_account.current_balance').exists().isString(),
    body('data.payment.customer_account.payment_due_date').exists().isString(),
    body('id').exists().isString().isLength( {min: 1, max: 50}).withMessage('id is required and cannot be more than 50 characters'),
    body('pending_webhooks').exists().isString(),
    body('source_id').isString().isLength( {min: 1, max: 20}).withMessage('id is required and cannot be more than 20 characters'),
    body('source_type').exists().isString().isIn(['customer', 'user', 'external_user']),
    body('timestamp').exists().isString(),
    body('type').exists().isString().isIn(['payment.created', 'payment.updated', 'payment.cancelled'])   
];

