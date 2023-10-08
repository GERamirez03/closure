function createAccount(pin, amount) {

    if(!amount) amount = 0;
    const newAccount = { pin, amount };

    newAccount.checkBalance = function checkBalance(pin) {
        if(pin !== this.pin) return "Invalid PIN.";
        else {
            return `$${this.amount}`;
        }
    };

    newAccount.deposit = function deposit(pin, amount) {
        if(pin !== this.pin) return "Invalid PIN.";
        else {
            this.amount += amount;
            return `Succesfully deposited $${amount}. Current balance: $${this.amount}.`;
        }
    };

    newAccount.withdraw = function withdraw(pin, amount) {
        if(pin !== this.pin) return "Invalid PIN.";
        else {
            if (amount > this.amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            else {
                this.amount -= amount;
                return `Succesfully withdrew $${amount}. Current balance: $${this.amount}.`;
            }
        }
    };

    newAccount.changePin = function changePin(pin, newPin) {
        if(pin !== this.pin) return "Invalid PIN.";
        else {
            this.pin = newPin;
            return "PIN successfully changed!";
        }
    };


    return newAccount;
}

module.exports = { createAccount };
