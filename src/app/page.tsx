import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const fetchData = async () => {
  const getData = await client.fetch(
    '*[_type == "services"]',
    {},
    { cache: "no-cache" }
  );
  console.log(getData);
  return getData;
};

export default async function Home() {
  const res = await fetchData();
  return (
    <>
      <h1 className="ml-[410px] mt-8 text-6xl font-bold">
        Data From Sanity CMS
      </h1>
      {res.map((item: any) => {
        return (
          <>
            <div className="flex justify-center items-center gap-4">
              <img src={urlFor(item.Photo).url()} width={170} alt="" />
              <h1 className="text-xl font-bold">Titile: {item.title}</h1> <br />
              <p className="text-lg font-semibold">Description: {item.description}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
