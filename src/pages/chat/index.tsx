import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import styles from './index.module.css';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Broomva's Book, a continuous effort"
        >
            <main>
                {/* <div className={styles.responsive-iframe}> */}
                    <iframe
                        src="https://broomva-book-broomva-chat.hf.space"
                        title="Book Broomva Chat"
                        width="100%"
                        height={800}
                        allowFullScreen={true}
                    ></iframe>
                {/* </div> */}
            </main>
        </Layout>
    );
}
