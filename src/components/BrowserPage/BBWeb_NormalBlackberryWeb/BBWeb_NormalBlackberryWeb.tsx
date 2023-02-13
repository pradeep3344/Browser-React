import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { AddIconItemIcon } from './AddIconItemIcon';
import classes from './BBWeb_NormalBlackberryWeb.module.css';

interface Props {
  className?: string;
  classes?: {
    image1?: string;
    root?: string;
  };
}
/* @figmaId 1:665 */
export const BBWeb_NormalBlackberryWeb: FC<Props> = memo(function BBWeb_NormalBlackberryWeb(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image1 || ''} ${classes.image1}`}></div>
      <div className={classes.frame11862}>
        <div className={classes.enjoyingThisApp}>$0.69</div>
      </div>
      <div className={classes.enjoyingThisApp2}>Blackberries</div>
      <div className={classes.enjoyingThisApp3}>1 lb</div>
      <div className={classes.addIconItem}>
        <AddIconItemIcon className={classes.icon} />
      </div>
    </div>
  );
});
