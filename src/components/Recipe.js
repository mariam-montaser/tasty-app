import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const {handleDetails} = this.props;
        const {thumbnail_url, name, credits, renditions} = this.props.recipe;
        const video_url = renditions[0] ? renditions[0]['url'] : thumbnail_url;
        
        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4">
                    <div className="card mt-3">
                        <img style={{maxHeight: '14rem'}} className="img-card-top" src={thumbnail_url} alt="recipe"/>
                        <div className="card-body text-capitalize">
                            <h6>{name}</h6>
                            <h6 className="text-slanted text-warning">Provided By {credits[0]['name']}</h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary text-capitalize" onClick={handleDetails}>details</button>
                            <a href={video_url} className="btn btn-success mx-2 text-capitalize" target="_blank" rel="noopener noreferrer">Recipe URL</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
