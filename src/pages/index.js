import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Yazılım Akademisi</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
      Yazılım dünyasına giriş yapmak isteyen, elde ettiği bilgi, birikim ve tecrübesini başkalarıyla paylaşmak isteyen, değer katmaktan, üretmek ve paylaşmaktan zevk alan herkes için oluşturulmuş projedir.
      </>
    ),
  },
  {
    title: <>Nereden Başlamalıyım Sorusuna Son!</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
      Yazılıma yeni başlayanlar her daim nereden başlayım derler. Burada bulunan içerikler başlaman için yeterli. Artık lütfen başla.
      </>
    ),
  },
  {
    title: <>Özenle Seçilmiş İçerikler</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      Burada bulunan içerikler açık kaynak olarak yayınlanmış içeriklerin bir araya getirilmesi ile oluşturulmuştur. Eğer istersen burada yer almayan bir içeriği oluşturarak destek olabilirsin.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Hadi Başlayalım
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
