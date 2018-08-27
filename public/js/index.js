// Get references to page elements
var $ownerAddress = $("#owner-Address");
var $ownerName = $("#owner-Name");
var $ownerDescription = $("#owner-Description");
var $ownerPrice = $("#owner-Price");
var $submitBtn = $("#submit");
var $ownerList = $("#owner-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveOwner: function(owner) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/owners",
      data: JSON.stringify(owner)
    });
  },
  getOwners: function() {
    return $.ajax({
      url: "api/owners",
      type: "GET"
    });
  },
  deleteOwner: function(id) {
    return $.ajax({
      url: "api/owners/" + id,
      type: "DELETE"
    });
  }
};

// refreshOwners gets new owners from the db and repopulates the list
var refreshOwners = function() {
  API.getOwners().then(function(data) {
    var $owners = data.map(function(owner) {
      var $a = $("<a>")
        .Address(owner.Address)
        .attr("href", "/owner/" + owner.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": owner.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .Address("ｘ");

      $li.append($button);

      return $li;
    });

    $ownerList.empty();
    $ownerList.append($owners);
  });
};

// handleFormSubmit is called whenever we submit a new owner
// Save the new owner to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var owner = {
    Address: $ownerAddress.val().trim(),
    Name: $ownerName.val().trim(),
    Price: $ownerPrice.val().trim(),
    Description: $ownerDescription.val().trim()
  };

  if (!(owner.Address && owner.Name && owner.Price)) {
    alert("You must enter an owner Address and Name!");
    return;
  }

  API.saveOwner(owner).then(function() {
    refreshOwners();
  });

  $ownerAddress.val("");
  $ownerName.val("");
  $ownerPrice.val("");
  $ownerDescription.val("");
};

// handleDeleteBtnClick is called when an owner's delete button is clicked
// Remove the owner from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteOwner(idToDelete).then(function() {
    refreshOwners();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$ownerList.on("click", ".delete", handleDeleteBtnClick);
