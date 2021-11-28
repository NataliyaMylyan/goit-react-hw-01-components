const colors = [
  'red',
  'aquamarine',
  'green',
  'purple',
  'yellow',
  'orange',
  'pink',
];
let i = 0;

function getRandomColor() {
  // let i = 0;
  if (i > 5) {
    i = 0;
  }
  i++;
  console.log(i, colors[i]);
  return colors[i];
}
export default getRandomColor;
