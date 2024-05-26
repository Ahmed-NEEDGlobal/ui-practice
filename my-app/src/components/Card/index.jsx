"use client";
import React from "react";
import Image from "next/image";
import { RxDotsVertical } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";

const Card = () => {
  return (
    <div className="font-poppins w-[220px] rounded-lg overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <figure>
        <Image
          placeholder="empty"
          src="/cardTop.svg"
          width={220}
          height={130}
          alt="Picture of the author"
          priority
        />
      </figure>
      <div className="p-4 space-y-2">
        <h5 className="font-bold text-black leading-6 text-base line-clamp-2">
          Lorem
        </h5>
        <p className="text-card-text-ash text-xs leading-5 font-medium line-clamp-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="p-4 flex justify-between">
        <button className="text-card-red">
          <RxLockClosed />
        </button>
        <button>
          <RxDotsVertical />
        </button>
      </div>
    </div>
  );
};

export default Card;
