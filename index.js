function slugify(text) {
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Input must be a non-empty string");
  }

  const symbolMap = {
    "&": "-and-",
    "|": "-or-",
    $: "-dollar-",
    "¢": "-cent-",
    "£": "-pound-",
    "¤": "-currency-",
    "¥": "-yen-",
    "@": "-at-",
    "%": "-percent-",
    // "#": "-number-",
    "*": "-star-",
    "+": "-plus-",
    "=": "-equals-",
    "/": "-",
    ">": "-greater-",
    "<": "-less-",
    "!": "-",
    "^": "-caret-",
    ".": "-",
  };

  return (
    text
      .toString() // Ensure the input is a string
      .normalize("NFD") // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .toLowerCase() // Convert to lowercase
      .trim() // Trim whitespace
      // Replace symbols with corresponding words using the symbolMap
      .replace(/[&|$¢£¤¥@%\*\+\=\/<>!^\.]/g, (match) => symbolMap[match])
      // Remove all remaining non-alphanumeric characters except spaces and dashes
      .replace(/[^a-z0-9\s-]/g, "")
      // Replace spaces and multiple dashes with a single dash
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") // Collapse multiple dashes into one
      .replace(/^-|-$/g, "") // Remove leading or trailing dashes
  );
}

module.exports = slugify;
