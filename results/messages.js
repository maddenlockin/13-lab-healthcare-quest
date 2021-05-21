export const aliveCashMessages = {
    none: 'you ran out of cash. You are probably getting evicted. ',
    sad: 'You have enough for rent or everything else, but not both.',
    have:'You can pay for rent and food, probably not gas though.',
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
        cashMessage = aliveCashMessages[cash];
    }

    return `Hey ${user.name}, ${user.class} you ended your quest for healthcare ${healthMessages[health]} and ${cashMessage}`;
};