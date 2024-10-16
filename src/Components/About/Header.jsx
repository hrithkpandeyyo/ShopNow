import React from "react";
export default function Header() {
  return (
    <section id="about-head">
      <img src={'/picyogi.jpg'} alt="Yogesh Pandey" />
      <div>
        <h1>Who We Are?</h1>
        <p>
          Welcome to ShopNow, your ultimate destination for online shopping! ShopNow is a cutting-edge web application designed with the latest technologies including HTML, CSS, JavaScript, and React JS. Our platform provides customers with a seamless experience to browse and purchase a variety of products, ranging from trendy clothing to essential accessories.

          Behind ShopNow is the dedicated work of Yogesh Pandey, a talented individual hailing from Ayodhya, Uttar Pradesh. Yogesh is currently pursuing his Bachelor's of Computer Science Engineering from Chandigarh University. With a passion for Web Development, Yogesh honed his skills through Online Toturial and brings his expertise to every aspect of ShopNow.
          Yogesh is not just a skilled Web Developer he is characterized by his honesty, hardworking nature, self-motivation, and quick learning abilities. His short-term goal is to secure a position in a reputed company where he can further enhance his skills and knowledge. Looking ahead, Yogesh's long-term ambition is to become a responsible and knowledgeable professional, striving for excellence in every endeavor.

          At ShopNow, we are committed to providing you with a clean and user-friendly interface, ensuring a delightful shopping experience every time you visit. Whether you're looking for the latest fashion trends or essential items, ShopNow has you covered.
        </p>
        <abbr title="">
            For any queries please contact with Yogesh Pandey
        </abbr>
        {
          // eslint-disable-next-line
          <marquee bgcolor="#ccc" scrollamount={5} loop={-1}>
            Yogesh Pandey from Ayodhya, Uttar Pradesh, a diligent student pursuing Bachelor's of Computer Science Engineering. Skilled Web Developer with a passion for learning, aiming for growth and excellence in the tech industry.
          </marquee>
        }
      </div>
    </section>
  );
}
