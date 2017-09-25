const listings = document.getElementById("listings");
window.All = new Set();
window.Guide = new Set();
window.Dining = new Set();
window.Activities = new Set();
window.Stay = new Set();
window.Shop = new Set();
class Business {
  /**
   * Creates an instance of Business.
   * @param {Object} {
   *     Name,
   *     Category,
   *     DescriptionEn,
   *     DescriptionSv,
   *     StorefrontPhoto,
   *     MapURL,
   *     Komun,
   *     Email,
   *     Phone,
   *     Website
   *   } 
   * @memberof Business
   */
  constructor({
    Name,
    Category,
    DescriptionEn,
    DescriptionSv,
    StorefrontPhoto,
    MapURL,
    Komun,
    Email,
    Phone,
    Website
  }) {
    this.name = Name || "Not Available";
    this.category = Category || "Not Available";
    this.descriptionEn = DescriptionEn || "Not Available";
    this.descriptionSv = DescriptionSv || "Not Available";
    this.photo = StorefrontPhoto || "Not Available";
    let StorefrontPhotoCut = StorefrontPhoto.replace(
      "https://drive.google.com/open?id=",
      ""
    );
    this.photoCut = StorefrontPhotoCut;
    this.location = MapURL || "Not Available";
    this.komun = Komun || "Not Available";
    this.email = Email || "Not Available";
    this.phone = Phone || "Not Available";
    this.website = Website || "Not Available";
    switch (Category) {
      case "Dining":
        Dining.add(this);
        break;
      case "Activities":
        Activities.add(this);
        break;
      case "Guide":
        Guide.add(this);
        break;
      case "Stay":
        Stay.add(this);
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
    <div class="card medium blue darken-3">
    <div class="card-image">
      <img class="" data-caption="${this.name}: ${this
      .descriptionEn}" src="https://drive.google.com/uc?export=download&id=${this
      .photoCut}">
    <span class="card-title">${this.name}</span>
  </div>
    <div class="card-content grey-text text-lighten-4">
        <p>${this.descriptionEn}</p>
    </div>
    <div class="card-action">
    <a  href="tel:${this
      .phone}" class="blue-text text-lighten-3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Phone: ${this
      .phone}"><i class="material-icons">phone</i></a>
    <a href="mailto:${this
      .email}" class="blue-text text-lighten-3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Email: ${this
      .email}"><i class="material-icons">email</i></a>
    <a target="_blank" href="${this
      .location}" class="blue-text text-lighten-3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Near: ${this
      .komun}"><i class="material-icons">place</i></a>
    <a target="_blank" href="${this
      .website}" class="blue-text text-lighten-3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Website: ${this
      .website}"><i class="material-icons">open_in_browser</i></a>
    </div>
</div>
</li>`;
  }
}

function importJSON() {
  const imported = require("./export.json");
  imported.export.forEach(function(item) {
    new Business(item);
  });
}

window.addEventListener("load", function() {
  importJSON();
  sort("All");
  $(".scrollspy").scrollSpy();
  $(".tooltipped").tooltip();
  $(".materialboxed").materialbox();
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
      $(".tooltipped").tooltip();
      $(".materialboxed").materialbox();
    });
};
