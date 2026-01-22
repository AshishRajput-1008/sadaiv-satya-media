import { ChevronRight } from 'lucide-react';

interface NewsCategoryProps {
  title: string;
  image: string;
  mainHeadline: string;
  articles: string[];
}

const NewsCategory = ({ title, image, mainHeadline, articles }: NewsCategoryProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl md:text-xl font-bold text-gray-900 pb-2 border-b-2 border-gray-300">
          {title}
        </h2>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="cursor-pointer group">
          <div className="overflow-hidden mb-3">
            <img
              src={image}
              alt={mainHeadline}
              className="w-full h-[140px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-900 leading-snug hover:text-red-600 transition-colors">
            {mainHeadline}
          </h3>
        </div>

        {articles.map((article, index) => (
          <div key={index} className="cursor-pointer">
            <p className="text-[18px] md:text-[15px] text-gray-800 leading-snug hover:text-red-600 transition-colors">
              {article}
            </p>
          </div>
        ))}

        <div className="pt-4 flex justify-center">
          <button className="flex items-center gap-1 text-red-600 font-semibold hover:gap-2 transition-all duration-300">
            <span>और पढ़ें</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
