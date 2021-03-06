import React from 'react';
import ReactDOM from 'react-dom';

import ImageManager from './Manager';

document.onreadystatechange = () => {
    window.tinymceBoot = (token, editor, urls, labels, uploads, pexels, unsplash) => {
        document.querySelectorAll('.tinymce-imagelibrary-root:not(.initialized)')
            .forEach((el) => {
                ReactDOM.render(<ImageManager token={ token } editor={ editor } urls={ urls } labels={ labels } uploads={ uploads } pexels={ pexels } unsplash={ unsplash } />, el);
                el.classList.add('initialized');
            });
    }
};