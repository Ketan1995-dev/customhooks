import { useEffect, useState } from "react";
import { IWhethers } from "./App";

const useAPI = (url:string): IWhethers[]=>{
    const [data, setData] = useState<IWhethers[]>([]);

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data as IWhethers[]));
      },[]);

      return data;

}

export default useAPI;