import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    {/* Dev Credit */}
                    <meta name="author" content="Lynnux" />

                    {/* Embedding */}
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/assets/favicon/favicon.ico" />
                    <meta property="og:image:secure_url" content="/assets/favicon/favicon.ico" />

                    {/* Favicon */}
                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" type="image/png" sizes="any" href="/assets/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicon/android-chrome-512x512.png" />
                    <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
                </Head>
                <body className='bg-gray-900 text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
