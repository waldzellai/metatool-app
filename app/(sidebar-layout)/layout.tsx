'use client';

import SidebarLayout from '@/components/sidebar-layout';

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarLayout>
      <div className='container mx-auto py-10 px-6'>{children}</div>
    </SidebarLayout>
  );
}
