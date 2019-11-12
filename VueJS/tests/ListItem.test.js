import { shallowMount } from "@vue/test-utils";
import TodoItem from "../../1/components/ListItem.js";

const wrapper = shallowMount(TodoItem, {
  propsData: {
    id: "1",
    message: "test Text"
  }
});

describe("TodoItem", () => {
  test("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  test("contains the message", () => {
    expect(wrapper.html()).toContain("test Text");
  });
  test("showEdit changes visibility", () => {
    wrapper.vm.showEditForm();
    expect(wrapper.vm.isHidden).toBe(false);
  });
});
