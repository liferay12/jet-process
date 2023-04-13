import Form from "../library/renderer/FormRenderer";
import form from '../json-data/Employee.json'
export const Finance = () => {
    const submitFunc = (event) => {
        event.preventDefault();
        console.log(event);
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-body">
                                <Form formObject={form} submit={(event) => submitFunc(event)} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}