import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { iconButtonLink } from './Icon';

import Logo from '../assets/logo.png';
import styles from '../styles/components/header.css';

export const header = html`
    <div class="${styles.header}">
        <div class="${styles.headerContainer}">
            <img class="${styles.logo}" src="${Logo}" />
            <div>
                 <h1 class="${styles.title}">${CONTENT.ui.header.title}</h1>
                 <p class="${styles.description}">${CONTENT.ui.header.description}</p>
                 <div class="${styles.links}">
                    <div class="${styles.internalLinks}">
                        <a class="${styles.internalLink}" href="#schedule">${CONTENT.ui.header.links.internal.schedule}</a>
                        <a class="${styles.internalLink}" href="#team">${CONTENT.ui.header.links.internal.team}</a>
                    </div>
                    
                    <div class="${styles.externalLinks}">
                        ${repeat(CONTENT.ui.header.links.external, (link) => iconButtonLink(link.icon, link.href))}
                    </div>
                 </div>
            </div>
        </div>
        <svg class="${styles.trim}" viewBox="0 0 1920 259">
            <g transform="matrix(1,0,0,1,0,-821.452)">
                <path d="M0,948.736C163.974,898.948 379.499,770.145 557.751,870.149C932.766,1080.54 843.353,1061.82 1192.94,907.165C1296.43,861.381 1546.45,1036.3 1642.23,899.204C1775.75,708.075 1849.15,929.062 1920,932.307L1920,1080L0,1080L0,948.736Z"/>
            </g>
        </svg>
    </div>    
`;