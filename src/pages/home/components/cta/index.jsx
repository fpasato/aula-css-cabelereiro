
import styles from './styles.module.css'

export function Cta() {
  const endereco = 'Rua Exemplo, Centro, Araraquara - SP'
  const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`

  return (
    <section className={styles.location} id="localizacao">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            ESTAMOS ESPERANDO POR VOCÊ
          </span>

          <h2 className={styles.title}>
            Seu momento de beleza
            <br />
            <em>começa aqui.</em>
          </h2>

          <p className={styles.description}>
            Venha conhecer nosso espaço e desfrutar de uma
            experiência de beleza, cuidado e bem-estar.
          </p>
        </div>

        <div className={styles.content}>

          {/* Informações de contato */}
          <div className={styles.info}>
            <span className={styles.infoLabel}>
              VISITE NOSSO STUDIO
            </span>

            <h3 className={styles.infoTitle}>
              Será um prazer receber você.
            </h3>

            <div className={styles.detail}>
              <span className={styles.icon}>⌖</span>
              <div>
                <h4>Endereço</h4>
                <p>
                  Rua Exemplo, Centro
                  <br />
                  Araraquara — SP
                </p>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.icon}>◷</span>
              <div>
                <h4>Horário de atendimento</h4>
                <p>
                  Terça a sábado
                  <br />
                  Das 09h às 19h
                </p>
              </div>
            </div>

            <div className={styles.detail}>
              <span className={styles.icon}>✆</span>
              <div>
                <h4>Agendamentos</h4>
                <p>Entre em contato pelo WhatsApp.</p>
              </div>
            </div>

            <a
              href={mapaUrl}
              className={styles.routeButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar
              <span>↗</span>
            </a>
          </div>

          {/* Mapa do Google Maps */}
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.map}
              src="https://maps.google.com/maps?q=Araraquara%2C%20SP&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Mapa de localização do Studio Hair"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <a
              href={mapaUrl}
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>⌖</span>
              Abrir no Google Maps
              <span>↗</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
