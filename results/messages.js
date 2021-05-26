export const aliveCashMessages = {
    none: 'out of cash. Your take a third job to try and keep your apartment and you get sicker. ',
    sad: 'with enough cash for rent or food, but not both.',
    have:'you can pay for rent and food, congrats.',
};

export const deadCashMessages = {
    none: 'totally broke. Maybe your family will not be sent the medical bills from your death?',
    sad: 'with just enough to pay off one last medical bill.',
    have:'you can afford to be cremated, congrats. ',
};

export const healthMessages = {
    healthy: 'in fair health',
    struggling: 'very sick',
    dead:'by dying',
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
    if (user.cash > 750) {
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

    return `Hey ${user.name}, ${user.class}, you ended your quest for healthcare ${healthMessages[health]} and ${cashMessage}`;
};