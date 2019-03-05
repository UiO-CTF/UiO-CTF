import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

import dayjs from 'dayjs';
import styles from '../styles/components/events.css';

function dateSuffix(date) {
    let suffix = 'th';

    if (date === '1') { suffix = 'st'; }
    else if (date === '2') { suffix = 'nd'; }
    else if (date === '3') { suffix = 'rd' }

    return `${date}${suffix}`
}

/**
 * Displays the event item with date, topic, and description.
 * 
 * @param {*} item 
 */
export const eventItem = (item) => html`
    <div class="${styles.eventItem}">
        <div class="${styles.eventDate}">
            <span class="${styles.eventDay}">${ dateSuffix(dayjs(item.date, 'DD-MM-YYYY').format('D')) }</span>
            <span class="${styles.eventMonth}">${dayjs(item.date).format('MMMM')}</span>
        </div>
        <div class="${styles.eventContent}">
            <h5>${item.topic}</h5>
            <p>${item.description}</p>
        </div>
    </div>
`;

/**
 * Displays a list of event items.
 * 
 * @param {*} items 
 */
export const eventItemList = (items) => html`
    <div id="schedule" class="${styles.eventList}">
        <h4>${CONTENT.ui.schedule.title}</h4>
        ${repeat(items, (item) => eventItem(item))}
    </div>
`;