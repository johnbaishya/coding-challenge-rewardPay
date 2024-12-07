
export enum AccountCategoryEnum{
    Revenue = "revenue",
    Expense = "expense",
    Assets = "assets",
    Liability ="liability",  
}

export enum AccountTypeEnum{
    Sales="sales",
    Overheads="overheads",
    CurrentAccountsReceivable="current_accounts_receivable",
    Bank="bank",
    Fixed="fixed",
    CurrentAccountsPayable="current_accounts_payable",
    Tax="tax",
    Current="current",
    Payroll="payroll",
}

export enum ValueTypeEnum {
    Credit="credit",
    Debit="debit",
}

// this type is for  each array element in the data field provided in data.json file 
export type Account ={
    account_category: string,
    account_code: string,
    account_currency: string,
    account_identifier: string,
    account_status: string,
    value_type: string,
    account_name: string
    account_type: string,
    account_type_bank: string,
    system_account: string,
    total_value: number
}

export type AccountArrayFilter = Partial<Account>
