export function repeatWord(word, num) {
    if (num < 0) return null;
    if (word.length == 0) return '';

    let res = '';
    for (let i = 0; i < num; i++) {
        res += word.trim() + `${i + 1}` + ' ';
    }
    return res.trim();
}