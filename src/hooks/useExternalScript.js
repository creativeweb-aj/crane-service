import { useEffect, useState } from "react";

export const useExternalScript = (url) => {
  let [state, setState] = useState(url ? "loading" : "idle");
  
  useEffect(() => {
    let script = document.createElement('script')
    script.src =  "/assets/js/script.js"
    document.body.appendChild(script)
   
    return () => {
      let script = document.querySelector(`script[src="${url}"]`);
      script.remove()
    };
  }, [url]);
  
  return state;
};