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

export function getRandomColor() {
  if (i > 5) {
    i = 0;
  }
  i++;
  return colors[i];
}
