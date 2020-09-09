const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
const url = 'https://api.github.com/users/tryber/repos';
describe('testing apis', () => {
  it('if the url contains the chosen todo-list api',  async () => {
    try {
       await expectgetRepos(url).then(data => {
        expect(data).toContain('sd-01-week4-5-project-todo-list');
       });
    } catch (error) {
     console.log("url dont contains in api")
    }
  });
  it('if the url contains the chosen  meme-generator api',  async () => {
    try {
       await expectgetRepos(url).then(data => {
        expect(data).toContain('sd-01-week4-5-project-meme-generator');
       });
    } catch (error) {
     console.log("url dont contains in api")
    }
  });
});

