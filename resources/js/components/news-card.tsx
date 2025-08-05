import { News } from '@/models/news-management/news';
import { formatDate } from '@/utils/format-date';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

interface NewsCardProps {
    item: News;
    index: number;
}

export default function NewsCard({ item, index }: NewsCardProps) {
    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 transition dark:border-gray-700"
        >
            <div className="relative">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge kategori */}
                <span className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white shadow-none">
                    {item.news_category?.name}
                </span>
            </div>
            <div className="bg-white p-3 text-start dark:bg-gray-900">
                <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{formatDate(item.created_at)}</span>
                <Link href={`/berita/${item.slug}`} className="mt-2 block">
                    <h4 className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                </Link>
            </div>
        </motion.div>
    );
}
