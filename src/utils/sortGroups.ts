export function sortGroups(a: { group: number; }[], b: { group: number; }[]) {
  if (a[0]?.group > b[0]?.group) {
    return 1;
  }
  if (a[0]?.group < b[0]?.group) {
    return -1;
  }
  return 0;
};