import { renderHook, act } from '@testing-library/react-hooks';
import { default as useTabs } from './index';

describe('hook: useTabs', () => {
  describe('hook: useTabController', () => {

    test('return: currentTab', () => {
      const { result } = renderHook(() => useTabs.useTabController(0));
      expect(result.current.currentTab).toBe(0);
    });

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

  })
});
