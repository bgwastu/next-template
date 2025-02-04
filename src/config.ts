export const SITE_NAME = "Site name";
export const SITE_DESCRIPTION = "Here is the description";
export const AUTHOR_NAME = "Author name";
export const SITE_KEYWORDS = ["Keyword 1", "Keyword 2", "Keyword 3"];
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://example.com";
