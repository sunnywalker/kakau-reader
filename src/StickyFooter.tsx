import cx from "classnames";
import { useGlobal } from "./useGlobal";
import { Levels } from "./UnmarkedLevels";
import { DrawerIcons } from "./DrawerNav";
import { Orthography } from "./url";
import { SpaceBar } from "./Spacebar";
import { useParams } from "react-router";

export function StickyFooter() {
  const { waihonaId, mooleloId } = useParams();
  const { text, orthography } = useGlobal();

  const hide =
    orthography == Orthography.marked ||
    // is on waihona page
    (waihonaId && !mooleloId) ||
    // is on home page and no text
    (!waihonaId && !mooleloId && !text);

  return (
    <div
      className={cx("print:hidden sticky bottom-0 z-10 bg-(--bg-base)", {
        hidden: hide,
      })}
    >
      <hr className="opacity-10" />
      <div className="flex justify-between print:hidden pt-4 pb-4">
        <div className="flex-0"></div>
        <div className="flex-1 flex justify-center gap-4 items-center">
          <DrawerIcons show={["filter"]} />
          <SpaceBar />
          <Levels />
        </div>

        <div className="flex-0"></div>
      </div>
    </div>
  );
}
