import React from 'react';

interface ContentItem {
  title: string;
  price: number;
  category: 'packages' | 'music' | 'dance' | 'hosts' | 'content';
  description?: string;
}

interface ContentCategory {
  name: string;
  items: ContentItem[];
  color: string;
  gradient: string;
}

const contentInventory: ContentCategory[] = [
  {
    name: 'Багц хөтөлбөр',
    color: 'purple',
    gradient: 'from-purple-900 to-purple-800',
    items: [
      {
        title: 'Үнгэрсний баатруудын тоглолт',
        price: 600000,
        category: 'packages',
        description: 'Traditional heroic tale performances'
      },
      {
        title: 'Жаргалтайн дэлгэр хөтөлбөр',
        price: 600000,
        category: 'packages',
        description: 'Comprehensive cultural programs'
      },
      {
        title: 'Жаргалтай дэлгэр Plus',
        price: 1400000,
        category: 'packages',
        description: 'Premium cultural experience package'
      }
    ]
  },
  {
    name: 'Хөгжмийн урлаг',
    color: 'indigo',
    gradient: 'from-indigo-900 to-indigo-800',
    items: [
      {
        title: 'Үндэсний урлагийн бүсэрэг тоглолт',
        price: 3000000,
        category: 'music',
        description: 'Full traditional art ensemble performance'
      },
      {
        title: 'Үндэсний хөгжмийн шөвхүүн чуулга',
        price: 2500000,
        category: 'music',
        description: 'Traditional music concert gathering'
      },
      {
        title: 'Морин хуурын дарвал',
        price: 1000000,
        category: 'music',
        description: 'Horsehead fiddle ensemble'
      },
      {
        title: 'Морин хуурч',
        price: 250000,
        category: 'music',
        description: 'Solo horsehead fiddle performer'
      }
    ]
  },
  {
    name: 'Бүжгийн урлаг',
    color: 'emerald',
    gradient: 'from-emerald-900 to-emerald-800',
    items: [
      {
        title: 'Гоцлол Монгол бүжиг',
        price: 300000,
        category: 'dance',
        description: 'Solo traditional Mongolian dance'
      },
      {
        title: 'Хос Монгол бүжиг',
        price: 500000,
        category: 'dance',
        description: 'Paired traditional dance performance'
      },
      {
        title: 'Уран нугаравч',
        price: 500000,
        category: 'dance',
        description: 'Artistic dance performance'
      },
      {
        title: 'Хамтлаг бүжиг',
        price: 1500000,
        category: 'dance',
        description: 'Group dance ensemble'
      }
    ]
  },
  {
    name: 'Хөтлөгч',
    color: 'amber',
    gradient: 'from-amber-900 to-amber-800',
    items: [
      {
        title: 'Э.Төвшинтөгс хөтлөгч',
        price: 2500000,
        category: 'hosts',
        description: 'Premium master of ceremonies'
      },
      {
        title: 'Б.Хатанбаатар хөтлөгч',
        price: 1500000,
        category: 'hosts',
        description: 'Professional event host'
      },
      {
        title: 'Б.Батмөнд хөтлөгч',
        price: 2000000,
        category: 'hosts',
        description: 'Experienced ceremonial host'
      }
    ]
  }
];

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('mn-MN', {
    style: 'currency',
    currency: 'MNT',
    minimumFractionDigits: 0,
  }).format(price).replace('MNT', '₮');
};

const ContentItemCard: React.FC<{ item: ContentItem; gradient: string }> = ({ 
  item, 
  gradient
}) => (
  <div
    className={`bg-gradient-to-br ${gradient} p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer`}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-cream group-hover:text-white transition-colors">
        {item.title}
      </h3>
      <span className="text-2xl font-bold text-yellow-400 bg-black/20 px-3 py-1 rounded-lg">
        {formatPrice(item.price)}
      </span>
    </div>
    {item.description && (
      <p className="text-cream/80 text-sm leading-relaxed">
        {item.description}
      </p>
    )}
  </div>
);

const CategorySection: React.FC<{ category: ContentCategory }> = ({ category }) => (
  <section className={`py-16 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-cream mb-12">
        {category.name}
      </h2>
      
      <div
        className="grid gap-6 md:gap-8"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
        }}
      >
          {category.items.map((item, index) => (
            <ContentItemCard
              key={index}
              item={item}
              gradient={category.gradient}
            />
          ))}
      </div>
    </div>
  </section>
);

const ContentInventory: React.FC = () => {
  return (
    <div className="content-inventory">
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6">
            Үйлчилгээний жагсаалт
          </h1>
          <p className="text-xl text-cream/80 leading-relaxed">
            Монгол үндэсний урлагийн өв соёлыг хадгалж, хөгжүүлэх үйлчилгээнүүд
          </p>
        </div>
      </section>

      {contentInventory.map((category, index) => (
        <CategorySection key={index} category={category} />
      ))}

      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-8 rounded-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-4">
              Захиалга өгөх
            </h3>
            <p className="text-lg mb-6">
              Та манай үйлчилгээний талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл холбогдоно уу
            </p>
            <button className="bg-slate-900 text-cream px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Холбогдох
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentInventory;