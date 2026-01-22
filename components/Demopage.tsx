import NewsMetaBar from "@/components/NewsMetaBar";
import ShareButtons from "@/components/ShareButtons";
import { getCategoryColor } from "@/app/utils/categoryColors";

export default function ComponentDemo() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Professional Hindi News Components
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            5 Category Badge Variants + Optimized Share Buttons
          </p>
        </div>

        {/* Category Badge Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Category Badge Variants
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Choose the style that best fits your design
          </p>
          
          <div className="space-y-8">
            {/* Variant 1: PILL */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  1. PILL - Modern & Soft
                </h3>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">
                  RECOMMENDED
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Rounded pill with light colored background. Most modern and friendly.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="pill"
                    newsCategory="sports"
                    newsCatinhindi="खेल"
                    newsSlug="cricket"
                    accentColor={getCategoryColor("sports")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Sports</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="pill"
                    newsCategory="business"
                    newsCatinhindi="कारोबार"
                    newsSlug="market"
                    accentColor={getCategoryColor("business")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Business</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="pill"
                    newsCategory="entertainment"
                    newsCatinhindi="मनोरंजन"
                    newsSlug="bollywood"
                    accentColor={getCategoryColor("entertainment")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Entertainment</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="pill"
                    newsCategory="politics"
                    newsCatinhindi="राजनीति"
                    newsSlug="election"
                    accentColor={getCategoryColor("politics")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Politics</p>
                </div>
              </div>
            </div>

            {/* Variant 2: MINIMAL */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                2. MINIMAL - Clean & Subtle
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Dot + colored text only. Smallest footprint, maximum content focus.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="minimal"
                    newsCategory="sports"
                    newsCatinhindi="खेल"
                    newsSlug="cricket"
                    accentColor={getCategoryColor("sports")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Sports</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="minimal"
                    newsCategory="business"
                    newsCatinhindi="कारोबार"
                    newsSlug="market"
                    accentColor={getCategoryColor("business")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Business</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="minimal"
                    newsCategory="entertainment"
                    newsCatinhindi="मनोरंजन"
                    newsSlug="bollywood"
                    accentColor={getCategoryColor("entertainment")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Entertainment</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="minimal"
                    newsCategory="politics"
                    newsCatinhindi="राजनीति"
                    newsSlug="election"
                    accentColor={getCategoryColor("politics")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Politics</p>
                </div>
              </div>
            </div>

            {/* Variant 3: UNDERLINE */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                3. UNDERLINE - Elegant & Classic
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Text with colored underline. Traditional newspaper style.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="underline"
                    newsCategory="sports"
                    newsCatinhindi="खेल"
                    newsSlug="cricket"
                    accentColor={getCategoryColor("sports")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Sports</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="underline"
                    newsCategory="business"
                    newsCatinhindi="कारोबार"
                    newsSlug="market"
                    accentColor={getCategoryColor("business")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Business</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="underline"
                    newsCategory="entertainment"
                    newsCatinhindi="मनोरंजन"
                    newsSlug="bollywood"
                    accentColor={getCategoryColor("entertainment")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Entertainment</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="underline"
                    newsCategory="politics"
                    newsCatinhindi="राजनीति"
                    newsSlug="election"
                    accentColor={getCategoryColor("politics")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Politics</p>
                </div>
              </div>
            </div>

            {/* Variant 4: SOLID */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  4. SOLID - Bold & Eye-Catching
                </h3>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                  HIGH IMPACT
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Full colored background with white text. Perfect for breaking news.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="solid"
                    newsCategory="sports"
                    newsCatinhindi="खेल"
                    newsSlug="cricket"
                    accentColor={getCategoryColor("sports")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Sports</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="solid"
                    newsCategory="business"
                    newsCatinhindi="कारोबार"
                    newsSlug="market"
                    accentColor={getCategoryColor("business")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Business</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="solid"
                    newsCategory="entertainment"
                    newsCatinhindi="मनोरंजन"
                    newsSlug="bollywood"
                    accentColor={getCategoryColor("entertainment")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Entertainment</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="solid"
                    newsCategory="politics"
                    newsCatinhindi="राजनीति"
                    newsSlug="election"
                    accentColor={getCategoryColor("politics")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Politics</p>
                </div>
              </div>
            </div>

            {/* Variant 5: OUTLINE */}
            <div className="border-l-4 border-gray-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                5. OUTLINE - Sharp & Professional
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Colored border with matching text. Corporate and clean.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="outline"
                    newsCategory="sports"
                    newsCatinhindi="खेल"
                    newsSlug="cricket"
                    accentColor={getCategoryColor("sports")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Sports</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="outline"
                    newsCategory="business"
                    newsCatinhindi="कारोबार"
                    newsSlug="market"
                    accentColor={getCategoryColor("business")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Business</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="outline"
                    newsCategory="entertainment"
                    newsCatinhindi="मनोरंजन"
                    newsSlug="bollywood"
                    accentColor={getCategoryColor("entertainment")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Entertainment</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <NewsMetaBar
                    variant="outline"
                    newsCategory="politics"
                    newsCatinhindi="राजनीति"
                    newsSlug="election"
                    accentColor={getCategoryColor("politics")}
                    showShareButtons={false}
                  />
                  <p className="text-xs text-gray-500 mt-2">Politics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real News Cards with Different Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Complete News Cards - Different Variants
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card with PILL variant */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">PILL Variant</span>
              </div>
              <div className="p-5 space-y-4">
                <NewsMetaBar
                  variant="pill"
                  newsCategory="sports"
                  newsCatinhindi="खेल"
                  newsSlug="cricket-win"
                  accentColor={getCategoryColor("sports")}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  भारत ने ऑस्ट्रेलिया को 5 विकेट से हराया
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  मेलबर्न में खेले गए रोमांचक मुकाबले में भारतीय टीम ने शानदार जीत दर्ज की...
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">1 घंटा पहले</span>
                </div>
              </div>
            </article>

            {/* Card with SOLID variant */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">SOLID Variant</span>
              </div>
              <div className="p-5 space-y-4">
                <NewsMetaBar
                  variant="solid"
                  newsCategory="breaking"
                  newsCatinhindi="ताज़ा खबर"
                  newsSlug="breaking-news"
                  accentColor={getCategoryColor("national")}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  बड़ी खबर: संसद में पारित हुआ महत्वपूर्ण बिल
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  नई दिल्ली में आज संसद ने एक महत्वपूर्ण विधेयक को मंजूरी दे दी...
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">अभी</span>
                </div>
              </div>
            </article>

            {/* Card with MINIMAL variant */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">MINIMAL Variant</span>
              </div>
              <div className="p-5 space-y-4">
                <NewsMetaBar
                  variant="minimal"
                  newsCategory="business"
                  newsCatinhindi="कारोबार"
                  newsSlug="market-update"
                  accentColor={getCategoryColor("business")}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  शेयर बाजार में तेजी, सेंसेक्स 500 अंक चढ़ा
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  मुंबई में आज शेयर बाजार में जबरदस्त तेजी देखी गई...
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 घंटे पहले</span>
                </div>
              </div>
            </article>

            {/* Card with OUTLINE variant */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">OUTLINE Variant</span>
              </div>
              <div className="p-5 space-y-4">
                <NewsMetaBar
                  variant="outline"
                  newsCategory="technology"
                  newsCatinhindi="तकनीक"
                  newsSlug="ai-news"
                  accentColor={getCategoryColor("technology")}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  भारत में AI क्रांति: नई तकनीक का आगमन
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  आर्टिफिशियल इंटेलिजेंस के क्षेत्र में भारत तेजी से आगे बढ़ रहा है...
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">5 घंटे पहले</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Variant</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Style</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Best For</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">PILL</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Rounded, light bg</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Modern sites ⭐</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">~50px</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">MINIMAL</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Dot + text</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Clean layouts</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">~45px</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">UNDERLINE</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Text with line</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Classic news</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">~40px</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">SOLID</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Full colored bg</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Breaking news 🔥</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">~48px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">OUTLINE</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Colored border</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Professional</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">~48px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Examples */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📚 Usage Examples
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm">
              <div className="text-gray-600 dark:text-gray-400 mb-2">// PILL variant (recommended)</div>
              <code className="text-gray-900 dark:text-gray-100">
                {`<NewsMetaBar
  variant="pill"
  newsCategory="sports"
  newsCatinhindi="खेल"
  newsSlug="cricket-news"
  accentColor={getCategoryColor("sports")}
/>`}
              </code>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm">
              <div className="text-gray-600 dark:text-gray-400 mb-2">// SOLID variant (for breaking news)</div>
              <code className="text-gray-900 dark:text-gray-100">
                {`<NewsMetaBar
  variant="solid"
  newsCategory="breaking"
  newsCatinhindi="ताज़ा खबर"
  newsSlug="urgent-news"
  accentColor="#ef4444"
/>`}
              </code>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm">
              <div className="text-gray-600 dark:text-gray-400 mb-2">// Without share buttons</div>
              <code className="text-gray-900 dark:text-gray-100">
                {`<NewsMetaBar
  variant="minimal"
  newsCategory="business"
  newsCatinhindi="कारोबार"
  newsSlug="market-update"
  accentColor={getCategoryColor("business")}
  showShareButtons={false}
/>`}
              </code>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}