import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const url =
  "https://api.unsplash.com/search/photos?client_id=dIrmzY5MjI2N20Xo-dTX61uOhkA1YVlB_JsYEdVpnmo&query=cat>";

const Gallery = () => {
  const res = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(res);

  if (res.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (res.isError) {
    return (
      <section className="image-container">
        <h4>There was an error....</h4>
      </section>
    );
  }

  const result = res.data.results;

  if (result.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
