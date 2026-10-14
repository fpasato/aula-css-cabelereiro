
import { useState } from 'react'
import styles from './styles.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <a
          href="#inicio"
          className={styles.logo}
          onClick={closeMenu}
        >
          <span className={styles.logoName}>Studio</span>
          <span className={styles.logoHighlight}>Hair.</span>
          <span className={styles.logoSubtitle}>
            BEAUTY & ELEGANCE
          </span>
        </a>

        {/* Menu de navegação */}
        <nav
          className={`${styles.nav} ${
            menuOpen ? styles.navOpen : ''
          }`}
          id="navigation"
        >
          <a href="#inicio" className={styles.navLink} onClick={closeMenu}>
            Início
          </a>

          <a href="#sobre" className={styles.navLink} onClick={closeMenu}>
            Sobre
          </a>

          <a href="#servicos" className={styles.navLink} onClick={closeMenu}>
            Serviços
          </a>

          <a href="#avaliacoes" className={styles.navLink} onClick={closeMenu}>
            Avaliações
          </a>

          <a href="#localizacao" className={styles.navLink} onClick={closeMenu}>
            Localização
          </a>
        </nav>

        {/* Botão de agendamento */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>Agendar horário</span>
          <span className={styles.ctaArrow}>↗</span>
        </a>

        {/* Menu mobile */}
        <button
          type="button"
          className={`${styles.menuToggle} ${
            menuOpen ? styles.menuToggleOpen : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation"
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}
