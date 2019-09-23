/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Flickity from 'react-flickity-component';
import { GET_PRODUCT } from '../ProductQueries';
import FlickityComponent from '../../../components/Flickity/FlickityComponent';
import AddToCardButton from '../../../components/Button/AddToCardButton';
import ProductQueryHoc from '../../../components/HOCS/Grapqhl/ProductQueryHoc';

const flickityCampaingsOptions = {
  cellAlign: 'left',
  contain: true,
  // resize: false,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: false
};
const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true,
  selectedAttraction: 0.1,
  friction: 0.8
};
const FlickityClassName = 'ProductDetail--imagesSlider';

const ProductDetail = ({ productId, data, client }) => {
  const { product } = data;
  const images = [];
  if (product && product.images) {
    product.images.map((i) => images.push(i));
  }
  return (
    <div className="darkOverlay">
      <i
        className="modal--close"
        onClick={() =>
          client.writeData({
            data: { productIdInDetails: null }
          })
        }></i>
      <div className="ProductDetail">
        <FlickityComponent
          FlickityClassName={FlickityClassName}
          flickityOptions={flickityOptions}
          images={images}
          key={product.name + product.id}
        />
        <div className="ProductDetail--information">
          <i
            className="ProductDetail--information--badge--in-wishlist"
            onClick={() =>
              // addProductToConsumerWishList()
              client.writeData({
                data: {
                  isAddWishListOpen: true,
                  productId: productId
                }
              })
            }></i>
          <div className="scroll">
            <div className="ProductDetail--information--title">
              <h2 className="ProductDetail--information--title--h2">
                {product.name}
              </h2>
            </div>
            <div className="ProductDetail--information--rating">
              <div className="ProductDetail--information--rating--stars">
                <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
                <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
                <span className="ProductDetail--information--rating--stars--icon ProductDetail--information--rating--stars--icon-full"></span>
                <span className="ProductDetail--information--rating--stars--icon"></span>
                <span className="ProductDetail--information--rating--stars--icon"></span>
              </div>
              <p className="ProductDetail--information--rating--total">
                {product.rank}
              </p>
              <p className="ProductDetail--information--rating--votes">
                (381 votes)
              </p>
            </div>
            <div className="ProductDetail--information--settingsContainer">
              <div className="ProductDetail--information--settings">
                <p className="ProductDetail--information--settings-name">
                  Colors
                </p>
                <div className="ProductDetail--information--settings-opt">
                  <div className="ProductDetail--information--settings-opt-div">
                    <img
                      className="ProductDetail--information--settings-opt-div-img"
                      src="/images/Blue.jpg"
                      alt="option1"
                    />
                    <span className="ProductDetail--information--settings-opt-div-span">
                      Blue
                    </span>
                  </div>
                  <div className="ProductDetail--information--settings-opt-div">
                    <img
                      className="ProductDetail--information--settings-opt-div-img"
                      src="/images/Purple.jpg"
                      alt="option1"
                    />
                    <span className="ProductDetail--information--settings-opt-div-span">
                      Purple
                    </span>
                  </div>
                  <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                    <img
                      className="ProductDetail--information--settings-opt-div-img"
                      src="/images/White.jpg"
                      alt="option1"
                    />
                    <span className="ProductDetail--information--settings-opt-div-span">
                      White
                    </span>
                  </div>
                  <div className="ProductDetail--information--settings-opt-div">
                    <img
                      className="ProductDetail--information--settings-opt-div-img"
                      src="/images/Black.jpg"
                      alt="option1"
                    />
                    <span className="ProductDetail--information--settings-opt-div-span">
                      Black
                    </span>
                  </div>
                </div>
              </div>
              <div className="ProductDetail--information--settings">
                <p className="ProductDetail--information--settings-name">
                  Size
                </p>
                <div className="ProductDetail--information--settings-opt">
                  <div className="ProductDetail--information--settings-opt-div">
                    <span className="ProductDetail--information--settings-opt-div-span">
                      64 GB
                    </span>
                  </div>
                  <div className="ProductDetail--information--settings-opt-div ProductDetail--information--settings-opt-active">
                    <span className="ProductDetail--information--settings-opt-div-span">
                      128 GB
                    </span>
                  </div>
                  <div className="ProductDetail--information--settings-opt-div">
                    <span className="ProductDetail--information--settings-opt-div-span">
                      256 GB
                    </span>
                  </div>
                  <div className="ProductDetail--information--settings-opt-div">
                    <span className="ProductDetail--information--settings-opt-div-span">
                      512 GB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProductDetail--information--details">
              <p>{product.description}</p>
              <p>Samsung Galaxy Note 10 256 GB (Samsung Türkiye Garantili)</p>
              <br />
              <p>Samsung Türkiye Garantisi Nedir?</p>
              <p>
                Bu ürün Samsung Türkiye Firmasının Garantisi altındadır.
                “Samsung Türkiye Garantili” ürünlerde 2 yıl süresince, Türkiye
                geneline yayılmış KVK , Teleservis ve diğer tüm Samsung yetkili
                servislerinden garanti kapsamı dahilinde ücretsiz
                faydalanabilirsiniz. 2 yıl sonrasında ise, Samsung yetkili
                servislerinden ücretli bir şekilde faydalanmaya devam
                edebilirsiniz.Telefonunuzda oluşan herhangi bir arıza durumunda
                tüm Samsung Türkiye servis noktalarından hizmet alabilirsiniz.
                Samsung Türkiye yetkili servis bilgilerine Samsung Müşteri
                Hizmetleri üzerinden veya aşağıda yer alan adresten kontrol
                edebilirsiniz.
              </p>
              <p>
                Samsung Galaxy Note 10 ve Note 10 Plus Alana Galaxy Buds
                Kablosuz Kulaklık Hediye Kampanya Koşulları
              </p>
              <br />
              <p>
                -Ürünleri kampanya koşullarına uygun olarak Samsung Türkiye
                Mağazası dışındaki satıcılardan satın almış olan tüketicilerin
                20 Eylül 2019 (23:59) tarihine kadar Google Play Store’dan
                “Kampanya Zamanı” adlı uygulamayı yeni cihazına yükleyip, bu
                uygulama üzerinden “Samsung Galaxy Note10 ve Galaxy Note10+ Ön
                Alım Buds Hediye Kampanyası” adlı kampanyaya ait başvuru formunu
                doldurması ve yine burada belirtilen kampanya koşullarına uygun
                hareket etmesi gerekmektedir. -Kampanyaya yalnızca faturada adı
                geçen kişi katılımcı olabilir. Kurumsal fatura ile satın alan
                müşteriler, faturadaki toplam satın alınan ürün adedine
                bakılmaksızın, sadece 1 adet hediye kazanma şansını
                yakalayabilir. Kampanyadan aynı kişi en fazla bir ürün için
                yararlanabilir. Yapılan mükerrer başvurular reddedilecektir.
                Formun eksiksiz doldurulduğu, okunaklı faturanın yüklendiği ve
                kampanya şartlarının eksiksiz yerine getirildiği durumlarda,
                tüketicilerin kampanyaya katılan online satış noktalarından ön
                alım yapmaları durumunda geçerli olacak, Samsung marka Galaxy
                Buds hediyesi, ön alımla aldıkları Samsung Galaxy Note10 veya
                Galaxy Note10+ cihazı ile birlikte web sitesinde/uygulamada
                belirttikleri adrese, başvuru süresinin sona ermesinin akabinde
                90 gün içerisinde teslim edilecektir. -Samsung kampanya
                koşullarında değişiklik yapma hakkını saklı tutar. Samsung kötü
                niyetli olarak veya sahtekarlık, dolandırıcılık yapıldığı
                şüphesi bulunan ve kampanyaya katılım gerçekleştirdiği tespit
                edilen katılımcıların Kampanya’dan faydalanma haklarını iptal
                etme hakkına sahiptir. Bu kampanyadan faydalanılarak alınan
                ürünlerde iade kabul edilmeyecektir. (Tüketicinin Korunması
                Hakkındaki Kanun’dan doğan istisnalar hariçtir.) Satın alınan
                ürünün iade edilmesi durumunda kullanıcı bu kampanya sebebiyle
                kazandığı hakkı iade edecektir. Kampanya sadece Türkiye
                sınırları içerisinde geçerlidir.
              </p>
            </div>
            <div className="ProductDetail--comments">
              <div className="ProductDetail--comment-head">
                <p className="ProductDetail--comment-head--top">Top Comment</p>
                <p className="ProductDetail--comment-head--seeAll">
                  See all comments(423)
                </p>
              </div>
              <div className="ProductDetail--comment--item">
                <div className="ProductDetail--comment--profile">
                  <figure className="ProductDetail--comment--profile--figure">
                    <img
                      src="/images/pp.png"
                      className="ProductDetail--comment--profile--figure--img"
                      alt="option1"
                    />
                  </figure>
                  <p className="ProductDetail--comment--profile--name">
                    Jesica Berrah
                  </p>
                  <div className="ProductDetail--comment--rating--stars">
                    <span className="ProductDetail--comment--rating--stars--icon"></span>
                    <span className="ProductDetail--comment--rating--stars--icon"></span>
                    <span className="ProductDetail--comment--rating--stars--icon"></span>
                    <span className="ProductDetail--comment--rating--stars--icon-empty"></span>
                    <span className="ProductDetail--comment--rating--stars--icon-empty"></span>
                  </div>
                </div>
                <p className="ProductDetail--comment--p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do temr incididunt ut ero labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco poriti
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="ProductDetail--comment--likeDate">
                  <p className="ProductDetail--comment--like">
                    <i className="ProductDetail--comment--like-icon"></i>
                    323 likes
                  </p>
                  <p className="ProductDetail--comment--date">
                    11 June 2019 9:28 PM
                  </p>
                </div>
                <div className="ProductDetail--comment--campaings">
                  <p className="ProductDetail--comment--campaings--head">
                    Campaings
                  </p>
                  <Flickity
                    className="ProductDetail--comment--campaings--slides"
                    options={flickityCampaingsOptions}>
                    <figure className="ProductDetail--comment--campaings--item">
                      <img
                        src="/images/campaing.png"
                        className="ProductDetail--comment--campaings--item--img"
                        alt="option1"
                      />
                    </figure>
                    <figure className="ProductDetail--comment--campaings--item">
                      <img
                        src="/images/campaing.png"
                        className="ProductDetail--comment--campaings--item--img"
                        alt="option1"
                      />
                    </figure>
                    <figure className="ProductDetail--comment--campaings--item">
                      <img
                        src="/images/campaing.png"
                        className="ProductDetail--comment--campaings--item--img"
                        alt="option1"
                      />
                    </figure>
                  </Flickity>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductDetail--information--priceBtnContainer">
            {product.discount ? (
              <div className="ProductDetail--information--price">
                <p className="ProductDetail--information--price--discount">
                  {`%${product.discount}`}
                </p>
                <div className="ProductDetail--information--price--content">
                  <p className="ProductDetail--information--price--beforeDiscountvalue">
                    {`${product.currency.symbol}${product.price.toFixed(2)}`}
                  </p>
                  <p className="ProductDetail--information--price--value">
                    {`${product.currency.symbol}${product.currentPrice}`}
                  </p>
                </div>
              </div>
            ) : (
              <div className="ProductDetail--information--price">
                <p className="ProductDetail--information--price--value">
                  {`${product.currency &&
                    product.currency.symbol}${product.currency &&
                    product.currentPrice}`}
                </p>
              </div>
            )}
            <AddToCardButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQueryHoc(ProductDetail, GET_PRODUCT);
