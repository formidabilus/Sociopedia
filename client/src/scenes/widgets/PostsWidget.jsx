import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setSearchedPostsResult } from "state/state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const searchedPostsResult = useSelector((state) => state.searchedPostsResult);

  const getPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
    dispatch(setSearchedPostsResult({ searchedPostsResult: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
    dispatch(setSearchedPostsResult({ searchedPostsResult: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {searchedPostsResult.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
