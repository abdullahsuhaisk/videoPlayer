import React from 'react';
import Flickity from 'react-flickity-component';
import Textarea from 'react-textarea-autosize';

const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  // resize: false,
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true
};

const Comments = () => {
  return (
    <React.Fragment>
      <div className="Comments">
        <Flickity
          className="Comments--imagesSlider"
          options={flickityOptions}>
          <figure className="Comments--imagesSlider--figure">
            <img
              className="Comments--imagesSlider--figure--img"
              src="/images/ProductDetail3.jpg"
            />
          </figure>
          <figure className="Comments--imagesSlider--figure">
            <img
              className="Comments--imagesSlider--figure--img"
              src="/images/ProductDetail2.jpg"
            />
          </figure>
          <figure className="Comments--imagesSlider--figure">
            <img
              className="Comments--imagesSlider--figure--img"
              src="/images/ProductDetail1.jpg"
            />
          </figure>
        </Flickity>
        <div className="Comments--information">
          <i className="Comments--information--close"></i>
          <i className="Comments--information--back"></i>
			<div className="Comments--information--container Comments--information--container2">
            <div className="Comments--information--head">
              <div className="Comments--information--head--rating">
                <div className="Comments--information--head--rating--total">
                  <div className="Comments--information--head--rating--total--stars">
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span></span>
                  </div>
                  <p className="Comments--information--head--rating--total--rate">3.9</p>
                  <p className="Comments--information--head--rating--total--number">381 votes</p>
                </div>
                <div className="Comments--information--head--commentStars">
                  <div className="Comments--information--head--commentStars--all">
                    <div className="Comments--information--head--commentStars--all--stars">
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                    </div>
                    <p className="Comments--information--head--commentStars--all--value">70</p>
                  </div>
                  <div className="Comments--information--head--commentStars--all">
                    <div className="Comments--information--head--commentStars--all--stars">
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span></span>
                    </div>
                    <p className="Comments--information--head--commentStars--all--value">200</p>
                  </div>
                  <div className="Comments--information--head--commentStars--all">
                    <div className="Comments--information--head--commentStars--all--stars">
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="Comments--information--head--commentStars--all--value">35</p>
                  </div>
                  <div className="Comments--information--head--commentStars--all">
                    <div className="Comments--information--head--commentStars--all--stars">
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="Comments--information--head--commentStars--all--value">22</p>
                  </div>
                  <div className="Comments--information--head--commentStars--all">
                    <div className="Comments--information--head--commentStars--all--stars">
                      <span className="Comments--information--head--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="Comments--information--head--commentStars--all--value">14</p>
                  </div>
                </div>
              </div>
              <div className="Comments--information--head--addComment">
                  <Textarea style={{ minHeight: 28 }} 
                    className="Comments--information--head--addComment--input"
                    placeholder="Write a comment..."
                    />
                    <i className="Comments--information--head--addComment--submit"></i>
              </div>
            </div>
          <div className="Comments--information--list">
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/pp.png" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Jesica Berrah</p>
                        <p className="Comments--information--list--item--time">57 min ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--liked">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">286</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
            </div>
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/product1.png" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Enid Altenwerth</p>
                        <p className="Comments--information--list--item--time">1 hour ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--likes">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">12</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Officiis ea omnis illum optio est et facere delectus aperiam. Beatae dolorem qui dolore quod ratione voluptatem est. Qui voluptas ut non sed laboriosam. Esse iste soluta minima culpa blanditiis suscipit. Qui et sint perspiciatis voluptates non mollitia quaerat exercitationem voluptatem. Expedita eos consequatur sint ut qui. Voluptatibus odit et aut deserunt minima quae corrupti. Et esse minus. Autem dolorem nemo vero sapiente ab et omnis beatae. Amet culpa tempore non.
                  </p>
                </div>
            </div>
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/product1.jpg" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Anya Kuhlman</p>
                        <p className="Comments--information--list--item--time">2 hours ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--likes">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">24</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
            </div>
           <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/pp.png" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Jesica Berrah</p>
                        <p className="Comments--information--list--item--time">57 min ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--liked">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">286</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
            </div>
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/product1.png" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Enid Altenwerth</p>
                        <p className="Comments--information--list--item--time">1 hour ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--likes">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">12</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Officiis ea omnis illum optio est et facere delectus aperiam. Beatae dolorem qui dolore quod ratione voluptatem est. Qui voluptas ut non sed laboriosam. Esse iste soluta minima culpa blanditiis suscipit. Qui et sint perspiciatis voluptates non mollitia quaerat exercitationem voluptatem. Expedita eos consequatur sint ut qui. Voluptatibus odit et aut deserunt minima quae corrupti. Et esse minus. Autem dolorem nemo vero sapiente ab et omnis beatae. Amet culpa tempore non.
                  </p>
                </div>
            </div>
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/product1.jpg" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Anya Kuhlman</p>
                        <p className="Comments--information--list--item--time">2 hours ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--likes">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">24</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
            </div>
           <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/pp.png" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Jesica Berrah</p>
                        <p className="Comments--information--list--item--time">57 min ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--liked">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">286</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
            </div>
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/product1.png" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Enid Altenwerth</p>
                        <p className="Comments--information--list--item--time">1 hour ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--likes">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">12</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Officiis ea omnis illum optio est et facere delectus aperiam. Beatae dolorem qui dolore quod ratione voluptatem est. Qui voluptas ut non sed laboriosam. Esse iste soluta minima culpa blanditiis suscipit. Qui et sint perspiciatis voluptates non mollitia quaerat exercitationem voluptatem. Expedita eos consequatur sint ut qui. Voluptatibus odit et aut deserunt minima quae corrupti. Et esse minus. Autem dolorem nemo vero sapiente ab et omnis beatae. Amet culpa tempore non.
                  </p>
                </div>
            </div>
            <div className="Comments--information--list--item">
                <div className="Comments--information--list--item--profil">
                    <div className="Comments--information--list--item--profil--info">
                      <figure className="Comments--information--list--item--figure">
                          <img src="/images/product1.jpg" className="Comments--information--list--item--figure--img"/>
                      </figure>
                      <div className="Comments--information--list--item--usernameTime">
                        <p className="Comments--information--list--item--username">Anya Kuhlman</p>
                        <p className="Comments--information--list--item--time">2 hours ago</p>
                      </div>
                    </div>
                    <div className="Comments--information--list--item--stars">
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span className="Comments--information--list--item--stars--icon-full"></span>
                      <span></span>
                      <span></span>
                    </div>
                </div>
                <div className="Comments--information--list--item--content">
                  <div className="Comments--information--list--item--content--likes">
                    <i className="Comments--information--list--item--content--likes--icon"></i>
                    <p className="Comments--information--list--item--content--likes--number">24</p>
                  </div>
                  <p className="Comments--information--list--item--content--comment">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
            </div>
          </div>
      </div>
		 </div>
    </div>
    </React.Fragment>
  );
};

export default Comments;
