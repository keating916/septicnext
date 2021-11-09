import { Component } from "react";

export default class RenderImages extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.images[0].image) {
            return(
                <div className="gallery-image-container">
                {this.props.images.map(i => {
                    return (<div key={i.title}>
                                <div className="BACardContents">
                                    <img
                                    className="gallery-image"
                                    src={i.thumbnail}
                                    alt={i.title}
                                    onClick={evt => this.props.handleClick(evt)}
                                    style={{
                                    cursor: 'pointer'
                                    }} 
                                    />
                                </div>
                                <div className={`modal ${this.props.state[i.title] || false}`} onClick={tgt => this.props.handleClick(tgt)}>
                                    <h4 onClick={tgt => this.props.handleClick(tgt)}>Click anywhere to dismiss</h4>
                                    <img 
                                    className='modalImg'
                                    src={i.image}
                                    alt={i.title}
                                    onClick={tgt => this.props.handleClick(tgt)}/>
                                </div>
                            </div>
                            )
                })}
            </div>
            )
        }else if(this.props.images[0].before) {
            return(
                <div className="gallery-image-container">
                {this.props.images.map(i => {
                            return (<div key={i.after.title} className="BACard">
                                        <div className="BACardContents">
                                            <img
                                            className="gallery-image"
                                            src={i.before.thumbnail}
                                            alt={i.before.title}
                                            onClick={evt => this.props.handleClick(evt)}
                                            style={{
                                            cursor: 'pointer'
                                            }} 
                                            />
                                            <p>Before</p>

                                        </div>
                                        <div className={`modal ${this.props.state[i.before.title] || false}`} onClick={tgt => this.props.handleClick(tgt)}>
                                        <h4 onClick={tgt => this.props.handleClick(tgt)}>Click anywhere to dismiss</h4>
                                            <img 
                                            className='modalImg'
                                            src={i.before.image}
                                            alt={i.before.title}
                                            onClick={tgt => this.props.handleClick(tgt)}/>
                                        </div>
                                        <div className="BACardContents">
                                            <img
                                            className="gallery-image"
                                            src={i.after.thumbnail}
                                            alt={i.after.title}
                                            onClick={evt => this.props.handleClick(evt)}
                                            style={{
                                            cursor: 'pointer'
                                            }} 
                                            />
                                            <p>After</p>
                                        </div>
                                        <div className={`modal ${this.props.state[i.after.title] || false}`} onClick={tgt => this.props.handleClick(tgt)}>
                                            <h4 onClick={tgt => this.props.handleClick(tgt)}>Click anywhere to dismiss</h4>
                                            <img 
                                            className='modalImg'
                                            src={i.after.image}
                                            alt={i.after.title}
                                            onClick={tgt => this.props.handleClick(tgt)}/>
                                        </div>
                                    </div>
                                    )
                        })}
            </div>
            )
        }else {
            return(
                <div>Please load images</div>
            )
        }
    }
}

//TODO change img tags to Next Images, Responsive for the modal images