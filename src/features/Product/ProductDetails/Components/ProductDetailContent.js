import React from 'react';

const ProductDetailContent = ({ product }) => {
  return (
    <div className="ProductDetail--information--details">
      <p>{product && product.description}</p>
      <p>Samsung Galaxy Note 10 256 GB (Samsung Türkiye Garantili)</p>
      <br />
      <p>Samsung Türkiye Garantisi Nedir?</p>
      <p>
        Bu ürün Samsung Türkiye Firmasının Garantisi altındadır. “Samsung
        Türkiye Garantili” ürünlerde 2 yıl süresince, Türkiye geneline yayılmış
        KVK , Teleservis ve diğer tüm Samsung yetkili servislerinden garanti
        kapsamı dahilinde ücretsiz faydalanabilirsiniz. 2 yıl sonrasında ise,
        Samsung yetkili servislerinden ücretli bir şekilde faydalanmaya devam
        edebilirsiniz.Telefonunuzda oluşan herhangi bir arıza durumunda tüm
        Samsung Türkiye servis noktalarından hizmet alabilirsiniz. Samsung
        Türkiye yetkili servis bilgilerine Samsung Müşteri Hizmetleri üzerinden
        veya aşağıda yer alan adresten kontrol edebilirsiniz.
      </p>
      <p>
        Samsung Galaxy Note 10 ve Note 10 Plus Alana Galaxy Buds Kablosuz
        Kulaklık Hediye Kampanya Koşulları
      </p>
      <br />
      <p>
        -Ürünleri kampanya koşullarına uygun olarak Samsung Türkiye Mağazası
        dışındaki satıcılardan satın almış olan tüketicilerin 20 Eylül 2019
        (23:59) tarihine kadar Google Play Store’dan “Kampanya Zamanı” adlı
        uygulamayı yeni cihazına yükleyip, bu uygulama üzerinden “Samsung Galaxy
        Note10 ve Galaxy Note10+ Ön Alım Buds Hediye Kampanyası” adlı kampanyaya
        ait başvuru formunu doldurması ve yine burada belirtilen kampanya
        koşullarına uygun hareket etmesi gerekmektedir. -Kampanyaya yalnızca
        faturada adı geçen kişi katılımcı olabilir. Kurumsal fatura ile satın
        alan müşteriler, faturadaki toplam satın alınan ürün adedine
        bakılmaksızın, sadece 1 adet hediye kazanma şansını yakalayabilir.
        Kampanyadan aynı kişi en fazla bir ürün için yararlanabilir. Yapılan
        mükerrer başvurular reddedilecektir. Formun eksiksiz doldurulduğu,
        okunaklı faturanın yüklendiği ve kampanya şartlarının eksiksiz yerine
        getirildiği durumlarda, tüketicilerin kampanyaya katılan online satış
        noktalarından ön alım yapmaları durumunda geçerli olacak, Samsung marka
        Galaxy Buds hediyesi, ön alımla aldıkları Samsung Galaxy Note10 veya
        Galaxy Note10+ cihazı ile birlikte web sitesinde/uygulamada
        belirttikleri adrese, başvuru süresinin sona ermesinin akabinde 90 gün
        içerisinde teslim edilecektir. -Samsung kampanya koşullarında değişiklik
        yapma hakkını saklı tutar. Samsung kötü niyetli olarak veya sahtekarlık,
        dolandırıcılık yapıldığı şüphesi bulunan ve kampanyaya katılım
        gerçekleştirdiği tespit edilen katılımcıların Kampanya’dan faydalanma
        haklarını iptal etme hakkına sahiptir. Bu kampanyadan faydalanılarak
        alınan ürünlerde iade kabul edilmeyecektir. (Tüketicinin Korunması
        Hakkındaki Kanun’dan doğan istisnalar hariçtir.) Satın alınan ürünün
        iade edilmesi durumunda kullanıcı bu kampanya sebebiyle kazandığı hakkı
        iade edecektir. Kampanya sadece Türkiye sınırları içerisinde geçerlidir.
      </p>
    </div>
  );
};

export default ProductDetailContent;
