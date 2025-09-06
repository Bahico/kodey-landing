import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` file at the root of the `app` folder,
// a layout file is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}
