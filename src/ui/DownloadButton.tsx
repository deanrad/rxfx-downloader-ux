import { useRef } from "react";
import { createBlockingEffect, concat } from "@rxfx/service";
import { tweenToValue, THRESHOLD } from "@rxfx/animation";
import { tap } from "rxjs/operators";

const throb = createBlockingEffect<HTMLElement>((btn: HTMLButtonElement) => {
  return concat(
    tweenToValue({ scale: 1.0 }, { scale: 1.5 }, THRESHOLD.AnimationShort),
    tweenToValue({ scale: 1.5 }, { scale: 1.0 }, THRESHOLD.AnimationShort)
  ).pipe(
    tap(({ scale }) => {
      btn.style.transform = `scale(${scale},${scale})`;
    })
  );
});

export function DownloadButton() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const ackClick = () => {
    throb.request(btnRef.current);
  };

  return (
    <button onClick={ackClick} ref={btnRef}>
      Download Large File
    </button>
  );
}
