
"use client";
import { motion } from "framer-motion";
import { useGlobalModal } from "./ModalContext";
import { Cross } from "../Icons";

export default function GlobalModal() {
    const { isOpen, content, closeModal } = useGlobalModal();

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-8 flex items-end justify-center left-0 right-0">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative bg-[#16191c] bg-opacity-75 max-w-[850px] w-full pointer-events-auto border-1 border-neutral-400 rounded-md mx-auto`}
            >
                <div className="absolute right-[-10px] top-[-10px]">
                    <button onClick={closeModal} className="text-gray-500 p-1 border border-[#777a80] rounded-full hover:text-white hover:bg-[#16191c] z-10"><Cross className="h-3 w-3" /></button>
                </div>
                <div className="mt-4">{content}</div>
            </motion.div>
        </div>
    );
}
