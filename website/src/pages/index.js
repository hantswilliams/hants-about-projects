import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{
            minHeight: bannerHeight,
            display: isLoading ? "none" : "block",
          }}
        >
          <p>Hi, my name is</p>
          <h1 className="text-white">Hants Williams.</h1>
          <p>
            I am a{" "}
            <span className="text-white">
              health care professional
            </span>{" "}
            passionate about solving meaningful problems within{" "}
            <span className="text-white">hospitals, startups, and academic medical institutions</span>.
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
      </main>
    </Layout>
  );
}

export default Home;
