import { useMemo, useRef } from 'react';
import { findTimeRange } from '../utils/common';

const useTimeRange = (inOutObjectsWithId, currentTime, basicFilter) => {
  const currentTimeRangeRef = useRef({ start: 0, end: 0 });
  const currentActiveObjectIds = useRef([]);
  const groupedObjectIdsByTime = useMemo(() => {
    const inOuts = [];
    const result = { 0: [] };
    const inOutObjectIds = Object.keys(inOutObjectsWithId);
    const filteredInOutObjectIds = !basicFilter
      ? inOutObjectIds
      : inOutObjectIds.filter(
          (id) => inOutObjectsWithId[id][basicFilter.key] === basicFilter.value
        );

    filteredInOutObjectIds.forEach((id) => {
      if (
        inOutObjectsWithId[id].in !== undefined &&
        !inOuts.includes(inOutObjectsWithId[id].in)
      ) {
        inOuts.push(inOutObjectsWithId[id].in);
      }

      if (
        inOutObjectsWithId[id].out !== undefined &&
        !inOuts.includes(inOutObjectsWithId[id].out)
      ) {
        inOuts.push(inOutObjectsWithId[id].out);
      }
    });

    inOuts.forEach((time) => {
      const activeIds = filteredInOutObjectIds.filter((id) => {
        const isIn =
          inOutObjectsWithId[id].in === undefined
            ? true
            : inOutObjectsWithId[id].in <= time;
        const isOut =
          inOutObjectsWithId[id].out === undefined
            ? true
            : inOutObjectsWithId[id].out > time;

        return isIn && isOut;
      });

      result[time] = activeIds;
    });

    return result;
  }, []);

  const timeList = useMemo(() => {
    const times = Object.keys(groupedObjectIdsByTime).map((time) =>
      parseFloat(time)
    );

    return times.sort((a, b) => a - b);
  }, [groupedObjectIdsByTime]);

  if (
    currentTime <= currentTimeRangeRef.current.start ||
    currentTime >= currentTimeRangeRef.current.end
  ) {
    const [start, end] = findTimeRange(timeList, currentTime);
    const currentObjectIds = groupedObjectIdsByTime[start] || [];

    currentTimeRangeRef.current.start = start || 0;
    currentTimeRangeRef.current.end = end;
    currentActiveObjectIds.current = currentObjectIds;
  }

  return currentActiveObjectIds.current;
};

export default useTimeRange;
