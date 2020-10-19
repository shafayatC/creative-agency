import React, { useEffect, useState } from 'react';
import './style.css'; 
import CircularProgress from '@material-ui/core/CircularProgress';

const Feedback = () => {

    const [review, setReview] = useState([]); 

    useEffect(()=> {
        fetch("http://localhost:4000/reviewList")
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="feedback_wrap">
            <div class="container">
                   <div class="row">
                    <div class="col-md-12">
                        <h1 className="fdback_title">Clients  <span>Feedback</span></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 fdback_client_wrap">

                        {review.slice(0,3).map(data =>
                            <div className="single_fdback">
                            <div className="info_wrap">
                                <img src={data.photo}/>
                                <div className="info">
                                <h4>{data.name}</h4>
                                <h5>{data.designation}</h5>
                                </div>
                            </div>
                                 <p>{data.description}</p>
                            </div>
                        )}
                        
                        {/* loading... */}    
                        {review.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;