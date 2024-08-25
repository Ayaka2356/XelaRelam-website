import styles from "@/styles/main.module.css"
import Navbar from "@/components/mainPage/navbar";
import Footer from "@/components/mainPage/footer";
import Link from "next/link";

export default function Index() {
  return (
    <main>
      <div className="bg-gray-900 text-white">
        <div className="header">
          <Navbar/>
        </div>
        <div className={styles.uwu}>
          <section className={`${styles.container} text-white p-4`}>
            <div className="container mx-auto flex justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold font-mono">Welcome to XelaRelam Coding Community</h1>
                <p className="text-lg font-sans">Your one-stop-shop for coding solutions</p>
                <Link href={"/get-started"}>
                  <button className="btn font-semibold underline">Get Started</button>
                </Link>
                <iframe className="mx-auto" src="assets/extra/typing.html" width={475} height={160} title="age typing"/>
              </div>
            </div>
          </section>
          <section className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold font-mono text-purple-800">Features</h2>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                    <div className="paper bg-gray-500 p-6 rounded shadow-md">
                      <h3 className="text-2xl font-extrabold font-mono">Code Sharing</h3>
                      <p className="text-md font-bold font-sans text-white">Share your code with others and get feedback.</p>
                      <ul className="pt-5 pl-4 list-none">
                        <li className="text-md font-sans text-white">BDFD</li>
                        <li className="text-md font-sans text-white">AOI.js</li>
                        <li className="text-md font-sans text-white">ForgeScript</li>
                        <li className="text-md font-sans text-white">JavaScript</li>
                        <li className="text-md font-sans text-white">Python</li>
                        <li className="text-md font-sans text-white">Other languages</li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                    <div className="paper bg-gray-500 p-6 rounded shadow-md">
                      <h3 className="text-2xl font-extrabold font-mono">Free Codes</h3>
                      <p className="text-md font-bold font-sans text-white">Get codes/open sources to kickstart your project for discord bot development for free.</p>
                      <ul className="list-none pt-5 pl-4">
                        <li className="text-md font-sans text-white">BDFD/Open Sources</li>
                        <li className="text-md font-sans text-white">AOI.js/Open Sources</li>
                        <li className="text-md font-sans text-white">ForgeScript/Open Sources</li>
                        <li className="text-md font-sans text-white">Discord.js/Open Sources</li>
                        <li className="text-md font-sans text-white">Python/Open Sources</li>
                        <li className="text-md font-sans text-white">Other coding languages/Open Sources</li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                    <div className="paper bg-gray-500 p-6 rounded shadow-md">
                      <h3 className="text-2xl font-extrabold font-mono">Server Helping Support</h3>
                      <p className="text-md font-bold font-sans text-white">Get support from different helpers according to your coding needs.</p>
                      <ul className="list-none  pt-5 pl-4">
                        <li className="text-md font-sans text-white">BDFD Support</li>
                        <li className="text-md font-sans text-white">AOI.js Support</li>
                        <li className="text-md font-sans text-white">ForgeScript Support</li>
                        <li className="text-md font-sans text-white">Discord.js Support</li>
                        <li className="text-md font-sans text-white">And much more.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    </main>
  );
}
