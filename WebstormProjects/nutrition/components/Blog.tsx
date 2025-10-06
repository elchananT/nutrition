import React from 'react'

const Blog = () => {
    return (
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest From Our Blog</h2>
                    <p className="text-xl text-gray-400">Evidence-based nutrition insights and tips.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "The Science of Pre-Workout Nutrition",
                            excerpt: "Optimize your training with proper fuel timing and macronutrient balance.",
                            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
                            date: "Mar 15, 2024"
                        },
                        {
                            title: "Sustainable Weight Loss: Beyond Calories",
                            excerpt: "Why hormones, sleep, and stress matter more than you think.",
                            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
                            date: "Mar 12, 2024"
                        },
                        {
                            title: "Building Muscle: Nutrition Fundamentals",
                            excerpt: "The complete guide to eating for strength and muscle growth.",
                            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
                            date: "Mar 8, 2024"
                        }
                    ].map((post, index) => (
                        <article key={index} className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                                <a href="#" className="text-[#00FF99] hover:text-[#00CC7A] font-semibold">
                                    Read More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Blog
