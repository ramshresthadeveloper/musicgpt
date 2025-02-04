import Link from "next/link";

const Footer = () => {
    return (
        <div className="container">
            <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 py-5">
                <li>
                    <Link href={'/'} className="me-4 text-[#3A3E42] hover:text-[#505458]">How it works</Link>
                </li>
                <li>
                    <Link href={'/#'} className="me-4 text-[#3A3E42] hover:text-[#505458]">Pricing</Link>
                </li>
                <li>
                    <Link href={'/#'} className="me-4 text-[#3A3E42] hover:text-[#505458]">About</Link>
                </li>
                <li>
                    <Link href={'/#'} className="me-4 text-[#3A3E42] hover:text-[#505458]">API</Link>
                </li>
                <li>
                    <Link href={'/#'} className="me-4 text-[#3A3E42] hover:text-[#505458]">Terms & Privacy</Link>
                </li>
            </ul>
        </div>
    );
}
export default Footer;