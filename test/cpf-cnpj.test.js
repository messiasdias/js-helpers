const {BRDocument} = require('./../src')

test('Máscara CNPJ do formato 00000000000000 para o formato 00.000.000/0000-00', () => {
  expect(BRDocument.cnpjMask('00000000000000')).toBe('00.000.000/0000-00');
});

test('Remove Máscara CNPJ do formato 00.000.000/0000-00  para o formato 00000000000000', () => {
  expect(BRDocument.unmask('00.000.000/0000-00')).toBe('00000000000000');
});

test('Máscara CPF do formato 00000000000 para o formato 000.000.000-00', () => {
  expect(BRDocument.cpfMask('00000000000')).toBe('000.000.000-00');
});

test('Remove Máscara CPF do formato 00.000.000/0000-00  para o formato 00000000000000', () => {
  expect(BRDocument.unmask('000.000.000-00')).toBe('00000000000');
});