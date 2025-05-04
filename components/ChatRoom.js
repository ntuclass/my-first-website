"use client"

import { useState } from "react”

export default function ChatRoom() { }
const (isOpen, setIsOpen) = useState(false);
return (
    <>
        {/*聊天室：只有在 isOpen 為 true 才顯示*/}
        {isOpen && <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold p-4">}
            <div>
                {/*開啟聊天室的按鈕 */}
                <button
                    // on事件={函數}
                    onClick={() => setIsOpen(true)}
                </div>
            {/*標題區*/}
            <div>
                <h3>跟AI小編聊聊</h3>
            </div>
            {/*聊天室內容*/}
            <div>className="h-[300x] overflow-y-auto"
                {* 未來放置所有對話訊息的地方 */}
            </div>
            {/*輸入表單區*/}
            <form className="p-5 border-t border-gray-700">
                <input className="w-full border border-gray-300 rounded-lg" />
                <button className="w-[40px] h-[40px] bg-orange-500 rounded border border-orange-600">送出</button>
            </form>

        </div>
            {/*開啟聊天室的按鈕**/}
        <div>
            <button className="bg-[#F0A050] text-white px-4 py-2 rounded-md">開始聊天</button>
        </div>
    </>
);
}
