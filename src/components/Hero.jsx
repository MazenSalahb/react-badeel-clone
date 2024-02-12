import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.css";
import { useState } from "react";
import { products } from "../constants/products";
import SearchResult from "./SearchResult";
function Hero() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setSearchResult(
      products.filter((pro) => pro.arTitle.includes(searchInput))
    );
  };
  return (
    <div className={styles.hero}>
      <TypeAnimation
        sequence={[
          "أمَانة يا خال نِفْسي أشوفه",
          2000,
          "سَبَع سِنِين شَعْرُه أبْيَض وكيرلي وحِلو",
          2000,
          "بِدِّي أَلْعَب, بِدِّي أَلْعَب بَسْ",
          2000,
          "خَلِّية فِي حُضْنِي, خَلِّية فِي حُضْنِي",
          2000,
          "معلش...",
          2000,
        ]}
        wrapper="h1"
        repeat={Infinity}
      />
      <p>قائمة بالمنتجات الداعمة للكيان الصهيوني والبدائل المحلية.</p>
      <div className={styles.search}>
        <input
          className={styles}
          type="text"
          placeholder="إبحث عن منتج أو شركة..."
          value={searchInput}
          onChange={handleChange}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        />
        {searchInput.length > 0 && (
          <SearchResult result={searchResult} searchActive={searchActive} />
        )}
        <button>إبحث</button>
      </div>
    </div>
  );
}

export default Hero;
