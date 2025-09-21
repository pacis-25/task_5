import React from 'react'
import Prompt1 from './assets/prompt1.svg'
import Prompt2 from './assets/prompt2.svg'
import Prompt3 from './assets/prompt3.svg'
import Prompt4 from './assets/prompt4.svg'

const Img = ({ src, alt }) => (
  <figure>
    <img src={src} alt={alt} />
    <figcaption className="label small">This is an image</figcaption>
  </figure>
)

export default function App() {
const testimonials = [Prompt1, Prompt2, Prompt3, Prompt4]
  return (
    <>
      <header className="site-header">
        <div className="container bar">
          <h1 className="label">This is the header section</h1>
          <nav aria-label="Main">
            <a href="#hero">Hero</a>{'  '}
            <a href="#testimonials">Testimonials</a>{'  '}
            <a href="#gallery">Gallery</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="container">
            <h2 className="section-title">This is the hero section</h2>
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="label">This is a hero H1</h1>
                <p className="label">This is a hero paragraph</p>
              </div>
              <div className="hero-media">
                <Img
                  src={Prompt1}
                  alt="Family using a product in front of an international landmark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2 className="section-title">This is the testimonial section</h2>
            <div className="cards three">
              {testimonials.map((img, i) => (
                <article className="card" key={i}>
                  <img
                    className="avatar"
                    src={img}
                    alt={`Placeholder portrait`}
                  />
                  <h3 className="label">This is a placeholder name</h3>
                  <p className="label">This is a paragraph</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="gallery">
          <div className="container">
            <h2 className="section-title">This is the gallery section</h2>

            <div className="gallery-row">
              <Img src={Prompt1} alt="Gallery photo 1" />
              <p className="label">This is gallery text</p>
            </div>

            <div className="gallery-row reverse">
              <p className="label">This is gallery text</p>
              <Img src={Prompt2} alt="Gallery photo 2" />
            </div>

            <div className="gallery-row">
              <Img src={Prompt3} alt="Gallery photo 3" />
              <p className="label">This is gallery text</p>
            </div>

            <div className="gallery-row reverse">
              <p className="label">This is gallery text</p>
              <Img src={Prompt4} alt="Gallery photo 4" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="label">This is the footer section</p>
        </div>
      </footer>
    </>
  )
}
