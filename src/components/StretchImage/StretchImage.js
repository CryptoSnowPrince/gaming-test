import React from 'react';

import './StretchImage.css';

class StretchImage extends React.Component {
    constructor(props) {
        super(props);

        this.element = React.createRef();
        this.elImg = React.createRef();

        this.onImgLoad = this.onImgLoad.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);

        this.resizeTimeout = 0;
    }

    componentDidMount() {
        this.elImg.current.addEventListener('load', this.onImgLoad);
        window.addEventListener('resize', this.onWindowResize);

        this.comply();
    }
    
    componentWillUnmount() {
        this.elImg.current.removeEventListener('load', this.onImgLoad);
        window.removeEventListener('resize', this.onWindowResize);
        clearTimeout(this.resizeTimeout);
    }
    
    onWindowResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(this.comply.bind(this), 100);
    }
    
    onImgLoad(event) {
        this.comply(event);
    }
    
    comply(event) {
        var iw = this.elImg.current.offsetWidth;
        var ih = this.elImg.current.offsetHeight;
        
        var cw = this.element.current.clientWidth;
        var ch = this.element.current.clientHeight;

        this.elImg.current.style.width = 'auto';
        this.elImg.current.style.height = 'auto';
        this.elImg.current.style.marginLeft = 'auto';
        this.elImg.current.style.marginTop = 'auto';

        if ((cw / ch) < (iw / ih)) {
            this.elImg.current.style.height = '100%';

            var left = parseInt((iw - cw) / 2);

            if (left > 0) {
                this.elImg.current.style.marginLeft = -left+'px';
            }
        } else {
            this.elImg.current.style.width = '100%';

            var top = parseInt((ih - ch) / 2);

            if (top > 0) {
                this.elImg.current.style.marginTop = -top+'px';
            }
        }
    }

    render() {
        return (
            <div
                className="StretchImage"
                ref={this.element}
            >
                <img
                    className="StretchImage_img"
                    ref={this.elImg}
                    src={this.props.src}
                    alt={this.props.alt}
                    onLoad={this.onImgLoad}
                />
            </div>
        )
    }
}

export default StretchImage;