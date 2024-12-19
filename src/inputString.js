export const stringToNumber = (value) => {
    if(value.trim() === ""){
        throw new Error(`Input empty or with spaces, please review the input.`);
    }
    const number = Number(value.trim());

    if (isNaN(number)) {
        throw new Error(`'${value}' cannot be parsed as a number.`);
    }

    return number;
}

export const generateFibonacci = (n) => {
	const sequence = [0, 1];

	for (let i = 2; i < n; i++) {
		sequence[i] = sequence[i - 1] + sequence[i - 2];
	}

	return sequence;
};