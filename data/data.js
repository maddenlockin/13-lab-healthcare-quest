const heart = {
    id: 'heart',
    title: 'Heart Disease Strikes',
    map: {

    },
    image:'',
    description: 'Your Primary Care Provider (PCP) diagnoses you with heart disease. The specialist you are referred to is out-of-network. What do you do?',
    choices: [{
        id: 'lifestyle',
        description: 'You cannot afford that, instead you just try to eat more vegetables and exercise',
        result: 'Turns out you live in a food desert and there is no fresh produce within 3 miles of your home. You try taking the bus to the closest grocery store with fresh vegetables, but it takes 5 hours round trip and you miss out on seeing your kids on your only day off of work in 17 days. This is not sustainable and you give up on the lifestyle changes.',
        cash: '-18',
        health: '-35',
    }, {
        id: 'pay',
        description: 'You will skrimp in order to pay out of pocket to see the specialist',
        result: 'The cardiology specialist is the best doctor you have ever been to. She listens to you and gets you on the correct medication to manage your heart disease at its exact stage. You are definitely in the right hands medically. But your bill from your first visit is $250 plus the cost of biweekly labs, and she wants you to come back once a month. In order to help you afford treatment, the specialist decides to decrease how often you come in, but that decreases the effectiveness and you still only have enough money to eat one meal and one snack a day.',
        cash: '-600',
        health: '-15',
    }, {
        id: 'find',
        description: 'You decide to find another cardiologist that is in-network instead',
        result: 'It took 4 months to get an appointment with the in-network specialist after you finally confirmed that they take your insurance. The first visit is 15 minutes long and the doctor does not listen to your experience or answer your questions, instead looking at your chart from your PCP, handing you a prescription, ordering labs, and telling you to come back in 3 months. Your labs are covered by insurance but you have no idea what they are checking. When you return in 3 months, the doctor is unexpectedly on vacation and you have to reschedule for 2 months later.',
        cash: '0',
        health: '-25',
    }]
};

const bill = {
    id: 'bill',
    title: 'The Unexpected Bill',
    map: {

    },
    prerequisites: ['heart'],
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
    map: {

    },
    prerequisites:['heart', 'bill'],
    image:'',
    description: 'What do you do?',
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
    bill,
    referral
];

export default quests;
