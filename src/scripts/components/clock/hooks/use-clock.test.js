import { renderHook } from '@testing-library/react-hooks';
import { default as useClock } from './index';

describe('hooks: useClock', () => {
  describe('hook: useGetTime', () => {
    it('return: useGetTime.prettyTime', () => {
      const { result } = renderHook(() => useClock.useGetTime());
      expect(result.current.prettyTime).toEqual(expect.stringMatching(/[0-9]{2}:[0-9]{2}:[0-9]{2}/g));
    });
  });
});
