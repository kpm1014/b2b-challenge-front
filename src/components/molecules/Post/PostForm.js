import React, { Fragment, useState, useEffect, useRef } from "react";

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormErrors({});
  }, [formData]);

  const editorRef = useRef(null);

  const { title, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateFormData = () => {
    const errors = [];

    errors
      .reverse()
      .forEach((err) => setFormErrors((prev) => ({ ...prev, ...err })));

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = validateFormData();

    // if there are errors, don't submit
    if (errors.length > 0) return;

    addPost({ title, description });

    setFormData({
      title: "",
      description: "",
    });
    editorRef.current.cleanEditorState();
  };

  const updateConvertedContent = (content) => {
    setFormData({ ...formData, description: content });
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='question-form p16 s-card'>
          <div className='question-layout'>
            <div className='title-grid'>
              <label className='form-label s-label'>
                Título de la pregunta
                <p className='title-desc fw-normal fs-caption'>
                  Sé específico y breve con tu pregunta para que sea más fácil
                  de responder.
                </p>
              </label>
              <input
                className='title-input s-input'
                type='text'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
                id='title'
                placeholder='ejm. ¿Cómo se centra <div></div>?'
                required
              />
            </div>
            <div className='body-grid'>
              <label className='form-label s-label fc-black-800'>
                Contenido
                <p className='body-desc fw-normal fs-caption fc-black-800'>
                  Incluye todos los detalles que puedas para que tu pregunta sea
                  lo más clara posible.
                </p>
              </label>
              <div className='s-textarea rich-text-editor-container'>
                <textarea ref={editorRef} onChange={updateConvertedContent} />
              </div>
            </div>
          </div>
        </div>
        <div className='post-button mt32'>
          <button
            className='s-btn s-btn__primary'
            id='submit-button'
            name='submit-button'
          >
            Publicar tu pregunta
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default PostForm;
