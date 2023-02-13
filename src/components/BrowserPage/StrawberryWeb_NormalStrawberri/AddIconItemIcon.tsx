import { memo, SVGProps } from 'react';

const AddIconItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 20.9982C0 9.40113 9.40133 -0.000201294 20.9984 -0.000201294C32.5956 -0.000201294 41.9969 9.40113 41.9969 20.9982C41.9969 32.5954 32.5956 41.9967 20.9984 41.9967C9.40133 41.9967 0 32.5954 0 20.9982Z'
      fill='#40D589'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M26.7069 22.4007H21.1225V27.9851H19.4042V22.4007H13.8198V20.6824H19.4042V15.098H21.1225V20.6824H26.7069V22.4007Z'
      fill='white'
      stroke='white'
    />
  </svg>
);

const Memo = memo(AddIconItemIcon);
export { Memo as AddIconItemIcon };
