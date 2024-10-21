import React from "react"

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadious: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div styles={styles.imageContainer}>
                <img 
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqCUiI%2FbtsJ3Z3UfJu%2FaSNSDIVE3c5iIojAy09H8k%2Fimg.jpg"
                    style={styles.image} />
            </div>
        
            <div style={styles.contentContainer}>
                <span style={styles.nameText}> {props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>            
    );
}

export default Comment;