import { products } from "../constants/products";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { motion } from "framer-motion";

function ProductList() {
  return (
    <motion.div
      initial={{
        y: 50,
      }}
      whileInView={{
        y: 0,
      }}
      className={styles.productsList}
    >
      {products.map((product) => (
        <Product
          arTitle={product.arTitle}
          enTitle={product.enTitle}
          classification={product.classification}
          status={product.status}
          key={product.id}
        />
      ))}
    </motion.div>
  );
}

export default ProductList;
