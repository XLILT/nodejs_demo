import React from 'react';

import './poker.less';

class Poker extends React.Component {
    render() {
        return <div className="PokerFrame">
            <div><img className="PokerNumber" src={ require("./1.png") } alt="1" /></div>
            <div><img className="PokerShape" src={ require("./heart.png") } alt="红桃" /></div>
        </div>
    }
}

export default Poker;
