import { TypographyPopover } from "./buttons/TypographyMenu";
import { IconClose } from "./material/IconClose";
import { IconTune } from "./material/IconTune";
import { useGlobal } from "./useGlobal";
import { Block } from "./Vis";

export function StickyNav() {
  const { isFullscreen, setIsFullscreen, setIsSplitView } = useGlobal();
  return (
    <div className="print:hidden sticky top-0 z-10 bg-white">
      <div className="flex gap-2 justify-between print:hidden pt-4 pb-2">
        <div
          onClick={() => setIsSplitView((s) => !s)}
          className="opacity-50 hover:opacity-100 cursor-pointer flex-0"
        >
          <IconTune className="w-8" />
        </div>
        <div></div>
        <div className="flex-0 flex gap-8">
          <TypographyPopover />
          <Block when={isFullscreen}>
            <div
              onClick={() => setIsFullscreen(false)}
              className="opacity-50 hover:opacity-100 cursor-pointer flex-0"
            >
              <IconClose className="w-8" />
            </div>
          </Block>
        </div>
      </div>
      <hr className="opacity-10 mb-8" />
    </div>
  );
}
