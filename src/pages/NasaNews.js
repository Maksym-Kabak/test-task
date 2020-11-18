import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectIsNasaPostsLoading, selectNasaItem } from "../store/ducks/nasa/selector";
import { fetchNasaPosts } from "../store/ducks/nasa/actionCreator";
import { Loader } from "../components/Loader";

export const NasaNews = () => {
    const dispatch = useDispatch();
    const nasa = useSelector(selectNasaItem);
    const loading = useSelector(selectIsNasaPostsLoading);


    useEffect(() => {
        dispatch(fetchNasaPosts())
    }, [dispatch])

    if (loading) return <Loader />
    return (
        <div className="row">

            <h1>Blog Posts</h1>


            { nasa.map((item, i) => (
                <div className="col s12 m6" key={ i }>
                    <div className="card">
                        <div className="card-image">
                            <img src={ item.enclosure.url }/>
                            <span className="card-title">{ item.title }</span>
                        </div>
                        <div className="card-content">
                            <p>{ item.content }</p>
                        </div>
                        <div className="card-action">
                            <a href={ item.link } target="_blank" rel="noopener noreferrer">This is a link</a>
                        </div>
                    </div>
                </div>
            )) }

        </div>
    );
}


