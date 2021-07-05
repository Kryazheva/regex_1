// eslint-disable-next-line no-unused-vars
import Validator from '../Validator';

test('Test username - Neotology_123-neo', () => {
  const result = new Validator('Neotology_123-neo');
  expect(result.validateUsername()).toBeTruthy();
});

test('Test username - Neotology2_test-neo', () => {
  const result = new Validator('Neotology2_test-neo');
  expect(result.validateUsername()).toBeTruthy();
});

test('Test username - 1111Neotology2_test-neo', () => {
  const result = new Validator('1111Neotology2_test-neo');
  expect(result.validateUsername()).toBeFalsy();
});

test('Test username - "___"', () => {
  const result = new Validator('');
  expect(result.validateUsername()).toBeFalsy();
});
