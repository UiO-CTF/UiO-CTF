import { html, render } from 'lit-html';
import { eventItemList } from './shared/components/Events';

import { footer } from './shared/components/Footer';
import { header } from './shared/components/Header';
import { memeberList } from './shared/components/Team';


import styles from './shared/styles/base.css';

const app = () => html`
    <div>
        ${header}
        <main>
            <div class="${styles.container}">
                ${eventItemList(CONTENT.schedule)}
                ${memeberList(CONTENT.members)}
            </div>
        </main>
        ${footer}
    </div>
`;

render(app(), document.getElementById('app'));
