import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname
      ? "border-gray-200"
      : "border-transparent hover:border-gray-200";
  return (
    <nav class="bg-purple-900 pixel flex justify-center top-0 sticky z-50">
      <ul class="container flex items-center justify-center gap-3 p-3 text-xl text-gray-200">
        <li class={`border-2 p-1 ${active("/")}`}>
          <a href="/">Home</a>
        </li>
        <li class={`border-2 p-1 ${active("/about")}`}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
