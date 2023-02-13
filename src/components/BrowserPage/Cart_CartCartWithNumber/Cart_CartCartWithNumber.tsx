import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import classes from './Cart_CartCartWithNumber.module.css';
import { GroupIcon } from './GroupIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 8:1038 */
export const Cart_CartCartWithNumber: FC<Props> = memo(function Cart_CartCartWithNumber(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ShoppingCart
        swap={{
          group: <GroupIcon className={classes.icon} />,
        }}
      />
      {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
    </div>
  );
});
