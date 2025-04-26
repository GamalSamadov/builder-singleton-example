function myFunction(a: number, b: number): number {
	return a + b
}

it('should add two numbers', () => {
	const result = myFunction(1, 2)
	expect(result).toBe(3)
})
