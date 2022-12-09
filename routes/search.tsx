import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Phillip shields", "John macafee", "Jane doenet", "Mary magdaline", "Bob ross", "Alice jowsey"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}