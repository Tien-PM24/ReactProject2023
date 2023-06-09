import React from "react"

function Member (props) {
    return (
        <div class="member">
            <h2>{props.khoa}</h2>
            <p>Tuổi: {props.lop}</p>
        </div>
    )
};

export default Member;