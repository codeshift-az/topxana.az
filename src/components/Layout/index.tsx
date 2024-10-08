import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
