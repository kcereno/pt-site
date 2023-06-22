import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import React from 'react';

interface PropsI {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsI) => {
  return (
    <div
      className="flex flex-col min-h-screen mx-auto"
      data-theme="cmyk"
    >
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
