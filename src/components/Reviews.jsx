function Reviews() {
    const testimonials = [
      {
        id:1 ,
        text: "The carbonara transported me straight to Rome. Impeccable service, beautiful ambiance — this is fine dining at its finest in Lahore." ,
        avatar: "A" ,
        name: "Ahmad Raza",
        loc: "Lahore · Regular Guest"
      },
      {
        id:2 ,
        text:"We celebrated our anniversary here and it was magical. Every detail, from the table setting to the tiramisu, was absolutely perfect." ,
        avatar: "S" ,
        name: "Sara & Bilal",
        loc: "DHA · Anniversary Dinner"
      },
      {
        id:3 ,
        text: "Brought my international clients here and they were blown away. Authentic flavours, exceptional wine selection, and a team that truly cares." ,
        avatar: "K" ,
        name: "Kamran Sheikh",
        loc: "Gulberg · Business Dinner"
      },
    ]
    return(
        <section className="testimonials-section" id="reviews">
      <div className="testimonials-grid">
          {testimonials.map((item) => (
             <div className="testimonial-card" key={item.id}> 
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonials-author">
                    <div className="author-avatar">{item.avatar}</div>
                </div>
                <div className="author-name">{item.name}</div>
                <div className="author-loc">{item.loc}</div>
             </div>
          ))}
      </div>
      </section>
    );
} 
 export default Reviews;