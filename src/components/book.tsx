import React from "react";
import { Button } from "./ui/button";

const Book = () => {
  return (
    <section className="fixed inset-0 z-10">
      <Button variant={"secondary"} className="flex w-full font-light hover:bg-accent">
        Check if the apartment is available
      </Button>
    </section>
  );
};

export default Book;
