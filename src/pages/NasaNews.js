import React from 'react';

let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

class NasaNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    async componentDidMount() {
        const feed = await parser.parseURL(CORS_PROXY + 'https://www.nasa.gov/rss/dyn/breaking_news.rss');
        this.setState(feed)
    }

    render() {
        return (
            <div className="row">

                <h1>Blog Posts</h1>


                { this.state.items && this.state.items.map((items, i) => (
                    <div className="col s12 m6" key={i}>
                        <div className="card" >
                            <div className="card-image" >
                                <img src={items.enclosure.url}/>
                                    <span className="card-title">{items.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{items.content}</p>
                            </div>
                            <div className="card-action">
                                <a href={items.link} target="_blank" rel="noopener noreferrer">This is a link</a>
                            </div>
                        </div>
                    </div>
                )) }

            </div>
        );
    }
}

export default NasaNews;
