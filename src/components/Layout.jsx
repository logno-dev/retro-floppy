import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div class="flex flex-col justify-between min-h-dvh">
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
