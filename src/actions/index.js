export const incNumber = () => {
	return { type: "Increment" };
};

export const decNumber = (num) => {
	return { type: "Decrement", payload: num };
};

//ACTION -> WHAT TO DO
