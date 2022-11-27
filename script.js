let messages = [
    'The best part of my day is your smile',
    'Being with you is the easiest choice I have ever made, and I\'m so lucky I get to make it every day',
    'I love you more every day',
    'I love your honesty, your passion, your resilience, your courage, your partnership, and your smile',
    'As we grow separately, we also grow together, and it\'s truly a privilege',
    'You\'re my soulmate, my best friend, my partner, and my confidante. Thank you for that',
    'I want to be your favorite hello and your hardest goodbye',
    'Your smile takes my breath away. It took my breath away on the day we met, on our wedding day, today, and every day in between',
    'I wish every day you could see yourself the way I see you. Because I see you as absolutely perfect',
    'When I put my arms around you, I never want to let you go',
    'My life was black and white until you came in and added color',
    'I love who you are, I love who you were, I love who you are becoming',
    'You touch every part of my life',
    'Just so you know, I\'m madly in love with you',
    'Counting the hours until we\'re together again',
    'I can\'t focus today, and I blame it on you. Because I can\'t stop thinking about you',
    'Every time I think about you, my heart dances',
    'It was hard to get out of bed this morning, because I just want to hold you forever',
    'A friendly reminder that you bring so much joy into my life, and I love you for it',
    'I want to say I love you in a thoroughly non-corny way, but nothing comes to mind, so let me just say this: I love you',
    'You are beautiful, sexy, and cute, all at the same time',
    'Plans for the weekend? You, me, cuddling for 48 hours straight?',
    'You\'re the cheese to my pizza',
    'I would rather spend one moment holding you than a lifetime knowing I never could',
    'But you’ve slipped under my skin, invaded my blood and seized my heart',
    'I never loved you any more than I do, right this second. And I’ll never love you any less than I do, right this second',
    'I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you',
    'I’ve never had a moment’s doubt. I love you. I believe in you completely. You are my dearest one',
    'So, I love you because the entire universe conspired to help me find you',
    'If I had a flower for every time I thought of you, I could walk in my garden forever',
    'I don’t care how hard being together is, nothing is worse than being apart',
    'In a sea of people, my eyes will always be searching for you',
    'Sometimes, I knock on the doors of your heart, just to make sure I still live there',
    'I am catastrophically in love with you',
    'And I’ve realized that the Beatles got it wrong. Love isn’t all we need—love is all there is',
    'Promise me you\'ll never forget me, because if I thought you would, I\'d never leave',
    'Your hand touching mine. This is how galaxies collide',
    'I wish I knew how to quit you, because I am high on your love',
    'I need you like a heart needs a beat',
    'When I look into your eyes, I know I have found the mirror of my soul.',
    'Morning without you is a dwindled dawn',
    'Your love shines in my heart as the sun that shines upon the earth',
    'I would rather share one lifetime with you than face all the ages of this world without you',
    'I am in you and you in me, mutual in divine love',
    'Love is being stupid together',
    'My heart is and always will be yours',
    'I don’t wanna close my eyes, I don’t wanna fall asleep, cuz I’d miss you babe and I don’t wanna miss a thing',
    'You had me at hello',
    'Absence is to love as wind is to fire; it extinguishes the small and kindles the great',
    'If I tell you I love you, can I keep you forever?',
    'For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul',
    'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams',
    'And I don’t mind if we take our time ‘cause I’m all yours if you’re all mine',
    'Love is missing someone when you’re apart, but somehow feeling warm inside because you’re close in the heart',
    'Love makes no sense if it is not to the right person. I feel very lucky to be with you',
    'I’m giving you my heart now and forever. My goal is to make sure that I always make you feel loved, appreciated, and accepted, even over text',
    'The world is so perfect because of you, without you the world would be meaningless',
    'You wanna know who I\'m in love with? Read the first word again',
    'You are the owner of my heart, my feelings, my soul and my body. I completely belong to you, baby',
    'You can keep my heart but bring me back to life with your kisses',
    'Excuse me, I just want to tell you that I want to protect you, steal your smiles, stop your tears and wake up by your side',
    'Stop making me think about you! I\'m busy',
    'You make me the happiest person on Earth',
    'I admire you, I care for you, I love you, I respect you and I trust you. Unconditionally',
    'The only thing I need in life is to see you smile; you are the queen of my heart',
    'I wish you two things: everything and nothing. Everything that makes you happy and nothing that makes you suffer',
    'It’s good to know that when I go back home you will be there, smiling and waiting for me',
    'You feed my heart and my soul with your love. I love you more than anything in this world',
    'The only time I stupidly smile at my phone is when I get text messages from you',
    'I might run out of text messages to send you, and I might run out of jokes too. My phone might run out of battery, but my heart will never run out of space for you',
    'You are my dream come true, I will treasure and love you all the days of my life',
    'I wish I could send you a kiss through the phone, I could do it every second',
    'Come to my dreams if you can. I\'ll kiss you there',
    'I just want to be curled up in your arms right now',
    'You\'re on my mind every second of every day',
    'When I say that you are the love of my life, believe me, it’s true. You are the only one in my heart',
    'If you wanna stop by my house tonight, I just might have a kiss waiting for you',
    'I\'m getting butterflies just thinking about seeing you later',
    'Can we just call in sick tomorrow and spend the whole day together?',
    'Your texts make my day even better',
    'I wish I was in your arms',
    'Such a stressful day. Want to blow off some steam tonight?',
    'You. Me. Takeout. Tonight.',
    'I hope you know how wonderful you are, even when we are apart',
    'Counting down the seconds until I get to see you again',
    'I just realized something for the hundredth time today: I love you',
    'Just a note to remind you I’m thinking about you',
    'Stop looking so hot in the pics you post. You’re killing me over here',
    'I can NOT stop thinking about you, and it\'s very distracting',
    'When I close my eyes, I see you. When I open my eyes, I see you. There is nothing I can do without thinking of you',
    'Even though you\'re not beside me right now, I\'m smiling—because I know you will be by my side very soon',
    'Forever and always, without a doubt, I am yours',
    'I didn\'t think it was even possible to love someone as much as I love you',
    'ou make every day better, which is one of the million reasons I love you',
    'Hold my hand, hold my heart, and hold me forever',
    'Cuddling with you, talking with you, and being with you, that\'s what I love most',
    'Somewhere between all our laughs, long talks, stupid little fights, and inside jokes, I fell in love',
    'I had no plans of falling in love with you. But now that I have, I plan to stay in love with you forever',
    'It’s just you and me against the world',
    'Being in love with you makes every morning worth getting up for'

]

function myFunction(){
    random = Math.floor(Math.random() * messages.length);
    document.getElementById('quote').innerHTML = messages[random];
}

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }