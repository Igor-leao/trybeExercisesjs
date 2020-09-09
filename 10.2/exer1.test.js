const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
console.log(uppercase);
test('uppercasewords', (done) => {
  uppercase('palavra_ao_ser_transformada', (str) => {
    expect(str).toBe('PALAVRA_AO_SER_TRANSFORMADA');
    done();
  });
});