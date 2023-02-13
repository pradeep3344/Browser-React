import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AddIconItemIcon } from './AddIconItemIcon';
import classes from './BananaWeb_NormalBananaWeb.module.css';

interface Props {
  className?: string;
  classes?: {
    bananaImage?: string;
    root?: string;
  };
}
/* @figmaId 1:562 */
export const BananaWeb_NormalBananaWeb: FC<Props> = memo(function BananaWeb_NormalBananaWeb(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.bananaImage || ''} ${classes.bananaImage}`}></div>
      <div className={classes.frame11862}>
        <div className={classes.enjoyingThisApp}>$0.69</div>
      </div>
      <div className={classes.enjoyingThisApp2}>Banana 1 ct</div>
      <div className={classes.addIconItem}>
        <AddIconItemIcon className={classes.icon} />
      </div>
      <div className={classes.enjoyingThisApp3}>18 oz</div>
    </div>
  );
});
