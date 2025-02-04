import Link from "next/link";
import logo from "@app/assets/images/musicgpt.png";
import Image from "next/image";
import { DISCOVER, GENERATE, HOME } from "@app/constant/routes";

const Header = () => {
    return (
        <header className="z-50 h-[72px] block w-full container">
            <div className="relative flex justify-between items-center w-full py-[16px]">
                <div className="h-8 flex-1 flex justify-start mr-auto">
                    <Link className="block" href={HOME}>
                        <span className="flex items-center gap-4">
                            <span className="block w-8 h-8">
                                <Image alt="MusicGPT" width="36" height="36" decoding="async" data-nimg="1" className="w-auto" src={logo} />
                            </span>
                            <span className="block text-lg text-white font-medium">MusicGPT</span>
                        </span>
                    </Link>
                </div>
                <div className="h-8 flex-0 flex justify-center px-md">
                    <div className="flex gap-6 relative menu-item">
                        <Link className="text-[#5D6165] h-7 pt-1 relative" href={GENERATE}>Generate</Link>
                        <Link className="text-[#E4E6E8] h-7 pt-1 relative active" href={DISCOVER}>Discover</Link>
                    </div>
                </div>
                <div className="h-10 flex items-center justify-end gap-4 flex-1">
                    <div className="flex justify-end gap-4 h-8">
                        <button type="button" className="text-sm text-white leading-tight px-4 rounded-lg border border-[#44484C]">Log in</button>
                        <button type="button" className="text-sm text-[#16191C] px-4 leading-tight bg-white rounded-lg">Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
