import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status === 404) {
      return ctx.render(null);
    }
    const user: User = await response.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <img src={data.avatar_url} alt={data.name} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
    </div>
  );
}
