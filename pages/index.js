import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

// Components
import { Loading, PostSummary } from "~/components/molecules";

const HomePage = () => {
  const posts = [];
  const loading = false;

  return loading || posts === null ? (
    <Loading type='page' width='75px' height='200px' />
  ) : (
    <Fragment>
      <div id='mainbar' className='homepage fc-black-800'>
        <div className='questions-grid'>
          <h3 className='questions-headline'>Preguntas más recientes</h3>
          <div className='questions-btn'>
            <Link href={"/preguntas/agregar"}>Agregar Pregunta</Link>
          </div>
        </div>
        <div className='questions-tabs'>
          <span>
            {new Intl.NumberFormat("en-IN").format(posts.length)} preguntas
          </span>
        </div>
        <div className='questions'>
          <div className='postQues'>
            {posts.map((post, index) => (
              <PostSummary key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HomePage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default HomePage;
