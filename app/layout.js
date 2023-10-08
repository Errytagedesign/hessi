import NavBar from '@/components/navbar/NavBar';
import AOSAnimation from '@/utils/AosInit';
import './globals.css';

import localFont from 'next/font/local';
import Footer from '@/components/footer/Footer';

const sora = localFont({
  src: [
    {
      path: './Fonts/static/Sora-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Fonts/static/Sora-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'HESSI Inc.',
  description:
    'HESSI Inc. is an educational institution delivering innovative, portable, reliable just-in-time education to healthcare leaders, professionals, and caregivers to advance health and healthcare for the best outcomes. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sora.className}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
