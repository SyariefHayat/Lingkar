import EachUtils from "@/utils/EachUtils";
import { LIST_ARTICLE } from "@/constants/listArticle";

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar";

export default function BlogSection() {
    return (
        <section className="w-full min-h-screen px-8 py-5 sm:py-16 bg-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Berita dan Cerita Terbaru</h2>

                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-12 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <EachUtils
                        of={LIST_ARTICLE}
                        render={(item, index) => (
                            <article 
                                key={index} 
                                className="flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-md transition duration-300 bg-white overflow-hidden border border-gray-100"
                            >
                                <figure className="w-full aspect-[16/9] overflow-hidden">
                                    <img 
                                        src={item.backgroundImage} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                    />
                                </figure>

                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                                        {item.description}
                                    </p>

                                    <div className="relative mt-6 flex items-center gap-x-3">
                                        <Avatar className="size-10 bg-gray-100 border">
                                            <AvatarImage src={"https://github.com/shadcn.png"} />
                                            <AvatarFallback>
                                                {item.author?.name?.[0] || "?"}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="text-sm">
                                            <p className="font-medium text-gray-900">
                                                {item.author?.name}
                                            </p>
                                            <time dateTime={item.datetime} className="text-gray-500 text-xs">
                                                {item.date}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )}
                    />
                </div>
            </div>
        </section>
    )
}
