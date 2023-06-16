import React from 'react';

interface PropsI {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsI) => {
  return (
    <div>
      <h1>Nav</h1>
      <main>{children}</main>
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
