let Businesses = new Set();
class Business {
  /**
   * Creates an instance of Business.
   * @param {string} businessName 
   * @param {string} email 
   * @param {string} phone 
   * @param {string} address 
   * @param {string} description 
   * @param {string} location 
   * @memberof Business
   */
  constructor(businessName, email, phone, address, description, location) {
    this.businessName = businessName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.description = description;
    this.location = location;
    Businesses.add(this);
  }

  get card() {
    return `<div class="col m6 l4">
    <article class="card horizontal blue darken-3 hide-on-small-only">
  <div class="card-stacked">
    <div class="card-content grey-text text-lighten-4">
      <span class="card-businessName blue-text text-lighten-3">${this
        .businessName}</span>
      <ul>
        <li>${this.email}</li>
        <li>${this.phone}</li>
        <li>${this.address}</li>
      </ul>
      <p>
      ${this.description}
      </p>
    </div>
    <div class="card-action">
      <h6 class="blue-text text-lighten-3">Location: ${this.location}</h6>
    </div>
  </div>
</article>
</div>
<article class="card blue hide-on-med-and-up">
  <div class="card blue darken-3">
    <div class="card-content grey-text text-lighten-4">
      <span class="card-businessName blue-text text-lighten-3">${this
        .businessName}</span>
      <ul>
        <li>${this.email}</li>
        <li>${this.phone}</li>
        <li>${this.address}</li>
      </ul>
      <p>
      ${this.description}
      </p>
    </div>
    <div class="card-action">
      <h6 class="blue-text text-lighten-3">Location: ${this.location}</h6>
    </div>
  </div>
</article>`;
  }
}

const cafe1 = new Business(
  "Cafe1",
  "cafe@test.com",
  "223-2144",
  "Hoganas, SV",
  "We sell coffee and tea",
  "coordintaes here"
);
const cafe2 = new Business(
  "Cafe1",
  "cafe@test.com",
  "223-2144",
  "Hoganas, SV",
  "We sell coffee and tea",
  "coordintaes here"
);
const cafe3 = new Business(
  "Cafe1",
  "cafe@test.com",
  "223-2144",
  "Hoganas, SV",
  "We sell coffee and tea",
  "coordintes here"
);
const cafe55 = new Business(
  "Cafe1",
  "cafe@test.com",
  "223-2144",
  "Hoganas, SV",
  "We sell coffee and tea",
  "coordinates here"
);
const movieSection = document.getElementById("movieCard");

Businesses.forEach(function(element) {
  movieSection.innerHTML += element.card;
}, this);
