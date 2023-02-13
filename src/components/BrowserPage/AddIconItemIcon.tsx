import { memo, SVGProps } from 'react';

const AddIconItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.292969 20.9982C0.292969 9.40113 9.69429 -0.000201294 21.2914 -0.000201294C32.8885 -0.000201294 42.2899 9.40113 42.2899 20.9982C42.2899 32.5954 32.8885 41.9967 21.2914 41.9967C9.69429 41.9967 0.292969 32.5954 0.292969 20.9982Z'
      fill='#40D589'
    />
    <rect x={13.293} y={20} width={15} height={3} fill='white' />
  </svg>
);

const Memo = memo(AddIconItemIcon);
export { Memo as AddIconItemIcon };
