

import styles from './styles.module.css'
import {Header} from '../../components/header'
import {Hero} from './components/hero'
import {Testimonials} from './components/testimonials'
import {Cta} from './components/cta'
import {Footer} from '../../components/footer'

export function Home() {

    return (
        <div className={styles.container}>
            <Header />
            <Hero />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}