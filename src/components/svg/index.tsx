'use client';

import type { PropsWithChildren, SVGProps } from 'react';

type Props = PropsWithChildren & SVGProps<SVGSVGElement>;

export default function SVG({ children, ...svgProps }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...svgProps}>
      {children}
    </svg>
  );
}
