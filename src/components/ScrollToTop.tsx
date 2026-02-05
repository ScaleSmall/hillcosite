import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Set focus to first H1 or main landmark
    // Use a small delay to ensure the new page content has rendered
    const timeoutId = setTimeout(() => {
      // Try to find the first H1 with data-focus-target attribute
      let focusTarget = document.querySelector('h1[data-focus-target]') as HTMLElement;

      // If no explicit focus target, find the first H1 in main
      if (!focusTarget) {
        focusTarget = document.querySelector('main h1') as HTMLElement;
      }

      // If still no H1, fall back to main landmark
      if (!focusTarget) {
        focusTarget = document.querySelector('#main-content') as HTMLElement;
      }

      // Ensure element is focusable and focus it
      if (focusTarget) {
        if (focusTarget.tabIndex === -1 || focusTarget.tabIndex === 0) {
          // Element is already focusable
        } else {
          focusTarget.tabIndex = -1;
        }

        // Focus with preventScroll to avoid jarring scroll behavior
        try {
          focusTarget.focus({ preventScroll: true });
        } catch (e) {
          // Fallback for browsers that don't support preventScroll
          focusTarget.focus();
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;