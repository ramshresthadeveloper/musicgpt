import { FeaturedIcon } from "@app/components/Icons";
import { AppType } from "@app/types/app";
import Image from "next/image";
import Link from "next/link";

const Item = ({ item }: { item: AppType.PlayList }) => {
    return (
        <div className="pr-5">
            <Link href={item.link}>
                <div className="item">
                    <Image src={item.image} alt="image" height={200} width={200} className="rounded-[20px]" />
                    <div className="absolute top-4 left-4 bg-[#959595] rounded-full p-2">
                        <FeaturedIcon className="h-4 w-4 text-white" />
                    </div>
                </div>
                <div className="flex gap-2 mt-2">
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