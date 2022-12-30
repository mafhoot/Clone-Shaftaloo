import React,{useState , useEffect , useRef } from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import "./poll.css"
import { get_poll , postPoll } from "../../Services/axios";


  function getLabelText(value) {
    // return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }


export const Poll = (id) => {
    const [questions , setQuestions] = useState ([])
    const [value, setValue] = React.useState([2.5,2.5,2.5,2.5,2.5,2.5,2.5]);
    const [hover, setHover] = React.useState([-1,-1,-1,-1,-1,-1,-1]);

    useEffect (() => {
        get_poll().then ( e => {
            setQuestions(e.data);
            console.log(e.data)
        })
    },[])

    useEffect(() => {

    },[value])

    function handleSubmit () {
        postPoll({
            "restaurantId" : id.id ,
            "score1": value[0],
            "score2": value[1],
            "score3": value[2],
            "score4": value[3],
            "score5": value[4],
            "score6": value[5],
            "score7": value[6], 
        })
    }

    return (
        <div className="pollAll">
            <p className="qTitle">Share your experience whith us :)</p>
            <p className="pollQuestion">{questions[1]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[0]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    value[0] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <p className="pollQuestion">{questions[2]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[1]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    value[1] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <p className="pollQuestion">{questions[3]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[2]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    value[2] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <p className="pollQuestion">{questions[4]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[3]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                value[3] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <p className="pollQuestion">{questions[5]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[4]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                value[4] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <p className="pollQuestion">{questions[6]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[5]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    value[5] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <p className="pollQuestion">{questions[7]}</p>
            <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
            >
            <Rating
                name="hover-feedback"
                value={value[6]}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                value[6] = newValue;
                }}
                onChangeActive={(event, newHover) => {
                setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
            </Box>
            <button className="pollSubmit" onClick={() => handleSubmit() }>Submit</button>
        </div>
    )
}