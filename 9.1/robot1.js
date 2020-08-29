const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (falied) => console.log(`Errror getting temperature: ${falied}`);
const sendMarsTemperature = (onsucess, falied) => {
  const auxtemperature = getMarsTemperature();
  const taxRandomSucess = Math.random() <= 0.6;
  setTimeout(() => {
    if(taxRandomSucess) onsucess(auxtemperature)
       else falied("Robot is destroided");
    }, messageDelay());
   
}

sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo