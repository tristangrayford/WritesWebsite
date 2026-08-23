import { ReaderContent } from "./ReaderContent";
import { ReaderNavButton } from "./ReaderNavButton";
import { useReaderPagination } from "./useReaderPagination";
import { useEffect, useRef, useCallback } from "react";
import { testBookMeta, testChapter } from "./TestBookData";

export const ReaderDisplay = () => {
  const chapterData = testChapter;
  const bookMeta = testBookMeta;
  const { title, content } = chapterData;
  const { title: bookTitle } = bookMeta;

  const { viewportRef, contentPages, contentSlice, setContentSlice } =
    useReaderPagination({ content });

  const goNext = useCallback(() => {
    setContentSlice((prev) => Math.min(contentPages.length - 1, prev + 1));
  }, [contentPages.length, setContentSlice]);

  const goPrev = useCallback(() => {
    setContentSlice((prev) => Math.max(0, prev - 1));
  }, [setContentSlice]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;

      if (isTypingTarget) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [goNext, goPrev]);

  // Swipe navigation
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;

      // Only trigger if horizontal swipe is dominant and > 50px
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev, viewportRef]);

  return (
    <div className="reader">
      <div className="reader-main-container">
        <div className="reader-sidebar">
          <ReaderNavButton
            onClick={goPrev}
            text={"Prev Page"}
            disabled={contentSlice <= 0}
          />
        </div>
        <div className="reader-content-area">
          <div className="reader-header">
            <h4>{bookTitle}</h4>
            <h2>{title}</h2>
          </div>
          <div className="reader-progress-container">
            <progress
              className="reader-progress"
              value={contentSlice + 1}
              max={contentPages.length}
            />
          </div>
          <div className="reader-mobile-nav">
            <ReaderNavButton
              onClick={goPrev}
              text={"Prev"}
              disabled={contentSlice <= 0}
            />
            <span className="reader-mobile-page">
              {contentSlice + 1} / {contentPages.length}
            </span>
            <ReaderNavButton
              onClick={goNext}
              text={"Next"}
              disabled={contentSlice >= contentPages.length - 1}
            />
          </div>
          <div ref={viewportRef} className="reader-viewport">
            <ReaderContent text={contentPages[contentSlice] ?? []} />
          </div>
          <div className="reader-mobile-nav">
            <ReaderNavButton
              onClick={goPrev}
              text={"Prev"}
              disabled={contentSlice <= 0}
            />
            <span className="reader-mobile-page">
              {contentSlice + 1} / {contentPages.length}
            </span>
            <ReaderNavButton
              onClick={goNext}
              text={"Next"}
              disabled={contentSlice >= contentPages.length - 1}
            />
          </div>
        </div>
        <div className="reader-sidebar">
          <ReaderNavButton
            onClick={goNext}
            text={"Next Page"}
            disabled={contentSlice >= contentPages.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
