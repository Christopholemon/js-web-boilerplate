
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title + 'AAAA';
  }, [title]); // Only re-run the effect if title changes
}