import Image from 'next/image';

export default function ProductCard({ imageUrl, title, description, isAdmin, onEdit, onDelete }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <div className="relative w-full h-48">
                <img
                    src={imageUrl || "https://picsum.photos/300/200"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                {isAdmin && (
                    <div className="mt-4 flex justify-end space-x-2">
                        <button
                            onClick={onEdit}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                        >
                            修改
                        </button>
                        <button
                            onClick={onDelete}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                        >
                            刪除
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
