import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddIconItemIcon } from './AddIconItemIcon';
import { AddIconItemIcon2 } from './AddIconItemIcon2';
import { AddIconItemIcon3 } from './AddIconItemIcon3';
import { AddIconItemIcon4 } from './AddIconItemIcon4';
import { AddIconItemIcon5 } from './AddIconItemIcon5';
import { AddIconItemIcon6 } from './AddIconItemIcon6';
import { BananaWeb_NormalBananaWeb } from './BananaWeb_NormalBananaWeb/BananaWeb_NormalBananaWeb';
import { BBWeb_NormalBlackberryWeb } from './BBWeb_NormalBlackberryWeb/BBWeb_NormalBlackberryWeb';
import classes from './BrowserPage.module.css';
import { Cart_CartCartWithNumber } from './Cart_CartCartWithNumber/Cart_CartCartWithNumber';
import { EntypoChevronSmallRightIcon } from './EntypoChevronSmallRightIcon';
import { EntypoChevronSmallRightIcon2 } from './EntypoChevronSmallRightIcon2';
import { EntypoChevronSmallRightIcon3 } from './EntypoChevronSmallRightIcon3';
import { Line616Icon } from './Line616Icon';
import { StrawberryWeb_NormalStrawberri2 } from './StrawberryWeb_NormalStrawberri2/StrawberryWeb_NormalStrawberri2';
import { StrawberryWeb_NormalStrawberri } from './StrawberryWeb_NormalStrawberri/StrawberryWeb_NormalStrawberri';
import { YogurtWeb_YogurtYogurtWeb } from './YogurtWeb_YogurtYogurtWeb/YogurtWeb_YogurtYogurtWeb';

