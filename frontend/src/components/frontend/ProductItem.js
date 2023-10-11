import { Link } from "react-router-dom";
import urlImage from "../../config";
import { NumericFormat } from "react-number-format";

function ProductItem(props) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-6 ">
      <div className="card card-sm card-product-grid rounded-2xl">
        <div className="product-grid">
          <div className="product-image image-container">
            <Link
              to={`/san-pham/${props.product.category.slug}/${props.product.slug}`}
              className="image"
            >
              <img
                className="img-1"
                src={`${urlImage}product/${props.product.image}`}
                alt=""
              />
              <img
                className="img-2"
                src={`${urlImage}product_back/${props.product.back_image}`}
                alt=""
              />
            </Link>
            <ul className="product-links">
              <li>
                <Link to="#">
                  <i className="fa fa-heart" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-shopping-cart" />
                </Link>
              </li>
            </ul>
            <Link to="#" className="product-view">
              <i className="fa fa-search" />
            </Link>
          </div>
          <div className="product-content">
            <small id="emailHelp" class="text-muted tw-text-sm">
              {props.product.brand.name}
            </small>
            <h3 className="title pt-2 pb-2" style={{ fontWeight: "bold" }}>
              <Link
                to={`/san-pham/${props.product.category.slug}/${props.product.slug}`}
              >
                {props.product.name}
              </Link>
            </h3>
            <div className="row m-2">
              <div className="col tw-text-lg" style={{ color: "black" }}>
                <NumericFormat
                  value={props.product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={0}
                  prefix={"$"}
                />
              </div>
              <div className="col tw-text-lg text-right text-muted">
                <strike>
                  <NumericFormat
                    value={props.product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                    prefix={"$"}
                  />
                </strike>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
