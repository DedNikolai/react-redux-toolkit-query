import { useSelector } from "react-redux";
import React, {useEffect} from "react";
import useAction from "../hooks/useActions";

function User() {
    const {user, isLoading} = useSelector(state => state.test)
    const {getUser} = useAction();

    useEffect(() => {
        getUser(5);
    }, []) 

    if (isLoading) return <h2>Loading......</h2>
    
    return (
        <>      <h1>User</h1>
                <h2>{user?.name}</h2>
                <h2>{user?.id}</h2>
        </>

    )
}

export default User;