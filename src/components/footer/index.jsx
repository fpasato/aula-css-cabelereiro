
import styles from './styles.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Parte principal */}
        <div className={styles.main}>

          {/* Marca */}
          <div className={styles.brand}>
            <a href="#inicio" className={styles.logo}>
              Studio<span>Hair.</span>
            </a>

            <p className={styles.brandDescription}>
              Sua beleza, nosso propósito.
              Cuidado, elegância e autoestima em cada detalhe.
            </p>

            <a
              href="https://wa.me/5500000000000"
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar horário <span>↗</span>
            </a>
          </div>

          {/* Navegação */}
          <div className={styles.column}>
            <h3>Navegação</h3>

            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#localizacao">Como chegar</a>
          </div>

          {/* Atendimento */}
          <div className={styles.column}>
            <h3>Atendimento</h3>

            <p>Terça a sábado</p>
            <p>09h às 19h</p>

            <span className={styles.smallText}>
              Atendimento com hora marcada.
            </span>
          </div>

          {/* Contato */}
          <div className={styles.column}>
            <h3>Entre em contato</h3>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps ↗
            </a>
          </div>

        </div>

        {/* Linha inferior */}
        <div className={styles.bottom}>
          <p>
            © {currentYear} Studio Hair. Todos os direitos reservados.
          </p>

          <a href="#inicio" className={styles.backToTop}>
            Voltar ao topo ↑
          </a>
        </div>

      </div>
    </footer>
  )
}
