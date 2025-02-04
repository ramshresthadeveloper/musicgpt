import { AppType } from "@app/types/app";
import Image from "next/image";
import Link from "next/link";

const Item = ({ item }: { item: AppType.Producer }) => {
    return (
        <div className="pr-5">
            <Link href={item.link}>
                <div className="item">
                    <Image src={item.image} alt="image" height={200} width={200} className="rounded-full" />
                </div>
                <div className="text-white text-[18px] mt-2">
                    {item.name}
                </div>
                <div className="flex gap-2 mt-1">
                    <span>{Intl.NumberFormat('en-US', {
                        notation: 'compact',
                        maximumFractionDigits: 1,
                    }).format(item.likes)}</span>
                    <span>Likes</span>
                </div>
            </Link >
        </div>

    );
}
export default Item;