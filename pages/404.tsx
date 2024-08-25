import React, { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Navbar from '@/components/mainPage/navbar';
import Footer from '@/components/mainPage/footer';
import styles from "@/styles/error.module.css";

const Custom404 = () => {
    const PaddingBottom: React.CSSProperties = {}

    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H"/>
            <main>
                <Navbar/>
                <div className="main-content">
                    <article className="404 active" data-page="resume">
                        <div className={styles.grandparent}>
                            <div className={styles.parent}>
                                <div className={styles.child}>
                                    <Image draggable={false} className={styles.image} width="400" height="250"src="/assets/svg/NotFound.svg" alt="not-found" />
                                </div>
                            </div>
                            <div className={styles.uncle}>
                                <h4 className="error-main">The page you{"'"}re looking for can{"'"}t be found.</h4>
                                <button onClick={() => window.location.href='/'}  className={`form-btn ${styles.uwu}`}>
                                    <div className='flex'>
                                        <Image draggable="false" className='send-icon' src="/assets/svg/home.svg" alt="Book icon" width={25} height={25}/>
                                        <span> Home</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
                <Footer/>
            </main>
            </>
    );
}

export default Custom404;
