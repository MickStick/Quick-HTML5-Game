function fakeTest(a, b){
    return a + b
}

it('5 + 5 equal 10, no?', () => {
    expect(fakeTest(5,5)).toBe(10)
})