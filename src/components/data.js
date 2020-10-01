const DepartmentData = ["MU-PHX-SFRC FTT N1", "MU-PHX-SFRC FTT N2"];

const Users = ["[R01851]", "[R01935]", "[R01894]", "James Bruno Andre[R01852]"];

const Dataset = [
  {
    measure: "Prevu",
    interval_s: 60 * 60,
    categories: {
      0: {
        class: "rect_has_no_data",
        tooltip_html:
          '<i class="fas fa-fw fa-exclamation-circle tooltip_has_no_data"></i>',
      },
      1: {
        class: "rect_has_data",
        tooltip_html: '<i class="fas fa-fw fa-check tooltip_has_data"></i>',
      },
      pause: {
        class: "rect_pause",
      },
      action: {
        class: "rect_action",
      },
      repas: {
        class: "rect_repas",
      },
      incoplus: { class: "rect_inco-plus" },
      inco: { class: "rect_inco-minus" },
    },
    data: [
      ["2020-07-16 07:00:00", "action", "2020-07-16 08:00:00"],
      ["2020-07-16 08:00:00", "action", "2020-07-16 09:00:00"],
      ["2020-07-16 09:00:00", "action", "2020-07-16 10:00:00"],
      ["2020-07-16 10:00:00", "action", "2020-07-16 11:00:00"],
      ["2020-07-16 11:00:00", "action", "2020-07-16 12:00:00"],
      ["2020-07-16 12:00:00", "action", "2020-07-16 13:00:00"],
      ["2020-07-16 13:00:00", "incoplus", "2020-07-16 14:00:00"],
      ["2020-07-16 14:00:00", "incoplus", "2020-07-16 15:00:00"],
      ["2020-07-16 15:00:00", "incoplus", "2020-07-16 16:00:00"],
      ["2020-07-16 16:00:00", "incoplus", "2020-07-16 17:00:00"],
      ["2020-07-16 17:00:00", "pause", "2020-07-16 18:00:00"],
      ["2020-07-17 01:00:00", "repas", "2020-07-17 02:00:00"],
      ["2020-07-17 02:00:00", "repas", "2020-07-17 03:00:00"],
      ["2020-07-17 03:00:00", "repas", "2020-07-17 04:00:00"],
      ["2020-07-17 04:00:00", "repas", "2020-07-17 05:00:00"],
      ["2020-07-17 05:00:00", "action", "2020-07-17 06:00:00"],
      ["2020-07-17 06:00:00", "action", "2020-07-17 07:00:00"],
      ["2020-07-17 07:00:00", "action", "2020-07-17 08:00:00"],
    ],
  },
  {
    measure: "Realise",
    interval_s: 60 * 60,
    categories: {
      0: {
        class: "rect_has_no_data",
        tooltip_html:
          '<i class="fas fa-fw fa-exclamation-circle tooltip_has_no_data"></i>',
      },
      1: {
        class: "rect_has_data",
        tooltip_html: '<i class="fas fa-fw fa-check tooltip_has_data"></i>',
      },
      action: {
        class: "rect_action",
      },
    },
    data: [
      ["2020-07-16 07:00:00", "action", "2020-07-16 08:00:00"],
      ["2020-07-16 08:00:00", "action", "2020-07-16 09:00:00"],
      ["2020-07-16 09:00:00", "action", "2020-07-16 10:00:00"],
      ["2020-07-16 10:00:00", "action", "2020-07-16 11:00:00"],
      ["2020-07-16 11:00:00", "action", "2020-07-16 12:00:00"],
      ["2020-07-16 12:00:00", "action", "2020-07-16 13:00:00"],
      ["2020-07-16 13:00:00", "action", "2020-07-16 14:00:00"],
      ["2020-07-16 14:00:00", "action", "2020-07-16 15:00:00"],
      ["2020-07-16 15:00:00", "action", "2020-07-16 16:00:00"],
      ["2020-07-16 16:00:00", "action", "2020-07-16 17:00:00"],
      ["2020-07-16 17:00:00", "action", "2020-07-16 18:00:00"],
      ["2020-07-16 18:00:00", "action", "2020-07-16 19:00:00"],
      ["2020-07-16 19:00:00", "action", "2020-07-16 20:00:00"],
      ["2020-07-16 20:00:00", "action", "2020-07-16 21:00:00"],

      ["2020-07-17 01:00:00", "action", "2020-07-17 02:00:00"],
      ["2020-07-17 02:00:00", "action", "2020-07-17 03:00:00"],
      ["2020-07-17 03:00:00", "action", "2020-07-17 04:00:00"],
      ["2020-07-17 04:00:00", "action", "2020-07-17 05:00:00"],
      ["2020-07-17 05:00:00", "action", "2020-07-17 06:00:00"],
      ["2020-07-17 06:00:00", "action", "2020-07-17 07:00:00"],
      ["2020-07-17 07:00:00", "action", "2020-07-17 08:00:00"],
    ],
  },
  {
    measure: "Realise vald",
    interval_s: 60 * 60,
    categories: {
      0: {
        class: "rect_has_no_data",
        tooltip_html:
          '<i class="fas fa-fw fa-exclamation-circle tooltip_has_no_data"></i>',
      },
      1: {
        class: "rect_has_data",
        tooltip_html: '<i class="fas fa-fw fa-check tooltip_has_data"></i>',
      },
      action: {
        class: "rect_action",
      },
      incoplus: { class: "rect_inco-plus" },
      inco: { class: "rect_inco-minus" },
    },
    data: [
      ["2020-07-16 07:00:00", "incoplus", "2020-07-16 08:00:00"],
      ["2020-07-16 08:00:00", "incoplus", "2020-07-16 09:00:00"],
      ["2020-07-16 09:00:00", "incoplus", "2020-07-16 10:00:00"],
      ["2020-07-16 10:00:00", "incoplus", "2020-07-16 11:00:00"],
      ["2020-07-16 11:00:00", "incoplus", "2020-07-16 12:00:00"],
      ["2020-07-16 12:00:00", "incoplus", "2020-07-16 13:00:00"],
      ["2020-07-16 13:00:00", "incoplus", "2020-07-16 14:00:00"],
      ["2020-07-16 14:00:00", "incoplus", "2020-07-16 15:00:00"],
      ["2020-07-16 15:00:00", "incoplus", "2020-07-16 16:00:00"],
      ["2020-07-16 16:00:00", "incoplus", "2020-07-16 17:00:00"],
      ["2020-07-16 17:00:00", 1, "2020-07-16 18:00:00"],
      ["2020-07-16 18:00:00", 1, "2020-07-16 19:00:00"],
      ["2020-07-16 19:00:00", 1, "2020-07-16 20:00:00"],
      ["2020-07-16 20:00:00", 1, "2020-07-16 21:00:00"],
      ["2020-07-16 21:00:00", 1, "2020-07-16 22:00:00"],
      ["2020-07-16 22:00:00", 1, "2020-07-16 23:00:00"],
      ["2020-07-16 23:00:00", 1, "2020-07-16 24:00:00"],

      ["2020-07-17 01:00:00", "inco", "2020-07-17 02:00:00"],
      ["2020-07-17 02:00:00", 1, "2020-07-17 03:00:00"],
      ["2020-07-17 03:00:00", 1, "2020-07-17 04:00:00"],
      ["2020-07-17 04:00:00", 1, "2020-07-17 05:00:00"],
      ["2020-07-17 05:00:00", 1, "2020-07-17 06:00:00"],
      ["2020-07-17 06:00:00", 1, "2020-07-17 07:00:00"],
      ["2020-07-17 07:00:00", 1, "2020-07-17 08:00:00"],
    ],
  },
  //   {
  //     measure: "Balance1",
  //     interval_s: 60 * 60,
  //     categories: {
  //       0: {
  //         class: "rect_has_no_data",
  //         tooltip_html:
  //           '<i class="fas fa-fw fa-exclamation-circle tooltip_has_no_data"></i>',
  //       },
  //       1: {
  //         class: "rect_has_data",
  //         tooltip_html: '<i class="fas fa-fw fa-check tooltip_has_data"></i>',
  //       },
  //       Zoe: {
  //         class: "rect_purple",
  //         tooltip_html: '<i class="fas fa-fw fa-trophy tooltip_purple"></i>',
  //       },
  //     },
  //     data: [
  //       ["2016-01-01 12:00:00", 0, "2016-01-01 13:00:00"],
  //       ["2016-01-01 14:22:51", 0, "2016-01-01 16:14:12"],
  //       ["2016-01-01 16:14:12", 1, "2016-01-01 17:14:12"],
  //       ["2016-01-01 19:20:05", 0, "2016-01-01 20:30:00"],
  //       ["2016-01-01 20:30:00", "Zoe", "2016-01-01 22:00:00"],
  //     ],
  //   },
];

export { DepartmentData, Users, Dataset };