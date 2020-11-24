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
  const [download, setDownload] = useState(true);
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setScreenSize({ innerWidth, innerHeight });
    window.onresize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setScreenSize({ innerHeight, innerWidth });
    };
  }, []);

  return (
    <>
      <Head>
        <title>File Manager</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.container}`}>
        <div className={styles.boxCont}>
          <div className={`${styles.box}`}>
            <div className={styles.allCont}>
              {screenSize.innerWidth > 800 && !download ? (
                <div className={styles.nav}>
                  <Nav />
                </div>
              ) : (
                ''
              )}

              {!download ? (
                <div className={`${styles.mainCont} px-4 py-5`}>
                  {/* <div className={`${styles.searchContainer}`}> */}
                  <div className={`${styles.searchBar}`}>
                    <SearchBar setDownload={setDownload} />
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
              {screenSize.innerWidth > 1000 || download ? (
                <div
                  className={`${styles.down} ${
                    download ? styles.downloadPage : ''
                  }`}
                >
                  <Download download setDownload={setDownload} />
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
