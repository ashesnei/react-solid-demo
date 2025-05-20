import { useCallback } from 'react';

export function useCapitalize() {
  return useCallback((text: string) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }, []);
}


export function useCapitalizeWords() {
  return useCallback((text: string) => {
    if (!text) return '';
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, []);
}
