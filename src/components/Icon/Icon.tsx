import { IconBaseProps } from "react-icons";
import * as WI from "react-icons/wi";

export type IconName = keyof typeof WI;

export type IconProps = {
  name: IconName;

  className?: string;
} & IconBaseProps;

export function Icon(props: IconProps): React.ReactElement {
  const { name, className, ...rest } = { ...props };

  const Tag = WI[name];

  return className ? (
    <span className={className}>
      <Tag {...rest} />
    </span>
  ) : (
    <Tag {...rest} />
  );
}
