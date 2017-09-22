const listings = document.getElementById("listings");
window.All = new Set();
window.Guide = new Set();
window.Dining = new Set();
window.Cafe = new Set();
window.Hotel = new Set();
window.Shop = new Set();
class Business {
  /**
   * Creates an instance of Business.
   * @param {Object} {
   *     name,
   *     email,
   *     phone,
   *     website,
   *     address,
   *     description,
   *     location,
   *     category
   *   } 
   * @memberof Business
   */
  constructor({
    name,
    email,
    phone,
    website,
    address,
    description,
    location,
    category
  }) {
    this.name = name || "Not Available";
    this.email = email || "Not Available";
    this.phone = phone || "Not Available";
    this.website = website || "Not Available";
    this.address = address || "Not Available";
    this.description = description || "Not Available";
    this.location = location || "Not Available";
    this.locationLink = location || "Not Available";
    this.category = category || "Not Available";
    switch (category) {
      case "Dining":
        Dining.add(this);
        break;
      case "Cafe":
        Cafe.add(this);
        break;
      case "Guide":
        Guide.add(this);
        break;
      case "Hotel":
        Hotel.add(this);
        break;
      case "Shop":
        Shop.add(this);
        break;

      default:
        break;
    }
    All.add(this);
    window[name] = this;
  }

  get card() {
    return `<li><article class="col m6 l4">
    <div class="card horizontal blue darken-3 hide-on-small-only">
  <div class="card-stacked">
    <div class="card-content grey-text text-lighten-4">
      <h5 class="card-name blue-text text-lighten-4">${this.name}</h5>
        <p>${this.description}</p>
    </div>
    <div class="card-action">
    <a href="tel:${this
      .phone}" class="blue-text text-lighten-3"><i class="material-icons">phone</i></a>
    <a href="mailto:${this
      .email}" class="blue-text text-lighten-3"><i class="material-icons">email</i></a>
    <a target="_blank" href="${this
      .locationLink}" class="blue-text text-lighten-3"><i class="material-icons">place</i></a>
    <a target="_blank" href="${this
      .website}" class="blue-text text-lighten-3"><i class="material-icons">open_in_browser</i></a>
    </div>
  </div>
</div>
</article></li>
<li class="hide-on-med-and-up"><div class="col s12">

  <article class="card blue">
    <div class="card blue darken-3">
    <div class="card-content grey-text text-lighten-4">
    <h5 class="card-name blue-text text-lighten-4">${this.name}</h5>
      <p>${this.description}</p>
  </div>
      <div class="card-action">
      <a href="${this
        .phone}" class="blue-text text-lighten-3"><i class="material-icons">phone</i></a>
      <a href="${this
        .email}" class="blue-text text-lighten-3"><i class="material-icons">email</i></a>
      <a target="_blank" href="${this
        .locationLink}" class="blue-text text-lighten-3"><i class="material-icons">place</i></a>
      <a href="${this
        .website}" class="blue-text text-lighten-3"><i class="material-icons">open_in_browser</i></a>
      </div>
    </div>
  </article>
</div></li>`;
  }
}

new Business({
  name: "CafeTesting",
  email: "cafe@test.com",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Shop",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Restaurant",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Guide",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Cafe",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Hotel",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Hotel",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Dining",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Dining",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Guide",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});
new Business({
  name: "Kullagårdens Wärdshus",
  email: "cafe@test.com",
  phone: "042-34 74 20",
  website: "http://kullagardenswardshus.se",
  address: "Italienska vägen 211, 263 77 Mölle",
  category: "Hotel",
  description:
    "Simple accommodations, plus a sauna & a colorful restaurant with golf-course views.",
  location:
    "https://www.google.se/maps/place/Kullag%C3%A5rdens+W%C3%A4rdshus/@56.298972,12.4633313,15z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNTbCsDE3JzQ5LjYiTiAxMsKwMjcnNDUuMiJF!3b1!8m2!3d56.297111!4d12.462556!3m4!1s0x0:0x8bbe181d2fbc1710!8m2!3d56.298972!4d12.4693456"
});

window.addEventListener("load", function() {
  All.forEach(function(element) {
    listings.innerHTML += element.card;
  }, this);
  Materialize.showStaggeredList("#listings");
});

window.sort = function(category) {
  $("#listings")
    .fadeOut(100)
    .fadeIn(0, function(element) {
      listings.innerHTML = "";
      window[category].forEach(function(element) {
        listings.innerHTML += element.card;
      }, this);
      Materialize.showStaggeredList("#listings");
    });
};

const imported = {
  export: [
    {
      name: "Kullagårdens Wärdshus",
      email: "info@kullagardenswardshus.se",
      phone: "+4642347420",
      website: "http://kullagardenswardshus.se",
      description:
        "Simple accommodations, plus a sauna & a colorful restaurant with golf-course views.",
      location:
        "https://www.google.se/maps/place/Kullag%C3%A5rdens+W%C3%A4rdshus/@56.298972,12.4633313,15z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNTbCsDE3JzQ5LjYiTiAxMsKwMjcnNDUuMiJF!3b1!8m2!3d56.297111!4d12.462556!3m4!1s0x0:0x8bbe181d2fbc1710!8m2!3d56.298972!4d12.4693456",
      category: "Hotel"
    }
  ]
};

newFunction();

function newFunction() {
  imported.export.forEach(function(item) {
    console.log(item);
    new Business(item);
  });
}
