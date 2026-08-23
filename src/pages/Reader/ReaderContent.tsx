import { useEffect, useRef, memo } from "react";

export const ReaderContent = memo(({ text }: { text: string[] }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clearSelectionInsideReader = () => {
      const contentElement = contentRef.current;
      const selection = window.getSelection();
      if (!contentElement || !selection || selection.rangeCount === 0) {
        return;
      }

      const anchorNode = selection.anchorNode;
      const focusNode = selection.focusNode;
      const intersectsReader =
        (anchorNode != null && contentElement.contains(anchorNode)) ||
        (focusNode != null && contentElement.contains(focusNode));

      if (intersectsReader) {
        selection.removeAllRanges();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") {
        event.preventDefault();
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      event.preventDefault();
    };

    const onDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    const onSelectStart = (event: Event) => {
      event.preventDefault();
    };

    const onSelectionChange = () => {
      clearSelectionInsideReader();
    };

    const onMouseMove = (event: MouseEvent) => {
      if ((event.buttons & 1) === 1) {
        clearSelectionInsideReader();
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("mousedown", onMouseDown, false);
      contentElement.addEventListener("dragstart", onDragStart, false);
      contentElement.addEventListener("selectstart", onSelectStart, false);
    }

    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("selectionchange", onSelectionChange, false);
    document.addEventListener("mousemove", onMouseMove, false);

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("mousedown", onMouseDown, false);
        contentElement.removeEventListener("dragstart", onDragStart, false);
        contentElement.removeEventListener("selectstart", onSelectStart, false);
      }
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("selectionchange", onSelectionChange, false);
      document.removeEventListener("mousemove", onMouseMove, false);
    };
  }, []);

  return (
    <div ref={contentRef} unselectable="on" className="reader-content">
      {text.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </div>
  );
});
