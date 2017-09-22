const listings = document.getElementById("listings");
window.All = new Set();
window.Guide = new Set();
window.Dining = new Set();
window.Cafe = new Set();
window.Hotel = new Set();
window.Grocery = new Set();
class Business {
  /**
   * Creates an instance of Business.
   * @param {string} name 
   * @param {string} email 
   * @param {string} phone 
   * @param {string} address 
   * @param {string} description 
   * @param {string} location 
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
      case "Grocery":
        Grocery.add(this);
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
        <h6>${this.address}</h6>
        <p>${this.description}</p>
    </div>
    <div class="card-action">
    <a href="${this
      .phone}" class="blue-text text-lighten-3"><i class="material-icons">phone</i></a>
    <a href="${this
      .email}" class="blue-text text-lighten-3"><i class="material-icons">email</i></a>
    <a href="${this
      .locationLink}" class="blue-text text-lighten-3"><i class="material-icons">place</i></a>
    <a href="${this
      .website}" class="blue-text text-lighten-3"><i class="material-icons">open_in_browser</i></a>
    </div>
  </div>
</div>
</article></li>
<li>
<article class="card blue hide-on-med-and-up">
  <div class="card blue darken-3">
    <div class="card-content grey-text text-lighten-4">
      <span class="card-name blue-text text-lighten-4">${this.name}</span>
        <div class="row">
        <div class="col s4">Email:</div><div class="col s8">${this.email}</div>
        <div class="col s4">Phone:</div><div class="col s8">${this.phone}</div>
        <div class="col s4"> Address:</div><div class="col s8">${this
          .address}</div>
      </div>
      <p>
      ${this.description}
      </p>
    </div>
    <div class="card-action">
      <a href="${this
        .locationLink} class="blue-text text-lighten-3">Location</a>
      <a href="${this.website}" class="blue-text text-lighten-3">Website</a>
    </div>
  </div>
</article></li>`;
  }
}

new Business({
  name: "CafeTesting",
  email: "cafe@test.com",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Grocery",
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
  name: "Cafe1",
  email: "cafe@test.com",
  phone: "223-2144",
  website: "URL goes here",
  address: "Hoganas, SV",
  category: "Dining",
  description: "We sell coffee and tea",
  location: "coordintaes here"
});

window.addEventListener("load", function() {
  All.forEach(function(element) {
    listings.innerHTML += element.card;
  }, this);
  Materialize.showStaggeredList("#listings");
});

window.sort = function(category) {
  $("#listings").fadeOut(300);
  $("#listings").fadeIn(0);
  listings.innerHTML = "";
  window[category].forEach(function(element) {
    console.log(category);
    listings.innerHTML += element.card;
  }, this);
  Materialize.showStaggeredList("#listings");
};
