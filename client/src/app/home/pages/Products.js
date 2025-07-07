// import fs from "fs";
// import path from "path";
// import ProductCard from "@/app/home/OurProducts";

// export default function ProductsPage({ products }) {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             title={product.title}
//             description={product.description}
//             image={product.image}
//             link={product.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "/data/home/Products.json");
//   const jsonData = fs.readFileSync(filePath, "utf-8");
//   const products = JSON.parse(jsonData);

//   return {
//     props: {
//       products,
//     },
//   };
// }
