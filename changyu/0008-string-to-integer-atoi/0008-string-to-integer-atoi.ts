function myAtoi(s: string): number {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    let i = 0;
    let sign = 1;
    let answer = 0;

    while (i < s.length && s[i] === " ") {
        i += 1;
    }

    while (i < s.length && (s[i] === "+" || s[i] === "-")) {
        sign = s[i] === "-" ? -1 : 1;
        i += 1;
    }

    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);

        answer = answer * 10 + digit;

        if (sign * answer < INT_MIN) return INT_MIN;
        if (sign * answer > INT_MAX) return INT_MAX;

        i += 1;
    }

    return sign * answer;
};