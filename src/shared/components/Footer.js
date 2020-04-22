import { html } from 'lit-html';

import styles from '../styles/components/footer.css';

export const footer = html`
    <footer class="${styles.footer}">
        <div class="${styles.footerContainer}">
            © 2019 Oslo-CTF - Site developed and designed by <a target="_blank" rel="noopener" href="https://twitter.com/jacobrclevenger">Jacob Clevenger</a>
        </div>
    </footer>
`;
