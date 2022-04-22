/* eslint-disable */
export interface realTimePaymentRequest {
    api_version: string;
    channel: string;
    client_key: string;
    data: Data;
    id: string;
    pending_webhooks: string;
    source_id: string;
    source_type: string;
    timestamp: string;
    type: string;
}

interface Data {
    payment: Payment;
}

interface Payment {
    amount: string;
    card_cvv_number: string;
    confirmation_number: string;
    currency_code3d: string;
    custom_fields: Customfields;
    customer: Customer;
    customer_account: Customeraccount;
    expected_payment_settlement_date: string;
    fee: Fee;
    funding_account: Fundingaccount;
    id: string;
    payment_amount_type: string;
    payment_date: string;
    payment_entry_date: string;
    payment_method: string;
    payment_network_response: Paymentnetworkresponse;
    payment_reference: string;
    payment_request_date: string;
    payment_return_date: string;
    payment_schedule_type: string;
    return_code: string;
    status: string;
    payment_notification_email: string;
    comments: string;
    token: string;
    url: string;
}

interface Paymentnetworkresponse {
    payment_auth_code: string;
    payment_decline_code: string;
    payment_decline_msg: string;
    return_code: string;
    return_code_desc: string;
}

interface Fundingaccount {
    aba_routing_number: string;
    account_holder_name: string;
    account_holder_type: string;
    account_number: string;
    account_subtype: string;
    account_type: string;
    ach_eligible_flag: string;
    address: Address;
    atm_eligible_flag: string;
    card_cvv_number: string;
    currency_code3d: string;
    custom_fields: Customfields;
    expiry_date: string;
    id: string;
    issuer_name: string;
    nickname: string;
    status: string;
    display_text: string;
    url: string;
}

interface Fee {
    fee_amount: string;
    fee_type: string;
    id: string;
    url: string;
}

interface Customeraccount {
    account_holder_name: string;
    account_number: string;
    address: Address;
    current_balance: string;
    current_statement_balance: string;
    custom_fields: Customfields;
    customer_account_reference: string;
    id: string;
    minimum_payment_due: string;
    nickname: string;
    past_amount_due: string;
    payment_due_date: string;
    statement_date: string;
    status: string;
    url: string;
}

interface Customer {
    address: Address;
    custom_fields: Customfields;
    customer_reference: string;
    date_of_birth: string;
    email: string;
    first_name: string;
    gender: string;
    home_phone: string;
    id: string;
    last_name: string;
    locale: string;
    middle_name: string;
    mobile_phone: string;
    ssn: string;
    status: string;
    url: string;
    work_phone: string;
}

interface Address {
    address_city: string;
    address_country: string;
    address_line1: string;
    address_line2: string;
    address_state: string;
    address_zip1: string;
    address_zip2: string;
}

interface Customfields {
    property1: string;
    property2: string;
}
