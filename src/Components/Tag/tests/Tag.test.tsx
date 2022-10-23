import { render } from "@testing-library/react-native";
import Tag from "../index";

describe("Tag", () => {
  test("should render component without crash", () => {
    const text = "TEST";
    const { queryByTestId } = render(<Tag text={text} />);
    const TagComponent = queryByTestId("Tag");

    expect(TagComponent).toBeTruthy();
  });

  test("should Name text render right text", () => {
    const text = "TEST";
    const { queryByTestId } = render(<Tag text={text} />);
    const Name = queryByTestId("TagText");

    expect(Name?.children[0]).toBe(text);
  });
});
