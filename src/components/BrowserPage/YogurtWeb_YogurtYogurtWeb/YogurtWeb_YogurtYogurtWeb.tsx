import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AddIconItemIcon } from './AddIconItemIcon';
import classes from './YogurtWeb_YogurtYogurtWeb.module.css';

interface Props {
  className?: string;
  classes?: {
    image2?: string;
    root?: string;
  };
}
/* @figmaId 1:634 */
export const YogurtWeb_YogurtYogurtWeb: FC<Props> = memo(function YogurtWeb_YogurtYogurtWeb(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image2 || ''} ${classes.image2}`}></div>
      <div className={classes.frame11862}>
        <div className={classes.enjoyingThisApp}>$0.69</div>
      </div>
      <div className={classes.enjoyingThisApp2}>Yogurt</div>
      <div className={classes.enjoyingThisApp3}>1 lb</div>
      <div className={classes.addIconItem}>
        <AddIconItemIcon className={classes.icon} />
      </div>
    </div>
  );
});
