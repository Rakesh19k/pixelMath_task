import { Avatar, Button } from '@material-ui/core';
import { Facebook, ThumbUp } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import "./Index.css";
import Data from "./Data.json";
import firebase from "firebase";
import axios from 'axios';
import db from "./firebase";




const answer = [
    {
        id: "A",
        option: 30
    }
]

const ratings = [
    {
        rating: 1
    },
    {
        rating: 2
    },
    {
        rating: 3
    },
    {
        rating: 4
    },
    {
        rating: 5
    },
    {
        rating: 6
    },
    {
        rating: 7
    },
    {
        rating: 8
    },
    {
        rating: 9
    },
    {
        rating: 10
    }
]




function Index() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [rating, setRating] = useState("")
    const [right, setRight] = useState("")
    const [wrong, setWrong] = useState("")
    const [option, setOption] = useState("")
    const [direct, setDirect] = useState(false)
    const [like, setLike] = useState(true)
    const [follow, setFollow] = useState(true)
    // const [qdata, setQData] = useState([])
    const [popup, setPopUp] = useState(true)


    // useEffect(() => {
    //     const data = Data[Math.floor(Math.random() * Data.length)]
    //     setQData(data)
    //     console.log(qdata)
    // }, [])

    // const random = () => {
    //     setQData(
    //                 Data[Math.floor(Math.random() * Data.length)]
    //             )
    //             console.log(qdata)
    // }


    const handleClick = (e) => {
        const value = parseInt(e.target.value)
        setOption(value)
        const right = (answer.map((ans) => ans.option))
        // console.log(right)
        if (value === right[0]) {
            console.log("Right answer")
            setRight("Yooo! Correct answer")
            setDirect(true)
        }
        else {
            console.log("Wrong answer")
            setWrong("Oops! wrong answer")
            setDirect(false)
        }
        // console.log(typeof value)
        // console.log(typeof right[0])
    }



    const submitHandler = (e) => {
        e.preventDefault()
        const feedback = {
            name,
            email,
            rating,
            right,
            wrong,
        }
        console.log(feedback)
        db.collection('data').add({

            name: name,
            email: email,
            rating: rating,
            right: right,
            wrong: wrong,
            option: option,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setName("")
        setEmail("")
        setRight("")
        setPopUp(false)
        alert("Thank for Feedback")



        // const jsonString = JSON.stringify(feedback)
        // fs.writeFile('./file.txt', jsonString, function(err) {
        //     if (err) {
        //         console.log('Error writing file', err)
        //     } else {
        //         console.log('Successfully wrote file')
        //     }
        // })

        // console.log(feedback)
    }



    return (

        <div className="main_page">
            <div className="header">
                <h1>Challenge Question of the day</h1>

            </div>
            <div className="question container-fluid">
                <h2> Q). In a school cafeteria, 4 people can sit together
                at 1 table. if 2 tables are placed together, 6
                people can sit together. How many tables would we
                need for 60 people to sit together.
                </h2>
                {/* <h2>{qdata.question}</h2> */}
                {/* {qdata.image.map((img, id)=><h5 key={id}>{img}</h5> )} */}
                {/* {qdata.map((data) => <h2>{data.question}</h2>)} */}
                <div className="container row images">
                    <div className="col-sm-4 col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibl
                        WsvxHFCliM5p8V2W9boxQLKFB04OtjrnxQhaW_PF-81gkX3JReMzj8_jLXtB7wZwA&usqp=CAU"
                            alt="" style={{ height: 200 }} />
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUMrWJUnY5_
                        vKUtHrbLYcsMhgNpof1-vorO3h3MRdqd_L2XYBQ0KN6P6MUpNV9UW3-jI&usqp=CAU" alt="" style={{ height: 270 }} />
                    </div>
                </div>
                <div className="options container row">
                    <div className="lists">
                        <li className="col-sm-4 col-md-4 list" onClick={handleClick} >
                            <button className="id" type="button" value={28} data-toggle="modal" data-target="#myModal" >A</button>
                            <span >28</span>
                        </li>
                        <li className="col-sm-4 col-md-4 list" onClick={handleClick} >
                            <button className="id" type="button" value={29} data-toggle="modal" data-target="#myModal" >B</button>
                            <span >29</span>
                        </li>
                        <li className="col-sm-4 col-md-4 list" onClick={handleClick} >
                            <button className="id" type="button" value={30} data-toggle="modal" data-target="#myModal" >C </button>
                            <span >30</span>
                        </li>
                        <li className="col-sm-4 col-md-4 list" onClick={handleClick} >
                            <button className="id" type="button" value={27} data-toggle="modal" data-target="#myModal" >D</button>
                            <span >27</span>
                        </li>
                    </div>
                </div>
            </div>
            {popup ?
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">PopUp</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                           

                            <div className="modal-body">
                                <form className="form" noValidate autoComplete="off" onSubmit={submitHandler}>
                                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    <input type="email" className="form-control mt-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <select className="form-control mt-2" value={rating} onChange={(e) => setRating(e.target.value)} >
                                        {ratings.map((rating, key) =>
                                            <option key={key} value={rating.rating}  >{rating.rating}</option>
                                        )}
                                    </select>
                                    <button type="submit" className="btn btn-secondary mt-2" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : null
            }


            <div className="contribute container">
                <h3>Contributed by</h3>
                <div className="contributer_name">
                    <Avatar src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/123464-gkqyaytifb-1562586577.jpg" style={{ height: 50, width: 50 }} />
                    <h4>Sunny Sinde</h4>
                </div>
            </div>

            <div className="social_btn">
                <Button className="btn" variant="contained" color="primary" onClick={() => setLike(!like)} ><ThumbUp style={{ marginRight: 5 }} />{like ? "like" : "Dislike"}</Button>
                <Button className="btn" variant="contained" color="primary"><Facebook style={{ marginRight: 5 }} />Share</Button>
                <Button className="btn mr-3" variant="contained" color="primary" onClick={() => setFollow(!follow)}  ><Facebook style={{ marginRight: 5 }} />{follow ? "follow" : "unfollow"}</Button>
            </div>
        </div>
    )
}

export default Index
