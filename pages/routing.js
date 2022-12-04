import React from "react";
import LayoutNextJsPOC from "../components/Layouts/NextJsPOC/LayoutNextJsPOC";
const Routing = () => {
  return (
    <div>
      <div className="info-container">
        <div className="info-header">Routing - Next JS</div>
        <div className="method">
          <code>File-system-based routing</code>
        </div>
        <div className="info">
          <ol>
            <li>
              1. <code>Next.js</code> is a React framework that ships with all
              the features you need for production. It enables routing in your
              app by using the <code>file-system-based routing</code>.
            </li>
            <li>
              2. Next.js uses the file system to enable routing in the app. Next
              automatically treats every file with the extensions{" "}
              <code>.js, .jsx, .ts, or .tsx</code> under the pages directory as
              a <code>route</code>. A page in Next.js is a React component that
              has a route based on its file name.
              <pre>{`We can use "next/router" package to accecc the dynamic content of URL.

import { useRouter } from "next/router";
const router = useRouter();
const {productId, reviewId} = router?.query;
const {params} = router?.query;              
              `}</pre>
            </li>

            <li>
              3. Home Route <code>Home page of App</code>
              <pre>{`URL    : http://localhost:3000/

File   :    ├── pages
            |  ├── index.js
            |  |

Code   : const jsx = <div>Home Page</div>;
                `}</pre>
            </li>

            <li>
              4. Simple Route <code>Product Listing page</code>
              <pre>{`URL    : http://localhost:3000/products/

File   :    ├── pages
            |  ├── products
            |  |  ├── index.js
            
Code   : const jsx = products.map((product)=> <div>{product?.name}</div>);
                `}</pre>
            </li>
            <li>
              5. Dynamic Routes <code>Product details page</code>
              <pre>{`URL    : http://localhost:3000/products/1
              
File   : File   :   ├── pages
                    |  ├── products
                    |  |  ├── index.js
                    |  |  ├── [productId].js

Code   : const {productId} = useRouter().query;
                `}</pre>
            </li>
            <li>
              6. Nested Routes <code>First blog, Second blog</code>
              <pre>{`URL    : http://localhost:3000/blogs || http://localhost:3000/blogs/first

File   : File   :   ├── pages
                    |  ├── blogs
                    |  |  ├── index.js
                    |  |  ├── first.js
                    |  |  ├── second.js

Code   : const jsx = <div>First blog</div>;
                `}</pre>
            </li>
            <li>
              7. Nested Dynamic Routes <code>products/1/reviews/1</code>
              <pre>{`URL    : http://localhost:3000/products/1/reviews/2

File   : File   :   ├── pages
                    |  ├── products
                    |  |  ├── index.js
                    |  |  ├── [productId]
                    |  |  |  ├── index.js
                    |  |  |  ├── reviews
                    |  |  |  |  ├── [reviewId].js
                    |  |  |  |  |

Code   : const {productId, reviewId} = useRouter().query;
                `}</pre>
            </li>
            <li>
              8. Catch All Routes <code>/docs/feature1/concept1</code>
              <pre>{`URL    : /docs || /docs/feature1 || /docs/feature1/concept1

File   : File   :   ├── pages
                    |  ├── docs
                    |  |  ├── [[...params]].js
                    |  |  |

Code   : const {params} = useRouter().query; // params will be array [feature1, concept1]
                `}</pre>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Routing;

Routing.getLayout = (page) => {
  return (
    <div>
      <LayoutNextJsPOC title="Next JS Routing" logoText={"Routing"}>
        {page}
      </LayoutNextJsPOC>
    </div>
  );
};
