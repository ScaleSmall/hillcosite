import { useEffect, useState } from 'react';

export function useRefParamGuard(): boolean {
  const [hasRefParam, setHasRefParam] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.has('ref')) {
      setHasRefParam(true);
      window.history.replaceState(
        {},
        '',
        window.location.origin + window.location.pathname
      );
    }
  }, []);

  return hasRefParam;
}
