import { Checkbox } from "@mui/material";
import { ModeTKButtons } from "./buttons/TypographyMenu";
import {
  closedClassNoCollisionsLower,
  niceToShowLower,
  pronounsLower,
  closedClassSomeCollisionsLower,
  closedClassMoreCollisionsLower,
} from "./constants";
import cx from "classnames";
import { Title } from "./Title";
import { IconClose } from "./material/IconClose";
import { predicateSortWithoutOkina } from "./helpers";
import { useGlobal, type VisibilitySettings } from "./useGlobal";
import { OleloMaamauDialog } from "./OleloMaamauDialog";

export function SettingsDrawer() {
  const { setIsSplitView } = useGlobal();
  return (
    <>
      <div className="absolute w-full h-full border-r border-neutral-200 inset-0 bg-white/98 overscroll-contain overflow-y-auto">
        <div className="sticky top-0 w-full z-30 mr-px">
          <div className=" w-full flex justify-between p-4 bg-white/95">
            <div>
              <ModeTKButtons />
            </div>
            <div
              className="opacity-50 hover:opacity-100 cursor-pointer"
              onClick={() => {
                setIsSplitView(false);
              }}
            >
              <IconClose className="w-8" />
            </div>
          </div>
          <hr className="opacity-15" />
        </div>

        <div className="p-4">
          <Section
            title={"Akaaka Ole"}
            id="closedClassMoreCollisions"
            items={closedClassMoreCollisionsLower}
          />
          <Section
            title={"Akaaka Iki"}
            id="closedClassSomeCollisions"
            items={closedClassSomeCollisionsLower}
          />

          <Section
            title={"Moakaaka"}
            id="closedClassNoCollisions"
            items={closedClassNoCollisionsLower}
          />
          <Section title={"Olelo Maamau"} id="openClassLevelOne">
            <OleloMaamauDialog />
          </Section>

          <Section
            title="Hoonani"
            id="setting-show-mai-group"
            items={niceToShowLower}
          />
        </div>
        <hr className="opacity-20 mx-16" />

        <div className="p-4">
          <div className="p-4">
            <div className="mb-2">
              <Title>{"Pono"}</Title>
            </div>
            <div className="mb-8 relative">
              {/* <div className="absolute top-0 right-0">
              <Checkbox defaultChecked disabled />
            </div> */}
              {pronounsLower.sort(predicateSortWithoutOkina).map((item) => {
                return <Item text={item} />;
              })}
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 opacity-50">
              <Title>{"Huna ia"}</Title>
            </div>
            <div className="mb-8 relative">
              {["…aʻa…", "…eʻe…", "…iʻi…", "…oʻo…", "…uʻu…"].map((item) => {
                return <Item text={item} disabled={true} />;
              })}
            </div>
          </div>
        </div>
        {/* <hr className="opacity-20 mx-16" /> */}
        <div className="p-4">
          {/* <div className="p-4">
            <div className="mb-2">
              <Title>{"Olelo Maamau"}</Title>
            </div>
            <div className="mb-8 relative">
              <div className="absolute top-0 right-0">
                <Checkbox defaultChecked disabled />
              </div>

              {["…aʻa…", "…eʻe…", "…iʻi…", "…oʻo…", "…uʻu…"].map((item) => {
                return <Item text={item} disabled={true} />;
              })}
            </div>
          </div> */}

          {/* <Section
            id="openClassOkinaLevelOne"
            items={openClassOkinaLevelOneLower}
          />
          <Section
            id="openClassVowelLevelOne"
            items={openClassVowelLevelOneLower}
          /> */}
        </div>
      </div>
    </>
  );
}

function Item({ text, disabled }: { text: string; disabled?: boolean }) {
  return (
    <div
      className={cx("lexend-400 text-lg", {
        "text-neutral-400": disabled,
      })}
    >
      <div>{text}</div>
      <div></div>
    </div>
  );
}
// function toggleVisibilitySetting(id: keyof VisibilitySettings) {
//   return function (state: VisibilitySettings) {
//     return { ...state, [id]: !state[id] };
//   };
// }

export function Section({
  title,
  items,
  id,
  children,
  disableSelect,
}: {
  title?: string;
  items?: string[];
  id: keyof VisibilitySettings;
  children?: React.ReactNode;
  disableSelect?: boolean;
}) {
  const { visibilitySettings, setVisibilitySettings, setShowFurigana } =
    useGlobal();

  const checked = visibilitySettings[id];

  return (
    <div
      onClick={() => {
        if (disableSelect) return;
        setShowFurigana(true);
        setVisibilitySettings((s) => ({ ...s, [id]: !s[id] }));
      }}
      className={cx("mb-8 relative border border-neutral-200 rounded p-4", {
        "bg-cyan-50": !disableSelect && checked,
        "cursor-pointer": !disableSelect,
      })}
      
    >
      {!disableSelect && (
        <div className="absolute top-0 right-0">
          <Checkbox
            checked={checked}
            onChange={(e) => {
              if (disableSelect) return;
              setShowFurigana(true);
              setVisibilitySettings((s) => ({ ...s, [id]: e.target.checked }));
            }}
          />
        </div>
      )}

      {/*  */}
      {title && (
        <div
          className={cx("mb-2 text-black", { "opacity-50": !checked && !disableSelect })}
        >
          <Title>{title}</Title>
        </div>
      )}
      {children}
      {items?.length && (
        <div
          className={cx({
            "grid grid-cols-[auto_1fr] gap-x-16": true,
            "grid-cols-[auto_1fr]": disableSelect,
            "grid-cols-2": !disableSelect,
          })}
        >
          {interleaveHalves(items.sort(predicateSortWithoutOkina)).map(
            (item) => {
              return <Item text={item} disabled={!checked && !disableSelect} />;
            },
          )}
        </div>
      )}
    </div>
  );
}

function interleaveHalves<T>(arr: T[]): T[] {
  const result: T[] = [];
  const mid = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);

  for (let i = 0; i < firstHalf.length; i++) {
    result[i * 2] = firstHalf[i];

    if (i < secondHalf.length) {
      result[i * 2 + 1] = secondHalf[i];
    }
  }

  return result;
}
