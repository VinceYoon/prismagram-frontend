import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_FOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { toast } from "react-toastify";

const FollowButtonContainer = ({ isFollowing, id}) => {
    const [isFollowingState, setIsFollowingState] = useState(isFollowing);
    
    const [toggleFollowMutation] = useMutation(TOGGLE_FOLLOW,
        {
           variables: {id} 
        });
    const onClick = () => {
        
        try {
            toggleFollowMutation();

            if (isFollowingState){
                setIsFollowingState(false);
            } else{
                setIsFollowingState(true);
            }
        } catch {
            if (isFollowingState){
                setIsFollowingState(true);
                toast.error("Can't unfollow the user");
            } else{
                setIsFollowingState(false);
                toast.error("Can't follow the user");
            }
        }
    };

    return (
        <FollowButtonPresenter isFollowing={isFollowingState} onClick={onClick} />
    );
};

FollowButtonContainer.propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default FollowButtonContainer;