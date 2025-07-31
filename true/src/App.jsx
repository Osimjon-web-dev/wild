import React from "react";


/**
 * Ranglar (mockup'ga yaqin)
 */
const COLORS = {
  peach: "#F9B38E",
  salmon: "#F49D86",
  pink: "#F5A9BE",
  rose: "#E88DA4",
  cream: "#FFF2EA",
  dark: "#111111",
  orange: "#F08C67",
};

/**
 * Kichik helper componentlar
 */
const Section = ({ id, className = "", style = {}, children }) => (
  <section id={id} className={`py-5 ${className}`} style={style}>
    <div className="container">{children}</div>
  </section>
);

const CardShadow = ({ children, className = "", style = {} }) => (
  <div
    className={`border-0 rounded-4 shadow-sm p-4 bg-white ${className}`}
    style={{ ...style }}
  >
    {children}
  </div>
);

/**
 * NAVBAR
 */
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#home">
          Wild
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto gap-lg-4 mb-2 mb-lg-0">
            {["Home", "Store", "Recipes", "About", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link fw-medium" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a href="#store" className="btn btn-dark rounded-pill ms-lg-3 px-4">
            Shop now
          </a>
        </div>
      </div>
    </nav>
  );
}

/**
 * HERO (Treat your wild. Find your soul.)
 */
