import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/nav';
import SearchBar from '../components/SearchBar';
import QuickAccess from '../components/QuickAccess';

export default function Home() {
  return (
    <>
      <Head>
        <title>File Manager</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.container} container pt-10`}>
        <div className={styles.boxCont}>
          <div className={`${styles.box} px-5 py-5`}>
            <div className={styles.allCont}>
              <div className={styles.nav}>
                <Nav />
              </div>
              <div className={`${styles.mainCont} px-4 py-5`}>
                <div className={`${styles.searchBar} `}>
                  <SearchBar />
                </div>
                <div className='py-8'>
                  <QuickAccess />
                </div>
              </div>
              <div className={styles.down}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
