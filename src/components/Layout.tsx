import { type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import VaniChatbot from '@/components/VaniChatbot';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <VaniChatbot />
        </>
    );
}
