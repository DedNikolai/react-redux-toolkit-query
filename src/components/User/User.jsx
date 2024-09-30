import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import useAction from "../../hooks/useActions";

function User() {
    // const {isLoading, user} = useSelector(state => state.users)
    const {getUserById} = useAction();

    // if(isLoading) return <h1>Loading.....</h1>

    useEffect(() => {
        getUserById(1)
    }, [])

    return (
        <div>
            <button onClick={() => getUserById(1)}>klocicic</button>
            {/* <h2>User</h2>
            <h4>{user?.id}</h4>
            <h4>{user?.name}</h4> */}
        </div>
    )
};

export default User;