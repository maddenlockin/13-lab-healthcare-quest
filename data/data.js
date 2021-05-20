const heart = {
    id: 'heart',
    title: 'Heart Disease Strikes',
    image:'',
    description: 'Your Primary Care Provider (PCP) diagnoses you with heart disease. The specialist you are referred to is out-of-network. What do you do?',
    choices: [{
        id: 'lifestyle',
        description: 'You cannot afford that, instead you just try to eat more vegetables and exercise',
        result: '',
        cash: '',
        health: '',
    }, {
        id: 'pay',
        description: 'You will skrimp in order to pay out of pocket to see the specialist',
        result: '',
        cash: '',
        health: '',
    }, {
        id: 'find',
        description: 'You decide to find another cardiologist that is in-network instead',
        result: '',
        cash: '',
        health: '',
    }]
};

const bill = {
    id: 'bill',
    title: 'The Unexpected Bill',
    image:'',
    description: 'The Urgent Care a couple blocks away took your insurance when you went there 6 months ago, but at the end of your appointment today the receptionist informed you that they no longer take your insurance there and hands you a bill for $160. What do you do?',
    choices: [{
        id: 'run',
        description: '',
        result: '',
        cash: '',
        health: '',
    }, {
        id: 'canada',
        description: '',
        result: '',
        cash: '',
        health: '',
    }, {
        id: 'pay',
        description: '',
        result: '',
        cash: '',
        health: '',
    }]
};

const referral = {
    id: 'referral',
    title: 'The Choice of Providers',
    image:'',
    description: ' What do you do?',
    choices: [{
        id: 'fraud',
        description: '',
        result: '',
        cash: '',
        health: '',
    }, {
        id: 'switch',
        description: '',
        result: '',
        cash: '',
        health: '',
    }, {
        id: 'stay',
        description: '',
        result: '',
        cash: '',
        health: '',
    }]
};







const quests = [
    heart,
];
export default quests;
