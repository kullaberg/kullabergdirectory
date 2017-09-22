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
   *     Name,
   *     Email,
   *     Phone,
   *     Website,
   *     Description,
   *     MapURL,
   *     Category
   *   } 
   * @memberof Business
   */
  constructor({ Name, Email, Phone, Website, Description, MapURL, Category }) {
    this.name = Name || "Not Available";
    this.email = Email || "Not Available";
    this.phone = Phone || "Not Available";
    this.website = Website || "Not Available";
    this.description = Description || "Not Available";
    this.location = MapURL || "Not Available";
    this.category = Category || "Not Available";
    switch (Category) {
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
    return `<li class="col s12 m6 l4">
    <div class="card hoverable blue darken-3">
    <div class="card-content grey-text text-lighten-4">
    <span class="card-title blue-text text-lighten-4">${this.name}</span>
        <p>${this.description}</p>
    </div>
    <div class="card-action">
    <a href="tel:${this
      .phone}" class="blue-text text-lighten-3"><i class="material-icons">phone</i></>
    <a href="mailto:${this
      .email}" class="blue-text text-lighten-3"><i class="material-icons">email</i></a>
    <a target="_blank" href="${this
      .locationLink}" class="blue-text text-lighten-3"><i class="material-icons">place</i></a>
    <a target="_blank" href="${this
      .website}" class="blue-text text-lighten-3"><i class="material-icons">open_in_browser</i></a>
    </div>
</div>
</li>`;
  }
}

function importJSON() {
  imported.export.forEach(function(item) {
    new Business(item);
  });
}

window.addEventListener("load", function() {
  importJSON();
  sort("All");
  $(".scrollspy").scrollSpy();
});

window.sort = function(category) {
  $("#listings")
    .fadeOut(100)
    .fadeIn(0, function(element) {
      listings.innerHTML = "";
      window[category].forEach(function(element) {
        listings.innerHTML += element.card;
      }, this);
      var options = [
        {
          selector: "#listings",
          offset: 200,
          callback: function(el) {
            Materialize.showStaggeredList($(el));
          }
        }
      ];
      Materialize.scrollFire(options);
    });
};
const imported = require("./export.json");
