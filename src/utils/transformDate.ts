export default function transformDate(date: string | number | Date) {
  const NOVE = 9;
  const adicionaZero = (numero: number) => {
    if (numero <= NOVE) return `0${numero}`;
    return numero;
  }
  const transformaMin = (min: number) => {
    if (min === 0) return '00'
    return min;
  }
  const newDate = new Date(date);
  return `${adicionaZero(newDate.getDate())}/${adicionaZero(newDate
    .getMonth()+1)}/${newDate.getFullYear()} às ${newDate.getHours()}:${transformaMin(newDate.getMinutes())}`
}