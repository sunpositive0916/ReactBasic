// 테스트코드를 분야별로 묶을때 사용
describe('expect test', () => {
    it('37 to equal 37', () => {
        expect(37).toBe(37);
    });
    it('{age: 39} to equal {age: 39}', () => {
        // toBe는 레퍼런스 값을 비교하기 때문에 객체는 다르게 인식하기 때문에 toEqual을 사용해야함
        expect({age: 39}).toEqual({age: 39});
    });
    it('.toHaveLength(길이를 확인)', () => {
        expect("hello").toHaveLength(5);
    });
    it('.toHaveProperty(객체 확인)', () => {
        expect({name: 'sun'}).toHaveProperty('name');
        expect({name: 'sun'}).toHaveProperty('name', 'sun');
    });
    it('.toBeDefined(defined 되어있는지 확인)', () => {
        expect({name: 'sun'}.name).toBeDefined();
        // expect({name: 'sun'}.age).toBeDefined();
    });
    it('.toBeFalsy(falsy한 값인지 확인)', () => {
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();
        expect('').toBeFalsy();
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(NaN).toBeFalsy();
    });
    it('.toBeGreaterThan(뭐보다 크다)', () => {
        expect(10).toBeGreaterThan(9);
    });
    it('.toBeGreaterThanOrEqual(뭐보다 크거나 같다)', () => {
        expect(10).toBeGreaterThanOrEqual(10);
    });
    it('.toBeInstanceOf(어떤 것의 인스턴스냐)', () => {
        // 에러를 상속받은 하위 에러를 쓰로우 한 다음에 에러 타입인지 체크하기 위해 사용
        class Foo{}
        expect(new Foo()).toBeInstanceOf(Foo);
    });
});

// .to~~
// .not.to~~

// 'it' 부분을 test라고 사용해도 됨
// it('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });