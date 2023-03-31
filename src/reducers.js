import { NOT_EKLE, NOT_SIL, START_NOTES } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  }
}
export function myReducer(state = baslangicDegerleri, action){
  switch (action.type) {
    case START_NOTES:
      
      if(baslangicNotlariniGetir(s10chLocalStorageKey).length>1){
        let initialStorageNotes = baslangicNotlariniGetir(s10chLocalStorageKey);
        return{
          notlar: initialStorageNotes,
        }
      }else{
          return state;
      }
      
    case NOT_EKLE:
      let newNote = [...state.notlar, action.payload];
      localStorageStateYaz(s10chLocalStorageKey,newNote);
      return {
        ...state,
        notlar: newNote,
      }
    case NOT_SIL:  
      return {
        notlar: state.notlar.filter((item)=>{return item.id != action.payload})
      }
    default:
      return state;
  }
}