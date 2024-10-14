import React from "react" 
import Link from 'next/link'; // Correct import from Next.js

const Navbar = () => {
  return <div className="hidden lg:block">
    <div className="container">
        <div style={{backgroundColor:"accent"}}
        className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">

    
   
        
          <Link className="navbar__link relative" href="/home">Home</Link> {/* No need for <a> */}
    
          <Link className="navbar__link relative" href="/home">CATEGORIES</Link> {/* No need for <a> */}
    
          <Link className="navbar__link relative" href="/home">MEN'S</Link> {/* No need for <a> */}
    
          
          <Link className="navbar__link relative" href="/home" target="_blank">WOMEN'S</Link> {/* No need for <a> */}
          <Link className="navbar__link relative" href="/home">JEWELRY</Link> {/* No need for <a> */}
          <Link className="navbar__link relative" href="/home">PERFUME</Link> {/* No need for <a> */}
          <Link className="navbar__link relative" href="/home">BLOG</Link> {/* No need for <a> */}
          <Link className="navbar__link relative" href="/home">HOT OFFERS</Link> {/* No need for <a> */}

    
        </div>
     </div> 
</div>
};

export default Navbar;


