import { Brush, Dollar, Download, ShoppingBag, TrendUp } from "@app/components/Icons";

const WhyUs = () => {
    const items = [
        {
            icon: <Brush className="h-6 w-6" />,
            name: "World’s Best AI"
        },
        {
            icon: <Download className="h-6 w-6" />,
            name: "Unlimited Free Downloads"
        },
        {
            icon: <Dollar className="h-6 w-6" />,
            name: "Commercial Use"
        },
        {
            icon: <TrendUp className="h-6 w-6" />,
            name: "Biggest Library"
        },
        {
            icon: <ShoppingBag className="h-6 w-6" />,
            name: "Songs, Beats, Instrumentals and more"
        }
    ];
    return (
        <div className="flex justify-between border-y border-y-[#303438] py-4 my-5">
            {items.length > 0 && items.map((item, index) => (
                <div key={index}>
                    <span className="flex gap-2 items-center">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </span>
                </div>
            ))}
        </div>
    );
}
export default WhyUs;