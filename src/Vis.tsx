import cx from "classnames";

export function Block({
  when,
  children,
}: {
  when: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx({
        block: when,
        hidden: !when,
      })}
    >
      {children}
    </div>
  );
}

export function SmVis({ children }: { children: React.ReactNode }) {
  return <div className={"sm:inline-block hidden"}>{children}</div>;
}
