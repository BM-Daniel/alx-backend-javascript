const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("index page", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };

  it("checks status code", (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks if correct content", (done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("check if correct content length", (done) => {
    request(options, (err, res, body) => {
      expect(res.headers["content-length"]).to.equal("29");
      done();
    });
  });
});

describe("cart page", () => {
  it("checks the correct status code for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks if correct content for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (err, res, body) => {
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });

  it("checks if correct status code for incorrect url", (done) => {
    request.get("http://localhost:7865/cart/dan", (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("available_payments page", () => {
  it("checks the correct status code for correct url", () => {
    request.get(
      "http://localhost:7865/available_payments",
      (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.not.equal(200);
        } else {
          expect(res.statusCode).to.equal(200);
        }
      }
    );
  });

  it("checks if correct body content for correct url", () => {
    const option = { json: true };
    const payload = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };

    request.get(
      "http://localhost:7865/available_payments",
      option,
      (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.not.equal(200);
        } else {
          expect(res.statusCode).to.deep.equal(200);
        }
      }
    );
  });
});

describe("Login page", () => {
  it("checks status code for correct requests", (done) => {
    const try1 = {
      url: "http://localhost:7865/login",
      json: true,
      body: { userName: "DAN" },
    };

    request.post(try1, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks correct content for correct requests", (done) => {
    const try2 = {
      url: "http://localhost:7865/login",
      json: true,
      body: { userName: "DAN" },
    };

    request.post(try1, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain("Welcome DAN");
      }

      done();
    });
  });

  it("checks status code for incorrect requests", (done) => {
    const try3 = {
      url: "http://localhost:7865/login",
      json: true,
      body: { user: "DAN" },
    };

    request.post(try1, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
