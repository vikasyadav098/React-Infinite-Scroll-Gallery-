import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetching images
  const fetchImages = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`
      );

      // Old + New images merge
      setImages((prev) => [...prev, ...res.data]);

    } catch (error) {
      console.log("Error fetching images");
    } finally {
      setLoading(false);
    }
  };

  // API call when page change
  useEffect(() => {
    fetchImages();
  }, [page]);

  // Infinite Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= totalHeight - 100 && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <h1 className="text-center text-3xl font-bold mb-8">
        Infinite Scroll Gallery 🚀
      </h1>
      <h3 className="text-right text-l font-bold mb-8">Crafted by Vikas Yadav</h3>

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((item) => (
          <Card key={item.id} image={item} />
        ))}
      </div>

      {loading && (
        <h2 className="text-center mt-8 text-gray-400">
          Loading more images...
        </h2>
      )}
    </div>
  );
};

export default App;
