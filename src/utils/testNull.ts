export default function testNull(value: null | string | number) {
  if (value === null) {
    return '';
  }
  else return value;
}