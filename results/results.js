export const aliveCashMessages = {
    none: '',
    sad: '',
    have:'',
};

export const deadCashMessages = {
    none: '',
    sad: '',
    have:'',
};

export const healthMessages = {
    healthy: '',
    struggling: '',
    dead:'',
};

function evaluateHealth(user){
    if (user.health > 75) {
        return 'healthy';
    }
    if (user.health > 0) {
        return 'struggling';
    }
    return 'dead';
};

function evaluateCash(user){
    if (user.cash > 500) {
        return 'have';
    }
    if (user.cash > 0) {
        return 'sad';
    }
    return 'none';
};

export function getEndingMessage(user) {
    const health = evaluateHealth(user);
    const cash = evaluateCash(user);

    let cashMessage; 

    if (user.health <= 0) {
        cashMessage = deadCashMessages[cash];
    } else {
        cashMessage = aliveCashMessges[cash];
    }

    return `Hey ${user.name}, ${user.class} you ended your quest for healthcare with ${healthMessages[health]} and ${cashMessage}`;
};