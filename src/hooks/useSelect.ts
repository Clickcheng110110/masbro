/**
 *
 *  用于选中态的自定义方法
 *
 *
 *  More.....
 */

import { useCallback, useState } from "react";

function useSelect(
  value: any = null
): [current: any, onSelect: (record: any) => void] {
  // 点击后出现按钮组
  const [current, setCurrent] = useState(value);

  const onSelect = useCallback((record: any) => {
    setCurrent(record);
  }, []);

  return [current, onSelect];
}
export default useSelect;
