import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './ShoppingCart.module.css';

interface Props {
  className?: string;
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 8:1031 */
export const ShoppingCart: FC<Props> = memo(function ShoppingCart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.group}>{props.swap?.group || <GroupIcon className={classes.icon} />}</div>
    </div>
  );
});
