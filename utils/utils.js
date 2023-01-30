export const set_first_char_to_capital = (original_string) => {
    return original_string?.replace(/^\w/, c => c.toUpperCase());
}