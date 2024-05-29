// utils/slugify.ts

function slugify(text: string): string {
    return text
        .toString() // Convert to string (already a string, but for safety)
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing whitespace
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

export default slugify;
