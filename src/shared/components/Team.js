import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

import styles from '../styles/components/members.css';

const blobs = [
    "M205.1,-163.6C253.9,-102.4,273.2,-17.8,255.8,58.4C238.4,134.6,184.3,202.4,113.8,236.4C43.4,270.3,-43.4,270.3,-113.8,236.4C-184.3,202.4,-238.4,134.6,-255.8,58.4C-273.2,-17.8,-253.9,-102.4,-205.1,-163.6C-156.4,-224.7,-78.2,-262.3,0,-262.3C78.2,-262.3,156.4,-224.7,205.1,-163.6Z",
    "M199.8,-157C247,-100.3,264.8,-17.9,246.7,54.2C228.5,126.2,174.4,187.9,105.9,221.4C37.5,255,-45.3,260.4,-113.1,229.7C-180.9,199,-233.8,132.2,-251.1,57C-268.5,-18.1,-250.3,-101.6,-202.6,-158.5C-154.8,-215.5,-77.4,-245.7,-0.5,-245.3C76.4,-244.9,152.7,-213.8,199.8,-157Z",
    "M137.4,-213.1C180,-186.4,217.8,-151.6,239.6,-108.1C261.5,-64.7,267.3,-12.7,262.1,39.1C256.9,91,240.7,142.8,207.2,177.1C173.7,211.5,122.9,228.6,71.9,242.4C20.9,256.2,-30.2,266.7,-74.3,253.5C-118.3,240.3,-155.1,203.3,-188.7,163.9C-222.3,124.5,-252.7,82.6,-265.1,34.6C-277.6,-13.4,-272,-67.6,-247,-108.9C-222,-150.1,-177.5,-178.5,-133.1,-204.4C-88.7,-230.3,-44.3,-253.6,1.5,-256C47.4,-258.4,94.8,-239.8,137.4,-213.1Z",
    "M146.5,-200C187.3,-172.1,215.8,-125.8,236,-74.2C256.2,-22.7,267.9,34.1,253.2,83.2C238.5,132.3,197.4,173.7,150.8,201.9C104.2,230.1,52.1,245.1,2.4,241.7C-47.2,238.3,-94.4,216.6,-133.1,185.9C-171.8,155.1,-201.9,115.3,-217.8,69.9C-233.6,24.6,-235.2,-26.2,-224.3,-76.9C-213.3,-127.6,-189.8,-178.3,-150.4,-206.6C-110.9,-235,-55.4,-241,-1.3,-239.2C52.9,-237.5,105.8,-228,146.5,-200Z",
];

function getRandomBlob() {
    return blobs[Math.floor(Math.random() * blobs.length)];
}

export const blob = (shape) => html`
    <svg style="transform: rotate(${Math.random() * 360}deg);" class="${styles.blob}" viewBox="0 0 600 600">
        <g transform="translate(300,300)">
            <path d=${shape}></path>
        </g>
    </svg>
`;

export const memeberItem = (member) => html`
    <div class="${styles.member}">
        <div class="${styles.avatarContainer}">
            ${blob(getRandomBlob())}
            <div class="${styles.avatar}">
                <img src="${member.profilePicture}" />
            </div>
        </div>
        <div class="${styles.details}">
            <span class="${styles.name}">${member.name}</span>
            <span class="${styles.title}">${member.title}</span>
        </div>
    </div>
`;


export const memeberList = (members) => html`
    <div id="team">
        <h4>${CONTENT.ui.team.title}</h4>
        <div class="${styles.memberList}">
            ${repeat(members, (member) => memeberItem(member))}
        </div>
    </div>
`;