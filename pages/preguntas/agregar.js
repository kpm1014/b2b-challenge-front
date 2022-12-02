import React, { Fragment } from "react";
import { useRouter } from "next/router";

// Components
import Loading from "~/components/molecules/Loading";
import Footer from "~/components/organisms/Footer";
import PostForm from "~/components/molecules/Post/PostForm";

const AddPost = () => {
  const router = useRouter();
  const isAuthenticated = true;
  const loading = false;

  if (!isAuthenticated) {
    return router.push("/iniciar-sesion");
  }

  return loading === null ? (
    <Loading type='page' width='75px' height='200px' />
  ) : (
    <Fragment>
      <div className='post-form-container'>
        <div className='post-form-content'>
          <div className='post-form-header'>
            <div className='post-form-headline fc-black-800'>
              Registra tu pregunta
            </div>
          </div>
          <div className='post-form-section'>
            <div className='postform' style={{ width: "100%" }}>
              <PostForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AddPost;
