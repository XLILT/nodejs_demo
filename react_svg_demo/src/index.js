'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class SVGArrowCompoent extends React.Component {
    constructor(props) {
        super(props);

        this.id = Math.random().toString(16).substr(2)

        this.w = parseInt(2 * parseInt(this.props.lw) + 10);
        this.h = parseInt(1.5 * parseInt(this.props.lw) + 10);

        this.line_lenth = Math.sqrt(Math.pow(parseInt(this.props.x2) - parseInt(this.props.x1), 2) + Math.pow(parseInt(this.props.y2) - parseInt(this.props.y1), 2));
        this.line_lenth = parseInt(this.line_lenth);
        this.start_width = parseInt(this.line_lenth - this.h * 0.75);
        this.start_height = parseInt(this.w * 0.5);
    }

    render() {        
        return (            
            <div style={{float: "left"}}>
                <svg style={{width: 500, height: 500}}>
                    <defs>
                        <marker id={"arrow-start" + this.id} markerWidth="500" markerHeight="500" refX="0" refY={parseInt(this.start_height / 2)} orient="auto" markerUnits="strokeWidth">
                            <path d={"M0 " + parseInt(this.start_height / 2) + " L" + this.start_width + " 0 L" + this.start_width + " " + this.start_height + " Z"} fill="#f00" />
                        </marker>
                    </defs>
                    <defs>                        
                        <marker id={"arrow-end" + this.id} markerWidth="500" markerHeight="500" refX={this.h} refY={this.w * 0.5} orient="auto" markerUnits="strokeWidth">
                            <path d={"M" + this.h + " " + parseInt(this.w * 0.5) + " L0 0 L" + parseInt(this.h * 0.25) + " " + parseInt(this.w * 0.5) + " L0 " + this.w + " Z"} fill="#f00" />
                        </marker>                        
                    </defs>
                    
                    <path d={ "M" + this.props.x1 + " " + this.props.y1 + " L" + this.props.x2 + " " + this.props.y2 } stroke="#f00" strokeWidth="1" markerStart={"url(#arrow-start" + this.id + ")"} markerEnd={"url(#arrow-end" + this.id + ")"} />                    
                </svg>
            </div>
        );
    }
}

function SomeArrow() {
    return (
        <div>
            <SVGArrowCompoent x1="100" y1="100" x2="390" y2="100" lw="1" />
            <SVGArrowCompoent x1="10" y1="10" x2="110" y2="90" lw="4" />
            <SVGArrowCompoent x1="200" y1="210" x2="110" y2="90" lw="8" />
            <SVGArrowCompoent x1="100" y1="210" x2="100" y2="90" lw="12" />
            <SVGArrowCompoent x1="100" y1="100" x2="100" y2="250" lw="16" />
            <SVGArrowCompoent x1="50" y1="66" x2="100" y2="250" lw="20" />
        </div>
    );
}
    
ReactDOM.render(<SomeArrow />, document.getElementById('root'));

