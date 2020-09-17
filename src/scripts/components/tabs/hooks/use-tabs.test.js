import { renderHook, act } from '@testing-library/react-hooks';
import { default as useTabs } from './index';

describe('hook: useTabs', () => {
  describe('hook: useTabController', () => {

    test('return: currentTab', () => {
      const { result } = renderHook(() => useTabs.useTabController(0));
      expect(result.current.currentTab).toBe(0);
    });

    /*
    test('event: handleClick', () => {
      const { result } = renderHook(() => useTabs.useTabController(0));

      expect(result.current.currentTab).toBe(0);

      // Fake a click result dom element
      // **TODO** See if can trigger a proper click event
      let updatedTab = { currentTarget: { dataset: { tabKey: 2 } } };

      act(() => {
        result.current.onClick(updatedTab);
      });

      expect(result.current.currentTab).toBe(2);

    });
    */

    /*
      import React from "react";
      import { render, fireEvent } from "@testing-library/react";
      import Todo from "../Todo";
      import "@testing-library/jest-dom/extend-expect";

      test("Todo", () => {
        // Tests go here
        it("displays initial to-dos", () => {
          const { getByTestId } = render(<Todo />);
          const todos = getByTestId("todos");
          expect(todos.children.length).toBe(2);
        });
        it("adds a new to-do", () => {
          const { getByTestId, getByText } = render(<Todo />);
          const input = getByTestId("input");
          const todos = getByTestId("todos");
          input.value = "Fix failing tests";
          fireEvent.click(getByText("Add Task"));
          expect(todos.children.length).toBe(3);
        });
        it("deletes a to-do", () => {
          const { getAllByTestId, getByTestId } = render(<Todo />);
          const todos = getByTestId("todos");
          const deleteButton = getAllByTestId("delete-button");
          const first = deleteButton[0];
          fireEvent.click(first);
          expect(todos.children.length).toBe(1);
        });
      }
    */
  })
});
