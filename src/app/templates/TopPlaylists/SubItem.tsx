import { Play } from "@app/components/Icons";
import { useGlobalModal } from "@app/components/modal/ModalContext";
import Image from "next/image";
import PlayItem from "./PlayItem";

const SubItem = ({ items }: any) => {
    const { openModal } = useGlobalModal();
    return (
        <div>
            {items && items.length > 0 && items.map((item: any, index: number) => (
                <div key={index} className="mb-4">
                    <button onClick={() => {
                        openModal(
                            <PlayItem item={item} />,
                            "",
                            "md"
                        );
                    }}>
                        <div className="flex gap-3 items-center">
                            <div className="text-white">{item.position}</div>
                            <div className="relative">
                                <Image src={item.image} height={77} width={77} alt="image" className="rounded-[20px]" />
                                <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                                    <Play className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="text-white text-[18px]"> {item.title}</div>
                                <div className="flex gap-2">
                                    <span>{item.userName}</span>
                                    <span>.</span>
                                    <span>{Intl.NumberFormat('en-US', {
                                        notation: 'compact',
                                        maximumFractionDigits: 1,
                                    }).format(item.totalPlays)}</span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    );
}
export default SubItem;