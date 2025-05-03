"use client"

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCode";
import { auth, db } from "@/services/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('projects');
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: ''
    });

    useEffect(() => {
        fetchProjects();
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "project-list"), {
                ...formData,
                createdAt: serverTimestamp()
            });

            alert('作品新增成功！');
            setFormData({ title: '', image: '', description: '' });
            fetchProjects();
        } catch (error) {
            alert(`新增失敗：${error.message}`);
        }
    };

    const handleDelete = async (projectId) => {
        if (window.confirm('確定要刪除這個作品嗎？')) {
            try {
                await deleteDoc(doc(db, "project-list", projectId));
                fetchProjects();
                alert('作品已刪除');
            } catch (error) {
                alert(`刪除失敗：${error.message}`);
            }
        }
    };

    const handleEdit = (project) => {
        // TODO: Implement edit functionality
        console.log('Edit project:', project);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'projects':
                return (
                    <div className="space-y-6">
                        {/* 新增作品表單 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">新增作品</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
                                        標題
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="請輸入作品標題"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">
                                        圖片網址
                                    </label>
                                    <input
                                        type="text"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="請輸入圖片網址"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
                                        作品描述
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 text-lg border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="請輸入作品描述"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-orange-600 text-white px-6 py-2 rounded-lg shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                                    >
                                        新增作品
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* 現有作品清單 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">現有作品清單</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {projects.map((project) => (
                                    <ProductCard
                                        key={project.id}
                                        imageUrl={project.image}
                                        title={project.title}
                                        description={project.description}
                                        isAdmin={true}
                                        onEdit={() => handleEdit(project)}
                                        onDelete={() => handleDelete(project.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'faq':
                return (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-6">問答管理</h2>
                        <p>問答管理內容將在這裡顯示</p>
                    </div>
                );
            case 'messages':
                return (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-6">收件管理</h2>
                        <p>收件管理內容將在這裡顯示</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8 pt-24">
                <h1 className="text-3xl font-bold text-center mb-8">後台管理</h1>
                <div className="grid grid-cols-4 gap-6">
                    {/* 左側選單 */}
                    <div className="col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                            <button
                                onClick={() => setActiveTab('projects')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeTab === 'projects'
                                    ? 'bg-orange-600 text-white'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                作品管理
                            </button>
                            <button
                                onClick={() => setActiveTab('faq')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeTab === 'faq'
                                    ? 'bg-orange-600 text-white'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                問答管理
                            </button>
                            <button
                                onClick={() => setActiveTab('messages')}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeTab === 'messages'
                                    ? 'bg-orange-600 text-white'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                收件管理
                            </button>
                        </div>
                    </div>

                    {/* 右側內容區 */}
                    <div className="col-span-3">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
