import React, { ReactNode } from "react";
import useProduct from "./hooks/useProduct";
import ProductCard from "./ProductCard";
import { Filter } from "./ProductSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

function ProductList() {
  const { products, status, filter, handleSetFilter } = useProduct();

  const filteredProducts =
    filter === "none"
      ? products
      : products?.filter((product) => product.category.includes(filter));

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center gap-8 min-h-[250px]">
        <LoadingSpinner height="20" width="20" />
      </div>
    );
  }

  return (
    <>
      <div className="w-4/5 m-auto space-y-12 mb-12">
        <div className="flex justify-between items-center flex-wrap p-2">
          <ul className="flex items-center space-x-8">
            <FilterMenuItem
              filterValue="none"
              activeFilter={filter}
              onClick={handleSetFilter}
            >
              All
            </FilterMenuItem>

            <FilterMenuItem
              filterValue="mens"
              activeFilter={filter}
              onClick={handleSetFilter}
            >
              Mens
            </FilterMenuItem>
            <FilterMenuItem
              filterValue="womens"
              activeFilter={filter}
              onClick={handleSetFilter}
            >
              Womens
            </FilterMenuItem>
            <FilterMenuItem
              filterValue="electronics"
              activeFilter={filter}
              onClick={handleSetFilter}
            >
              Electronics
            </FilterMenuItem>
            <FilterMenuItem
              filterValue="shirt"
              activeFilter={filter}
              onClick={handleSetFilter}
            >
              Shirts
            </FilterMenuItem>
            <FilterMenuItem
              filterValue="jewelry"
              activeFilter={filter}
              onClick={handleSetFilter}
            >
              Accessories
            </FilterMenuItem>
          </ul>
        </div>
        <ul className="products grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} />
          ))}
        </ul>
      </div>
    </>
  );
}

type FilterMenuItem = {
  filterValue: Filter;
  activeFilter: Filter;
  onClick: (filter: Filter) => void;
  children: ReactNode;
};

function FilterMenuItem({
  filterValue,
  activeFilter,
  onClick,
  children,
}: FilterMenuItem) {
  const isActive = filterValue === activeFilter;

  return (
    <li
      className={`cursor-pointer ${isActive ? "font-bold" : ""}`}
      onClick={() => onClick(filterValue)}
    >
      {children}
    </li>
  );
}

export default ProductList;
