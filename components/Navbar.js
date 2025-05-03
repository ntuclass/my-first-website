"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 shadow-lg z-[1000]">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300">
                    John Doe
                </a>
                <div className="flex gap-6 items-center">
                    <a href="/about" className="hover:text-orange-500 transition-colors duration-300">
                        關於本站
                    </a>
                    <a href="/faq" className="hover:text-orange-500 transition-colors duration-300">
                        常見問題
                    </a>
                    <a
                        href="/admin"
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                    >
                        管理後台
                    </a>
                </div>
            </div>
        </nav>
    );
} 