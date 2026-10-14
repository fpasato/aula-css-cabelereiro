
import styles from './styles.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>
          SUA BELEZA, NOSSO PROPÓSITO
        </span>

        <h1 className={styles.title}>
          Realce sua beleza natural com um visual{' '}
          <em>exclusivo</em> e feito para você.
        </h1>

        <p className={styles.description}>
          Cortes modernos, coloração impecável e tratamentos
          capilares em um ambiente acolhedor. Agende sua
          transformação com quem entende do seu estilo.
        </p>

        <a
          href="https://wa.me/5500000000000"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.whatsappIcon}>✆</span>
          Quero agendar meu horário
          <span className={styles.arrow}>↗</span>
        </a>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✧</span>
            <div>
              <strong>Atendimento personalizado</strong>
              <span>Com hora marcada</span>
            </div>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>✂</span>
            <div>
              <strong>Profissional especialista</strong>
              <span>Visagismo e colorimetria</span>
            </div>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>♧</span>
            <div>
              <strong>Produtos premium</strong>
              <span>Cuidado com seus fios</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <img
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85"
          alt="Cabelo longo, brilhante e bem cuidado em um visual sofisticado"
        />

        <div className={styles.imageLabel}>
          <span className={styles.labelLine} />
          <span>BELEZA EM CADA DETALHE</span>
        </div>

        <div className={styles.imageNumber}>
          01 <span /> 03
        </div>
      </div>
    </section>
  )
}
