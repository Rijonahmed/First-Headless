import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import axios from 'axios';

const AddPost = () => {
    const user = localStorage.getItem('user');
    const formik = useFormik({
        // Initial values
        initialValues: {
            title: '',
            content: ''
        },

        // Validation Schema
        validationSchema: Yup.object({
            title: Yup.string().required(),
            content: Yup.string().required()
        }),

        // On Submit
        onSubmit: (data) => {
            const {token} = JSON.parse(user);
      
          const headers = {
            Authorization: `Bearer ${token}`
          };
          const post = {
            ...data,
            status: 'publish'
          }
          axios.post(`${process.env.REACT_APP_API_siteUrl}/wp-json/wp/v2/posts`, post, {
            headers: headers
          }).then((res) => {
            console.log('res', res);

          }).catch((err) => {
            console.log('error', err.message);
          });
           
        }
    });
    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                           
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <h1 className='font-bold text-6xl text-center mb-5'>Create A Post</h1>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="post Title"
                                        name="title"
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-6">
                                  
                                    <textarea className="textarea textarea-info w-full"  placeholder="Content"
                                        name="content"
                                        value={formik.values.content}
                                        onChange={formik.handleChange}></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:bg-blue-500 disabled:text-slate-100 disabled:cursor-wait"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                   
                                >
                                    Create Post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddPost;