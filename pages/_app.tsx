import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';

function App({ Component, pageProps }: AppProps) {
    const isExcludedPage = Component.name === 'Custom404';

    const pathname = pageProps.__NEXT_DATA__?.page || '/';
    const pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2) || 'Home';
    const title = `${pageTitle} | XelaRelam Coding Community`;
    const canonical = `https://lynnux.xyz${pathname}`;
    const is404Page = pathname === '/404';
    const isHomePage = pathname === '/';

    const mainDescription = "Hi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!"

    return (
        <>
            <Head>
            {is404Page ? (
                    <>
                        <title>404 | XelaRelam Coding Community</title>
                        <meta property="og:title" content="404 | XelaRelam Coding Community" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={mainDescription} />
                        <meta name="description" content={mainDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://SOON-tm/" />
                        <meta property="og:title" content="XelaRelam Coding Community" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={mainDescription}/>
                        <meta name="theme-color" content="#00ffff" />

                    </>
                ) : isHomePage ? (
                  <>
                        <title>Home | XelaRelam Coding Community</title>
                        <meta property="og:title" content="404 | XelaRelam Coding Community" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={mainDescription} />
                        <meta name="description" content={mainDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://SOON-tm/" />
                        <meta property="og:title" content="XelaRelam Coding Community" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={mainDescription}/>
                        <meta name="theme-color" content="#00ffff" />

                  </>
                ) : (
                    <>
                        <title>{title}</title>
                        <meta property="og:title" content={title} />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={mainDescription} />
                        <meta name="description" content={mainDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content={title} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={mainDescription} />
                        <meta property="og:image" content="./assets/favicon/favicon.ico"/>
                        <meta property="og:image:secure_url" content="./assets/favicon/apple-touch-icon.png"/>
                        <meta name="theme-color" content="#00ffff" />

                    </>
                )}

                {/* 404.tsx Only */}
                {is404Page && <meta name="robots" content="noindex" />}
                {isHomePage && <meta name="robots" content="index, follow" />}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
