import React, { Fragment } from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <Fragment>
      <div className='footer'>
        <div className='socials'>
          <div className='social-item'>
            <a href='#' target='_blank' rel='noreferrer'>
              <Image
                alt='GitHub.svg'
                src='/assets/GitHub.svg'
                width={32}
                height={32}
              />
            </a>
            <p>
              <strong>Frontend</strong>
            </p>
          </div>
          <div className='social-item'>
            <a href='#' target='_blank' rel='noreferrer'>
              <Image
                alt='Database.svg'
                src='/assets/Database.svg'
                width={32}
                height={32}
              />
            </a>
            <p>
              <strong>Backend</strong>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
