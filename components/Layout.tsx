import { useRouter } from 'next/router';
import NavBar from './NavBar/NavBar';
import Seo from './Seo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const seoObj: { [key: string]: string } = {
    '/': 'Home',
    about: 'About',
  };
  const title = seoObj[router.pathname];

  return (
    <>
      <Seo title={title} />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
