import { useEffect, useState } from 'react';

export default function useCustom() {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue('Hello World!');
  }, []);

  return { value };
}
