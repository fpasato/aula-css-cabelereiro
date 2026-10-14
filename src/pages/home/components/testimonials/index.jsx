
import styles from './styles.module.css'

const testimonials = [
  {
    name: 'Mariana Silva',
    initials: 'MS',
    service: 'Corte e coloração',
    text: 'Atendimento maravilhoso! O corte ficou exatamente como eu queria e a coloração superou todas as minhas expectativas.',
  },
  {
    name: 'Camila Rocha',
    initials: 'CR',
    service: 'Tratamento capilar',
    text: 'Ambiente super agradável, atendimento impecável e um resultado incrível no meu cabelo. Recomendo muito!',
  },
  {
    name: 'Fernanda Lima',
    initials: 'FL',
    service: 'Consultoria de visagismo',
    text: 'Estava com receio de mudar o visual, mas recebi ótimas orientações. Saí me sentindo linda e renovada!',
  },
]

export function Testimonials() {
  return (
    <section className={styles.testimonials} id="avaliacoes">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            EXPERIÊNCIAS REAIS
          </span>

          <h2 className={styles.title}>
            Beleza que conquista.
            <br />
            <em>Palavras que inspiram.</em>
          </h2>

          <p className={styles.description}>
            A melhor recompensa é ver nossas clientes saírem
            felizes, confiantes e apaixonadas pelo resultado.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article
              className={styles.card}
              key={testimonial.name}
            >
              <div className={styles.cardTop}>
                <span className={styles.quoteMark}>“</span>

                <div
                  className={styles.stars}
                  aria-label="5 de 5 estrelas"
                >
                  ★★★★★
                </div>
              </div>

              <p className={styles.testimonialText}>
                {testimonial.text}
              </p>

              <div className={styles.divider} />

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.initials}
                </div>

                <div className={styles.authorInfo}>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.service}</span>
                </div>

                <span
                  className={styles.verified}
                  aria-label="Depoimento ilustrativo"
                  title="Depoimento ilustrativo"
                >
                  ✧
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.bottomLine} />
          <p>Cada detalhe pensado para você.</p>
          <span className={styles.bottomLine} />
        </div>

      </div>
    </section>
  )
}
