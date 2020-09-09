const appendJoke = (joke) => {
  let ul = document.querySelector("ul")
  let li = document.createElement("li")
  li.innerHTML = joke
  ul.appendChild(li)
}

const param = { headers: { Accept: 'application/json' } };

const getRandomJoke = (term) => {
  return new Promise((resolve, reject) => {
    if (term === 'ant') reject('This joke wasn\'t good. Term:', term)
    else {
      fetch(`https://icanhazdadjoke.com/search?term=${term}`, param)
      .then((response) => {
        response.json()
          .then((data) => {
            const joke = data.results[0].joke;
            appendJoke(joke);
            resolve();
          })
      })
    }
  });  
}

const fetchJoke = async () => {
  try {
    await getRandomJoke('spider');
    await getRandomJoke('pizza');
    await getRandomJoke('wolf');
    await getRandomJoke('ant');
  } catch (errors) {
    window.alert('Joke not found');
  }
}

window.onload = () => fetchJoke();