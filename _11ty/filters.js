const slugify = require("slugify");

module.exports = {
  toLocalDate: function (date) {
    const d = new Date(date);
    return `${d.getDate()}.${d.getMonth() + 1}.`;
  },

  toLocalDateYear: function (date) {
    const d = new Date(date);
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  },

  formatHost: function (host) {
    return host || "TBA";
  },

  formatSponsorLogo: function ({ name, url }) {
    const filename = `/assets/img/sponsors/${slugify(name)}.png`;

    return `<a href="${url}" target=_blank><img src="${filename}" alt="${name}"></a>`;
  },
  formatSponsorLogoNoLink: function (name) {
    const filename = `/assets/img/sponsors/${slugify(name)}.png`;

    return `<img src="${filename}" alt="${name}">`;
  },
  nameToImage: function (name) {
    return `<img class="profile--portrait" src="/assets/img/team/${slugify(
      name
    )}.png" alt="${name}">`;
  },
  linkToHTML: function (link) {
    return `<a href="${link.url}" target=_blank>
        <span class="sr-only">${link.icon}</span>
        <img src="/assets/img/icons/${slugify(link.icon)}.svg" alt="${
      link.icon
    }">
    </a>`;
  },
  formatHallOfFame: function (name) {
    return `<div class="speaker">
    <img src="/assets/img/speakers/${slugify(name)}.png" alt="">
    <p>${name}</p>
    </div>`;
  },
};
