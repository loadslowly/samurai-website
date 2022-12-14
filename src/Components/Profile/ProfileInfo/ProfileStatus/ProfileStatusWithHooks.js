import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect( () => {
            setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const diactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        <span className={'allocator'}>Status:</span> {props.status || "undefined :/ "}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={diactivateEditMode}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
