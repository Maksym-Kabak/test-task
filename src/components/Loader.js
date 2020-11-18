import React from 'react'


export const Loader = () => {
    return (
        <div className="container">
            <div className="center" style={{marginTop:'15rem'}}>
                <div className="preloader-wrapper active ">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
