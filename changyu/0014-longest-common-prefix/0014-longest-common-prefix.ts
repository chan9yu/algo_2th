function longestCommonPrefix(strs: string[]): string {
    const answer = strs[0];

    for (let i = 0; i < answer.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (answer[i] === strs[j][i]) continue;
            return answer.slice(0, i);
        }
    }

    return answer;
};