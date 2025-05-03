"use client";

import { useState, useEffect } from 'react';
import ProductCard from "@/components/ProductCode"
import Navbar from "@/components/Navbar"
import { db, auth } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [authChecking, setAuthChecking] = useState(true);
    const router = useRouter();


    useEffect(() => {
        fetchProjects();

    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error("登出失敗:", error);
        }
    };

    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "project-list"));
            const projectsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProjects(projectsList);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc.",
            content: "Working with Andy was a game-changer for our company. His innovative solutions and attention to detail helped us achieve our digital transformation goals."
        },
        {
            name: "Michael Chen",
            role: "Product Manager, InnovateX",
            content: "Andy's technical expertise and creative approach to problem-solving made our project a success. He delivered beyond our expectations."
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director, GrowthHub",
            content: "The website Andy created for us has significantly improved our online presence and customer engagement. His work is truly exceptional."
        }
    ];

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "I offer a wide range of services including web development, UI/UX design, mobile app development, and digital consulting. Each project is tailored to meet your specific needs."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex applications could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
            question: "What is your pricing structure?",
            answer: "I offer flexible pricing options including fixed-price projects and hourly rates. The cost depends on the project scope, complexity, and specific requirements. Contact me for a detailed quote."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes, I offer various support packages for maintenance, updates, and technical assistance. We can discuss the best support plan for your needs."
        }
    ];

    return (
        <div className="bg-black text-white">
            <Navbar />
            <div className="pt-20">
                {/* 登入狀態顯示 */}
                <div className="bg-gray-800 py-2 px-4">
                    <div className="container mx-auto flex justify-between items-center">

                    </div>
                </div>

                <header className="bg-black">
                    <div className="flex justify-center gap-4 py-4">
                        <a href="/" className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                            首頁
                        </a>
                        <a href="/about" className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                            關於本站
                        </a>
                        <a href="/faq" className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                            常見問題
                        </a>
                    </div>
                    <div>
                        <h1 className="text-4xl text-white text-center py-4">Andy's Website</h1>
                        <h2 className="text-white text-center py-2">I'm a Web Designer</h2>
                    </div>
                </header>

                {/* 作品展示區 */}
                <section className="container mx-auto px-4 py-8 bg-white text-black">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {projects.map((project) => (
                            <ProductCard
                                key={project.id}
                                imageUrl={project.image}
                                title={project.title}
                                description={project.description}
                            />
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-white text-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500">
                                        <img
                                            src="https://picsum.photos/200/200"
                                            alt="Andy's Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-4">Hi, I'm Andy</h3>
                                        <p className="text-gray-700 mb-4">
                                            I'm a passionate web designer and developer with over 5 years of experience in creating beautiful and functional digital experiences. My expertise lies in modern web technologies, user-centered design, and creating solutions that drive business growth.
                                        </p>
                                        <p className="text-gray-700">
                                            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying at the forefront of technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-black text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-gray-900 rounded-lg shadow-lg p-6 border border-orange-500">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold">{testimonial.name}</h3>
                                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">{testimonial.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white text-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 mb-6 border-l-4 border-orange-500">
                                    <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-16 text-black">關於本站</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF7F50]">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#FF7F50]">網站宗旨</h3>
                                    <p className="text-gray-800 leading-relaxed">
                                        本站致力於提供高品質的產品展示和服務，通過創新的技術和設計，為用戶帶來最佳的瀏覽體驗。
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF7F50]">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#FF7F50]">技術特點</h3>
                                    <ul className="space-y-3 text-gray-800">
                                        <li className="flex items-start">
                                            <span className="text-[#FF7F50] mr-2">•</span>
                                            採用 Next.js 框架，確保網站性能和 SEO 優化
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#FF7F50] mr-2">•</span>
                                            響應式設計，完美適配各種設備
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#FF7F50] mr-2">•</span>
                                            現代化的 UI/UX 設計，提供流暢的用戶體驗
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#FF7F50] mr-2">•</span>
                                            使用 Tailwind CSS 實現快速開發和維護
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF7F50]">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#FF7F50]">隱私政策</h3>
                                    <p className="text-gray-800 leading-relaxed">
                                        我們重視用戶的隱私安全，所有收集的數據都將嚴格遵守相關法律法規，並採取必要的安全措施保護用戶信息。
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#FF7F50]">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#FF7F50]">聯繫我們</h3>
                                    <div className="space-y-3 text-gray-800">
                                        <p className="leading-relaxed">如有任何問題或建議，歡迎通過以下方式聯繫我們：</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <span className="text-[#FF7F50] mr-2">•</span>
                                                電子郵件：contact@example.com
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#FF7F50] mr-2">•</span>
                                                電話：(02) 1234-5678
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#FF7F50] mr-2">•</span>
                                                地址：台北市信義區信義路五段7號
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
