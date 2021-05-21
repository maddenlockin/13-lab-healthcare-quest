const heart = {
    id: 'heart',
    title: 'Heart Disease Strikes',
    map: {
        top: '20%',
        left: '70%',
    },
    image:'../assets/heart.png',
    description: 'Your Primary Care Provider (PCP) diagnoses you with heart disease. The specialist you are referred to is out-of-network. What do you do?',
    choices: [{
        id: 'lifestyle',
        description: 'You cannot afford that, instead you just try to eat more vegetables and exercise',
        result: 'Turns out you live in a food desert and there is no fresh produce within 3 miles of your home. You try taking the bus to the closest grocery store with fresh vegetables, but it takes 5 hours round trip and you miss out on seeing your kids on your only day off of work in 17 days. This is not sustainable and you give up on the lifestyle changes.',
        cash: -18,
        health: -35,
    }, {
        id: 'pay',
        description: 'You will skrimp in order to pay out of pocket to see the specialist',
        result: 'The cardiology specialist is the best doctor you have ever been to. She listens to you and gets you on the correct medication to manage your heart disease at its exact stage. You are definitely in the right hands medically. But your bill from your first visit is $250 plus the cost of biweekly labs, and she wants you to come back once a month. In order to help you afford treatment, the specialist decides to decrease how often you come in, but that decreases the effectiveness and you still only have enough money to eat one meal and one snack a day.',
        cash: -600,
        health: -15,
    }, {
        id: 'find',
        description: 'You decide to find another cardiologist that is in-network instead',
        result: 'It took 4 months to get an appointment with the in-network specialist after you finally confirmed that they take your insurance. The first visit is 15 minutes long and the doctor does not listen to your experience or answer your questions, instead looking at your chart from your PCP, handing you a prescription, ordering labs, and telling you to come back in 3 months. Your labs are covered by insurance but you have no idea what they are checking. When you return in 3 months, the doctor is unexpectedly on vacation and you have to reschedule for 2 months later.',
        cash: 0,
        health: -25,
    }]
};

const bill = {
    id: 'bill',
    title: 'The Unexpected Bill',
    map: {
        top: '50%',
        left: '10%'
    },
    prerequisites: ['heart'],
    image:'../assets/bill.png',
    description: 'The Urgent Care a couple blocks away took your insurance when you went there 6 months ago, but at the end of your appointment today the receptionist informs you that they no longer take your insurance and hands you a bill for $160. What do you do?',
    choices: [{
        id: 'argue',
        description: 'This must be a mistake! You argue with the receptionist about the bill because they should have informed you when you first checked-in.',
        result: 'The receptionist does not appreciate your push back, even if it started out as self-advocacy. In fact, you are told that the bill is incomplete and handed an updated bill for $200 that cites facility fees that were not on the first one. You have to pay it and can no longer afford to get your oil changed or put gas in your car this month. Looks like you are riding the bus.',
        cash: -200,
        health: -8,
    }, {
        id: 'canada',
        description: 'You cannot pay that. You dash out the door, run home to pack a bag and hop on the next train to Canada. Healthcare is free there, right?',
        result: 'Turns out your $160 bill has been sent to a debt collector and extra fees are racking up daily, so you cannot go back to the US unless you are going to pay thousands of dollars. You do not get to go back to see your family and apparently, they all hate Canada. So you do not get to see your family again and must build a new life.',
        cash: -100,
        health: -10,
    }, {
        id: 'pay',
        description: 'No, it is not fair that you have this bill. But yeah, now you have this bill. You just pay it.',
        result: 'That sucked. You did not even get an answer about the super itchy rash on your inner elbow. But when you walk outside you immediately step on a five dollar bill. There is no one else around, so you keep it. Also, you have to take the bus to work for the next two weeks because you do not have enough gas money now. ',
        cash: -155,
        health: 0,
    }]
};

const referral = {
    id: 'referral',
    title: 'The Choice of Providers',
    map: {
        top: '80%',
        left: '40%'
    },
    prerequisites:['heart', 'bill'],
    image:'../assets/choice.png',
    description: 'You are seeking out an endocrinologist. Your friend tells you about the doctor they are seeing and how great they are! Through your PCP, you are able to get a referral to see that doctor, but when you go to make the appointment you find out that endocrinologist is only covered under the other medicaid program in your area, not yours. So you would have to switch programs and leave all of the healthcare providers you already see. What do you do?',
    choices: [{
        id: 'fraud',
        description: 'Your partner is on that other medicaid plan. You use your partners insurance card, say you lost your ID, and commit insurance fraud in order to see the endocrinologist as a new patient and get to keep your current PCP and therapist.',
        result: 'You bucked the system! You get the prescriptions and labs that you need from the endocrinologist, only have to go back to see them once a year, and never get caught. Somehow the paperwork was never double checked and you get decent healthcare and all the providers you need for the first time in your life.',
        cash: 0,
        health: 40,
    }, {
        id: 'switch',
        description: 'Fine. If you have to give up your PCP and therapist in order to see this endocriologist, you will. You call and get your medicaid plan switched.',
        result: 'The processing time for your plan to change is 2 months and you are not able to schedule your appointment until you have your insurance member ID number. By the time you get your new card, they are booking out 6 months for new patients and your referral from your PCP is no longer valid. You will have to find a new PCP that takes your new insurance and get them to refer you again.',
        cash: 0,
        health: -30,
    }, {
        id: 'stay',
        description: 'Your therapist is pretty good and your PCP actually listens to what you are telling them. You are not about to give that up. You decide that you can talk to your PCP and do a bunch of research on your own to find out what you need. You will source your medications online and from community resources and get to stick with your established providers.',
        result: 'You found some pretty incredible resources through community building and have actually found a temporarily steady stream of medication. You made new friends and have learned about mutual-aid and supporting your community in return. While this is not the safest and most stable way to access healthcare, it is okay for now.',
        cash: -10,
        health: -5,
    }]
};

const quests = [
    heart,
    bill,
    referral
];

export default quests;
