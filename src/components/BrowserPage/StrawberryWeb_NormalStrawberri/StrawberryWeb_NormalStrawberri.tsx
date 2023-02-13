import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AddIconItemIcon } from './AddIconItemIcon';
import classes from './StrawberryWeb_NormalStrawberri.module.css';

interface Props {
  className?: string;
  classes?: {
    image1?: string;
    root?: string;
  };
}
/* @figmaId 1:604 */
export const StrawberryWeb_NormalStrawberri: FC<Props> = memo(function StrawberryWeb_NormalStrawberri(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image1 || ''} ${classes.image1}`}></div>
      <div className={classes.frame11861}>
        <div className={classes.enjoyingThisApp}>$0.69</div>
      </div>
      <div className={classes.enjoyingThisApp2}>Strawberries</div>
      <div className={classes.enjoyingThisApp3}>1 lb</div>
      <div className={classes.addIconItem}>
        <AddIconItemIcon className={classes.icon} />
      </div>
    </div>
  );
});
