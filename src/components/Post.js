import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSilAPI } from "../actions";
import { ToastContainer, toast } from 'react-toastify';

export default function Post({ item }) {
  const dispatch = useDispatch();

  function handleSil() {
    toast.success('Not Silindi', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
    dispatch(notSilAPI(item));
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button className="text-xs text-amber-600 mt-4 underline" onClick={handleSil}>
        Bu notu sil
      </button>
      <ToastContainer />
    </div>
  );
}
