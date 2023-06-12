import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "aos/dist/aos.css";
import { Sora } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import AOSAnimation from "@/utils/AosInit";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  // preload: false,
});

export const metadata = {
  title: "HESSI Inc.",
  description:
    "HESSI Inc. is an educational institution delivering innovative, portable, reliable just-in-time education to healthcare leaders, professionals, and caregivers to advance health and healthcare for the best outcomes. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
      </body>
    </html>
  );
}
