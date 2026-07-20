/**
 * Lightweight `clsx`-style class combiner - no extra dependency needed
 * beyond the specified stack. Accepts strings, falsy values, and
 * objects of { className: boolean }.
 */
export function cn(...inputs) {
  const classes = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string") {
      classes.push(input);
      continue;
    }

    if (Array.isArray(input)) {
      classes.push(cn(...input));
      continue;
    }

    if (typeof input === "object") {
      for (const key of Object.keys(input)) {
        if (input[key]) classes.push(key);
      }
    }
  }

  return classes.filter(Boolean).join(" ");
}
