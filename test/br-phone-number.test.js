const {BRPhoneNumber} = require('./../src')

test('Máscara Número de Tefefone do formato 81900000000 para o formato (81) 900000000', () => {
  expect(BRPhoneNumber.mask('81900000000')).toBe('(81) 90000-0000');
});

test('Remove Máscara Número de Tefefone do formato (81) 900000000 para o formato 81900000000', () => {
  expect(BRPhoneNumber.unmask('(81) 90000-0000')).toBe('81900000000');
});

test('Máscara Número de Tefefone do formato 81900000000 para o formato (81) 900000000', () => {
  expect(BRPhoneNumber.mask('8100000000')).toBe('(81) 0000-0000');
});

test('Remove Máscara Número de Tefefone do formato (81) 00000000 para o formato 8100000000', () => {
  expect(BRPhoneNumber.unmask('(81) 0000-0000')).toBe('8100000000');
});