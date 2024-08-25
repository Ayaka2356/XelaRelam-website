import styles from "@/styles/about.module.css"
import Navbar from "@/components/mainPage/navbar";
import Footer from "@/components/mainPage/footer";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Navbar/>
      <main className={`container mx-auto p-4`}>
        <section className="bg-gray-900 p-4">
          <div className="container mx-auto flex justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-mono text-purple-800">Contributors</h2>
              <p className="text-lg font-sans">Meet the amazing contributors who helped making our community better!</p>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                  <Image src="/assets/images/contributor1.png" alt="ayaka068198" width={200} height={200} className="w-24 h-24 rounded-full mx-auto"/>
                  <h3 className="text-lg font-bold font-mono">Ayaka</h3>
                  <p className="text-md font-sans">@ ayaka068198</p>
                </div>
                <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                  <Link target="_blank" rel="noopener noreferrer" href={"https://lynnux.xyz/"}>
                    <Image src="/assets/images/contributor2.png" alt="dark_lynn" width={200} height={200} className="w-24 h-24 rounded-full mx-auto"/>
                  </Link>
                  <h3 className="text-lg font-bold font-mono">Lynuxx</h3>
                  <p className="text-md font-sans">@ dark_lynn</p>
                </div>
                <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                  <Image src="/assets/images/contributor3.png" alt="ez_luffy" width={200} height={200} className="w-24 h-24 rounded-full mx-auto"/>
                  <h3 className="text-lg font-bold font-mono">LUFFY</h3>
                  <p className="text-md font-sans">@ ez_luffy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </>
  );
}
