import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
  return (
    <>
    <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                    <p>Craft a strong foundation for your business with our strategic launch support, ensuring a successful takeoff.Propel your business forward with our holistic growth strategies designed for sustainable and scalable expansion.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="Blog" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
