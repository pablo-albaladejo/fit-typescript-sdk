export const hashCode = (obj: any): number => {
  let hash = 0;
  const str = JSON.stringify(obj);

  if (str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }

  return hash;
};
