const API = "https://discord.com/api/v10";
const headers = { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` };

type Thread = {
  applied_tags: never[];
  id: string;
  name: string;
  parent_id: string;
    tags: string[];
};

type ForumChannel = { available_tags: { id: string; name: string }[] };

export type FeaturedThread = {
  id: string;
  title: string;
  content: string;
  stars: number;
  url: string;
    tags: string[];
};

async function discord<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    headers,
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error(`Discord API ${res.status}`);
  return res.json();
}

export async function getFeaturedThreads(): Promise<FeaturedThread[]> {
  const guildId = process.env.DISCORD_GUILD_ID!;
  const forumId = process.env.DISCORD_FORUM_CHANNEL_ID!;

  console.log("[discord] env", {
    token: !!process.env.DISCORD_BOT_TOKEN,
    guildId,
    forumId,
  });

  const { threads } = await discord<{ threads: Thread[] }>(
    `/guilds/${guildId}/threads/active`,
  );
  const forumThreads = threads.filter((t) => t.parent_id === forumId);
  const forum = await discord<ForumChannel>(`/channels/${forumId}`);
  const tagName = new Map(
    forum.available_tags.map((tag) => [tag.id, tag.name]),
  );

  const results = await Promise.all(
    forumThreads.map(async (t) => {
      try {
        const msg = await discord<{
          content: string;
          reactions?: { emoji: { name: string }; count: number }[];
        }>(`/channels/${t.id}/messages/${t.id}`);

        const star = msg.reactions?.find((r) => r.emoji.name === "⭐");
        if (!star) return null;

        return {
          id: t.id,
          title: t.name,
          content: msg.content,
          stars: star.count,
          url: `https://discord.com/channels/${guildId}/${t.id}`,
          tags: (t.applied_tags ?? [])
    .map((id) => tagName.get(id))
    .filter((n): n is string => !!n),
        };
      } catch (e) {
        console.error("[discord] failed for thread", t.id, e);
        return null;
      }
    }),
  );

  return results
    .filter((r): r is FeaturedThread => r !== null)
    .sort((a, b) => b.stars - a.stars);
}
