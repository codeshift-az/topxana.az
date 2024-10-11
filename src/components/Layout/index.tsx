import type { ReactNode } from 'react';

import Preloader from '@/components/Layout/Preloader';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Preloader />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
