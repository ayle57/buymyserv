import { createRoot } from 'react-dom/client';
import React from 'react';
import Typed from 'typed.js';

function Typing({ strings }) {
    const el = React.useRef(null);

    React.useEffect(() => {
        try {
            const parsedStrings = JSON.parse(strings);
            console.log(parsedStrings);

            const typed = new Typed(el.current, {
                strings: parsedStrings,
                typeSpeed: 100,
                loop: true
            });

            return () => {
                typed.destroy();
            };
        } catch (error) {
            console.error("Error parsing strings:", error);
        }
    }, [strings]);

    return <span ref={el}></span>;
}

class TypingElement extends HTMLElement {
    connectedCallback() {
        const root = createRoot(this);
        const strings = this.getAttribute('strings');
        console.log("Attribute 'strings':", strings);
        root.render(<Typing strings={strings} />);
    }
}

customElements.define('typing-item', TypingElement);
