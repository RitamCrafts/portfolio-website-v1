export function initials(name) {
    let initial = "";

    for (const char of name) {
        if (char >= 'A' && char <= 'Z') {
            initial += char;
        }
    }

    return initial;
}