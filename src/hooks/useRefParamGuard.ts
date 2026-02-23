import { useEffect, useState } from 'react';

export function useRefParamGuard(): boolean {
  const [hasRefParam, setHasRefParam] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);

    const refKeys = [...url.searchParams.keys()].filter(
      key => key.toLowerCase() === 'ref'
    );

    if (refKeys.length === 0) return;

    refKeys.forEach(key => url.searchParams.delete(key));

    const remaining = url.searchParams.toString();
    const newUrl =
      url.pathname +
      (remaining ? '?' + remaining : '') +
      url.hash;

    window.history.replaceState({}, '', newUrl);
    setHasRefParam(true);
  }, []);

  return hasRefParam;
}
