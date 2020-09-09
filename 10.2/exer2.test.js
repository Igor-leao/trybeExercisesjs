const { TestScheduler } = require("jest");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  // describe('testing if resolve and match resolve', () => {
  //   test('testgeUsername then', () => {
  //     getUserName(4, () => {
  //       return getUserName(4).then(listUser => { expect(listUser).toBe('Mark') });
        
  //     });
  //   })
  //   test('testgeUsername cath', () => {
  //     getUserName(4, () => {
  //       return getUserName(100).then(data =>  expect(data).toEqual({ data: 'User with 100 not found.' }));
        
  //     });
  //   })
    
  // });
  describe('getUserName - async/await', () => {
    describe('when the user id exists', () => {
      it('returns the user name', async () => {
        expect.assertions(1);
        const data = await getUserName(4);
        expect(data).toEqual('Mark');
      });
    });
  
    describe('when the user id does not exists', () => {
      it('returns an error', async () => {
        expect.assertions(1);
        try {
          await getUserName(1);
        } catch (error) {
          expect(error).toEqual({ error: 'User with 1 not found.' });
        }
      });
    });
  });

