import { Switch, Match, Show, createSignal, createResource } from "solid-js";

const fetchItems = async (item) => {
  return (await fetch(`http://localhost:3001/${item}`)).json();
};

export default function Home() {
  const [q, setQ] = createSignal("items");
  const [items] = createResource(q, fetchItems);

  return (
    <main class="text-center max-w-prose mx-auto text-gray-700 flex flex-col gap-6 px-6 sm:px-1">
      <div class="relative flex justify-center">
        <img src="/comp.svg" />

        <h1 class="absolute top-0 max-6-xs text-2xl sm:text-5xl text-white pixel pt-5">
          RetroFloppy.shop
        </h1>
      </div>
      <p class="text-xl text-white text-box">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
      <Show when={items.loading}>
        <p>Loading...</p>
      </Show>
      <Switch>
        <Match when={items.error}>
          <span>Error: {error()}</span>
        </Match>
        <Match when={items()}>
          <div>
            {JSON.parse(JSON.stringify(items())).map((i) => (
              <>
                <h2>{i.title}</h2>
                <p>{i.description}</p>
              </>
            ))}
          </div>
        </Match>
      </Switch>
    </main>
  );
}
