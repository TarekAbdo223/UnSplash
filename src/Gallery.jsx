import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const url =
  "https://api.unsplash.com/search/photos?client_id=dIrmzY5MjI2N20Xo-dTX61uOhkA1YVlB_JsYEdVpnmo&query=office>";

const Gallery = () => {
  const res = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(res);

  return <div>Gallery</div>;
};

export default Gallery;
