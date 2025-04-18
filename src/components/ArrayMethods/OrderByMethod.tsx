import _ from "lodash";

const OrderByMethod = () => {
  type Product = {
    name: string;
    price: number;
    rating: number;
  };

  const productsInfo: Product[] = [
    { name: "Product A", price: 30, rating: 4.5 },
    { name: "Product B", price: 20, rating: 4.0 },
    { name: "Product C", price: 50, rating: 4.5 }, // same rating as A
    { name: "Product D", price: 10, rating: 3.5 },
  ];
  
// The _.orderBy(objName, [property],['asc', 'desc'])
// This method is used to sort the array on the base of the value, we can sort it in the ascending or descending order on the base of the property 


  const sortedProductsByRating: Product[] = _.orderBy(productsInfo,
     ["rating", "price"], 
     ["asc", "desc"]);

  console.log("Sorted Products by Rating:", sortedProductsByRating);

  return <div>OrderByMethod</div>;
};

export default OrderByMethod;