interface Props {
  className?: string;
}
/* @figmaId 1:705 */
export const BrowserPage: FC<Props> = memo(function BrowserPage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle6977}></div>
      <div className={classes.rectangle6979}></div>
      <div className={classes.scrollbar}>
        <div className={classes.thumb}>
          <div className={classes.vSpacer}>
            <div className={classes.textBlock}>
              <p></p>
            </div>
            <div className={classes.textBlock2}>
              <p></p>
            </div>
            <div className={classes.textBlock3}>
              <p></p>
            </div>
            <div className={classes.textBlock4}>
              <p></p>
            </div>
            <div className={classes.textBlock5}>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.line616}>
        <Line616Icon className={classes.icon} />
      </div>
      <div className={classes.frame33}>
        <div className={classes.produce}>Produce</div>
      </div>
      <div className={classes.frame36}>
        <div className={classes.produce2}>Produce</div>
      </div>
      <div className={classes.frame12011}>
        <div className={classes.produce3}>Produce</div>
      </div>
      <div className={classes.frame39}>
        <div className={classes.frozen}>Frozen</div>
      </div>
      <div className={classes.frame12012}>
        <div className={classes.frozen2}>Frozen</div>
      </div>
      <div className={classes.frame34}>
        <div className={classes.preparedFoods}>Prepared foods</div>
      </div>
      <div className={classes.frame12013}>
        <div className={classes.preparedFoods2}>Prepared foods</div>
      </div>
      <div className={classes.frame37}>
        <div className={classes.bakery}>Bakery</div>
      </div>
      <div className={classes.frame12014}>
        <div className={classes.bakery2}>Bakery</div>
      </div>
      <div className={classes.frame12008}>
        <div className={classes.bakery3}>Bakery</div>
      </div>
      <div className={classes.frame12015}>
        <div className={classes.bakery4}>Bakery</div>
      </div>
      <div className={classes.frame40}>
        <div className={classes.meatSeafood}>Meat &amp; Seafood</div>
      </div>
      <div className={classes.frame12016}>
        <div className={classes.meatSeafood2}>Meat &amp; Seafood</div>
      </div>
      <div className={classes.frame35}>
        <div className={classes.cannedFoodsSoups}>Canned foods &amp; Soups</div>
      </div>
      <div className={classes.frame12017}>
        <div className={classes.cannedFoodsSoups2}>Canned foods &amp; Soups</div>
      </div>
      <div className={classes.frame38}>
        <div className={classes.diaryEggs}>Diary &amp; Eggs</div>
      </div>
      <div className={classes.frame12018}>
        <div className={classes.diaryEggs2}>Diary &amp; Eggs</div>
      </div>
      <div className={classes.frame12010}>
        <div className={classes.diaryEggs3}>Diary &amp; Eggs</div>
      </div>
      <div className={classes.frame12019}>
        <div className={classes.diaryEggs4}>Diary &amp; Eggs</div>
      </div>
      <div className={classes.headerNavbar}>
        <div className={classes.leftSide}>
          <div className={classes.eCommerce}>E-Commerce</div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.frame11987}>
            <Cart_CartCartWithNumber
              className={classes.cart}
              text={{
                _1: <div className={classes._1}>3</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.bananaWeb5}>
        <div className={classes.bananaImage5}></div>
        <div className={classes.frame11862}>
          <div className={classes.enjoyingThisApp}>$0.69</div>
        </div>
        <div className={classes.enjoyingThisApp2}>Banana 1 ct</div>
        <div className={classes.addIconItem}>
          <AddIconItemIcon className={classes.icon2} />
        </div>
        <div className={classes.enjoyingThisApp3}>18 oz</div>
      </div>
      <BananaWeb_NormalBananaWeb className={classes.bananaWeb} classes={{ bananaImage: classes.bananaImage }} />
      <BananaWeb_NormalBananaWeb className={classes.bananaWeb2} classes={{ bananaImage: classes.bananaImage2 }} />
      <BananaWeb_NormalBananaWeb className={classes.bananaWeb3} classes={{ bananaImage: classes.bananaImage3 }} />
      <BananaWeb_NormalBananaWeb className={classes.bananaWeb4} classes={{ bananaImage: classes.bananaImage4 }} />
      <StrawberryWeb_NormalStrawberri className={classes.strawberryWeb} classes={{ image1: classes.image1 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb2} classes={{ image1: classes.image12 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb3} classes={{ image1: classes.image13 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb4} classes={{ image1: classes.image14 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb5} classes={{ image1: classes.image15 }} />
      <StrawberryWeb_NormalStrawberri className={classes.strawberryWeb6} classes={{ image1: classes.image16 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb7} classes={{ image1: classes.image17 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb8} classes={{ image1: classes.image18 }} />
      <StrawberryWeb_NormalStrawberri2 className={classes.strawberryWeb9} classes={{ image1: classes.image19 }} />
      <div className={classes.yogurtWeb9}>
        <div className={classes.image29}></div>
        <div className={classes.frame118622}>
          <div className={classes.enjoyingThisApp4}>$0.69</div>
        </div>
        <div className={classes.enjoyingThisApp5}>Yogurt</div>
        <div className={classes.enjoyingThisApp6}>1 lb</div>
        <div className={classes.addIconItem2}>
          <AddIconItemIcon2 className={classes.icon3} />
        </div>
      </div>
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb} classes={{ image2: classes.image2 }} />
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb2} classes={{ image2: classes.image22 }} />
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb3} classes={{ image2: classes.image23 }} />
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb4} classes={{ image2: classes.image24 }} />
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb5} classes={{ image2: classes.image25 }} />
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb6} classes={{ image2: classes.image26 }} />
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb7} classes={{ image2: classes.image27 }} />
      <div className={classes.bBWeb4}>
        <div className={classes.image115}></div>
        <div className={classes.frame118623}>
          <div className={classes.enjoyingThisApp7}>$0.69</div>
        </div>
        <div className={classes.enjoyingThisApp8}>Blackberries</div>
        <div className={classes.enjoyingThisApp9}>1 lb</div>
        <div className={classes.addIconItem3}>
          <AddIconItemIcon3 className={classes.icon4} />
        </div>
      </div>
      <BBWeb_NormalBlackberryWeb className={classes.bBWeb} classes={{ image1: classes.image110 }} />
      <BBWeb_NormalBlackberryWeb className={classes.bBWeb2} classes={{ image1: classes.image111 }} />
      <BBWeb_NormalBlackberryWeb className={classes.bBWeb3} classes={{ image1: classes.image112 }} />
      <div className={classes.produce4}>Produce</div>
      <div className={classes.preparedFoods3}>Prepared foods</div>
      <div className={classes.cannedFoodsSoups3}>Canned foods &amp; Soups</div>
      <div className={classes.entypoChevronSmallRight}>
        <EntypoChevronSmallRightIcon className={classes.icon5} />
      </div>
      <div className={classes.entypoChevronSmallRight2}>
        <EntypoChevronSmallRightIcon2 className={classes.icon6} />
      </div>
      <div className={classes.entypoChevronSmallRight3}>
        <EntypoChevronSmallRightIcon3 className={classes.icon7} />
      </div>
      <div className={classes.line655}></div>
      <div className={classes.line656}></div>
      <div className={classes.bananaWeb6}>
        <div className={classes.bananaImage6}></div>
        <div className={classes.frame118624}>
          <div className={classes.enjoyingThisApp10}>$0.69</div>
        </div>
        <div className={classes.enjoyingThisApp11}>Banana 1 ct</div>
        <div className={classes.addIconItem4}>
          <AddIconItemIcon4 className={classes.icon8} />
        </div>
        <div className={classes.enjoyingThisApp12}>18 oz</div>
      </div>
      <StrawberryWeb_NormalStrawberri className={classes.strawberryWeb10} classes={{ image1: classes.image113 }} />
      <StrawberryWeb_NormalStrawberri className={classes.strawberryWeb11} classes={{ image1: classes.image114 }} />
      <div className={classes.yogurtWeb10}>
        <div className={classes.image210}></div>
        <div className={classes.frame118625}>
          <div className={classes.enjoyingThisApp13}>$0.69</div>
        </div>
        <div className={classes.enjoyingThisApp14}>Yogurt</div>
        <div className={classes.enjoyingThisApp15}>1 lb</div>
        <div className={classes.addIconItem5}>
          <AddIconItemIcon5 className={classes.icon9} />
        </div>
      </div>
      <YogurtWeb_YogurtYogurtWeb className={classes.yogurtWeb8} classes={{ image2: classes.image28 }} />
      <div className={classes.bBWeb5}>
        <div className={classes.image116}></div>
        <div className={classes.frame118626}>
          <div className={classes.enjoyingThisApp16}>$0.69</div>
        </div>
        <div className={classes.enjoyingThisApp17}>Blackberries</div>
        <div className={classes.enjoyingThisApp18}>1 lb</div>
        <div className={classes.addIconItem6}>
          <AddIconItemIcon6 className={classes.icon10} />
        </div>
      </div>
    </div>
  );
});
