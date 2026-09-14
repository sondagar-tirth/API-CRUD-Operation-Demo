import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Demo-Store",
  description: "My first Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
