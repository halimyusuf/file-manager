import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/nav';
import SearchBar from '../components/SearchBar';
import QuickAccess from '../components/QuickAccess';
import Preview from '../components/Preview';
import Review from '../components/Recent files';
import Download from '../components/Downloads';

export default function Home() {
  const [screenSize, setScreenSize] = useState({});
  const [nav, setNav] = useState(false);
  const [download, setDownload] = useState(false);
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setScreenSize({ innerWidth, innerHeight });
    window.onresize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setScreenSize({ innerHeight, innerWidth });
    };
  }, []);

  const downloadRange = screenSize.innerWidth > 700;
  const navRange = screenSize.innerWidth > 600;

  return (
    <>
      <Head>
        <title>File Manager</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://pagecdn.io/lib/tailwindcss/1.6.2/tailwind.min.css'
          rel='stylesheet'
          crossorigin='anonymous'
        />
      </Head>
      <div className={`${styles.container}`}>
        <div className={styles.boxCont}>
          <div className={`${styles.box}`}>
            <div className={styles.allCont}>
              {(navRange && !download) || nav ? (
                <div className={`${styles.nav} ${nav ? styles.smNav : ''}`}>
                  <Nav nav={nav} setNav={setNav} />
                </div>
              ) : (
                ''
              )}

              {!download ? (
                <div className={`${styles.mainCont} px-4 py-5`}>
                  {/* <div className={`${styles.searchContainer}`}> */}
                  <div className={`${styles.searchBar}`}>
                    <SearchBar
                      downloadRange={downloadRange}
                      navRange={navRange}
                      setDownload={setDownload}
                      setNav={setNav}
                    />
                  </div>
                  {/* </div> */}
                  <div className='py-4'>
                    <QuickAccess />
                  </div>
                  <div className='pt-6'>
                    <Preview />
                  </div>
                  <div className='pt-8'>
                    <Review />
                  </div>
                </div>
              ) : (
                ''
              )}
              {downloadRange || download ? (
                <div
                  className={`${styles.down} ${
                    download ? styles.downloadPage : ''
                  }`}
                >
                  <Download download={download} setDownload={setDownload} />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
