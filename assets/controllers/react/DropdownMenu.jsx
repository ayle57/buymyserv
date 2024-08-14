import {createRoot} from 'react-dom/client';
import React from 'react';

function DropdownMenu({title, icon, links}) {
    const [isOpen, setIsOpen] = React.useState(false);
    let parsedLinks = [];

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    try {
        parsedLinks = JSON.parse(links || "[]");
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }

    return (
        <>
            <li className={`dropdown-link ${isOpen ? 'open' : 'close'}`}>
                <a href="#" onClick={handleClick}><i className={`fas ${icon}`}></i>{title} <i className="fas fa-angle-down"></i></a>
            </li>
            <ul className={`dropdown ${isOpen ? 'open' : 'close'}`}>
                {parsedLinks.map((link, index) => (
                    <li className={link.title} key={index}>
                        <a href={link.href} key={index}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

class DropdownMenuElement extends HTMLElement {
    connectedCallback() {
        const root = createRoot(this);
        const title = this.getAttribute("title");
        const icon = this.getAttribute("icon");
        const links = this.getAttribute("links");
        root.render(<DropdownMenu title={title} icon={icon} links={links}/>);
    }
}

customElements.define('dropdown-menu', DropdownMenuElement);
