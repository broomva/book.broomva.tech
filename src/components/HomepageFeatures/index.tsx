import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link?: string; // optional link parameter
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Book',
    // Svg: require('@site/static/img/knowledge.svg').default,
    description: (
      <>
        The book is a compilation of many topics I've learned over the years.
      </>
    ),
    link: '/docs/',
  },
  {
    title: 'Chat Agent',
    // Svg: require('@site/static/img/chat_book_agent.svg').default,
    description: (
      <>
        If you have any questions, feel free to ask the chat agent. 
        It's tuned to only answer questions about the book.
      </>
    ),
    link: '/chat/' //'https://chat.broomva.tech',
  },
  {
    title: 'Blog',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Some extra time-tagged content that didn't make it into the book.
      </>
    ),
    link: '/blog/',
  },
];


function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        {link ? (
          <a href={link}>
            <Heading as="h3">{title}</Heading>
          </a>
        ) : (
          <Heading as="h3">{title}</Heading>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
