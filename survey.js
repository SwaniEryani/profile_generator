
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin ,
  output: process.stdout
});
const profiles = [];

const profile = {
  name: '',
  favActivity: '',
  fevMusic: '',
  fevMeal: '',
  fevToEat: '',
  fevSport: '',
  superPower: ''
};
rl.question('What\'s your name? ',(answer) => {
  profile.name = answer;
  rl.question('What\'s an activity you like doing ?', (answer) => {
    profile.favActivity = answer;
    rl.question('What do you listen to while doing that ?', (answer) => {
      profile.fevMusic = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile.fevMeal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.fevToEat = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.fevSport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.superPower = answer;
              console.log(`${profile.name} loves listening to ${profile.fevMusic} while ${profile.favActivity}, devouring ${profile.fevToEat} for ${profile.fevMeal}, prefers ${profile.fevSport} over any other sport, and is amazing at ${profile.superPower} `);
              profiles.push(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});

