# Cybsafe Pokodex
Bootstrap with `Next.js` and `Tailwind`.

First, run the development server:

```bash
yarn
yarn dev
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

- Pagination in home page and other pages instead of `Load more` button.

  At the moment, at the bottom of the home page is `Load more` button which will trigger fetching the next 20 pokemon, but it can be improved by creating a custom `Pagination` component.

- Logic duplicates exist in context but they can be abstracted by introducing the custom hook, e.g., `useFetch`

- More features such as selecting the category(species) in `header(nav bar)` can be added.

- <b>Testing</b>:

  At the moment, frontend components can be checked with storybook but from the TDD perspective, they can be tested by writing test codes using `React Testing Library` and `Jest`.
