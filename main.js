// import inquirer from "inquirer"
// // This is a customer Class
// class myCustomer {
//     first_name: string;
//     last_name: string;
//     age: number;
//     gender: string;
//     cell_no: number;
//     account_no: number;
//     constructor (
//         fname: string,
//         lname: string,
//         age: number,
//         gen: string,
//         mob: number,
//         accnt: number,
//     ) {
//     this.first_name = fname;
//     this.last_name = lname;
//     this.age = age;
//     this.gender = gen;
//     this.cell_no = mob;
//     this.account_no = accnt;
//     }
// }
// // This is Bank Details Interface
// interface bankDetails{
//     account_no: number;
//     acct_bal: number;
//     withdrawl(amt: number) : void
//     deposit(amt: number) : void
//     checkBalance(amt: number) : void
// }
// // Class of Bank Details with Implemets bank Details Interface
// class bankDetails implements bankDetails {
//     account_no: number;
//     acct_bal: number;
//     constructor(account_no: number, acct_bal: number){
//     this.account_no = account_no,
//     this.acct_bal = acct_bal
//     }
// // Cash WithDraw
// withdrawl(amt: number): void {
//     if (this.acct_bal >= amt) {
//     this.acct_bal -= amt;
//     console.log(`You withDraw ${amt} and now your remaining Balance is ${this.acct_bal}`) ;  
//     } else {
//     console.log(`You have insufficient Amount and your Balance is ${this.acct_bal}`) ;  
//     }
// }
// // Cash Deposit
// deposit(amt: number): void {
//     if (amt > 100){
//         amt -= 1;
//     }
//     this.acct_bal += amt
//     console.log(`you deposit the ${amt} and now your Balance is ${this.acct_bal}`);
// }
// checkBalance(): void {
//     console.log(`Your Cuent Balance is ${this.acct_bal}`);
// }
// }
// // create accounts for Customers
// const accounts : bankDetails[] = [ 
//     new bankDetails (1101,2050),
//     new bankDetails (2202,2500)
// ];
// // Create Customers for Bank
// const customer : myCustomer [] = [
//     new myCustomer ("Waheed", "Ahmed", 40, "M", 3212345691, 1101),
//     new myCustomer ("Raja", "Soomro", 25, "M", 3211234567, 2202),
// ]
// async function mainProgram() {
//     do{
//         let myinput = await inquirer.prompt({
//             name: "actNo",
//             message: "Enter your Account Number",
//             type: "number"
//         });
//         const customer_obj = customer.find(customer_obj => customer_obj.account_no === myinput.actNo);
//         if (customer_obj){
//             console.log(`AOA ${customer_obj.first_name} ${customer_obj.last_name}`)
//             let userinput = await inquirer.prompt ([{
//                 name: "option",
//                 message: "Enter Your Choice", 
//                 type: "list",
//                 choices: ["Cash Deposit", "Cash Withdraw", "Balance Inquiry", "Exit Main Menu"]
//             }]);
//             switch (userinput.option) {
//                 case "Cash Deposit":
//                     let cashdeposit = await inquirer.prompt({
//                         name: "depositamount",
//                         message: "Enter the Deposit Amount",
//                         type: "number",
//                     });
//                     customer.deposit(cashdeposit.depositamount)
//                     break;
//                 case "Cash Withdraw":
//                     let cashdwithdraw = await inquirer.prompt({
//                         name: "withdrawamount",
//                         message: "Enter the WithDraw Amount",
//                         type: "number",
//                     });
//                     customer_obj.withdrawl (cashdwithdraw.withdrawamount)
//                     break;
//                 case "Balance Inquiry":
//                     customer_obj. checkBalance()
//                     break;
//                 case "Exit Main Menu":
//                 console.log("Exit")
//                 console.log("Have a nice Day")
//             }
//         } else {
//             console.log ("Invalid Account No. Try Again")
//         }
//     } while (true)
// }
// class bank{
//     customer : myCustomer[] = [];
//     mybank : bankDetails [] = [];
//     addcustomer(obj: myCustomer){
//         this.customer.push(obj)
//     }
//     addbankacct(obj: bankDetails){
//         this.mybank.push(obj)
//     }
// }
// mainProgram() 
// ===========================================================================
import inquirer from "inquirer";
// This is a customer Class
class MyCustomer {
    first_name;
    last_name;
    age;
    gender;
    cell_no;
    account_no;
    constructor(fname, lname, age, gen, mob, accnt) {
        this.first_name = fname;
        this.last_name = lname;
        this.age = age;
        this.gender = gen;
        this.cell_no = mob;
        this.account_no = accnt;
    }
}
// Class of Bank Details implementing bankDetails Interface
class Bank {
    account_no;
    acct_bal;
    constructor(account_no, acct_bal) {
        this.account_no = account_no;
        this.acct_bal = acct_bal;
    }
    // Cash Withdraw
    withdrawl(amt) {
        if (this.acct_bal >= amt) {
            this.acct_bal -= amt;
            console.log(`You withdraw ${amt} and now your remaining Balance is ${this.acct_bal}`);
        }
        else {
            console.log(`You have insufficient Amount and your Balance is ${this.acct_bal}`);
        }
    }
    // Cash Deposit
    deposit(amt) {
        if (amt > 100) {
            amt -= 1;
        }
        this.acct_bal += amt;
        console.log(`you deposited ${amt} and now your Balance is ${this.acct_bal}`);
    }
    checkBalance() {
        console.log(`Your Current Balance is ${this.acct_bal}`);
    }
}
// Create accounts for Customers
const accounts = [
    new Bank(1101, 2050),
    new Bank(2202, 2500)
];
// Create Customers for Bank
const customers = [
    new MyCustomer("Waheed", "Ahmed", 40, "M", 3212345691, 1101),
    new MyCustomer("Raja", "Soomro", 25, "M", 3211234567, 2202),
];
async function mainProgram() {
    do {
        let myinput = await inquirer.prompt({
            name: "actNo",
            message: "Enter your Account Number",
            type: "number"
        });
        const customer_obj = customers.find(customer => customer.account_no === myinput.actNo);
        if (customer_obj) {
            console.log(`Welcome ${customer_obj.first_name} ${customer_obj.last_name}`);
            let userinput = await inquirer.prompt([{
                    name: "option",
                    message: "Enter Your Choice",
                    type: "list",
                    choices: ["Cash Deposit", "Cash Withdraw", "Balance Inquiry", "Exit Main Menu"]
                }]);
            switch (userinput.option) {
                case "Cash Deposit":
                    let cashdeposit = await inquirer.prompt({
                        name: "depositamount",
                        message: "Enter the Deposit Amount",
                        type: "number",
                    });
                    accounts.find(account => account.account_no === customer_obj.account_no)?.deposit(cashdeposit.depositamount);
                    break;
                case "Cash Withdraw":
                    let cashwithdraw = await inquirer.prompt({
                        name: "withdrawamount",
                        message: "Enter the Withdraw Amount",
                        type: "number",
                    });
                    accounts.find(account => account.account_no === customer_obj.account_no)?.withdrawl(cashwithdraw.withdrawamount);
                    break;
                case "Balance Inquiry":
                    accounts.find(account => account.account_no === customer_obj.account_no)?.checkBalance();
                    break;
                case "Exit Main Menu":
                    console.log("Exiting...");
                    console.log("Have a nice Day");
                    return;
            }
        }
        else {
            console.log("Invalid Account No. Try Again");
        }
    } while (true);
}
mainProgram();
