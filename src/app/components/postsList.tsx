import {Link} from "@/i18n/navigation";
import {useEffect, useState} from "react";
import {getAxios, photoUrl} from "@/api/api.functions";
import { CaseModel } from "@/models/case.model";

export default function PostsList() {
  const [history, setHistory] = useState<CaseModel[]>([]);

  useEffect(() => {
    getAxios('cases').then(res => {
      setHistory(res.data);
      console.log(res)
    })
  }, [])

  return (
    <div className="flex flex-wrap gap-[30px] w-full">
      {history.map((item, index) => (
        <div key={index} className="sm:w-[calc(50%-15px)] w-full">
          <Link href={`/posts/${item._id}`}>
            <img
              src={photoUrl(item.photo)}
              alt={item.title}
              className="w-full object-cover rounded-t-2xl"
            />
          </Link>

          <div className="flex flex-col p-8 gap-4 rounded-b-2xl justify-between bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400">{item.excerpt}</p>
            <span className="text-blue-500">{item.tags.join(', ')}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
