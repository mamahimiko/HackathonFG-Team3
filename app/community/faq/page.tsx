export const instant = false;
import TitleKits from "@/components/TitleKits";
import FaqBox from "./faqBox";
import { Search } from "lucide-react";
import { getFeaturedThreads, type FeaturedThread } from "@/lib/discord";
import Link from "next/link";
import Header from "./Header";

const FaqPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const { category } = await searchParams;

  let threads: FeaturedThread[] = [];
  try {
    threads = await getFeaturedThreads();
  } catch (e) {
    console.error(e);
  }

  const categories = [...new Set(threads.flatMap((t) => t.tags))];
  const visible = category
    ? threads.filter((t) => t.tags.includes(category))
    : threads;

  return (
    <>
      <Header />
      <div className="bg-bg-surface w-full flex-1">
        <div className="p-4 md:p-20 max-w-360 mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="">
              <TitleKits
                label={"Community FAQs"}
                title={"Find your answers."}
                text={
                  "Questions from our Discord community. Search or browse the most helpful discussions. "
                }
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="flex gap-4 w-full">
                  <input
                    className="border bg-white w-full h-8 rounded-2xl px-4"
                    placeholder="Search questions"
                  />
                  <button className="rounded-full bg-secondary w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-secondary/80">
                    <Search />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Link
                    href="/community/faq"
                    className={`rounded-full px-4 py-1 text-sm border ${
                      !category ? "bg-secondary" : "bg-white"
                    }`}
                  >
                    All
                  </Link>
                  {categories.map((c) => (
                    <Link
                      key={c}
                      href={`/community/faq?category=${encodeURIComponent(c)}`}
                      className={`rounded-full px-4 py-1 text-sm border ${
                        category === c ? "bg-secondary" : "bg-white"
                      }`}
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-6 py-10 max-w-200">
                {visible.length === 0 && <p>No featured questions yet.</p>}
                {visible.map((t) => (
                  <FaqBox
                    key={t.id}
                    tag={t.tags}
                    title={t.title}
                    text={t.content}
                    url={t.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
