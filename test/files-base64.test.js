const {FileBase64} = require('./../src')
const fileBase64 = require('./fileBase64')

test('Teste Encode file para Base64', async () => {
  let file = await FileBase64.decode(fileBase64, 'filename,jpg')
  expect(!!file).true()
});


// test('Teste Decode file para Base64', async () => {
//   let file = await FileBase64.decode(fileBase64, 'filename,jpg')
//   expect(!!file).true()
// });

// test('Remove Máscara CNPJ do formato 00.000.000/0000-00  para o formato 00000000000000', () => {
//   expect(BRDocument.unmask('00.000.000/0000-00')).toBe('00000000000000');
// });

// test('Máscara CPF do formato 00000000000 para o formato 000.000.000-00', () => {
//   expect(BRDocument.cpfMask('00000000000')).toBe('000.000.000-00');
// });

// test('Remove Máscara CPF do formato 00.000.000/0000-00  para o formato 00000000000000', () => {
//   expect(BRDocument.unmask('000.000.000-00')).toBe('00000000000');
// });