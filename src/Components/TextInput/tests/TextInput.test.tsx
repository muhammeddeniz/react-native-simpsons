import { render, fireEvent } from "@testing-library/react-native";
import TextInput from "../index";

describe("TextInput", () => {
  test("should render component without crash", () => {
    const text = "TEST";
    const { queryByTestId } = render(<TextInput title={text} />);
    const TextInputContainer = queryByTestId("TextInputContainer");
    const TextInputComponent = queryByTestId("TextInput");

    expect(TextInputComponent).toBeTruthy();
    expect(TextInputContainer).toBeTruthy();
  });

  test("should Name text render right text", () => {
    const text = "TEST";
    const { queryByTestId } = render(<TextInput title={text} />);
    const TextInputText = queryByTestId("Title");

    expect(TextInputText?.children[0]).toBe(text);
  });

  test("should change text when onChangeText function called", () => {
    const text = "TEST";
    const mockFn = jest.fn();

    const { queryByTestId } = render(
      <TextInput title={text} onChangeText={mockFn} />
    );

    const answerInputs = queryByTestId("TextInput");

    answerInputs && fireEvent.changeText(answerInputs, "a1");

    expect(mockFn).toHaveBeenCalled();
  });
});
