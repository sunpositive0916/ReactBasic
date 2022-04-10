import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button"

describe('button 컴포넌트 (@testing-library/react)', () => {
    it('컴포넌트가 정상적으로 생성', () => {
        const button = render(<Button />);
        expect(button).not.toBe(null);
    });
    it('"button"이라고 쓰여있는 엘리먼트는 HTMLButtonElement', () => {
        const {getByText} = render(<Button />);

        const buttonElement = getByText('button');

        expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
    });
    it('버튼을 클릭하면 p태그 안에 "버튼이 방금 눌렸다." 라고 출력', () => {
        const {getByText} = render(<Button />);

        const buttonElement = getByText('button');

        fireEvent.click(buttonElement);

        const p = getByText('버튼이 방금 눌렸다.');
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement)
    });
    it('버튼을 클릭하기 전에는 p태그 안에 "버튼이 눌리지 않았다." 라고 출력', () => {
        const {getByText} = render(<Button />);

        const p = getByText('버튼이 눌리지 않았다.');
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement)
    });
    it('버튼을 클릭하고 5초 뒤에는 p태그 안에 "버튼이 눌리지 않았다." 라고 출력', () => {
        jest.useFakeTimers();

        const {getByText} = render(<Button />);

        const buttonElement = getByText('button');

        fireEvent.click(buttonElement);

        // 5초 흐른다.
        act(() => {
            jest.advanceTimersByTime(5000);
        })

        const p = getByText('버튼이 눌리지 않았다.');
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement)
    });
    it('버튼을 클릭하면 5초동안 버튼이 비활성화', () => {
        jest.useFakeTimers();

        const {getByText} = render(<Button />);

        const buttonElement = getByText('button');

        fireEvent.click(buttonElement);

        // 비활성화
        expect(buttonElement).toBeDisabled();

        // 5초 흐른다.
        act(() => {
            jest.advanceTimersByTime(5000);
        })

        // 활성화
        expect(buttonElement).not.toBeDisabled();
    });
})