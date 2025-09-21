import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { getAxios, photoUrl } from "@/api/api.functions";
import { CaseModel } from "@/models/case.model";

export default function PostsList() {
  const [history, setHistory] = useState<CaseModel[]>([]);

  useEffect(() => {
    getAxios('cases').then(res => {
      setHistory(res.data);
    })
  }, [])

  return (
    <div className="flex flex-wrap gap-[30px] w-full">
      {history.map((item, index) => (
        <Link href={`/posts/${item._id}`} className="sm:w-[calc(50%-15px)] w-full relative" key={index}>
            <div
                className="absolute top-5 right-5 rounded-full w-10 h-10 flex items-center justify-center text-white cursor-pointer"
                style={{background: "rgba(245, 244, 250, 0.30)"}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path d="M11.0834 11.0835H26.9167M26.9167 11.0835V26.9169M26.9167 11.0835L11.0834 26.9169" stroke="white" strokeWidth="3.16668" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <img
              src={photoUrl(item.photo)}
              alt={item.title}
              className="w-full object-cover h-[220px] md:h-[420px] rounded-t-4xl"
            />

            <div className="flex flex-col p-8 gap-4 rounded-b-4xl justify-between bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.excerpt}</p>
              <span className="text-blue-500">{item.tags.join(', ')}</span>
            </div>
        </Link>
      ))}
    </div>
  );
}
