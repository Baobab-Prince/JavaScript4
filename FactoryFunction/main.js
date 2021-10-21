//doesnt use this or new
//will always return an object

const pig = () => {
  const sound = 'oink';
  return {
    talk: () => console.log(sound),
  };
};

const snort = pig();
snort.talk(); //Outputs: "oink"🐷;
