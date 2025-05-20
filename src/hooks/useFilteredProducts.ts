import { useMemo } from "react";
import type { Product, Category } from "../types";

export function useFilteredProducts(
    products: Product[],
    category: Category | "all"
): Product[] {
    return useMemo(()=> {


        if (category === "all") return products;
        return products.filter((p) => p.category === category)
    }, [products, category]);
}