function Hero() {
  return (
    <header
      id="home"
      className="py-5 text-dark"
      style={{
        background:
          `linear-gradient(180deg, ${COLORS.peach} 0%, ${COLORS.salmon} 100%)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6 text-center text-lg-start">
            <span className="badge bg-dark rounded-pill mb-3">New</span>
            <h1 className="fw-bold display-5 mb-3">
              Treat your wild. <br /> Find your soul.
            </h1>
            <p className="lead mb-4">
              Nut butters and treats made from five pure treasures. All natural,
              no nonsense. Go wild.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#store" className="btn btn-dark rounded-pill px-4">
                Shop products
              </a>
              <a
                href="#recipes"
                className="btn btn-outline-dark rounded-pill px-4"
              >
                See recipes
              </a>
            </div>
          </div>

          {/* 3 ta "phone/product" preview qatori */}
          <div className="col-lg-6">
            <div className="row g-3">
              {[1, 2, 3].map((n) => (
                <div className="col-4" key={n}>
                  <CardShadow className="text-center p-3">
                    <img
                      src={`https://picsum.photos/seed/jar${n}/300/380`}
                      className="img-fluid rounded-4 mb-2"
                      alt={`Product ${n}`}
                    />
                    <div className="small fw-semibold">Product {n}</div>
                  </CardShadow>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * WILDLY LOVED (mini to'plam)
 */
function WildlyLoved() {
  return (
    <Section>
      <div className="text-center mb-4">
        <span className="badge bg-dark rounded-pill">Wildly Loved</span>
      </div>
      <div className="row g-4">
        {[1, 2, 3].map((n) => (
          <div className="col-12 col-md-4" key={n}>
            <CardShadow className="text-center">
              <img
                src={`https://picsum.photos/seed/loved${n}/420/280`}
                className="img-fluid rounded-3 mb-3"
                alt={`Loved ${n}`}
              />
              <div className="fw-semibold">Loved Product {n}</div>
            </CardShadow>
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * OUR WILD WAY + "Wild like a nut?" ichida ro'yxatlar (ikki ustun + sumka rasm)
 */
function WildWay() {
  return (
    <>
      <Section
        id="store"
        className="text-dark"
        style={{ backgroundColor: COLORS.peach }}
      >
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Our Wild Way</h2>
            <p className="mb-4">
              We use five pure treasures — nuts, dates, honey, cocoa, and sesame.
              That’s it. No artificial flavors, ever.
            </p>
            <img
              src="https://picsum.photos/seed/bag/700/460"
              alt="Gift bag"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-lg-6">
            <CardShadow className="h-100">
              <h5 className="mb-3">Wild like a nut?</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>• Peanut</li>
                    <li>• Almond</li>
                    <li>• Hazelnut</li>
                    <li>• Pistachio</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>• Honey</li>
                    <li>• Dates</li>
                    <li>• Cocoa</li>
                    <li>• Sesame</li>
                  </ul>
                </div>
              </div>
            </CardShadow>
          </div>
        </div>
      </Section>

      {/* 3 ta kichik afzallik (shipping, secure, organic) */}
      <Section style={{ backgroundColor: COLORS.cream }}>
        <div className="row g-4 text-center">
          {[
            { t: "Fast Shipping", i: "🚚" },
            { t: "Secure Payment", i: "🔒" },
            { t: "100% Natural", i: "🌿" },
          ].map((it) => (
            <div className="col-12 col-md-4" key={it.t}>
              <CardShadow>
                <div className="display-6">{it.i}</div>
                <div className="fw-semibold mt-2">{it.t}</div>
              </CardShadow>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

/**
 * THE CONCEPT STORE (rasm + matn)
 */
function ConceptStore() {
  return (
    <Section
      className="text-dark"
      style={{
        background: `linear-gradient(180deg, ${COLORS.pink} 0%, ${COLORS.rose} 100%)`,
      }}
    >
      <div className="row align-items-center gy-4">
        <div className="col-lg-6">
          <span className="badge bg-dark rounded-pill mb-2">The Concept Store</span>
          <h2 className="fw-bold mb-3">Experience Wild in person</h2>
          <p className="mb-3">
            Visit our warm and cozy concept store for limited editions, gift sets,
            and live tastings.
          </p>
          <a href="#" className="btn btn-dark rounded-pill px-4">
            Find a store
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="https://picsum.photos/seed/store/900/540"
            alt="Concept store"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
      </div>
    </Section>
  );
}

/**
 * HALVA + STARTER BOX (ikki kartochka)
 */
function HalvaStarter() {
  return (
    <Section>
      <div className="row g-4">
        <div className="col-md-6">
          <CardShadow>
            <h3 className="fw-bold mb-2">Wild Halva</h3>
            <p className="mb-3">
              Sesame-based treat made creamy, nutty, and just sweet enough. Perfect
              with tea.
            </p>
            <a href="#" className="btn btn-outline-dark rounded-pill px-4">
              Discover
            </a>
          </CardShadow>
        </div>
        <div className="col-md-6">
          <CardShadow>
            <h3 className="fw-bold mb-2">Want to start wild?</h3>
            <p className="mb-3">
              Grab our starter box with our top 3 flavors and a wooden spreader.
            </p>
            <a href="#" className="btn btn-dark rounded-pill px-4">
              Buy starter
            </a>
          </CardShadow>
        </div>
      </div>
    </Section>
  );
}

/**
 * FIVE TREASURES (kartochka)
 */
function FiveTreasures() {
  return (
    <Section style={{ backgroundColor: COLORS.cream }}>
      <div className="row g-4">
        <div className="col-md-6">
          <CardShadow style={{ backgroundColor: COLORS.peach }}>
            <h3 className="fw-bold mb-2">The Five Treasures</h3>
            <p className="mb-0">Nuts, Dates, Honey, Cocoa, Sesame</p>
          </CardShadow>
        </div>
        <div className="col-md-6">
          <CardShadow style={{ backgroundColor: COLORS.pink }}>
            <h3 className="fw-bold mb-2">Roasted with care</h3>
            <p className="mb-0">We roast gently to keep nutrients and flavor</p>
          </CardShadow>
        </div>
      </div>
    </Section>
  );
}

/**
 * WILD RECIPES (3–4 ta kartochka)
 */
function WildRecipes() {
  const recipes = [
    { t: "Wild Pancakes", s: "pancakes" },
    { t: "Banana Bowl", s: "bowl" },
    { t: "Tahini Smoothie", s: "smoothie" },
    { t: "Chocolate Toast", s: "toast" },
  ];
  return (
    <Section id="recipes">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Wild Recipes</h2>
        <div className="text-muted">Explore tasty ideas with our spreads</div>
      </div>
      <div className="row g-4">
        {recipes.map((r) => (
          <div key={r.t} className="col-sm-6 col-md-3">
            <CardShadow className="p-0 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${r.s}/800/520`}
                className="img-fluid"
                alt={r.t}
              />
              <div className="p-3 fw-semibold">{r.t}</div>
            </CardShadow>
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * FOOTER (Stay Wild)
 */
function Footer() {
  return (
    <footer className="py-5 text-dark" style={{ backgroundColor: COLORS.orange }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <h4 className="fw-bold">Stay Wild</h4>
            <p className="mb-3">
              Join our newsletter for recipes and new drops.
            </p>
            <form className="row g-2">
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Your email"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-dark rounded-pill px-4" type="button">
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <div className="fw-semibold mb-2">Company</div>
            <ul className="list-unstyled">
              <li><a className="link-dark text-decoration-none" href="#about">About</a></li>
              <li><a className="link-dark text-decoration-none" href="#">Careers</a></li>
              <li><a className="link-dark text-decoration-none" href="#">Press</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="fw-semibold mb-2">Help</div>
            <ul className="list-unstyled">
              <li><a className="link-dark text-decoration-none" href="#">Support</a></li>
              <li><a className="link-dark text-decoration-none" href="#">Shipping</a></li>
              <li><a className="link-dark text-decoration-none" href="#">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center small mt-4">
          © {new Date().getFullYear()} Wild Co.
        </div>
      </div>
    </footer>
  );
}

/**
 * APP — hammasi bitta faylda
 */
export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <WildlyLoved />
      <WildWay />
      <ConceptStore />
      <HalvaStarter />
      <FiveTreasures />
      <WildRecipes />
      <Footer />
    </>
  );
}

