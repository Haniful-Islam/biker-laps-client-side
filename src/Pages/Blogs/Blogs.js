import React from 'react';

const Blogs = () => {
    return (
        <div className="w-75 mx-auto my-5 ">
            <div>
                <h2 className="text-info">Difference between javascript and nodejs?</h2>
                <div>
                    <h5>
                    <h3>Javascript:</h3>
                    <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
                    <p>2. Javascript is used in frontend development.</p>
                    <p>3. Javascript can only be run in the browsers.</p>
                    <p>4. It is basically used on the client-side.</p>
                    <p>5. Some of the javascript frameworks are RamdaJS, TypedJS, etc.</p>
                    </h5>
                </div>
                <div>
                    <h3>Nodejs:</h3>
                    <h5>
                        <p>1. NodeJS is a Javascript runtime environment.</p>
                        <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p>3. Nodejs does not have capability to add HTML tags.</p>
                        <p>4. Nodejs is used in server-side development.</p>
                        <p>5. It is mostly used on the server-side.</p>
                    </h5>
                </div>
            </div>
            <div>
                <h2 className="text-info">When should you use nodejs and when should you use mongodb?</h2>
                <h5><span className="fw-bold">Ans:</span> we should use node js When we need to send updates to the user in real-time.Because When we use Node.js, the server has no need of maintaining separate threads for each open connection. When we need require less management. When we need automatic repair, easier data distribution, and simpler data models make administration.</h5>
            </div>
            <div>
                <h2 className="text-info">Differences between sql and nosql databases.?</h2>
                <div>
                    <h5>
                        <p>1. SQL databases are relational,NoSQL databases are non-relational.</p>
                        <p>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                        <p>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                        <p>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                        <p>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </h5>
                </div>
            </div>
            <div>
                <h2 className="text-info">What is the purpose of jwt and how does it work?</h2>
                <h5><span className="fw-bold">Ans:</span>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</h5>
            </div>
        </div>
    );
};

export default Blogs;