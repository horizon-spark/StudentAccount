export function hasDetails(w) {
  return (
    Boolean(w.primary || w.secondary) ||
    (Array.isArray(w.items) && w.items.length > 0) ||
    Boolean(w.more)
  );
}
