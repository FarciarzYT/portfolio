import AboutText from "@/components/content/AboutText";
import TechStack from "@/components/content/TechStack";
import ContactInfo from "@/components/content/ContactInfo";
import Navbar from "@/components/base/Header";

export default function Home(){
    return (
        <main className={"min-h-screen"}>
            <Navbar />
            <AboutText/>
            <ContactInfo/>
            <TechStack/>
        </main>
    )
}