import React from 'react';
import {Search, Create, ThumbUpAlt, Comment} from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import {Card} from 'react-bootstrap';
import {Button} from '@material-ui/core';
import '../css/cards.scss';
 const Community = () =>{
    
    const getCommunity = [
        {
            title : "Prof. posted Google L3 | Microsoft L61 | Goldman Sachs",
            text : "With supporting text below as a natural lead-in to additional content."
        },
        {
            title : "Student posted X tag | Y tag | Z tag ",
            text : "With supporting text below as a natural lead-in to additional content."
        },
        {
            title : "Prof. posted Google L3 | Microsoft L61 | Goldman Sachs",
            text : "With supporting text below as a natural lead-in to additional content."
        },
    ]


    return(
        <div>
           
            <div className="container-fluid ">
                <div className="row " style={{maxWidth:'80%'}}>
                    <div className="col-lg-5" style={{display:"flex", }}>
                        <Search className="mt-2" style={{display:"inline", color:"#5E81F4"}}/>
                    <input className="form-control" placeholder="Search " name="search"/>
                    </div>
                    <div className="col-lg-7">
                        <button className="btn mx-3 " style={{color:"#2857f0"}}>Discuss</button>
                        <button className="btn mx-3" style={{color:"#5E81F4"}}>Problems</button>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row" style={{maxWidth:"100% !important"}}>
                    <div className="col-lg-7 " style={{display:"flex", maxWidth:"100%"}}>
                        <Create style={{color:"#5E81F4"}} className="mt-2"/>
                        <input className="form-control mx-2" placeholder="Write Something" style={{height:"50px"}}/>
                    </div>
                    <div className="col-lg-5">
                    <Chip color="primary" className="mt-2 mx-2" icon={<Search/>} label="Find posts by tags" />

                    </div>
                </div>
                
                <br/>
                <br/>
                {getCommunity.map(community =>(
                        <div>
                            <Card style={{maxWidth:"100% !important"}} className="my-3">
                                <Card.Header className="bg-light" as="h5">{community.title}</Card.Header>
                                <Card.Body>
                                
                                    <Card.Text>
                                    {community.text}
                                    </Card.Text>
                                    <Button color="primary" startIcon={<ThumbUpAlt/>} className="mx-2">Like</Button>
                                    <Button color="primary" startIcon={<Comment />} className="mx-2">Comment</Button>
                                </Card.Body>
                            </Card>
                        </div>

                ))}
                
                
            </div>

        </div>
    );
}

export default Community;