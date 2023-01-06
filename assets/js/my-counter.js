import {html, LitElement} from "lit";

export class MyCounter extends LitElement {
    static properties = {
        count: {type: Number},
    };

    constructor() {
        super();
        this.count = 0;
    }

    inc() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count_changed'));
        const data = {count: this.count}
        const event = new CustomEvent('new_count', {'detail': data});
        this.dispatchEvent(event);
    }

    dec() {
        this.count--;
        this.dispatchEvent(new CustomEvent('count_changed'));
        const data = {count: this.count}
        const event = new CustomEvent('new_count', {'detail': data});
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <link phx-track-static="" rel="stylesheet" href="/assets/app.css">
            <button class="btn btn-icon-only btn-primary btn-sm" @click="${this.dec}">-</button>
            <span>${this.count}</span>
            <button class="btn btn-icon-only btn-primary btn-sm" @click="${this.inc}">+</button>
        `;
    }
}

customElements.define("my-counter", MyCounter);
