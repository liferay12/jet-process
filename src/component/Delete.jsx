import axios from "axios"

export const Delete = (props) => {

    const deleteHandler = async () => {
        alert(`${props.url}/${props.data}`);
        let response = await axios.delete(`http://${props.url}/${props.data}`).catch((err) => {
            console.error("Anable to delete record", err);
        });
        console.log(response);
    }

    return (
        <> <div className="text-center">
            <h3 className="text-info">Are you sure want delete this user {props.data} ?</h3>
            <button className="btn btn-outline-primary mt-3" onClick={deleteHandler}>Delete</button>
        </div>
        </>
    );
}