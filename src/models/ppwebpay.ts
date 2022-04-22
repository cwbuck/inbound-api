// ==============================================
// Imports

import eradaniConnect from '@eradani-inc/eradani-connect';
import * as configService from 'config';
const config = configService.get();
const dataLib = config.realTimePaymentTable.dataLib;
const table = config.realTimePaymentTable.table;


// ==============================================
// Modules

// Insert record into PPWEBPAY file on IBMi
export const insertPPWEBPAY = new eradaniConnect.run.Sql(
    `INSERT INTO ${dataLib}.${table}(
          BCNFID                                            /* Confirmation Id */
        , BUSRID                                            /* User Id */
        , BBILLCD                                           /* Biller Product Code */
        , BPMTMTD                                           /* Payment Method */
        , BPMTCHN                                           /* Payment Channel */
        , BPMTAMT                                           /* Payment Amount */
        , BCNVFEE                                           /* Convenience Fee */
        , BPMTEFD                                           /* Payment Effective Date */
        , BAMTDUE                                           /* Payment Amount Due */
        , BDUEDTE                                           /* Due Date */
        , BTRNSMD                                           /* Transaction Mode */
        , BRCVDT                                            /* Received Date/Time */
    ) 
    VALUES (
          ?                                                 /* Confirmation Id */
         ,?                                                 /* User Id */
         ,'LoanPayment'                                     /* Biller Product Code */
         ,'IVR'                                             /* Payment Method */
         ,upper(?)                                          /* Payment Channel */
         ,?                                                 /* Payment Amount */
         ,?                                                 /* Convenience Fee */
         ,?                                                 /* Payment Effective Date */
         ,?                                                 /* Payment Amount Due */
         ,?                                                 /* Due Date */
         ,'PAYMENT'                                         /* Transaction Mode */
         , to_char(current_timestamp, 'YYYYMMDDHH24MISS')   /* Received Date/Time */
    )`,
    {
        params: [
            { name: 'confirmationNumber' },
            { name: 'id' },
            { name: 'paymentMethod' },
            { name: 'amount' },
            { name: 'feeAmount' },
            { name: 'paymentDate' },
            { name: 'currentBalance' },
            { name: 'paymentDueDate' }
        ]
    }
);
