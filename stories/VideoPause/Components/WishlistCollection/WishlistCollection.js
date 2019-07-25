import React from 'react';
import './WishlistCollection.styles.css';
const WishlistCollection = () => {
    return (
        <React.Fragment>
            <div className="WishlistCollection">
                <div class="WishlistCollection--gallery">
                    <figure class="gallery--item gallery--item-1">
                        <img src="/images/wishlist/whishlist1.jpg" class="gallery--img"/>
                    </figure>
                    <figure class="gallery--item gallery--item-2">
                        <img src="/images/wishlist/whishlist2.jpg" class="gallery--img"/>
                    </figure>
                    <figure class="gallery--item gallery--item-3">
                        <img src="/images/wishlist/whishlist3.jpg" class="gallery--img"/>
                    </figure>
                    <figure class="gallery--item gallery--item-4">
                        <img src="/images/wishlist/whishlist4.jpg" class="gallery--img"/>
                    </figure>
                    <figure class="gallery--item gallery--item-5">
                        <img src="/images/wishlist/whishlist5.jpg" class="gallery--img"/>
                    </figure>
                    <figure class="gallery--item gallery--item-6">
                        <img src="/images/wishlist/whishlist6.jpg" class="gallery--img"/>
                    </figure>
                </div>
                <div className="WishlistCollection--collection">
                    <h2 className="WishlistCollection--collection-h2">ZARA | Men Campaign Spring Summer 2019</h2>
                    <span className="WishlistCollection--collection-span">18 pieces</span>
                </div>
            </div>
        </React.Fragment>
    );
}; 

export default WishlistCollection;