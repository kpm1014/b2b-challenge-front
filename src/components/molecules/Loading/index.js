import React from "react";
import Image from "next/image";

const Loading = ({ type, width, height }) => {
  return (
    <div className='spinner' style={{ width: `${width}`, height: `${height}` }}>
      <Image
        src={type === "page" ? "/assets/PageLoading.svg" : "/assets/three-dots.svg"}
        alt='Cargando...'
      />
    </div>
  );
};

export default Loading;
