import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { startNote } from "../actions";


const PostList = () => {
  const notlar = useSelector(store=>store.notlar);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(startNote());
  },[])

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
