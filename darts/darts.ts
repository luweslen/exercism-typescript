export function score(x: number, y: number): number {
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (radius <= 1) return 10;
  if (radius <= 5) return 5;
  if (radius <= 10) return 1;

  return 0
}
