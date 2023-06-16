import React from 'react';

interface PropsI {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsI) => {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="bg-red-400">Nav</h1>
      <main className="flex-grow bg-blue-400">{children}</main>
      <h1 className="py-4 bg-gray-400">Footer</h1>
    </div>
  );
};

export default Layout;
