function isPalindrome(s: string): boolean {
	const str = s.toLowerCase();
	let	left = 0;
	let right = s.length - 1;
	
	while (left < right) {
		if (!/[a-z0-9]/.test(str[left])) {
			left += 1;
			continue;
		}
		
		if (!/[a-z0-9]/.test(str[right])) {
			right -= 1;
			continue;
		}
		
		if (str[left] === str[right]) {
			left += 1;
			right -= 1;
			continue;
		}
		
		return false;
	}
	
	return true;
};