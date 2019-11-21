import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../../../../assets/icons/ArrowIcon.svg';
import ProductQueryHoc from '../../../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../../../Queries/Products/ProductQueries';

const StyledWrapper = styled.div`
  .accordion--container {
    .accordion--content {
      animation: ${(props) =>
        props.showAccordion ? 'accordianopen' : 'accordianclose'};
      animation-fill-mode: forwards;
      animation-duration: 0.3s;
      animation-timing-function: ease-in-out;
      height: ${(props) => (props.showAccordion ? 'auto' : '0')};
      @keyframes accordianopen {
        from {
          height: 0;
          padding-top: 0px;
        }
        to {
          height: auto;
          padding-top: 13px;
        }
      }

      @keyframes accordianclose {
        from {
          height: auto;
          padding-top: 13px;
        }
        to {
          height: 0;
          padding-top: 0px;
        }
      }
    }
    .accordion--header {
      .arrow {
        img {
          transform: ${(props) =>
            props.showAccordion ? 'rotate(180deg)' : 'rotate(0deg)'};
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }
`;

const ProductDetailAccordion = ({
  description,
  title,
  desc1,
  desc2,
  desc3,
  data
}) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <StyledWrapper showAccordion={showAccordion}>
      <div className="accordion--container" style={{ pointerEvents: 'auto' }}>
        <div
          className="accordion--header"
          onClick={() => setShowAccordion(!showAccordion)}>
          <div className="title">{title}</div>
          <div className="arrow">
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="accordion--content">
          <p>{description}</p>

          <p>{desc2}</p>

          <p>{desc3}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

ProductDetailAccordion.defaultProps = {
  title: 'Product Info',
  desc1:
    'Tommy Hilfiger women’s swim.Turn heads with this statement suit featuring side cut-outs,high cut legs and a high neckline.The center zip along the front adds to the striking silhouette.',
  desc2:
    'Regular Fit.82% polyamide, 18% elastane.Zip closure, cutouts at sides.Imported..',
  desc3: 'Style #:  UW01429'
};

export default ProductQueryHoc(ProductDetailAccordion, GET_PRODUCT);
