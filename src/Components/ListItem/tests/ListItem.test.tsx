import { fireEvent, render } from "@testing-library/react-native";
import ListItem from "../index";

jest.mock("@expo/vector-icons", () => {
  return {
    FontAwesome5: () => jest.fn(),
  };
});

const testData = {
  id: "",
  name: "",
  description: "",
  avatar: "",
  job: "",
};

describe("ListItem", () => {
  test("should render component without crash", () => {
    const { queryByTestId } = render(<ListItem {...testData} />);
    const ListItemComponent = queryByTestId("ListItem");

    expect(ListItemComponent).toBeTruthy();
  });

  test("should prop function triggered when on press [ListItemButton]", () => {
    const fn = jest.fn();

    const { queryByTestId } = render(<ListItem {...testData} onPress={fn} />);
    const ListItemButton = queryByTestId("ListItem");

    ListItemButton && fireEvent.press(ListItemButton);
    expect(fn).toHaveBeenCalled();
  });

  test("should prop function triggered when on press [UpButton]", () => {
    const fn = jest.fn();

    const { queryByTestId } = render(<ListItem {...testData} onUpPress={fn} />);
    const UpButton = queryByTestId("UpButton");

    UpButton && fireEvent.press(UpButton);
    expect(fn).toHaveBeenCalled();
  });

  test("should prop function triggered when on press [DownButton]", () => {
    const fn = jest.fn();

    const { queryByTestId } = render(
      <ListItem {...testData} onDownPress={fn} />
    );
    const DownButton = queryByTestId("DownButton");

    DownButton && fireEvent.press(DownButton);
    expect(fn).toHaveBeenCalled();
  });

  test("should prop function triggered when on press [DeleteButton]", () => {
    const fn = jest.fn();

    const { queryByTestId } = render(
      <ListItem {...testData} onDeletePress={fn} />
    );
    const DeleteButton = queryByTestId("DeleteButton");

    DeleteButton && fireEvent.press(DeleteButton);
    expect(fn).toHaveBeenCalled();
  });

  test("should Name text render right text", () => {
    const name = "TEST";
    const { queryByTestId } = render(<ListItem {...testData} name={name} />);
    const Name = queryByTestId("Name");

    expect(Name?.children[0]).toBe(name);
  });
});
