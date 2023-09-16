import { useParams } from "react-router-dom";
import Overview from "./Overview";
import Address from "./Address";
import Orders from "./Orders";
import Setting from "./Setting";

function Account() {
  const option = useParams("chucnang");
  return (
    <>
      <section className="section-pagetop bg-gray">
        <div className="container">
          <h2 className="title-page">My account</h2>
        </div>{" "}
        {/* container //  */}
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="list-group">
                <a className="list-group-item" href="/account/overview">
                  {" "}
                  Account overview
                </a>
                <a className="list-group-item active" href="/account/address">
                  {" "}
                  My Address{" "}
                </a>
                <a className="list-group-item" href="/account/orders">
                  {" "}
                  My Orders{" "}
                </a>

                <a className="list-group-item" href="/account/setting">
                  {" "}
                  Settings{" "}
                </a>
                <a className="list-group-item" href="page-index-1.html">
                  {" "}
                  Log out{" "}
                </a>
              </nav>
            </aside>{" "}
            {/* col.// */}
            {(() => {
              switch (option.chucnang) {
                case "overview":
                  return <Overview />;
                case "address":
                  return <Address />;
                case "orders":
                  return <Orders />;
                case "setting":
                  return <Setting />;
                default:
                  return "";
              }
            })()}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
    </>
  );
}

export default Account;
