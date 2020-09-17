import React from "react";
import { useFetchData } from '../../utils/index';
import { default as useTabs } from './hooks';
import { LoadingSpinner } from '../../shared';

// **TODO** Find cleaner way to test whole component
function Tabs() {
  const data = useFetchData('static/data.json');
  const haveData = !!data;
  const tabController = useTabs.useTabController(0); // set default to the first tab

  return (
    <>
      {
        !!haveData ?
        <section className="tabs">
          <div className="grid grid--col-four tabs__tabs">
            { data.map( (e,i) => {
                return (
                  <h4
                    key={"tabs-title" + i}
                    id={"tabs-title-" + i}
                    className={`button tabs__title ${i === tabController.currentTab ? 'active' : ''}`}
                    data-tab-key={i}
                    data-tab-elem="desktop-tab"
                    onClick={tabController.onClick}
                  >
                      {e.title}
                  </h4>
                )
              })}
          </div>
          <div className="tabs__body-container">
            { data.map( (e,i) => {
                return (
                  <div
                    key={"tabs-body-row-" + i}
                    id={"tabs-body-" + i}
                    className={`tabs__body ${i === tabController.currentTab ? 'active' : ''}`}
                    data-tab-key={i}
                    data-tab-elem="body-tab"
                    onClick={tabController.onClick}
                  >
                    <h5 className="tabs__body-title">{e.title}</h5>
                    <div className="tabs__body-content" dangerouslySetInnerHTML={{__html: e.content}} />
                  </div>
                )
            })}
          </div>
        </section>
        :
        <LoadingSpinner />
      }
    </>
  );
};

// **TODO** best way to break up tests logically? hooks tested in context/implementation, rendering, general component tests
describe("component: tabs", () => {

  describe("component: ", () => {
    test("renders loading spinner while data fetches", () => {
      // loading spinner is visible on initial load
      // if data is false check for spinner?
      // need to delay or even trigger certain tests as specific events happen
    });
    test("gets data", () => {
      // check returned data value has content
    });
    test("renders tabs when data fetched", () => {
      // check that tabs actually get drawn
      // if data is true then check for tabs
    });
    test("rendered tabs match data", () => {
      // compare rendered tabs against fetched data set
    });
  });

  describe("hook tabsController: ", () => {
    test("handle click event to change tab", () => {
      // actually act() a click event on different tabs and test both the classes, and the currentTab state
    });
    test("accordions expand", () => {
      // Check for active accordion
    });
    test("accordions collapse", () => {
      // check for no active accordions?
    });
    test("do not show multiple active tabs/accordions", () => {
      // Check for active?
    });
  });

});

// import { renderHook, act } from '@testing-library/react-hooks';
// import { default as useTabs } from './index';

// describe('hooks: useTabs', () => {
//   describe('hook: useTabController', () => {

//     // Test creation is working
//     test('return: currentTab', () => {
//       const { result } = renderHook(() => useTabs.useTabController(0));
//       expect(result.current.currentTab).toBe(0);
//     });

//     // Test the various click events
//     /*
//       Reference:
//       https://medium.com/@Charles_Stover/writing-testable-react-components-with-hooks-23441ee582d5
//       https://css-tricks.com/testing-react-hooks-with-enzyme-and-react-testing-library/
//     */
//     describe('event: handleClick', () => {
//       test('click: tab 2 active', () => {

//         // Given: default is tab 1, id=0, currentTab=0
//         const { result } = renderHook(() => useTabs.useTabController(0));
//         const  updatedTab = { currentTarget: { dataset: { tabKey: 1 } } }; // Fake a click result dom element
//         expect(result.current.currentTab).toBe(0);

//         // When: fire click event
//         act(() => {
//           result.current.onClick(updatedTab);
//         });

//         // Then: expect current tab to change to tab 2, id=1, currentTab=1
//         expect(result.current.currentTab).toBe(1);

//       });
//       test('click: tab 3 active', () => {
//         // Given: default is tab 1, id=0, currentTab=0
//         const { result } = renderHook(() => useTabs.useTabController(0));
//         const  updatedTab = { currentTarget: { dataset: { tabKey: 2 } } }; // Fake a click result dom element
//         expect(result.current.currentTab).toBe(0);

//         // When: fire click event
//         act(() => {
//           result.current.onClick(updatedTab);
//         });

//         // Then: expect current tab to change to tab 3, id=2, currentTab=2
//         expect(result.current.currentTab).toBe(2);
//       })
//       test('click: tab 4 active', () => {
//         // Given: default is tab 1, id=0, currentTab=0
//         const { result } = renderHook(() => useTabs.useTabController(0));
//         const  updatedTab = { currentTarget: { dataset: { tabKey: 3 } } }; // Fake a click result dom element
//         expect(result.current.currentTab).toBe(0);

//         // When: fire click event
//         act(() => {
//           result.current.onClick(updatedTab);
//         });

//         // Then: expect current tab to change to tab 4, id=3, currentTab=3
//         expect(result.current.currentTab).toBe(3);
//       })
//     });

//     /*
//     test('event: handleClick', () => {
//       const { result } = renderHook(() => useTabs.useTabController(0));

//       expect(result.current.currentTab).toBe(0);

//       // Fake a click result dom element
//       // **TODO** See if can trigger a proper click event
//       let updatedTab = { currentTarget: { dataset: { tabKey: 2 } } };

//       act(() => {
//         result.current.onClick(updatedTab);
//       });

//       expect(result.current.currentTab).toBe(2);

//     });
//     */

//     /*
//       import React from "react";
//       import { render, fireEvent } from "@testing-library/react";
//       import Todo from "../Todo";
//       import "@testing-library/jest-dom/extend-expect";

//       test("Todo", () => {
//         // Tests go here
//         it("displays initial to-dos", () => {
//           const { getByTestId } = render(<Todo />);
//           const todos = getByTestId("todos");
//           expect(todos.children.length).toBe(2);
//         });
//         it("adds a new to-do", () => {
//           const { getByTestId, getByText } = render(<Todo />);
//           const input = getByTestId("input");
//           const todos = getByTestId("todos");
//           input.value = "Fix failing tests";
//           fireEvent.click(getByText("Add Task"));
//           expect(todos.children.length).toBe(3);
//         });
//         it("deletes a to-do", () => {
//           const { getAllByTestId, getByTestId } = render(<Todo />);
//           const todos = getByTestId("todos");
//           const deleteButton = getAllByTestId("delete-button");
//           const first = deleteButton[0];
//           fireEvent.click(first);
//           expect(todos.children.length).toBe(1);
//         });
//       }
//     */
//   })
// });
