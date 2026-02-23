import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useTrailingSlashGuard(): void {
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith('/')) {
      const trimmed = pathname.replace(/\/+$/, '');
      navigate(trimmed + search + hash, { replace: true });
    }
  }, [pathname, search, hash, navigate]);
}
