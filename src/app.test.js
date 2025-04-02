const { soma } = require('./app');

test('soma de 1 + 2 é igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('soma de 0 + 0 é igual a 0', () => {
    expect(soma(0, 0)).toBe(0);
});

test('soma de -1 + -1 é igual a -2', () => {
    expect(soma(-1, -1)).toBe(-2);
});

test('soma de 10 + 20 é igual a 30', () => {
    expect(soma(10, 20)).toBe(30);
});

test('soma de 1.5 + 2.5 é igual a 4', () => {
    expect(soma(1.5, 2.5)).toBe(4);
});