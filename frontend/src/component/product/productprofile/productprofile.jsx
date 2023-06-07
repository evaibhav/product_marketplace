import "./productprofile.css";

const ProductProfile = () => {
  return (
    <>
      <div className="mainprofile">
        <div class="profile-grid-item">
          {/* <button>CREATE PRODUCT</button> */}
          <p>Product Profile</p>
        </div>
        <div class="profile-grid-item">
          <button>
            <a href="/create-product"> CREATE PRODUCT</a>
          </button>
        </div>
        <div class="profile-grid-item">
          <button>
            <a href="/update-product"> UPDATE PRODUCT</a>
          </button>
        </div>
        <div class="profile-grid-item">
          <button>
            <a href="/view-product"> VIEW PRODUCTS </a>
          </button>
        </div>
        {/* <div class="profile-grid-item">
          <button>CREATE PRODUCT</button>
        </div> */}
      </div>
    </>
  );
};

export default ProductProfile;
