import React from "react";

export default function Product({}) {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-4/12 h-full gap-3 pt-48 pl-10 pr-24 text-left text-white ">
      <div>
        <h1 className="mb-2 text-3xl text-left "> MY NAME İS </h1>
        <span className="font-serif font-thin "> 03 03 1998 </span>
      </div>

      <div className="text-sm">
        <p className="mb-6 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, architecto? Fuga labore tenetur deleniti qui consectetur
          sit numquam dolores aspernatur eius. Tempora doloribus porro deserunt
          fuga ratione accusantium optio iure?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, architecto? Fuga labore tenetur deleniti qui consectetur
          sit numquam dolores aspernatur eius. Tempora doloribus porro deserunt
          fuga ratione accusantium optio iure?
        </p>
      </div>

      <div className="font-serif text-xs ">
        <span className="text-xs font-light text-gray-500 ">DIRECTED BY</span>
        <div className="flex flex-col gap-1 text-xs font-thin text-gray-300">
          <span> Sean Mern</span>
          <span> Winnie Pooh</span>
          <span>Margin Pad</span>
        </div>
      </div>

      <div className="font-serif text-xs ">
        <span className="font-thin text-gray-500">CAST</span>
        <div className="flex flex-col gap-1 text-xs font-thin text-gray-300">
          <span> Margin Herny</span>
          <span> Violet Back</span>
          <span> Voodie Bryan</span>
        </div>
      </div>
    </div>
  );
}
