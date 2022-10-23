import { fireEvent, render } from "@testing-library/react-native";
import Header from "../index";

jest.mock("@expo/vector-icons", () => {
  return {
    Ionicons: () => jest.fn(),
  };
});

describe("Header", () => {
  test("should render component without crash", () => {
    const { queryByTestId } = render(
      <Header rightIcon="home" leftIcon="home" />
    );
    const HeaderComponent = queryByTestId("Header");

    expect(HeaderComponent).toBeTruthy();
  });

  test("should render left icon when leftIcon props given", () => {
    const { queryByTestId } = render(<Header leftIcon="home" />);
    const LeftIcon = queryByTestId("LeftIcon");
    const RightIcon = queryByTestId("RightIcon");

    expect(LeftIcon).toBeTruthy();
    expect(RightIcon).not.toBeTruthy();
  });

  test("should render right icon when rightIcon props given", () => {
    const { queryByTestId } = render(<Header rightIcon="home" />);
    const LeftIcon = queryByTestId("LeftIcon");
    const RightIcon = queryByTestId("RightIcon");

    expect(LeftIcon).not.toBeTruthy();
    expect(RightIcon).toBeTruthy();
  });

  test("should prop function triggered when on press [LeftIconButton]", () => {
    const fn = jest.fn();

    const { queryByTestId } = render(
      <Header leftIcon="home" leftOnPress={fn} />
    );
    const LeftButton = queryByTestId("LeftIcon");

    LeftButton && fireEvent.press(LeftButton);
    expect(fn).toHaveBeenCalled();
  });

  test("should prop function triggered when on press [RightIconButton]", () => {
    const fn = jest.fn();

    const { queryByTestId } = render(
      <Header rightIcon="home" rightOnPress={fn} />
    );
    const RightIcon = queryByTestId("RightIcon");

    RightIcon && fireEvent.press(RightIcon);
    expect(fn).toHaveBeenCalled();
  });

  test("should title Text render right text", () => {
    const title = "TEST";
    const { queryByTestId } = render(<Header title={title} />);
    const Title = queryByTestId("Title");

    expect(Title?.children[0]).toBe(title);
  });
});
