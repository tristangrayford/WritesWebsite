import { useLayoutEffect, useMemo, useRef, useState } from "react";

/**
 * Splits paragraphs across pages by measuring word-by-word overflow.
 * Each page is an array of strings (paragraph fragments).
 * A paragraph that spans a page break becomes two fragments on adjacent pages.
 */
export const useReaderPagination = ({ content }: { content: string }) => {
  const paragraphs = useMemo(() => {
    const normalized = content
      .replace(/<\/?\s*br\s*\/?>/gi, "\n")
      .replace(/&lt;\/?\s*br\s*\/??\s*&gt;/gi, "\n");

    return normalized
      .split(/\n+/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
  }, [content]);

  const viewportRef = useRef<HTMLDivElement>(null);
  const [contentPages, setContentPages] = useState<string[][]>([[]]);
  const [contentSlice, setContentSlice] = useState(0);
  const hasPaginated = useRef(false);

  useLayoutEffect(() => {
    if (hasPaginated.current || paragraphs.length === 0) {
      return;
    }

    const viewportElement = viewportRef.current;
    if (!viewportElement) {
      return;
    }

    const width = viewportElement.clientWidth;
    const height = viewportElement.clientHeight;

    if (width <= 0 || height <= 0) {
      return;
    }

    // Create an offscreen clone matching the reader-content box exactly
    const measure = document.createElement("div");
    measure.style.position = "absolute";
    measure.style.left = "-99999px";
    measure.style.top = "0";
    measure.style.visibility = "hidden";
    measure.style.width = `${width}px`;
    measure.style.height = `${height}px`;
    measure.style.padding = "2rem 2.5rem";
    measure.style.border = "2px solid transparent";
    measure.style.boxSizing = "border-box";
    measure.style.overflow = "hidden";
    measure.style.textAlign = "justify";
    measure.style.fontSize = "1rem";
    measure.style.lineHeight = "1.8";
    document.body.appendChild(measure);

    const pages: string[][] = [];
    let currentPage: string[] = [];

    const isOverflowing = () => measure.scrollHeight > measure.clientHeight;

    const startNewPage = () => {
      pages.push(currentPage);
      currentPage = [];
      measure.innerHTML = "";
    };

    const createParagraphEl = (text: string, isFirst: boolean) => {
      const p = document.createElement("p");
      p.style.margin = "0 0 0.75rem 0";
      p.style.padding = "0";
      p.style.textIndent = isFirst ? "0" : "1.5rem";
      p.textContent = text;
      return p;
    };

    for (let i = 0; i < paragraphs.length; i++) {
      const isFirstOnPage = currentPage.length === 0;
      const p = createParagraphEl(paragraphs[i], isFirstOnPage);
      measure.appendChild(p);

      if (!isOverflowing()) {
        // Whole paragraph fits
        currentPage.push(paragraphs[i]);
        continue;
      }

      // Paragraph overflows — split it word by word
      measure.removeChild(p);

      const words = paragraphs[i].split(/\s+/);
      let built = "";
      let wordIdx = 0;

      // Create a new <p> for the partial paragraph
      let activeEl = createParagraphEl("", isFirstOnPage);
      measure.appendChild(activeEl);

      while (wordIdx < words.length) {
        const next = built ? built + " " + words[wordIdx] : words[wordIdx];
        activeEl.textContent = next;

        if (isOverflowing()) {
          if (built) {
            // Revert to text before this word
            activeEl.textContent = built;
            currentPage.push(built);
          } else {
            // Single word overflows — force it onto this page
            currentPage.push(next);
            wordIdx++;
          }

          // Finalize this page and start a new one
          startNewPage();

          // New <p> on the fresh page
          built = "";
          activeEl = createParagraphEl("", true);
          measure.appendChild(activeEl);
          continue;
        }

        built = next;
        wordIdx++;
      }

      // Remaining text that fit on the current page
      if (built) {
        currentPage.push(built);
      }
    }

    if (currentPage.length > 0) {
      pages.push(currentPage);
    }

    document.body.removeChild(measure);

    hasPaginated.current = true;
    setContentPages(pages.length > 0 ? pages : [[]]);
  }, [paragraphs]);

  return {
    viewportRef,
    contentPages,
    contentSlice,
    setContentSlice,
  };
};
