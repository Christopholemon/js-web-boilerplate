import { renderHook, act } from '@testing-library/react-hooks';
import { default as useTabs } from './index';

describe('hooks: useTabs', () => {
  describe('useTabController: ', () => {

    // Test creation is working
    test('check currentTab', () => {
      const { result } = renderHook(() => useTabs.useTabController(0));
      expect(result.current.currentTab).toBe(0);
    });

    // Test the various click events
    /*
      Reference:
      https://medium.com/@Charles_Stover/writing-testable-react-components-with-hooks-23441ee582d5
      https://css-tricks.com/testing-react-hooks-with-enzyme-and-react-testing-library/
    */
    describe('handleClick: ', () => {
      test('tab 2 active', () => {

        // Given: default is tab 1, id=0, currentTab=0
        const { result } = renderHook(() => useTabs.useTabController(0));
        const  updatedTab = { currentTarget: { dataset: { tabKey: 1 } } }; // Fake a click result dom element
        expect(result.current.currentTab).toBe(0);

        // When: fire click event
        act(() => {
          result.current.onClick(updatedTab);
        });

        // Then: expect current tab to change to tab 2, id=1, currentTab=1
        expect(result.current.currentTab).toBe(1);

      });
      test('tab 3 active', () => {
        // Given: default is tab 1, id=0, currentTab=0
        const { result } = renderHook(() => useTabs.useTabController(0));
        const  updatedTab = { currentTarget: { dataset: { tabKey: 2 } } }; // Fake a click result dom element
        expect(result.current.currentTab).toBe(0);

        // When: fire click event
        act(() => {
          result.current.onClick(updatedTab);
        });

        // Then: expect current tab to change to tab 3, id=2, currentTab=2
        expect(result.current.currentTab).toBe(2);
      })
      test('tab 4 active', () => {
        // Given: default is tab 1, id=0, currentTab=0
        const { result } = renderHook(() => useTabs.useTabController(0));
        const  updatedTab = { currentTarget: { dataset: { tabKey: 3 } } }; // Fake a click result dom element
        expect(result.current.currentTab).toBe(0);

        // When: fire click event
        act(() => {
          result.current.onClick(updatedTab);
        });

        // Then: expect current tab to change to tab 4, id=3, currentTab=3
        expect(result.current.currentTab).toBe(3);
      })
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
