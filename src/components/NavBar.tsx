"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'David Kan' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="w-full fixed top-0 right-0 z-50 flex justify-between padding-left-30 p-8" style={{background: "#252322"}}>
            {/* left aligned */}
            <div>
                <Link href={navLinks[0].href} className={"text-center pr-2"}>
                    {navLinks[0].label}
                </Link>
            </div>

            {/* right aligned */}
            <div className="flex justify-end gap-4">
                {navLinks.slice(1).map(({href, label}) => (
                    <Link key={href} href={href} className={`px-1 ${pathname === href ?'text-[#F3E500] font-bold' : ''}`}>
                        {label}
                    </Link>
                ))}
            </div>

        </nav>
    );
};

export default NavBar;
